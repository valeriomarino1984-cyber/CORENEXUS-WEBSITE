import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  supabase, 
  type Ticket, 
  type TicketMessage, 
  type TicketAttachment, 
  type TicketHistory,
  uploadTicketAttachment,
  sendTicketNotification,
  logTicketHistory
} from '@/lib/supabase';
import { 
  Loader2, 
  ArrowLeft, 
  Edit, 
  Trash2, 
  Send, 
  Paperclip, 
  Download,
  History,
  MessageSquare,
  FileText
} from 'lucide-react';

export default function TicketDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [messages, setMessages] = useState<TicketMessage[]>([]);
  const [attachments, setAttachments] = useState<TicketAttachment[]>([]);
  const [history, setHistory] = useState<TicketHistory[]>([]);
  const [error, setError] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [editForm, setEditForm] = useState({
    title: '',
    description: '',
    category: '',
    priority: '',
    status: '',
  });

  useEffect(() => {
    loadTicketData();
    
    // Subscribe to real-time messages
    const messageSubscription = supabase
      .channel(`ticket_messages_${id}`)
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
  }, [id]);

  const loadTicketData = async () => {
    try {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError || !user) {
        navigate('/login');
        return;
      }

      // Load ticket
      const { data: ticketData, error: ticketError } = await supabase
        .from('app_2b35a5a86e_tickets')
        .select('*')
        .eq('id', id)
        .eq('user_id', user.id)
        .single();

      if (ticketError) throw ticketError;
      setTicket(ticketData);
      setEditForm({
        title: ticketData.title,
        description: ticketData.description,
        category: ticketData.category,
        priority: ticketData.priority,
        status: ticketData.status,
      });

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
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nel caricamento dei dati';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !ticket) return;

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
          is_staff: false,
        });

      if (error) throw error;

      setNewMessage('');
      
      // Log history
      await logTicketHistory(ticket.id, user.id, 'message_added');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nell\'invio del messaggio';
      setError(errorMessage);
    } finally {
      setSendingMessage(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !ticket) return;

    setUploadingFile(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const result = await uploadTicketAttachment(ticket.id, file);
      if (!result) throw new Error('Upload fallito');

      const { error } = await supabase
        .from('app_2b35a5a86e_ticket_attachments')
        .insert({
          ticket_id: ticket.id,
          file_name: file.name,
          file_url: result.url,
          file_size: file.size,
          file_type: file.type,
          uploaded_by: user.id,
        });

      if (error) throw error;

      await loadTicketData();
      
      // Log history
      await logTicketHistory(ticket.id, user.id, 'attachment_added', 'file_name', '', file.name);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nel caricamento del file';
      setError(errorMessage);
    } finally {
      setUploadingFile(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleUpdateTicket = async () => {
    if (!ticket) return;

    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await supabase
        .from('app_2b35a5a86e_tickets')
        .update({
          title: editForm.title,
          description: editForm.description,
          category: editForm.category,
          priority: editForm.priority,
          status: editForm.status,
          updated_at: new Date().toISOString(),
        })
        .eq('id', ticket.id);

      if (error) throw error;

      // Log changes
      if (ticket.title !== editForm.title) {
        await logTicketHistory(ticket.id, user.id, 'field_updated', 'title', ticket.title, editForm.title);
      }
      if (ticket.status !== editForm.status) {
        await logTicketHistory(ticket.id, user.id, 'field_updated', 'status', ticket.status, editForm.status);
      }
      if (ticket.priority !== editForm.priority) {
        await logTicketHistory(ticket.id, user.id, 'field_updated', 'priority', ticket.priority, editForm.priority);
      }

      // Send notification
      const { data: clientData } = await supabase
        .from('app_2b35a5a86e_clients')
        .select('contact_name, email')
        .eq('user_id', user.id)
        .single();

      if (clientData) {
        await sendTicketNotification(
          ticket.id,
          'updated',
          clientData.email,
          clientData.contact_name,
          editForm.title
        );
      }

      await loadTicketData();
      setEditMode(false);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nell\'aggiornamento del ticket';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTicket = async () => {
    if (!ticket) return;

    try {
      const { error } = await supabase
        .from('app_2b35a5a86e_tickets')
        .delete()
        .eq('id', ticket.id);

      if (error) throw error;

      navigate('/dashboard');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nell\'eliminazione del ticket';
      setError(errorMessage);
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
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Ticket non trovato</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={() => navigate('/dashboard')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Torna alla Dashboard
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card className="mb-6">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                {editMode ? (
                  <Input
                    value={editForm.title}
                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                    className="text-2xl font-bold mb-2"
                  />
                ) : (
                  <CardTitle className="text-2xl">{ticket.title}</CardTitle>
                )}
                <div className="flex gap-2 mt-3">
                  {editMode ? (
                    <>
                      <Select
                        value={editForm.status}
                        onValueChange={(value) => setEditForm({ ...editForm, status: value })}
                      >
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="open">Aperto</SelectItem>
                          <SelectItem value="in_progress">In Lavorazione</SelectItem>
                          <SelectItem value="resolved">Risolto</SelectItem>
                          <SelectItem value="closed">Chiuso</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select
                        value={editForm.priority}
                        onValueChange={(value) => setEditForm({ ...editForm, priority: value })}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Bassa</SelectItem>
                          <SelectItem value="medium">Media</SelectItem>
                          <SelectItem value="high">Alta</SelectItem>
                          <SelectItem value="urgent">Urgente</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select
                        value={editForm.category}
                        onValueChange={(value) => setEditForm({ ...editForm, category: value })}
                      >
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="network">Rete</SelectItem>
                          <SelectItem value="virtualization">Virtualizzazione</SelectItem>
                          <SelectItem value="systems">Sistemi</SelectItem>
                          <SelectItem value="monitoring">Monitoring</SelectItem>
                          <SelectItem value="security">Sicurezza</SelectItem>
                          <SelectItem value="other">Altro</SelectItem>
                        </SelectContent>
                      </Select>
                    </>
                  ) : (
                    <>
                      {getStatusBadge(ticket.status)}
                      {getPriorityBadge(ticket.priority)}
                      <Badge variant="outline">{getCategoryLabel(ticket.category)}</Badge>
                    </>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                {editMode ? (
                  <>
                    <Button onClick={handleUpdateTicket} disabled={loading}>
                      Salva
                    </Button>
                    <Button variant="outline" onClick={() => setEditMode(false)}>
                      Annulla
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" size="icon" onClick={() => setEditMode(true)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Trash2 className="h-4 w-4 text-red-600" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Conferma Eliminazione</DialogTitle>
                          <DialogDescription>
                            Sei sicuro di voler eliminare questo ticket? Questa azione non può essere annullata.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
                            Annulla
                          </Button>
                          <Button variant="destructive" onClick={handleDeleteTicket}>
                            Elimina
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {editMode ? (
              <Textarea
                value={editForm.description}
                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                rows={4}
              />
            ) : (
              <p className="text-gray-700">{ticket.description}</p>
            )}
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
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="chat">
              <MessageSquare className="mr-2 h-4 w-4" />
              Chat
            </TabsTrigger>
            <TabsTrigger value="attachments">
              <Paperclip className="mr-2 h-4 w-4" />
              Allegati ({attachments.length})
            </TabsTrigger>
            <TabsTrigger value="history">
              <History className="mr-2 h-4 w-4" />
              Storico
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat">
            <Card>
              <CardHeader>
                <CardTitle>Chat di Supporto</CardTitle>
                <CardDescription>Comunica con il team di supporto</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
                  {messages.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">Nessun messaggio ancora</p>
                  ) : (
                    messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.is_staff ? 'justify-start' : 'justify-end'}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            msg.is_staff
                              ? 'bg-gray-100 text-gray-900'
                              : 'bg-blue-600 text-white'
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
                    placeholder="Scrivi un messaggio..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    rows={2}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button onClick={handleSendMessage} disabled={sendingMessage || !newMessage.trim()}>
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
            <Card>
              <CardHeader>
                <CardTitle>Allegati</CardTitle>
                <CardDescription>File caricati per questo ticket</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <Label htmlFor="file-upload">
                    <Button
                      variant="outline"
                      disabled={uploadingFile}
                      onClick={() => fileInputRef.current?.click()}
                      asChild
                    >
                      <span>
                        {uploadingFile ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Caricamento...
                          </>
                        ) : (
                          <>
                            <Paperclip className="mr-2 h-4 w-4" />
                            Carica File
                          </>
                        )}
                      </span>
                    </Button>
                  </Label>
                </div>
                {attachments.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">Nessun allegato</p>
                ) : (
                  <div className="space-y-2">
                    {attachments.map((att) => (
                      <div
                        key={att.id}
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-gray-500" />
                          <div>
                            <p className="font-medium">{att.file_name}</p>
                            <p className="text-sm text-gray-500">
                              {formatFileSize(att.file_size)} • {new Date(att.created_at).toLocaleDateString('it-IT')}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => window.open(att.file_url, '_blank')}
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
            <Card>
              <CardHeader>
                <CardTitle>Storico Modifiche</CardTitle>
                <CardDescription>Cronologia delle modifiche al ticket</CardDescription>
              </CardHeader>
              <CardContent>
                {history.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">Nessuna modifica registrata</p>
                ) : (
                  <div className="space-y-3">
                    {history.map((item) => (
                      <div key={item.id} className="flex gap-3 p-3 border-l-2 border-blue-500">
                        <History className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-medium">
                            {item.action === 'field_updated' && `Campo "${item.field_name}" aggiornato`}
                            {item.action === 'message_added' && 'Messaggio aggiunto'}
                            {item.action === 'attachment_added' && 'Allegato caricato'}
                            {item.action === 'created' && 'Ticket creato'}
                          </p>
                          {item.old_value && item.new_value && (
                            <p className="text-sm text-gray-600">
                              Da "{item.old_value}" a "{item.new_value}"
                            </p>
                          )}
                          {item.new_value && !item.old_value && (
                            <p className="text-sm text-gray-600">{item.new_value}</p>
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