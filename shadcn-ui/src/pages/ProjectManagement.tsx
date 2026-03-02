import { useState } from 'react';
import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  ArrowRight,
  ArrowLeft,
  Target,
  Users,
  Clock,
  ShieldCheck,
  BarChart3,
  Award,
  Check,
  ClipboardList,
  GitBranch,
  Milestone,
  Send,
  Phone,
  Mail,
  MapPin,
  FileText,
  Layers,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { breadcrumbSchema } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';
import { useToast } from '@/hooks/use-toast';

export default function ProjectManagement() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contattaci-pm')?.scrollIntoView({ behavior: 'smooth' });
  };

  const pmBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
    { name: 'Project Management', url: '/project-management' },
  ]);

  const pmSchema = {
    "@context": "https://schema.org",
    "@graph": [
      pmBreadcrumb,
      {
        "@type": "Service",
        "name": "IT & Cyber Security Project Management",
        "description": "Servizi di Project Management IT e Cyber Security a Roma. Gestione progetti, coordinamento stakeholder, monitoraggio SAL.",
        "provider": {
          "@type": "Organization",
          "name": "CoreNexus",
          "url": "https://corenexus.it"
        },
        "areaServed": {
          "@type": "City",
          "name": "Roma"
        },
        "serviceType": "Project Management"
      }
    ]
  };

  const heroAdvantages = [
    { icon: Users, text: 'MIGLIOR UTILIZZO DELLE RISORSE' },
    { icon: Clock, text: 'OTTIMIZZAZIONE DELLE TEMPISTICHE' },
    { icon: Target, text: 'COORDINAMENTO STAKEHOLDER' },
    { icon: ShieldCheck, text: 'MITIGAZIONE RISCHI' },
    { icon: BarChart3, text: 'MONITORAGGIO CONTINUO E SAL' },
    { icon: Award, text: 'CERTEZZA DEL RISULTATO' },
  ];

  const definizioneItems = [
    'Analizzare e verificare gli obiettivi di progetto',
    'Costruire la mappa degli stakeholders ("portatori d\'interesse")',
    'Definire la strategia di implementazione più adeguata',
    'Stabilire le procedure e la composizione del gruppo di lavoro',
    'Valutare i rischi',
    'Valutare costi e benefici',
  ];

  const pianificazioneItems = [
    'Project Charter',
    'WBS (Work Breakdown Structure)',
    'OBS (Organization Breakdown Structure)',
    'PERT',
    'GANTT',
    'Matrice di responsabilità (RAM)',
    'Diagramma di carico delle risorse umane',
    'Stime e budget',
    'Stato avanzamento lavori (SAL)',
  ];

  const esecuzioneItems = [
    'Budget',
    'Tempi',
    'Qualità del Prodotto',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacy) {
      toast({
        title: 'Errore',
        description: 'Devi accettare la privacy policy per inviare il modulo.',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: 'Errore',
        description: 'Compila tutti i campi obbligatori.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: 'Richiesta inviata!',
      description: 'Ti ricontatteremo a breve per maggiori informazioni.',
    });

    setFormData({ name: '', email: '', phone: '', message: '', privacy: false });
    setIsSubmitting(false);
  };

  return (
    <>
      <SEO
        title="IT & Cyber Security Project Management Roma | Project Manager - CoreNexus"
        description="Servizi di Project Management IT e Cyber Security a Roma. I nostri Project Manager organizzano, gestiscono e supervisionano l'intero processo fino alla consegna con successo."
        keywords={[
          'project management IT Roma',
          'project manager cyber security',
          'gestione progetti IT',
          'PM informatico Roma',
          'coordinamento progetti IT',
          'WBS GANTT PERT',
          'stato avanzamento lavori IT',
          'consulenza project management',
          'program management Roma',
          'gestione stakeholder IT',
        ]}
        canonical="/project-management"
        schema={pmSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-black to-indigo-950/20" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="mb-6">
                <Link
                  to="/servizi"
                  className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Torna ai Servizi
                </Link>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-block">
                    <span className="px-4 py-2 rounded-full glass-effect text-violet-400 text-sm font-semibold tracking-wide flex items-center gap-2">
                      <ClipboardList className="w-4 h-4" />
                      Servizio Dedicato
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
                      IT & Cyber Security Project Management
                    </span>
                  </h1>

                  <p className="text-xl text-gray-400 leading-relaxed">
                    I nostri servizi di Project e Program Management organizzano, gestiscono e
                    supervisionano l'intero processo fino alla sua consegna con successo.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {heroAdvantages.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300 text-sm font-semibold tracking-wide">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-10 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-violet-500/20"
                  >
                    Richiedi una consulenza gratuita
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Right side - Visual element */}
                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl glass-effect border border-violet-500/20 p-8 flex flex-col items-center justify-center gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        {[Target, Users, Clock, ShieldCheck, BarChart3, Award, ClipboardList, GitBranch, Milestone].map((Icon, i) => (
                          <div
                            key={i}
                            className="w-16 h-16 rounded-2xl glass-effect flex items-center justify-center hover:bg-violet-500/20 transition-all duration-300 hover:scale-110"
                          >
                            <Icon className="w-7 h-7 text-violet-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-3xl blur-xl -z-10" />
                  </div>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* Project Manager Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Project Manager
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto rounded-full" />
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Grazie al know-how e all'esperienza dei nostri Project Manager nel guidare i progetti,
                  ti supportiamo in tutte le fasi del progetto fornendo al contempo un valore aggiunto:
                  <strong className="text-white"> la finalizzazione del progetto</strong>.
                </p>
              </div>
            </MorphingSection>

            {/* Three PM Phases */}
            <div className="space-y-12">
              {/* Phase 1: Definizione */}
              <MorphingSection delay={0.1}>
                <div className="p-8 md:p-10 rounded-3xl glass-effect border border-violet-500/20 hover:border-violet-500/40 transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <div className="space-y-4 flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Definizione Progetto, Modelli e Obiettivi
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        Vi possiamo supportare fin dalla fase di concezione o ideazione del progetto e/o
                        comunque nella fase iniziale per:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3 pt-2">
                        {definizioneItems.map((item, index) => (
                          <div key={index} className="flex items-start gap-3 group">
                            <div className="w-5 h-5 rounded-full bg-violet-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-violet-500/50 transition-colors">
                              <Check className="w-3 h-3 text-violet-400" />
                            </div>
                            <span className="text-gray-300 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </MorphingSection>

              {/* Phase 2: Pianificazione */}
              <MorphingSection delay={0.2}>
                <div className="p-8 md:p-10 rounded-3xl glass-effect border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Layers className="w-7 h-7 text-white" />
                    </div>
                    <div className="space-y-4 flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Pianificazione e Controllo
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        Siamo al vostro fianco in tutta la fase di pianificazione e controllo del progetto
                        e vi supportiamo nella realizzazione di:
                      </p>
                      <div className="grid md:grid-cols-3 gap-3 pt-2">
                        {pianificazioneItems.map((item, index) => (
                          <div key={index} className="flex items-start gap-3 group">
                            <div className="w-5 h-5 rounded-full bg-indigo-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-indigo-500/50 transition-colors">
                              <Check className="w-3 h-3 text-indigo-400" />
                            </div>
                            <span className="text-gray-300 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </MorphingSection>

              {/* Phase 3: Esecuzione */}
              <MorphingSection delay={0.3}>
                <div className="p-8 md:p-10 rounded-3xl glass-effect border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <div className="space-y-4 flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Esecuzione e Finalizzazione Progetto
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        Il nostro obiettivo principale è accompagnarvi nella realizzazione del progetto.
                        Facciamo questo raggiungendo gli obiettivi prefissati in termini di:
                      </p>
                      <div className="flex flex-wrap gap-4 pt-2">
                        {esecuzioneItems.map((item, index) => (
                          <div
                            key={index}
                            className="px-6 py-3 rounded-2xl glass-effect border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                          >
                            <span className="text-white font-semibold text-lg">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </MorphingSection>
            </div>

            {/* Mid CTA */}
            <MorphingSection delay={0.4}>
              <div className="mt-16 text-center">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="group bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-12 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-violet-500/20"
                >
                  Metti i tuoi progetti sulla strada giusta: contattaci oggi!
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contattaci-pm" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
          <div className="max-w-6xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Contattaci per il servizio di Project Management
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Compila il modulo sottostante, ti ricontatteremo a breve per maggiori informazioni!
                  <br />
                  Se preferisci, chiamaci direttamente allo{' '}
                  <a href="tel:+393517734198" className="text-violet-400 hover:text-violet-300 font-semibold transition-colors">
                    351 773 4198
                  </a>.
                </p>
              </div>
            </MorphingSection>

            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <MorphingSection delay={0.1}>
                <div className="lg:col-span-3 p-8 md:p-10 rounded-3xl glass-effect border border-white/10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">
                        Nome e Cognome <span className="text-red-400">*</span>
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Il tuo nome e cognome"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl py-6 focus:border-violet-500/50"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">
                        E-Mail <span className="text-red-400">*</span>
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="La tua email"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl py-6 focus:border-violet-500/50"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">
                        Telefono <span className="text-red-400">*</span>
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Il tuo numero di telefono"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl py-6 focus:border-violet-500/50"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">
                        Messaggio
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Descrivi il tuo progetto e le tue esigenze..."
                        rows={5}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:border-violet-500/50 resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy-pm"
                        checked={formData.privacy}
                        onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-violet-500 focus:ring-violet-500"
                      />
                      <label htmlFor="privacy-pm" className="text-gray-400 text-sm">
                        Letta la{' '}
                        <Link to="/privacy-policy" className="text-violet-400 hover:text-violet-300 underline">
                          privacy policy
                        </Link>{' '}
                        autorizzo il trattamento dei dati <span className="text-red-400">*</span>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white py-6 rounded-2xl font-semibold text-lg shadow-lg shadow-violet-500/20 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Invio in corso...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Invio Richiesta
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </MorphingSection>

              {/* Contact Info */}
              <MorphingSection delay={0.2}>
                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-8">Contattaci direttamente</h3>

                  <div className="p-6 rounded-2xl glass-effect border border-white/10 hover:border-violet-500/30 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-1">Telefono</h4>
                        <a href="tel:+393517734198" className="text-violet-400 hover:text-violet-300 transition-colors font-medium">
                          +39 351 773 4198
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl glass-effect border border-white/10 hover:border-violet-500/30 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-1">Indirizzo Email</h4>
                        <a href="mailto:info@corenexus.it" className="text-violet-400 hover:text-violet-300 transition-colors font-medium">
                          info@corenexus.it
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl glass-effect border border-white/10 hover:border-violet-500/30 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-1">Sede Operativa</h4>
                        <p className="text-gray-400">Roma, Italia</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick info box */}
                  <div className="p-6 rounded-2xl glass-effect border border-violet-500/20 mt-8">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <strong className="text-violet-400">Perché scegliere CoreNexus?</strong>
                      <br /><br />
                      I nostri Project Manager certificati hanno esperienza pluriennale nella gestione di
                      progetti IT complessi, dalla cybersecurity alle migrazioni cloud, garantendo il
                      rispetto di tempi, budget e qualità.
                    </p>
                  </div>
                </div>
              </MorphingSection>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <p className="text-gray-400 text-sm">
              © 2025 <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">CoreNexus.it</Link> - Tutti i diritti riservati.
            </p>
            <p className="text-xs text-gray-600">v1.4 - 17/02/2026</p>
          </div>
        </footer>

        <WhatsAppWidget />
      </div>
    </>
  );
}