import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase, type Ticket, type TicketMessage } from '@/lib/supabase';
import { Loader2, ArrowLeft, Send, MessageSquare } from 'lucide-react';

export default function TicketDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [messages, setMessages] = useState<TicketMessage[]>([]);
  const [error, setError] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const loadTicketData = async () => {
    try {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError || !user) {
        navigate('/login');
        return;
      }

      // Load ticket (RLS will ensure user can only see their company's tickets)
      const { data: ticketData, error: ticketError } = await supabase
        .from('tickets')
        .select('*')
        .eq('id', id)
        .single();

      if (ticketError) throw ticketError;
      setTicket(ticketData);

      // Load messages
      const { data: messagesData, error: messagesError } = await supabase
        .from('app_2b35a5a86e_ticket_messages')
        .select('*')
        .eq('ticket_id', id)
        .order('created_at', { ascending: true });

      if (messagesError) throw messagesError;
      setMessages(messagesData || []);
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
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nell\'invio del messaggio';
      setError(errorMessage);
    } finally {
      setSendingMessage(false);
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
      low: 'bg-green-500/20 text-green-400 border-green-500/50',
      medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
      high: 'bg-orange-500/20 text-orange-400 border-orange-500/50',
      urgent: 'bg-red-500/20 text-red-400 border-red-500/50',
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <p className="text-white">Ticket non trovato</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <header className="glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={() => navigate('/dashboard')} className="text-blue-400 hover:text-blue-300">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Torna alla Dashboard
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <Alert variant="destructive" className="mb-6 bg-red-500/10 border-red-500/50">
            <AlertDescription className="text-red-400">{error}</AlertDescription>
          </Alert>
        )}

        {/* Ticket Info */}
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
            <div className="text-sm text-gray-500">
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
            <CardDescription className="text-gray-400">Comunica con il team di supporto</CardDescription>
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
                          ? 'bg-gray-700 text-white'
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
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
              <div ref={messagesEndRef} />
            </div>
            <div className="flex gap-2">
              <Textarea
                placeholder="Scrivi un messaggio..."
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
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
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