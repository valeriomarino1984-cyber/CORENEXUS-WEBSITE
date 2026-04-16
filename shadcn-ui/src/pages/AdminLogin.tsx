import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/lib/supabase';
import { Loader2, Shield, Home } from 'lucide-react';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        // Check if user is admin or agent in profiles table
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.user.id)
          .single();

        if (profileError) {
          if (profileError.code === 'PGRST116') {
            throw new Error('Profilo utente non trovato nel database. Contatta l\'amministratore di sistema.');
          }
          throw new Error(`Errore database: ${profileError.message}`);
        }

        if (!profileData) {
          throw new Error('Profilo utente non trovato.');
        }

        if (profileData.role !== 'admin' && profileData.role !== 'agent') {
          await supabase.auth.signOut();
          throw new Error('Accesso negato. Solo gli amministratori e gli agenti possono accedere a questa area.');
        }

        navigate('/admin/dashboard');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore durante il login. Verifica le credenziali.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 p-4">
      <Card className="w-full max-w-md glass-effect border-orange-500/20">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center gradient-text">Area Riservata Admin</CardTitle>
          <CardDescription className="text-center text-gray-400">
            Accedi al pannello di amministrazione
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">Email Admin</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@corenexus.it"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="glass-effect border-white/20 text-white placeholder:text-gray-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="glass-effect border-white/20 text-white placeholder:text-gray-500"
              />
            </div>

            {error && (
              <Alert variant="destructive" className="bg-red-500/10 border-red-500/50">
                <AlertDescription className="text-red-400">{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Accesso in corso...
                </>
              ) : (
                <>
                  <Shield className="mr-2 h-4 w-4" />
                  Accedi come Admin
                </>
              )}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-white/10"
            >
              <Home className="w-4 h-4 mr-2" />
              Torna alla Homepage
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}