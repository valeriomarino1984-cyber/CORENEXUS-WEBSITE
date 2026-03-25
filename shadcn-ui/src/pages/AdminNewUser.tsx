import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase, type Company } from '@/lib/supabase';
import { Loader2, ArrowLeft, UserPlus } from 'lucide-react';

export default function AdminNewUser() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [companies, setCompanies] = useState<Company[]>([]);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    company_id: '',
    role: 'client',
  });

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    const { data } = await supabase
      .from('companies')
      .select('*')
      .order('name', { ascending: true });
    if (data) setCompanies(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      // Check if current user is admin
      const { data: { user: currentUser }, error: authError } = await supabase.auth.getUser();
      
      if (authError || !currentUser) {
        navigate('/admin/login');
        return;
      }

      const { data: adminData, error: adminError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', currentUser.id)
        .single();

      if (adminError) throw adminError;

      if (adminData.role !== 'admin') {
        throw new Error('Solo gli amministratori possono creare nuovi utenti');
      }

      // Get session token
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        throw new Error('Sessione non valida');
      }

      // Call Edge Function to create user
      const response = await fetch(
        'https://lvbzopwygjlozoupdidg.supabase.co/functions/v1/app_2b35a5a86e_create_user',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            company_id: formData.company_id,
            role: formData.role,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Errore nella creazione dell\'utente');
      }

      setSuccess('Utente creato con successo!');
      
      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/admin/users');
      }, 2000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nella creazione dell\'utente';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

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
            <CardTitle className="text-2xl text-white flex items-center">
              <UserPlus className="mr-2 h-6 w-6 text-red-500" />
              Crea Nuovo Utente
            </CardTitle>
            <CardDescription className="text-gray-400">
              Crea un nuovo utente e assegna ruolo e azienda
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
                <h3 className="text-lg font-semibold text-white">Credenziali di Accesso</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="utente@esempio.it"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={loading}
                    className="glass-effect border-white/20 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Minimo 6 caratteri"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    minLength={6}
                    disabled={loading}
                    className="glass-effect border-white/20 text-white placeholder:text-gray-500"
                  />
                  <p className="text-xs text-gray-500">L'utente potrà cambiarla al primo accesso</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-4">
                <h3 className="text-lg font-semibold text-white">Azienda e Ruolo</h3>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-300">Azienda *</Label>
                  <Select
                    value={formData.company_id}
                    onValueChange={(value) => setFormData({ ...formData, company_id: value })}
                    required
                    disabled={loading}
                  >
                    <SelectTrigger id="company" className="glass-effect border-white/20 text-white">
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
                  <Label htmlFor="role" className="text-gray-300">Ruolo *</Label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) => setFormData({ ...formData, role: value })}
                    disabled={loading}
                  >
                    <SelectTrigger id="role" className="glass-effect border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="client">Cliente - Può creare e gestire solo i propri ticket</SelectItem>
                      <SelectItem value="agent">Agente - Può visualizzare e rispondere a tutti i ticket</SelectItem>
                      <SelectItem value="admin">Admin - Accesso completo al sistema</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm text-blue-400">
                    💡 <strong>Nota sui Ruoli:</strong>
                  </p>
                  <ul className="text-sm text-blue-400 mt-2 space-y-1 list-disc list-inside">
                    <li><strong>Cliente:</strong> Vede solo i ticket della propria azienda</li>
                    <li><strong>Agente:</strong> Può gestire ticket di tutte le aziende</li>
                    <li><strong>Admin:</strong> Può creare utenti, aziende e gestire tutto il sistema</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/admin/users')}
                  disabled={loading}
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                >
                  Annulla
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creazione in corso...
                    </>
                  ) : (
                    <>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Crea Utente
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}