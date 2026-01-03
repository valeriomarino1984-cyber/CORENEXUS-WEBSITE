import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase, type Client } from '@/lib/supabase';
import { Loader2, ArrowLeft, Search, Users, Plus, Edit, Shield, User } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function AdminUsers() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState<Client | null>(null);
  const [users, setUsers] = useState<Client[]>([]);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

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

      // Fetch all users
      const { data: usersData, error: usersError } = await supabase
        .from('app_2b35a5a86e_clients')
        .select('*')
        .order('created_at', { ascending: false });

      if (usersError) throw usersError;
      setUsers(usersData || []);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nel caricamento dei dati';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const getRoleBadge = (role: string) => {
    const config: Record<string, { variant: 'default' | 'secondary' | 'destructive' | 'outline', label: string, color: string }> = {
      admin: { variant: 'destructive', label: 'Admin', color: 'text-red-500' },
      staff: { variant: 'secondary', label: 'Staff', color: 'text-orange-500' },
      client: { variant: 'outline', label: 'Cliente', color: 'text-blue-500' },
    };
    const roleConfig = config[role] || config.client;
    return <Badge variant={roleConfig.variant}>{roleConfig.label}</Badge>;
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.contact_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const stats = {
    total: users.length,
    admins: users.filter(u => u.role === 'admin').length,
    staff: users.filter(u => u.role === 'staff').length,
    clients: users.filter(u => u.role === 'client').length,
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={() => navigate('/admin/dashboard')} className="text-red-400 hover:text-red-300">
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

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Gestione Utenti
            </h1>
            <p className="text-gray-400 mt-2">Crea e gestisci utenti, ruoli e permessi</p>
          </div>
          <Button 
            onClick={() => navigate('/admin/users/new')} 
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
          >
            <Plus className="mr-2 h-4 w-4" />
            Nuovo Utente
          </Button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-effect border-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400">Totale Utenti</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-500 mr-3" />
                <span className="text-3xl font-bold text-white">{stats.total}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400">Amministratori</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-red-500 mr-3" />
                <span className="text-3xl font-bold text-white">{stats.admins}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400">Staff</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <User className="h-8 w-8 text-orange-500 mr-3" />
                <span className="text-3xl font-bold text-white">{stats.staff}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400">Clienti</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-500 mr-3" />
                <span className="text-3xl font-bold text-white">{stats.clients}</span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Cerca per nome, azienda o email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass-effect border-white/20 text-white placeholder:text-gray-500"
                />
              </div>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="glass-effect border-white/20 text-white">
                  <SelectValue placeholder="Filtra per ruolo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tutti i ruoli</SelectItem>
                  <SelectItem value="admin">Amministratori</SelectItem>
                  <SelectItem value="staff">Staff</SelectItem>
                  <SelectItem value="client">Clienti</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Users List */}
        <Card className="glass-effect border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Tutti gli Utenti</CardTitle>
            <CardDescription className="text-gray-400">
              Gestisci utenti, ruoli e permessi
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredUsers.length === 0 ? (
              <div className="text-center py-12">
                <Users className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">Nessun utente trovato</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredUsers.map((user) => (
                  <Card 
                    key={user.id} 
                    className="glass-effect border-white/10 hover:border-red-500/30 transition-all"
                  >
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg text-white">{user.contact_name}</h3>
                            {getRoleBadge(user.role)}
                          </div>
                          <p className="text-gray-400 text-sm mb-2">
                            <strong>Azienda:</strong> {user.company_name}
                          </p>
                          <p className="text-gray-400 text-sm mb-2">
                            <strong>Email:</strong> {user.email}
                          </p>
                          {user.phone && (
                            <p className="text-gray-400 text-sm mb-2">
                              <strong>Telefono:</strong> {user.phone}
                            </p>
                          )}
                          <p className="text-xs text-gray-500 mt-3">
                            Creato il {new Date(user.created_at).toLocaleDateString('it-IT', {
                              day: '2-digit',
                              month: 'long',
                              year: 'numeric',
                            })}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigate(`/admin/users/edit/${user.id}`)}
                          className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Modifica
                        </Button>
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