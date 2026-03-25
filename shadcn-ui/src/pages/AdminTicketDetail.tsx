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
  type Profile,
  type Company,
} from '@/lib/supabase';
import { 
  Loader2, 
  ArrowLeft, 
  Send, 
  MessageSquare,
  History,
  Save,
  Building2
} from 'lucide-react';

export default function AdminTicketDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [creatorProfile, setCreatorProfile] = useState<Profile | null>(null);
  const [company, setCompany] = useState<Company | null>(null);
  const [agents, setAgents] = useState<Profile[]>([]);
  const [messages, setMessages] = useState<TicketMessage[]>([]);
  const [error, setError] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const [updatingTicket, setUpdatingTicket] = useState(false);
  
  const [editForm, setEditForm] = useState({
    status: '',
    priority: '',
    assigned_to: '',
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

      // Check if user is admin/agent
      const { data: adminData, error: adminError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (adminError) throw adminError;

      if (adminData.role !== 'admin' && adminData.role !== 'agent') {
        await supabase.auth.signOut();
        navigate('/admin/login');
        return;
      }

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
        .from('tickets')
        .select('*')
        .eq('id', id)
        .single();

      if (ticketError) throw ticketError;
      setTicket(ticketData);
      setEditForm({
        status: ticketData.status,
        priority: ticketData.priority,
        assigned_to: ticketData.assigned_to || '',
      });

      // Load creator profile
      const { data: creatorData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', ticketData.created_by)
        .single();

      if (creatorData) setCreatorProfile(creatorData);

      // Load company
      const { data: companyData } = await supabase
        .from('companies')
        .select('*')
        .eq('id', ticketData.company_id)
        .single();

      if (companyData) setCompany(companyData);

      // Load agents for assignment
      const { data: agentsData } = await supabase
        .from('profiles')
        .select('*')
        .in('role', ['admin', 'agent']);

      if (agentsData) setAgents(agentsData);

      // Load messages
      const { data: messagesData, error: messagesError } = await supabase
        .from('app_2b35a5a86e_ticket_messages')
        .select('*')
        .eq('ticket_id', id)
        .order('created_at', { ascending: true });

      if (messagesError) throw messagesError;
      setMessages(messagesData || []);

      // Subscribe to real-time messages
      supabase
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
          is_staff: true,
        });

      if (error) throw error;
      setNewMessage('');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nell\'invio del messaggio';
      setError(errorMessage);
    } finally {
      setSendingMessage(false);
    }
  };

  const handleUpdateTicket = async () => {
    if (!ticket) return;

    setUpdatingTicket(true);
    try {
      const updateData: Record<string, string | null> = {
        status: editForm.status,
        priority: editForm.priority,
      };

      if (editForm.assigned_to) {
        updateData.assigned_to = editForm.assigned_to;
      }

      const { error } = await supabase
        .from('tickets')
        .update(updateData)
        .eq('id', ticket.id);

      if (error) throw error;

      await loadTicketData();
      setError('');
      
      // Show success toast
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
      </div>
    );
  }

  if (!ticket) {
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

        {/* Company & Creator Info */}
        <Card className="mb-6 glass-effect border-orange-500/20">
          <CardHeader>
            <CardTitle className="text-white">Informazioni</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
              <div>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Building2 className="h-3 w-3" /> Azienda
                </p>
                <p className="font-semibold">{company?.name || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Creato da</p>
                <p className="font-semibold">{creatorProfile?.email || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Assegnato a</p>
                <p className="font-semibold">
                  {ticket.assigned_to 
                    ? agents.find(a => a.id === ticket.assigned_to)?.email || 'N/A'
                    : 'Non assegnato'}
                </p>
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
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">{ticket.description}</p>
            
            {/* Quick Update */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-black/30 rounded-lg">
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
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Assegna a</label>
                <Select value={editForm.assigned_to} onValueChange={(value) => setEditForm({ ...editForm, assigned_to: value })}>
                  <SelectTrigger className="glass-effect border-white/20 text-white">
                    <SelectValue placeholder="Seleziona agente" />
                  </SelectTrigger>
                  <SelectContent>
                    {agents.map((agent) => (
                      <SelectItem key={agent.id} value={agent.id}>
                        {agent.email} ({agent.role})
                      </SelectItem>
                    ))}
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
                      Salva
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

        {/* Chat */}
        <Card className="glass-effect border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat di Supporto
            </CardTitle>
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
      </main>
    </div>
  );
}