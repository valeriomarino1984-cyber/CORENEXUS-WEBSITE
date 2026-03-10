import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';

// Funzione per generare un CAPTCHA matematico casuale
const generateCaptcha = () => {
  const operations = [
    { type: 'add', symbol: '+' },
    { type: 'subtract', symbol: '-' },
    { type: 'multiply', symbol: '×' },
  ];
  
  const operation = operations[Math.floor(Math.random() * operations.length)];
  let num1: number, num2: number, answer: number;
  
  switch (operation.type) {
    case 'add':
      num1 = Math.floor(Math.random() * 20) + 1;
      num2 = Math.floor(Math.random() * 20) + 1;
      answer = num1 + num2;
      break;
    case 'subtract':
      num1 = Math.floor(Math.random() * 20) + 10;
      num2 = Math.floor(Math.random() * 10) + 1;
      answer = num1 - num2;
      break;
    case 'multiply':
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      answer = num1 * num2;
      break;
    default:
      num1 = 5;
      num2 = 3;
      answer = 8;
  }
  
  return {
    question: `${num1} ${operation.symbol} ${num2} = ?`,
    answer: answer.toString(),
  };
};

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    captcha: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaData, setCaptchaData] = useState(generateCaptcha());

  // Genera un nuovo CAPTCHA al caricamento del componente
  useEffect(() => {
    setCaptchaData(generateCaptcha());
  }, []);

  // Funzione per rigenerare il CAPTCHA
  const refreshCaptcha = () => {
    setCaptchaData(generateCaptcha());
    setFormData({ ...formData, captcha: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.captcha !== captchaData.answer) {
      toast({
        title: 'Errore CAPTCHA',
        description: 'La risposta al CAPTCHA non è corretta. Riprova.',
        variant: 'destructive',
      });
      refreshCaptcha();
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Invio richiesta alla Edge Function Telegram...');
      
      const { data, error: functionError } = await supabase.functions.invoke('app_2b35a5a86e_send_contact_telegram', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      });

      console.log('Risposta Edge Function:', { data, functionError });

      if (functionError) {
        console.error('Errore Edge Function:', functionError);
        throw functionError;
      }

      toast({
        title: 'Messaggio inviato!',
        description: 'Ti risponderemo il prima possibile.',
      });

      // Reset form e genera nuovo CAPTCHA
      setFormData({ name: '', email: '', phone: '', message: '', captcha: '' });
      refreshCaptcha();
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage = error instanceof Error ? error.message : 'Si è verificato un errore sconosciuto';
      
      toast({
        title: 'Errore nell\'invio',
        description: `${errorMessage}. Verifica che la Edge Function sia deployata su Supabase.`,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-gradient-to-b from-black via-gray-900/30 to-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white">Contattaci</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Vuoi migliorare l'efficienza e la sicurezza della tua infrastruttura informatica?
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Contattaci per una <span className="text-blue-400 font-semibold">consulenza IT gratuita</span> e scopri come possiamo supportare la tua azienda 
            con soluzioni professionali di assistenza informatica e sicurezza IT.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="glass-effect border-white/10 bg-transparent text-white animate-fade-in-up card-hover max-w-2xl w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-white">Invia un messaggio</CardTitle>
              <CardDescription className="text-lg text-gray-400">
                📞 Richiedi ora il tuo preventivo personalizzato – affidati a un partner tecnico che mette la tecnologia al servizio del tuo business.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Nome e Cognome *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="glass-effect border-white/20 focus:border-blue-500 text-white placeholder:text-gray-500 text-lg py-6"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="glass-effect border-white/20 focus:border-blue-500 text-white placeholder:text-gray-500 text-lg py-6"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Telefono"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="glass-effect border-white/20 focus:border-blue-500 text-white placeholder:text-gray-500 text-lg py-6"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Messaggio *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="glass-effect border-white/20 focus:border-blue-500 text-white placeholder:text-gray-500 text-lg resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Verifica di sicurezza: <span className="text-white font-bold text-lg">{captchaData.question}</span>
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Inserisci la risposta"
                      value={formData.captcha}
                      onChange={(e) => setFormData({ ...formData, captcha: e.target.value })}
                      required
                      className="glass-effect border-white/20 focus:border-blue-500 text-white placeholder:text-gray-500 text-lg py-6 flex-1"
                    />
                    <Button
                      type="button"
                      onClick={refreshCaptcha}
                      variant="outline"
                      className="glass-effect border-white/20 hover:border-blue-500 text-white px-4"
                      title="Genera nuovo CAPTCHA"
                    >
                      <RefreshCw className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full premium-button text-white py-7 text-lg rounded-2xl font-semibold"
                >
                  {isSubmitting ? 'Invio in corso...' : 'Invia Richiesta'}
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}