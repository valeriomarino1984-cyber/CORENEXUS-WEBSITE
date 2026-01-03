import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Plus, Ticket } from 'lucide-react';
import { toast } from 'sonner';

interface TicketData {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  created_at: string;
  user_id: string;
  company_name?: string;
}

export default function AdminTickets() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    fetchTickets();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate('/admin/login');
      return;
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (profile?.role !== 'admin') {
      toast.error('Accesso negato');
      navigate('/');
    }
  };

  const fetchTickets = async () => {
    try {
      const { data, error } = await supabase
        .from('tickets')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTickets(data || []);
    } catch (error) {
      console.error('Error fetching tickets:', error);
      toast.error('Errore nel caricamento dei ticket');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-blue-500';
      case 'in_progress':
        return 'bg-yellow-500';
      case 'resolved':
        return 'bg-green-500';
      case 'closed':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-orange-500';
      case 'low':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Caricamento...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate('/admin/dashboard')}
              variant="outline"
              className="glass-effect border-white/20 text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna alla Dashboard
            </Button>
            <h1 className="text-3xl font-bold text-white">Gestione Ticket</h1>
          </div>
          <Button
            onClick={() => navigate('/admin/new-ticket')}
            className="premium-button"
          >
            <Plus className="w-4 h-4 mr-2" />
            Nuovo Ticket
          </Button>
        </div>

        {tickets.length === 0 ? (
          <Card className="glass-effect border-white/10">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Ticket className="w-16 h-16 text-gray-400 mb-4" />
              <p className="text-gray-400 text-lg">Nessun ticket presente</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {tickets.map((ticket) => (
              <Card
                key={ticket.id}
                className="glass-effect border-white/10 hover:border-white/20 transition-all cursor-pointer"
                onClick={() => navigate(`/admin/ticket/${ticket.id}`)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl mb-2">
                        {ticket.title}
                      </CardTitle>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {ticket.description}
                      </p>
                      {ticket.company_name && (
                        <p className="text-gray-500 text-xs mt-2">
                          Azienda: {ticket.company_name}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                      <Badge className={`${getStatusColor(ticket.status)} text-white`}>
                        {ticket.status === 'open' && 'Aperto'}
                        {ticket.status === 'in_progress' && 'In Lavorazione'}
                        {ticket.status === 'resolved' && 'Risolto'}
                        {ticket.status === 'closed' && 'Chiuso'}
                      </Badge>
                      <Badge className={`${getPriorityColor(ticket.priority)} text-white`}>
                        {ticket.priority === 'high' && 'Alta'}
                        {ticket.priority === 'medium' && 'Media'}
                        {ticket.priority === 'low' && 'Bassa'}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-sm">
                    Creato il: {new Date(ticket.created_at).toLocaleDateString('it-IT')}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}