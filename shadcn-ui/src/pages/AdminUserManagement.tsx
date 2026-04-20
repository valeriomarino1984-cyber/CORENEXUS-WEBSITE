import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { supabase, type Profile, type Company } from '@/lib/supabase';
import { Loader2, ArrowLeft, Plus, Edit, Building2, Users, Shield, User, Trash2, AlertTriangle } from 'lucide-react';

/**
 * Extract a meaningful error message from a Supabase Edge Function error.
 * FunctionsHttpError from supabase-js only returns a generic message, but the
 * actual error payload is available in `error.context.response` which we can
 * parse to surface the real backend error to the user.
 */
async function extractEdgeFunctionError(error: unknown): Promise<string> {
  if (!error) return 'Errore sconosciuto';

  const err = error as { context?: { response?: Response }; message?: string };

  if (err.context?.response) {
    try {
      const cloned = err.context.response.clone();
      const body = await cloned.json();
      if (body?.error) return body.error;
      if (body?.message) return body.message;
    } catch {
      try {
        const text = await err.context.response.clone().text();
        if (text) return text;
      } catch {
        // ignore
      }
    }
  }

  return err.message || 'Errore sconosciuto';
}

export default function AdminUserManagement() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<(Profile & { companies?: Company })[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    company_id: '',
    role: 'client',
  });

  const [showEditRole, setShowEditRole] = useState(false);
  const [editingUser, setEditingUser] = useState<Profile | null>(null);
  const [newRole, setNewRole] = useState('');
  const [updatingRole, setUpdatingRole] = useState(false);

  const [showEditCompany, setShowEditCompany] = useState(false);
  const [newCompanyId, setNewCompanyId] = useState('');
  const [updatingCompany, setUpdatingCompany] = useState(false);

  const [showCreateCompany, setShowCreateCompany] = useState(false);
  const [creatingCompany, setCreatingCompany] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState('');

  const [showDeleteCompany, setShowDeleteCompany] = useState(false);
  const [deletingCompany, setDeletingCompany] = useState(false);
  const [companyToDelete, setCompanyToDelete] = useState<Company | null>(null);

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

      const { data: adminData, error: adminError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (adminError) throw adminError;

      if (adminData.role !== 'admin') {
        navigate('/admin/dashboard');
        return;
      }

      await loadData();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nel caricamento dei dati';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const loadData = async () => {
    try {
      const { data: usersData, error: usersError } = await supabase
        .from('profiles')
        .select('*, companies(*)')
        .order('created_at', { ascending: false });

      if (usersError) throw usersError;
      setUsers(usersData || []);

      const { data: companiesData, error: companiesError } = await supabase
        .from('companies')
        .select('*')
        .order('name', { ascending: true });

      if (companiesError) throw companiesError;
      setCompanies(companiesData || []);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nel caricamento dei dati';
      setError(errorMessage);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setCreatingUser(true);

    try {
      if (!newUser.company_id) {
        throw new Error('Devi selezionare un\'azienda');
      }

      const { data, error: fnError } = await supabase.functions.invoke('app_2b35a5a86e_create_user', {
        body: {
          email: newUser.email,
          password: newUser.password,
          company_id: newUser.company_id,
          role: newUser.role,
        },
      });

      if (fnError) {
        // Try to extract the real error from the response body
        const realError = await extractEdgeFunctionError(fnError);
        throw new Error(realError);
      }
      if (data?.error) throw new Error(data.error);

      setSuccess(`Utente ${newUser.email} creato con successo come ${newUser.role}!`);
      setShowCreateUser(false);
      setNewUser({ email: '', password: '', company_id: '', role: 'client' });
      await loadData();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nella creazione dell\'utente';
      setError(errorMessage);
      console.error('Create user error:', err);
    } finally {
      setCreatingUser(false);
    }
  };

  const handleUpdateRole = async () => {
    if (!editingUser) return;
    
    setError('');
    setSuccess('');
    setUpdatingRole(true);

    try {
      const { data, error: updateError } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('id', editingUser.id)
        .select();

      if (updateError) throw updateError;
      if (!data || data.length === 0) {
        throw new Error('Aggiornamento bloccato dalle policy RLS. Verifica i permessi dell\'amministratore.');
      }

      setSuccess('Ruolo aggiornato con successo!');
      setShowEditRole(false);
      setEditingUser(null);
      await loadData();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nell\'aggiornamento del ruolo';
      setError(errorMessage);
    } finally {
      setUpdatingRole(false);
    }
  };

  const handleUpdateCompany = async () => {
    if (!editingUser) return;
    
    setError('');
    setSuccess('');
    setUpdatingCompany(true);

    try {
      const { data, error: updateError } = await supabase
        .from('profiles')
        .update({ company_id: newCompanyId })
        .eq('id', editingUser.id)
        .select();

      if (updateError) throw updateError;
      if (!data || data.length === 0) {
        throw new Error('Aggiornamento bloccato dalle policy RLS. Verifica i permessi dell\'amministratore.');
      }

      setSuccess('Azienda aggiornata con successo!');
      setShowEditCompany(false);
      setEditingUser(null);
      await loadData();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nell\'aggiornamento dell\'azienda';
      setError(errorMessage);
    } finally {
      setUpdatingCompany(false);
    }
  };

  const handleCreateCompany = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setCreatingCompany(true);

    try {
      const trimmedName = newCompanyName.trim();
      if (!trimmedName) {
        throw new Error('Il nome azienda non può essere vuoto');
      }

      const { data, error: insertError } = await supabase
        .from('companies')
        .insert({ name: trimmedName })
        .select()
        .single();

      if (insertError) {
        if (insertError.code === '42501' || insertError.message?.includes('row-level security')) {
          throw new Error('Permessi insufficienti: le policy RLS bloccano la creazione. Esegui lo script fix_companies_rls.sql su Supabase.');
        }
        if (insertError.code === '23505') {
          throw new Error('Esiste già un\'azienda con questo nome');
        }
        throw insertError;
      }

      if (!data) {
        throw new Error('Creazione azienda fallita: nessun dato restituito. Probabile problema RLS.');
      }

      setSuccess(`Azienda "${data.name}" creata con successo!`);
      setShowCreateCompany(false);
      setNewCompanyName('');
      await loadData();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nella creazione dell\'azienda';
      setError(errorMessage);
      console.error('Create company error:', err);
    } finally {
      setCreatingCompany(false);
    }
  };

  const handleDeleteCompany = async () => {
    if (!companyToDelete) return;

    setError('');
    setSuccess('');
    setDeletingCompany(true);

    try {
      const userCount = getUserCountForCompany(companyToDelete.id);
      if (userCount > 0) {
        throw new Error(
          `Impossibile eliminare: ci sono ${userCount} utenti associati a questa azienda. Riassegna o elimina prima gli utenti.`
        );
      }

      const { data, error: deleteError } = await supabase
        .from('companies')
        .delete()
        .eq('id', companyToDelete.id)
        .select();

      if (deleteError) {
        if (deleteError.code === '42501' || deleteError.message?.includes('row-level security')) {
          throw new Error('Permessi insufficienti: le policy RLS bloccano l\'eliminazione. Esegui lo script fix_companies_rls.sql su Supabase.');
        }
        if (deleteError.code === '23503') {
          throw new Error('Impossibile eliminare: ci sono record correlati (utenti, ticket) che dipendono da questa azienda.');
        }
        throw deleteError;
      }

      if (!data || data.length === 0) {
        throw new Error('Eliminazione bloccata dalle policy RLS. Verifica i permessi dell\'amministratore.');
      }

      setSuccess(`Azienda "${companyToDelete.name}" eliminata con successo!`);
      setShowDeleteCompany(false);
      setCompanyToDelete(null);
      await loadData();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nell\'eliminazione dell\'azienda';
      setError(errorMessage);
      console.error('Delete company error:', err);
    } finally {
      setDeletingCompany(false);
    }
  };

  const getRoleBadge = (role: string) => {
    const config: Record<string, { variant: 'default' | 'secondary' | 'destructive' | 'outline', label: string }> = {
      admin: { variant: 'destructive', label: 'Admin' },
      agent: { variant: 'secondary', label: 'Agente' },
      client: { variant: 'outline', label: 'Cliente' },
    };
    const roleConfig = config[role] || config.client;
    return <Badge variant={roleConfig.variant}>{roleConfig.label}</Badge>;
  };

  const filteredUsers = users.filter(user => {
    if (roleFilter === 'all') return true;
    return user.role === roleFilter;
  });

  const getUserCountForCompany = (companyId: string) => {
    return users.filter(u => u.company_id === companyId).length;
  };

  const stats = {
    total: users.length,
    admins: users.filter(u => u.role === 'admin').length,
    agents: users.filter(u => u.role === 'agent').length,
    clients: users.filter(u => u.role === 'client').length,
    companies: companies.length,
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

        {success && (
          <Alert className="mb-6 bg-green-500/10 border-green-500/50">
            <AlertDescription className="text-green-400">{success}</AlertDescription>
          </Alert>
        )}

        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Gestione Completa
          </h1>
          <p className="text-gray-400 mt-2">Gestisci utenti, ruoli e aziende</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
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
              <CardTitle className="text-sm font-medium text-gray-400">Agenti</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <User className="h-8 w-8 text-orange-500 mr-3" />
                <span className="text-3xl font-bold text-white">{stats.agents}</span>
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

          <Card className="glass-effect border-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-400">Aziende</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-purple-500 mr-3" />
                <span className="text-3xl font-bold text-white">{stats.companies}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="glass-effect border-white/10">
            <TabsTrigger value="users" className="data-[state=active]:bg-red-500/20">
              <Users className="h-4 w-4 mr-2" />
              Gestione Utenti
            </TabsTrigger>
            <TabsTrigger value="companies" className="data-[state=active]:bg-red-500/20">
              <Building2 className="h-4 w-4 mr-2" />
              Gestione Aziende
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger className="w-[200px] glass-effect border-white/20 text-white">
                    <SelectValue placeholder="Filtra per ruolo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tutti i ruoli</SelectItem>
                    <SelectItem value="admin">Amministratori</SelectItem>
                    <SelectItem value="agent">Agenti</SelectItem>
                    <SelectItem value="client">Clienti</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Dialog open={showCreateUser} onOpenChange={setShowCreateUser}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    Nuovo Utente
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-effect border-red-500/20 max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-white">Crea Nuovo Utente</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Inserisci i dettagli del nuovo utente
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleCreateUser} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="create_email" className="text-gray-300">Email *</Label>
                        <Input
                          id="create_email"
                          type="email"
                          value={newUser.email}
                          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                          required
                          className="glass-effect border-white/20 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="create_password" className="text-gray-300">Password *</Label>
                        <Input
                          id="create_password"
                          type="password"
                          value={newUser.password}
                          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                          required
                          minLength={6}
                          className="glass-effect border-white/20 text-white"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="create_company" className="text-gray-300">Azienda *</Label>
                        <Select
                          value={newUser.company_id}
                          onValueChange={(value) => setNewUser({ ...newUser, company_id: value })}
                        >
                          <SelectTrigger id="create_company" className="glass-effect border-white/20 text-white">
                            <SelectValue placeholder="Seleziona azienda" />
                          </SelectTrigger>
                          <SelectContent>
                            {companies.map((company) => (
                              <SelectItem key={company.id} value={company.id}>
                                {company.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="create_role" className="text-gray-300">Ruolo *</Label>
                        <Select
                          value={newUser.role}
                          onValueChange={(value) => setNewUser({ ...newUser, role: value })}
                        >
                          <SelectTrigger id="create_role" className="glass-effect border-white/20 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="client">Cliente</SelectItem>
                            <SelectItem value="agent">Agente</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowCreateUser(false)}
                        className="border-white/20 text-white"
                      >
                        Annulla
                      </Button>
                      <Button
                        type="submit"
                        disabled={creatingUser}
                        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                      >
                        {creatingUser ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Creazione...
                          </>
                        ) : (
                          'Crea Utente'
                        )}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Tutti gli Utenti</CardTitle>
                <CardDescription className="text-gray-400">
                  {filteredUsers.length} utenti trovati
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border border-white/10">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10 hover:bg-white/5">
                        <TableHead className="text-gray-300">Email</TableHead>
                        <TableHead className="text-gray-300">Azienda</TableHead>
                        <TableHead className="text-gray-300">Ruolo</TableHead>
                        <TableHead className="text-gray-300">Data Creazione</TableHead>
                        <TableHead className="text-gray-300 text-right">Azioni</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUsers.map((user) => (
                        <TableRow key={user.id} className="border-white/10 hover:bg-white/5">
                          <TableCell className="text-white">{user.email}</TableCell>
                          <TableCell className="text-white">{user.companies?.name || 'N/A'}</TableCell>
                          <TableCell>{getRoleBadge(user.role)}</TableCell>
                          <TableCell className="text-gray-400">
                            {new Date(user.created_at).toLocaleDateString('it-IT')}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setEditingUser(user);
                                  setNewRole(user.role);
                                  setShowEditRole(true);
                                }}
                                className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                              >
                                <Edit className="h-3 w-3 mr-1" />
                                Ruolo
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setEditingUser(user);
                                  setNewCompanyId(user.company_id);
                                  setShowEditCompany(true);
                                }}
                                className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                              >
                                <Building2 className="h-3 w-3 mr-1" />
                                Azienda
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="companies" className="space-y-6">
            <div className="flex justify-end">
              <Dialog open={showCreateCompany} onOpenChange={setShowCreateCompany}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    Nuova Azienda
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-effect border-red-500/20">
                  <DialogHeader>
                    <DialogTitle className="text-white">Crea Nuova Azienda</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Inserisci il nome della nuova azienda
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleCreateCompany} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="company_name_new" className="text-gray-300">Nome Azienda *</Label>
                      <Input
                        id="company_name_new"
                        value={newCompanyName}
                        onChange={(e) => setNewCompanyName(e.target.value)}
                        required
                        className="glass-effect border-white/20 text-white"
                        placeholder="Es. Azienda SRL"
                      />
                    </div>
                    <DialogFooter>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowCreateCompany(false)}
                        className="border-white/20 text-white"
                      >
                        Annulla
                      </Button>
                      <Button
                        type="submit"
                        disabled={creatingCompany}
                        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                      >
                        {creatingCompany ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Creazione...
                          </>
                        ) : (
                          'Crea Azienda'
                        )}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Tutte le Aziende</CardTitle>
                <CardDescription className="text-gray-400">
                  {companies.length} aziende registrate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {companies.map((company) => {
                    const userCount = getUserCountForCompany(company.id);
                    return (
                      <Card key={company.id} className="glass-effect border-white/10 hover:border-red-500/30 transition-all">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <Building2 className="h-5 w-5 text-purple-500 shrink-0" />
                                <h3 className="font-semibold text-white truncate">{company.name}</h3>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Users className="h-4 w-4" />
                                <span>{userCount} utenti</span>
                              </div>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setCompanyToDelete(company);
                                setShowDeleteCompany(true);
                              }}
                              className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300 shrink-0"
                              title={userCount > 0 ? `Impossibile eliminare: ${userCount} utenti associati` : 'Elimina azienda'}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Edit Role Dialog */}
        <Dialog open={showEditRole} onOpenChange={setShowEditRole}>
          <DialogContent className="glass-effect border-orange-500/20">
            <DialogHeader>
              <DialogTitle className="text-white">Modifica Ruolo</DialogTitle>
              <DialogDescription className="text-gray-400">
                Cambia il ruolo di {editingUser?.email}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="new_role" className="text-gray-300">Nuovo Ruolo</Label>
                <Select value={newRole} onValueChange={setNewRole}>
                  <SelectTrigger id="new_role" className="glass-effect border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="client">Cliente</SelectItem>
                    <SelectItem value="agent">Agente</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowEditRole(false)}
                className="border-white/20 text-white"
              >
                Annulla
              </Button>
              <Button
                onClick={handleUpdateRole}
                disabled={updatingRole}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
              >
                {updatingRole ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Aggiornamento...
                  </>
                ) : (
                  'Conferma'
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Edit Company Dialog */}
        <Dialog open={showEditCompany} onOpenChange={setShowEditCompany}>
          <DialogContent className="glass-effect border-blue-500/20">
            <DialogHeader>
              <DialogTitle className="text-white">Modifica Azienda</DialogTitle>
              <DialogDescription className="text-gray-400">
                Cambia l'azienda di {editingUser?.email}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="new_company" className="text-gray-300">Nuova Azienda</Label>
                <Select value={newCompanyId} onValueChange={setNewCompanyId}>
                  <SelectTrigger id="new_company" className="glass-effect border-white/20 text-white">
                    <SelectValue placeholder="Seleziona azienda" />
                  </SelectTrigger>
                  <SelectContent>
                    {companies.map((company) => (
                      <SelectItem key={company.id} value={company.id}>
                        {company.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowEditCompany(false)}
                className="border-white/20 text-white"
              >
                Annulla
              </Button>
              <Button
                onClick={handleUpdateCompany}
                disabled={updatingCompany}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
              >
                {updatingCompany ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Aggiornamento...
                  </>
                ) : (
                  'Conferma'
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete Company Dialog */}
        <Dialog open={showDeleteCompany} onOpenChange={setShowDeleteCompany}>
          <DialogContent className="glass-effect border-red-500/30">
            <DialogHeader>
              <DialogTitle className="text-white flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                Conferma Eliminazione
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                Sei sicuro di voler eliminare l'azienda <span className="font-semibold text-white">"{companyToDelete?.name}"</span>?
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              {companyToDelete && (
                <Alert className="bg-red-500/10 border-red-500/30">
                  <AlertTriangle className="h-4 w-4 text-red-400" />
                  <AlertDescription className="text-red-300 ml-2">
                    {getUserCountForCompany(companyToDelete.id) > 0 ? (
                      <>
                        <strong>Attenzione:</strong> Questa azienda ha{' '}
                        <strong>{getUserCountForCompany(companyToDelete.id)} utenti associati</strong>.
                        Devi prima riassegnarli o eliminarli.
                      </>
                    ) : (
                      <>
                        Questa operazione è <strong>irreversibile</strong>. L'azienda verrà eliminata permanentemente.
                      </>
                    )}
                  </AlertDescription>
                </Alert>
              )}
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setShowDeleteCompany(false);
                  setCompanyToDelete(null);
                }}
                className="border-white/20 text-white"
                disabled={deletingCompany}
              >
                Annulla
              </Button>
              <Button
                onClick={handleDeleteCompany}
                disabled={deletingCompany || (companyToDelete ? getUserCountForCompany(companyToDelete.id) > 0 : false)}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
              >
                {deletingCompany ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Eliminazione...
                  </>
                ) : (
                  <>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Elimina Definitivamente
                  </>
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}