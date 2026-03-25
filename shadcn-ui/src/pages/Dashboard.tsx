import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, type Profile, type Ticket, type Company } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LogOut, Plus, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import SEO from '@/components/SEO';

export default function Dashboard() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/login');
        return;
      }

      // Load profile
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*, companies(*)')
        .eq('id', user.id)
        .single();

      if (profileData) {
        setProfile(profileData);
        if (profileData.companies) {
          setCompany(profileData.companies);
        }
      }

      // Load tickets for the user's company (RLS will filter automatically)
      const { data: ticketsData } = await supabase
        .from('tickets')
        .select('*')
        .order('created_at', { ascending: false });

      if (ticketsData) {
        setTickets(ticketsData);
      }
    } catch (error) {
      console.error('Error loading dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <Clock className="w-4 h-4" />;
      case 'in_progress':
        return <AlertCircle className="w-4 h-4" />;
      case 'resolved':
      case 'closed':
        return <CheckCircle2 className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'in_progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'resolved':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'closed':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'open':
        return 'Aperto';
      case 'in_progress':
        return 'In Lavorazione';
      case 'resolved':
        return 'Risolto';
      case 'closed':
        return 'Chiuso';
      default:
        return status;
    }
  };

  const getPriorityLabel = (priority: string) => {
    const labels: Record<string, string> = {
      low: 'Bassa',
      medium: 'Media',
      high: 'Alta',
      urgent: 'Urgente',
    };
    return labels[priority] || priority;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Caricamento...</div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Dashboard Cliente - Area Riservata Supporto IT"
        description="Gestisci i tuoi ticket di assistenza IT, visualizza lo stato delle richieste e accedi al supporto tecnico CoreNexus Technology Solution per la tua azienda a Roma."
        keywords={[
          'dashboard clienti IT',
          'gestione ticket supporto',
          'area riservata assistenza',
          'portale clienti IT Roma'
        ]}
        canonical="/dashboard"
        noindex={true}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <header className="glass-effect border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard Cliente</h1>
              {profile && company && (
                <p className="text-sm text-gray-300">
                  {profile.email} - {company.name}
                </p>
              )}
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="glass-effect border-white/20 text-white hover:bg-white/10"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Esci
            </Button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">I Tuoi Ticket</h2>
            <Button
              onClick={() => navigate('/new-ticket')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Nuovo Ticket
            </Button>
          </div>

          <div className="grid gap-6">
            {tickets.length === 0 ? (
              <Card className="glass-effect border-white/20">
                <CardContent className="py-12 text-center">
                  <p className="text-gray-400">Nessun ticket presente</p>
                </CardContent>
              </Card>
            ) : (
              tickets.map((ticket) => (
                <Card
                  key={ticket.id}
                  className="glass-effect border-white/20 hover:bg-white/5 transition-all cursor-pointer"
                  onClick={() => navigate(`/ticket/${ticket.id}`)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-white mb-2">{ticket.title}</CardTitle>
                        <CardDescription className="text-gray-400">
                          {ticket.description}
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(ticket.status)}>
                        {getStatusIcon(ticket.status)}
                        <span className="ml-1">{getStatusLabel(ticket.status)}</span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>Priorità: {getPriorityLabel(ticket.priority)}</span>
                      <span>•</span>
                      <span>{new Date(ticket.created_at).toLocaleDateString('it-IT')}</span>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </main>
      </div>
    </>
  );
}