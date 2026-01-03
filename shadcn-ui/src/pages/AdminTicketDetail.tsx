import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  supabase, 
  type Ticket, 
  type TicketMessage, 
  type TicketAttachment, 
  type TicketHistory,
  type Client,
  logTicketHistory,
  sendTicketNotification
} from '@/lib/supabase';
import { 
  Loader2, 
  ArrowLeft, 
  Send, 
  Paperclip, 
  Download,
  History,
  MessageSquare,
  FileText,
  Save
} from 'lucide-react';

export default function AdminTicketDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [client, setClient] = useState<Client | null>(null);
  const [admin, setAdmin] = useState<Client | null>(null);
  const [messages, setMessages] = useState<TicketMessage[]>([]);
  const [attachments, setAttachments] = useState<TicketAttachment[]>([]);
  const [history, setHistory] = useState<TicketHistory[]>([]);
  const [error, setError] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const [updatingTicket, setUpdatingTicket] = useState(false);
  
  const [editForm, setEditForm] = useState({
    status: '',
    priority: '',
  });

  useEffect(() => {
    checkAuth();
  }, [id]);

  const checkAuth = async () => {
    try {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError || !user) {
        navigate('/admin/login');
        return;
      }

      // Check if user is admin
      const { data: adminData, error: adminError } = await supabase
        .from('app_2b35a5a86e_clients')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (adminError) throw adminError;

      if (adminData.role !== 'admin' && adminData.role !== 'staff') {
        await supabase.auth.signOut();
        navigate('/admin/login');
        return;
      }

      setAdmin(adminData);
      await loadTicketData();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nel caricamento dei dati';
      setError(errorMessage);
      setLoading(false);
    }
  };

  const loadTicketData = async () => {
    try {
      // Load ticket
      const { data: ticketData, error: ticketError } = await supabase
        .from('app_2b35a5a86e_tickets')
        .select('*')
        .eq('id', id)
        .single();

      if (ticketError) throw ticketError;
      setTicket(ticketData);
      setEditForm({
        status: ticketData.status,
        priority: ticketData.priority,
      });

      // Load client info
      const { data: clientData, error: clientError } = await supabase
        .from('app_2b35a5a86e_clients')
        .select('*')
        .eq('user_id', ticketData.user_id)
        .single();

      if (clientError) throw clientError;
      setClient(clientData);

      // Load messages
      const { data: messagesData, error: messagesError } = await supabase
        .from('app_2b35a5a86e_ticket_messages')
        .select('*')
        .eq('ticket_id', id)
        .order('created_at', { ascending: true });

      if (messagesError) throw messagesError;
      setMessages(messagesData || []);

      // Load attachments
      const { data: attachmentsData, error: attachmentsError } = await supabase
        .from('app_2b35a5a86e_ticket_attachments')
        .select('*')
        .eq('ticket_id', id)
        .order('created_at', { ascending: false });

      if (attachmentsError) throw attachmentsError;
      setAttachments(attachmentsData || []);

      // Load history
      const { data: historyData, error: historyError } = await supabase
        .from('app_2b35a5a86e_ticket_history')
        .select('*')
        .eq('ticket_id', id)
        .order('created_at', { ascending: false });

      if (historyError) throw historyError;
      setHistory(historyData || []);

      // Subscribe to real-time messages
      const messageSubscription = supabase
        .channel(`admin_ticket_messages_${id}`)
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'app_2b35a5a86e_ticket_messages',
            filter: `ticket_id=eq.${id}`,
          },
          (payload) => {
            setMessages((prev) => [...prev, payload.new as TicketMessage]);
          }
        )
        .subscribe();

      return () => {
        messageSubscription.unsubscribe();
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nel caricamento dei dati';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !ticket || !admin) return;

    setSendingMessage(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await supabase
        .from('app_2b35a5a86e_ticket_messages')
        .insert({
          ticket_id: ticket.id,
          user_id: user.id,
          message: newMessage,
          is_staff: true,
        });

      if (error) throw error;

      setNewMessage('');
      
      // Log history
      await logTicketHistory(ticket.id, user.id, 'message_added');

      // Send notification to client
      if (client) {
        await sendTicketNotification(
          ticket.id,
          'message',
          client.email,
          client.contact_name,
          ticket.title
        );
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nell\'invio del messaggio';
      setError(errorMessage);
    } finally {
      setSendingMessage(false);
    }
  };

  const handleUpdateTicket = async () => {
    if (!ticket || !admin) return;

    setUpdatingTicket(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await supabase
        .from('app_2b35a5a86e_tickets')
        .update({
          status: editForm.status,
          priority: editForm.priority,
          updated_at: new Date().toISOString(),
        })
        .eq('id', ticket.id);

      if (error) throw error;

      // Log changes
      if (ticket.status !== editForm.status) {
        await logTicketHistory(ticket.id, user.id, 'field_updated', 'status', ticket.status, editForm.status);
      }
      if (ticket.priority !== editForm.priority) {
        await logTicketHistory(ticket.id, user.id, 'field_updated', 'priority', ticket.priority, editForm.priority);
      }

      // Send notification to client
      if (client) {
        await sendTicketNotification(
          ticket.id,
          'updated',
          client.email,
          client.contact_name,
          ticket.title
        );
      }

      await loadTicketData();
      setError('');
      // Show success message
      const successDiv = document.createElement('div');
      successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      successDiv.textContent = 'Ticket aggiornato con successo';
      document.body.appendChild(successDiv);
      setTimeout(() => successDiv.remove(), 3000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nell\'aggiornamento del ticket';
      setError(errorMessage);
    } finally {
      setUpdatingTicket(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: 'default' | 'secondary' | 'destructive' | 'outline', label: string }> = {
      open: { variant: 'default', label: 'Aperto' },
      in_progress: { variant: 'secondary', label: 'In Lavorazione' },
      resolved: { variant: 'outline', label: 'Risolto' },
      closed: { variant: 'destructive', label: 'Chiuso' },
    };
    const config = variants[status] || variants.open;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getPriorityBadge = (priority: string) => {
    const colors: Record<string, string> = {
      low: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-orange-100 text-orange-800',
      urgent: 'bg-red-100 text-red-800',
    };
    const labels: Record<string, string> = {
      low: 'Bassa',
      medium: 'Media',
      high: 'Alta',
      urgent: 'Urgente',
    };
    return (
      <Badge className={colors[priority] || colors.medium}>
        {labels[priority] || priority}
      </Badge>
    );
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      network: 'Rete',
      virtualization: 'Virtualizzazione',
      systems: 'Sistemi',
      monitoring: 'Monitoring',
      security: 'Sicurezza',
      other: 'Altro',
    };
    return labels[category] || category;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
      </div>
    );
  }

  if (!ticket || !client) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <p className="text-white">Ticket non trovato</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <header className="bg-black/50 backdrop-blur-lg shadow-lg border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={() => navigate('/admin/dashboard')} className="text-orange-400 hover:text-orange-300">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Torna alla Dashboard Admin
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <Alert variant="destructive" className="mb-6 bg-red-500/10 border-red-500/50">
            <AlertDescription className="text-red-400">{error}</AlertDescription>
          </Alert>
        )}

        {/* Client Info */}
        <Card className="mb-6 glass-effect border-orange-500/20">
          <CardHeader>
            <CardTitle className="text-white">Informazioni Cliente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
              <div>
                <p className="text-sm text-gray-500">Azienda</p>
                <p className="font-semibold">{client.company_name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Contatto</p>
                <p className="font-semibold">{client.contact_name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">{client.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ticket Details */}
        <Card className="mb-6 glass-effect border-white/10">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <CardTitle className="text-2xl text-white">{ticket.title}</CardTitle>
                <div className="flex gap-2 mt-3">
                  {getStatusBadge(ticket.status)}
                  {getPriorityBadge(ticket.priority)}
                  <Badge variant="outline" className="border-white/20 text-gray-300">{getCategoryLabel(ticket.category)}</Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">{ticket.description}</p>
            
            {/* Quick Update */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-black/30 rounded-lg">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Stato</label>
                <Select value={editForm.status} onValueChange={(value) => setEditForm({ ...editForm, status: value })}>
                  <SelectTrigger className="glass-effect border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Aperto</SelectItem>
                    <SelectItem value="in_progress">In Lavorazione</SelectItem>
                    <SelectItem value="resolved">Risolto</SelectItem>
                    <SelectItem value="closed">Chiuso</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Priorità</label>
                <Select value={editForm.priority} onValueChange={(value) => setEditForm({ ...editForm, priority: value })}>
                  <SelectTrigger className="glass-effect border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Bassa</SelectItem>
                    <SelectItem value="medium">Media</SelectItem>
                    <SelectItem value="high">Alta</SelectItem>
                    <SelectItem value="urgent">Urgente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button 
                  onClick={handleUpdateTicket} 
                  disabled={updatingTicket}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                >
                  {updatingTicket ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Salvataggio...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Salva Modifiche
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="text-sm text-gray-500 mt-4">
              Creato il {new Date(ticket.created_at).toLocaleDateString('it-IT', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="chat" className="w-full">
          <TabsList className="grid w-full grid-cols-3 glass-effect border-white/10">
            <TabsTrigger value="chat" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-400">
              <MessageSquare className="mr-2 h-4 w-4" />
              Chat
            </TabsTrigger>
            <TabsTrigger value="attachments" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-400">
              <Paperclip className="mr-2 h-4 w-4" />
              Allegati ({attachments.length})
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-400">
              <History className="mr-2 h-4 w-4" />
              Storico
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat">
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Chat di Supporto</CardTitle>
                <CardDescription className="text-gray-400">Comunica con il cliente</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
                  {messages.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">Nessun messaggio ancora</p>
                  ) : (
                    messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.is_staff ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            msg.is_staff
                              ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                              : 'bg-gray-700 text-white'
                          }`}
                        >
                          <p className="text-sm">{msg.message}</p>
                          <p className="text-xs mt-1 opacity-70">
                            {new Date(msg.created_at).toLocaleTimeString('it-IT', {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Scrivi una risposta al cliente..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    rows={2}
                    className="glass-effect border-white/20 text-white placeholder:text-gray-500"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    disabled={sendingMessage || !newMessage.trim()}
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                  >
                    {sendingMessage ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attachments">
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Allegati</CardTitle>
                <CardDescription className="text-gray-400">File caricati per questo ticket</CardDescription>
              </CardHeader>
              <CardContent>
                {attachments.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">Nessun allegato</p>
                ) : (
                  <div className="space-y-2">
                    {attachments.map((att) => (
                      <div
                        key={att.id}
                        className="flex items-center justify-between p-3 border border-white/10 rounded-lg hover:bg-white/5"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="font-medium text-white">{att.file_name}</p>
                            <p className="text-sm text-gray-400">
                              {formatFileSize(att.file_size)} • {new Date(att.created_at).toLocaleDateString('it-IT')}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => window.open(att.file_url, '_blank')}
                          className="text-orange-400 hover:text-orange-300"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Storico Modifiche</CardTitle>
                <CardDescription className="text-gray-400">Cronologia delle modifiche al ticket</CardDescription>
              </CardHeader>
              <CardContent>
                {history.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">Nessuna modifica registrata</p>
                ) : (
                  <div className="space-y-3">
                    {history.map((item) => (
                      <div key={item.id} className="flex gap-3 p-3 border-l-2 border-orange-500">
                        <History className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-medium text-white">
                            {item.action === 'field_updated' && `Campo "${item.field_name}" aggiornato`}
                            {item.action === 'message_added' && 'Messaggio aggiunto'}
                            {item.action === 'attachment_added' && 'Allegato caricato'}
                            {item.action === 'created' && 'Ticket creato'}
                          </p>
                          {item.old_value && item.new_value && (
                            <p className="text-sm text-gray-400">
                              Da "{item.old_value}" a "{item.new_value}"
                            </p>
                          )}
                          {item.new_value && !item.old_value && (
                            <p className="text-sm text-gray-400">{item.new_value}</p>
                          )}
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(item.created_at).toLocaleString('it-IT')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}