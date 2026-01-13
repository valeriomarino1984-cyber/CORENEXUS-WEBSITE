import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase, type Ticket, type Client } from '@/lib/supabase';
import { Loader2, LogOut, Search, Ticket as TicketIcon, Clock, CheckCircle2, AlertCircle, Users, Plus, UserCog, Settings } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState<Client | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  useEffect(() => {
    checkAuth();
  }, []);

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

      // Fetch all tickets
      const { data: ticketsData, error: ticketsError } = await supabase
        .from('app_2b35a5a86e_tickets')
        .select('*')
        .order('created_at', { ascending: false });

      if (ticketsError) throw ticketsError;
      setTickets(ticketsData || []);

      // Fetch all clients
      const { data: clientsData, error: clientsError } = await supabase
        .from('app_2b35a5a86e_clients')
        .select('*')
        .order('created_at', { ascending: false });

      if (clientsError) throw clientsError;
      setClients(clientsData || []);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nel caricamento dei dati';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
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
      maintenance: 'Manutenzione',
      other: 'Altro',
    };
    return labels[category] || category;
  };

  const getClientName = (userId: string) => {
    const client = clients.find(c => c.user_id === userId);
    return client ? `${client.company_name} (${client.contact_name})` : 'Cliente sconosciuto';
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         getClientName(ticket.user_id).toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || ticket.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const stats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === 'open').length,
    inProgress: tickets.filter((t) => t.status === 'in_progress').length,
    resolved: tickets.filter((t) => t.status === 'resolved').length,
    totalClients: clients.filter(c => c.role === 'client').length,
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Loader2 className="h-8 w-8 animate-spin text-red-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <header className="bg-black/50 backdrop-blur-lg shadow-lg border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Dashboard Admin
            </h1>
            {admin && (
              <p className="text-sm text-gray-400 mt-1">
                Benvenuto, {admin.contact_name} ({admin.role === 'admin' ? 'Amministratore' : 'Staff'})
              </p>
            )}
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={() => navigate('/admin/user-management')} 
              variant="outline"
              className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
            >
              <Settings className="mr-2 h-4 w-4" />
              Gestione Completa
            </Button>
            <Button 
              onClick={() => navigate('/admin/users')} 
              variant="outline"
              className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
            >
              <UserCog className="mr-2 h-4 w-4" />
              Utenti
            </Button>
            <Button 
              onClick={() => navigate('/admin/new-ticket')} 
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
            >
              <Plus className="mr-2 h-4 w-4" />
              Nuovo Promemoria
            </Button>
            <Button variant="outline" onClick={handleLogout} className="border-red-500/30 text-red-400 hover:bg-red-500/10">
              <LogOut className="mr-2 h-4 w-4" />
              Esci
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <Alert variant="destructive" className="mb-6 bg-red-500/10 border-red-500/50">
            <AlertDescription className="text-red-400">{error}</AlertDescription>
          </Alert>
        )}

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card className="glass-effect border-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400">Ticket Totali</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <TicketIcon className="h-8 w-8 text-blue-500 mr-3" />
                <span className="text-3xl font-bold text-white">{stats.total}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400">Aperti</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <AlertCircle className="h-8 w-8 text-orange-500 mr-3" />
                <span className="text-3xl font-bold text-white">{stats.open}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400">In Lavorazione</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-yellow-500 mr-3" />
                <span className="text-3xl font-bold text-white">{stats.inProgress}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400">Risolti</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <CheckCircle2 className="h-8 w-8 text-green-500 mr-3" />
                <span className="text-3xl font-bold text-white">{stats.resolved}</span>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="glass-effect border-white/10 hover:border-purple-500/30 transition-all cursor-pointer"
            onClick={() => navigate('/admin/user-management')}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400">Clienti</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-8 w-8 text-purple-500 mr-3" />
                <span className="text-3xl font-bold text-white">{stats.totalClients}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6 glass-effect border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Filtri</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Cerca ticket o cliente..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass-effect border-white/20 text-white placeholder:text-gray-500"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="glass-effect border-white/20 text-white">
                  <SelectValue placeholder="Filtra per stato" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tutti gli stati</SelectItem>
                  <SelectItem value="open">Aperti</SelectItem>
                  <SelectItem value="in_progress">In Lavorazione</SelectItem>
                  <SelectItem value="resolved">Risolti</SelectItem>
                  <SelectItem value="closed">Chiusi</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="glass-effect border-white/20 text-white">
                  <SelectValue placeholder="Filtra per priorità" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tutte le priorità</SelectItem>
                  <SelectItem value="low">Bassa</SelectItem>
                  <SelectItem value="medium">Media</SelectItem>
                  <SelectItem value="high">Alta</SelectItem>
                  <SelectItem value="urgent">Urgente</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Tickets List */}
        <Card className="glass-effect border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Tutti i Ticket</CardTitle>
            <CardDescription className="text-gray-400">
              Gestisci tutte le richieste di assistenza e i promemoria di manutenzione
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredTickets.length === 0 ? (
              <div className="text-center py-12">
                <TicketIcon className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">Nessun ticket trovato</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredTickets.map((ticket) => (
                  <Card 
                    key={ticket.id} 
                    className="glass-effect border-white/10 hover:border-red-500/30 transition-all cursor-pointer"
                    onClick={() => navigate(`/admin/ticket/${ticket.id}`)}
                  >
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-white mb-2">{ticket.title}</h3>
                          <p className="text-gray-400 text-sm mb-3 line-clamp-2">{ticket.description}</p>
                          <p className="text-red-400 text-sm mb-3">
                            Cliente: {getClientName(ticket.user_id)}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {getStatusBadge(ticket.status)}
                            {getPriorityBadge(ticket.priority)}
                            <Badge variant="outline" className="border-white/20 text-gray-300">{getCategoryLabel(ticket.category)}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-3">
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
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}