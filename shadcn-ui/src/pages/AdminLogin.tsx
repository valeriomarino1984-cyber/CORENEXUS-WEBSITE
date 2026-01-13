import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/lib/supabase';
import { Loader2, Shield } from 'lucide-react';

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
      console.log('=== LOGIN ATTEMPT START ===');
      console.log('Email:', email);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log('Auth response:', { data, error });

      if (error) throw error;

      if (data.user) {
        console.log('Auth successful. User ID:', data.user.id);
        console.log('Attempting to fetch client profile...');
        
        // Check if user is admin
        const { data: clientData, error: clientError } = await supabase
          .from('app_2b35a5a86e_clients')
          .select('*')
          .eq('user_id', data.user.id)
          .single();

        console.log('Client query result:', { clientData, clientError });

        if (clientError) {
          console.error('=== CLIENT QUERY ERROR ===');
          console.error('Error message:', clientError.message);
          console.error('Error details:', clientError.details);
          console.error('Error hint:', clientError.hint);
          console.error('Error code:', clientError.code);
          
          // More specific error message
          if (clientError.code === 'PGRST116') {
            throw new Error('Profilo utente non trovato nel database. Contatta l\'amministratore di sistema.');
          } else if (clientError.message.includes('policy')) {
            throw new Error('Errore di permessi (RLS). Le policy del database bloccano l\'accesso al profilo utente.');
          } else {
            throw new Error(`Errore database: ${clientError.message}`);
          }
        }

        if (!clientData) {
          console.error('No client data returned');
          throw new Error('Profilo utente non trovato. User ID: ' + data.user.id);
        }

        console.log('Client data loaded:', clientData);

        if (clientData.role !== 'admin' && clientData.role !== 'staff') {
          console.error('User role not authorized:', clientData.role);
          await supabase.auth.signOut();
          throw new Error('Accesso negato. Solo gli amministratori possono accedere a questa area.');
        }

        console.log('Login successful! Redirecting to dashboard...');
        navigate('/admin/dashboard');
      }
    } catch (err) {
      console.error('=== LOGIN ERROR ===', err);
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
        </CardContent>
      </Card>
    </div>
  );
}