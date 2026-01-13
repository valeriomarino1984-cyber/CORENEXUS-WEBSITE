import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { supabase, type Client } from '@/lib/supabase';
import { Loader2, ArrowLeft, Save, Trash2, Key } from 'lucide-react';

export default function AdminEditUser() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [resettingPassword, setResettingPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [user, setUser] = useState<Client | null>(null);
  const [newPassword, setNewPassword] = useState('');
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);

  const [formData, setFormData] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    role: 'client',
  });

  useEffect(() => {
    loadUser();
  }, [id]);

  const loadUser = async () => {
    try {
      console.log('=== DEBUG: Loading user for edit ===');
      console.log('User ID from URL:', id);
      
      const { data: { user: currentUser }, error: authError } = await supabase.auth.getUser();
      console.log('Current authenticated user:', currentUser?.id, currentUser?.email);
      
      if (authError || !currentUser) {
        console.error('Auth error:', authError);
        navigate('/admin/login');
        return;
      }

      // Check if current user is admin
      console.log('Checking if current user is admin...');
      const { data: adminData, error: adminError } = await supabase
        .from('app_2b35a5a86e_clients')
        .select('role')
        .eq('user_id', currentUser.id)
        .single();

      console.log('Admin check result:', { adminData, adminError });

      if (adminError) throw adminError;

      if (adminData.role !== 'admin') {
        console.error('User is not admin. Role:', adminData.role);
        throw new Error('Solo gli amministratori possono modificare gli utenti');
      }

      // Load user to edit
      console.log('Loading user to edit with id:', id);
      const { data: userData, error: userError } = await supabase
        .from('app_2b35a5a86e_clients')
        .select('*')
        .eq('id', id)
        .single();

      console.log('User query result:', { userData, userError });

      if (userError) {
        console.error('=== USER LOAD ERROR DETAILS ===');
        console.error('Message:', userError.message);
        console.error('Details:', userError.details);
        console.error('Hint:', userError.hint);
        console.error('Code:', userError.code);
        throw userError;
      }

      if (!userData) {
        console.error('No user data returned for id:', id);
        throw new Error('Utente non trovato');
      }

      console.log('User loaded successfully:', userData);
      setUser(userData);
      setFormData({
        company_name: userData.company_name,
        contact_name: userData.contact_name,
        email: userData.email,
        phone: userData.phone || '',
        role: userData.role,
      });
    } catch (err) {
      console.error('=== ERROR in loadUser ===', err);
      const errorMessage = err instanceof Error ? err.message : 'Errore nel caricamento dell\'utente';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSaving(true);

    try {
      if (!user) return;

      // Update client profile
      const { error: updateError } = await supabase
        .from('app_2b35a5a86e_clients')
        .update({
          company_name: formData.company_name,
          contact_name: formData.contact_name,
          phone: formData.phone || null,
          role: formData.role,
        })
        .eq('id', user.id);

      if (updateError) throw updateError;

      setSuccess('Utente aggiornato con successo!');
      
      // Reload user data
      await loadUser();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nell\'aggiornamento dell\'utente';
      setError(errorMessage);
    } finally {
      setSaving(false);
    }
  };

  const handleResetPassword = async () => {
    if (!newPassword || newPassword.length < 6) {
      setError('La password deve essere di almeno 6 caratteri');
      return;
    }

    setError('');
    setSuccess('');
    setResettingPassword(true);

    try {
      if (!user) return;

      // Reset password using admin API
      const { error: resetError } = await supabase.auth.admin.updateUserById(
        user.user_id,
        { password: newPassword }
      );

      if (resetError) throw resetError;

      setSuccess('Password reimpostata con successo!');
      setNewPassword('');
      setShowPasswordDialog(false);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nel reset della password';
      setError(errorMessage);
    } finally {
      setResettingPassword(false);
    }
  };

  const handleDelete = async () => {
    setError('');
    setDeleting(true);

    try {
      if (!user) return;

      // Delete user from auth
      const { error: deleteAuthError } = await supabase.auth.admin.deleteUser(user.user_id);

      if (deleteAuthError) throw deleteAuthError;

      // Client profile will be deleted automatically via CASCADE

      navigate('/admin/users');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nell\'eliminazione dell\'utente';
      setError(errorMessage);
    } finally {
      setDeleting(false);
      setShowDeleteDialog(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Loader2 className="h-8 w-8 animate-spin text-red-500" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="text-center">
          <p className="text-white text-xl mb-4">Utente non trovato</p>
          <p className="text-gray-400 mb-6">ID ricercato: {id}</p>
          <Button 
            onClick={() => navigate('/admin/users')} 
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Torna a Gestione Utenti
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <header className="bg-black/50 backdrop-blur-lg shadow-lg border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={() => navigate('/admin/users')} className="text-red-400 hover:text-red-300">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Torna a Gestione Utenti
          </Button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="glass-effect border-red-500/20">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Modifica Utente</CardTitle>
            <CardDescription className="text-gray-400">
              Aggiorna informazioni, ruolo e permessi dell'utente
            </CardDescription>
          </CardHeader>
          <CardContent>
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Informazioni Utente</h3>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    disabled
                    className="glass-effect border-white/20 text-gray-500 cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-500">L'email non può essere modificata</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact_name" className="text-gray-300">Nome Contatto *</Label>
                  <Input
                    id="contact_name"
                    placeholder="Mario Rossi"
                    value={formData.contact_name}
                    onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                    required
                    disabled={saving}
                    className="glass-effect border-white/20 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company_name" className="text-gray-300">Nome Azienda *</Label>
                  <Input
                    id="company_name"
                    placeholder="Azienda SRL"
                    value={formData.company_name}
                    onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                    required
                    disabled={saving}
                    className="glass-effect border-white/20 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-300">Telefono</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+39 123 456 7890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={saving}
                    className="glass-effect border-white/20 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-4">
                <h3 className="text-lg font-semibold text-white">Ruolo e Permessi</h3>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-gray-300">Ruolo *</Label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) => setFormData({ ...formData, role: value })}
                    disabled={saving}
                  >
                    <SelectTrigger id="role" className="glass-effect border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="client">Cliente</SelectItem>
                      <SelectItem value="staff">Staff</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                >
                  {saving ? (
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
            </form>

            <div className="border-t border-white/10 mt-8 pt-6 space-y-4">
              <h3 className="text-lg font-semibold text-white">Azioni Avanzate</h3>

              <div className="flex gap-4">
                <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="flex-1 border-orange-500/30 text-orange-400 hover:bg-orange-500/10">
                      <Key className="mr-2 h-4 w-4" />
                      Reset Password
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="glass-effect border-orange-500/20">
                    <DialogHeader>
                      <DialogTitle className="text-white">Reset Password</DialogTitle>
                      <DialogDescription className="text-gray-400">
                        Imposta una nuova password per questo utente
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="new_password" className="text-gray-300">Nuova Password</Label>
                        <Input
                          id="new_password"
                          type="password"
                          placeholder="Minimo 6 caratteri"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          minLength={6}
                          className="glass-effect border-white/20 text-white"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setShowPasswordDialog(false)}
                        className="border-white/20 text-white"
                      >
                        Annulla
                      </Button>
                      <Button
                        onClick={handleResetPassword}
                        disabled={resettingPassword}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                      >
                        {resettingPassword ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Reset...
                          </>
                        ) : (
                          'Conferma Reset'
                        )}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="flex-1 border-red-500/30 text-red-400 hover:bg-red-500/10">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Elimina Utente
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="glass-effect border-red-500/20">
                    <DialogHeader>
                      <DialogTitle className="text-white">Conferma Eliminazione</DialogTitle>
                      <DialogDescription className="text-gray-400">
                        Sei sicuro di voler eliminare questo utente? Questa azione è irreversibile e eliminerà anche tutti i ticket associati.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setShowDeleteDialog(false)}
                        className="border-white/20 text-white"
                      >
                        Annulla
                      </Button>
                      <Button
                        onClick={handleDelete}
                        disabled={deleting}
                        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                      >
                        {deleting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Eliminazione...
                          </>
                        ) : (
                          'Conferma Eliminazione'
                        )}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}