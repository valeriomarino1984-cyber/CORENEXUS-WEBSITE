import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase, type Company } from '@/lib/supabase';
import { Loader2, ArrowLeft, Plus } from 'lucide-react';

export default function AdminNewTicket() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [companies, setCompanies] = useState<Company[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    company_id: '',
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
    setLoading(true);

    try {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError || !user) {
        navigate('/admin/login');
        return;
      }

      // Check if user is admin/agent
      const { data: adminData, error: adminError } = await supabase
        .from('profiles')
        .select('role, company_id')
        .eq('id', user.id)
        .single();

      if (adminError) throw adminError;

      if (adminData.role !== 'admin' && adminData.role !== 'agent') {
        throw new Error('Non hai i permessi per creare ticket');
      }

      // Use selected company_id or admin's own company
      const companyId = formData.company_id || adminData.company_id;

      // Create ticket
      const { data: ticketData, error: ticketError } = await supabase
        .from('tickets')
        .insert({
          title: formData.title,
          description: formData.description,
          priority: formData.priority,
          status: 'open',
          company_id: companyId,
          created_by: user.id,
        })
        .select()
        .single();

      if (ticketError) throw ticketError;

      // Redirect to ticket detail
      navigate(`/admin/ticket/${ticketData.id}`);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nella creazione del ticket';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

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

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="glass-effect border-red-500/20">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center">
              <Plus className="mr-2 h-6 w-6 text-red-500" />
              Nuovo Ticket
            </CardTitle>
            <CardDescription className="text-gray-400">
              Crea un nuovo ticket di assistenza o promemoria di manutenzione
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-6 bg-red-500/10 border-red-500/50">
                <AlertDescription className="text-red-400">{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-gray-300">Azienda</Label>
                <Select
                  value={formData.company_id}
                  onValueChange={(value) => setFormData({ ...formData, company_id: value })}
                  disabled={loading}
                >
                  <SelectTrigger id="company" className="glass-effect border-white/20 text-white">
                    <SelectValue placeholder="Seleziona azienda (opzionale)" />
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
                <Label htmlFor="title" className="text-gray-300">Titolo *</Label>
                <Input
                  id="title"
                  placeholder="es. Backup server mensile - Cliente XYZ"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  disabled={loading}
                  className="glass-effect border-white/20 text-white placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-gray-300">Descrizione *</Label>
                <Textarea
                  id="description"
                  placeholder="Descrivi l'attività o il problema..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  disabled={loading}
                  rows={6}
                  className="glass-effect border-white/20 text-white placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority" className="text-gray-300">Priorità *</Label>
                <Select
                  value={formData.priority}
                  onValueChange={(value) => setFormData({ ...formData, priority: value })}
                  disabled={loading}
                >
                  <SelectTrigger id="priority" className="glass-effect border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Bassa</SelectItem>
                    <SelectItem value="medium">Media</SelectItem>
                    <SelectItem value="high">Alta</SelectItem>
                    <SelectItem value="urgent">Urgente</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/admin/dashboard')}
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
                      <Plus className="mr-2 h-4 w-4" />
                      Crea Ticket
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