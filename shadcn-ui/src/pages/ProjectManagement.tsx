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
  Milestone,
  Send,
  FileText,
  Layers,
  TrendingUp,
  MapPin,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { breadcrumbSchema, localBusinessServiceSchema, standardAreaServed } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';
import FAQSection from '@/components/FAQSection';
import { useToast } from '@/hooks/use-toast';

export default function ProjectManagement() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', privacy: false });
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
      localBusinessServiceSchema(
        "IT Project Management Roma EUR Ostia Fiumicino",
        "Servizi di Project Management IT e Cyber Security a Roma, EUR, Ostia Lido, Fiumicino e Pomezia. Project Manager dedicati per gestire progetti IT.",
        "/project-management",
        "Project Management IT"
      ),
      pmBreadcrumb,
      {
        "@type": "Service",
        "name": "IT & Cyber Security Project Management Roma",
        "description": "Servizi di Project Management IT e Cyber Security a Roma, EUR, Ostia e Fiumicino. Gestione progetti, coordinamento stakeholder, monitoraggio SAL per PMI.",
        "provider": { "@type": "Organization", "name": "CoreNexus Technology Solution", "url": "https://corenexus.it" },
        "areaServed": standardAreaServed,
        "serviceType": "Project Management"
      }
    ]
  };

  const coverageAreas = [
    'EUR', 'Ostia Lido', 'Fiumicino', 'Acilia', 'Pomezia',
    'Mostacciano', 'Torrino', 'Laurentina', 'Spinaceto', 'Ostiense',
    'Magliana', 'San Paolo', 'Garbatella', 'Ardea', 'Santa Palomba',
  ];

  const faqs = [
    {
      question: "Cos'e il Project Management IT?",
      answer: "Il Project Management IT e la gestione strutturata di progetti informatici: dalla definizione degli obiettivi alla pianificazione, esecuzione e chiusura. Un Project Manager IT garantisce il rispetto di tempi, budget e qualita. CoreNexus offre questo servizio per aziende di Roma, EUR, Ostia e Fiumicino.",
    },
    {
      question: "Quando serve un Project Manager IT esterno?",
      answer: "Serve quando l'azienda non ha risorse interne dedicate, quando il progetto e complesso e coinvolge piu fornitori, quando e necessario un coordinamento neutrale tra reparti diversi, o quando si vuole garantire il rispetto delle scadenze e del budget.",
    },
    {
      question: "Gestite anche progetti di Cyber Security?",
      answer: "Si, siamo specializzati in Project Management IT e Cyber Security. Gestiamo progetti di implementazione SIEM Wazuh, deployment firewall, migrazione infrastrutture e compliance GDPR per aziende di Roma e provincia.",
    },
    {
      question: "Operate a Roma Sud per il Project Management IT?",
      answer: "Si, CoreNexus opera nel quadrante sud di Roma: EUR, Ostia, Fiumicino, Acilia, Pomezia, Mostacciano, Torrino, Laurentina e zone limitrofe. Offriamo anche gestione progetti da remoto per tutta Italia.",
    },
  ];

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
    "Costruire la mappa degli stakeholders",
    'Definire la strategia di implementazione piu adeguata',
    'Stabilire le procedure e la composizione del gruppo di lavoro',
    'Valutare i rischi',
    'Valutare costi e benefici',
  ];

  const pianificazioneItems = [
    'Project Charter', 'WBS (Work Breakdown Structure)', 'OBS (Organization Breakdown Structure)',
    'PERT', 'GANTT', 'Matrice di responsabilita (RAM)',
    'Diagramma di carico delle risorse umane', 'Stime e budget', 'Stato avanzamento lavori (SAL)',
  ];

  const esecuzioneItems = ['Budget', 'Tempi', 'Qualita del Prodotto'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) { toast({ title: 'Errore', description: 'Devi accettare la privacy policy.', variant: 'destructive' }); return; }
    if (!formData.name || !formData.email || !formData.phone) { toast({ title: 'Errore', description: 'Compila tutti i campi obbligatori.', variant: 'destructive' }); return; }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({ title: 'Richiesta inviata!', description: 'Ti ricontatteremo a breve.' });
    setFormData({ name: '', email: '', phone: '', message: '', privacy: false });
    setIsSubmitting(false);
  };

  return (
    <>
      <SEO
        title="Project Management IT Roma | Gestione Progetti IT EUR Ostia Fiumicino - CoreNexus"
        description="Servizi di Project Management IT e Cyber Security a Roma, EUR, Ostia, Fiumicino e Pomezia. Project Manager dedicati per gestire, pianificare e supervisionare progetti IT. Coordinamento stakeholder, GANTT, WBS, monitoraggio SAL. Preventivo gratuito."
        keywords={[
          'project management IT Roma',
          'gestione progetti IT Roma',
          'project manager IT Roma',
          'project manager cyber security Roma',
          'gestione progetti IT Roma EUR',
          'PM informatico Roma',
          'coordinamento progetti IT Roma',
          'project management Ostia',
          'PM IT Fiumicino',
          'gestione progetti Pomezia',
          'project management Roma Sud',
          'WBS GANTT PERT Roma',
          'consulenza PM IT Roma',
          'supervisione progetti IT Roma',
        ]}
        canonical="/project-management"
        schema={pmSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6 premium-gradient">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-black to-indigo-950/20" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="mb-6 text-center">
                <Link to="/servizi" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors text-sm font-medium">
                  <ArrowLeft className="w-4 h-4" />
                  Torna ai Servizi
                </Link>
              </div>

              <div className="text-center space-y-8 max-w-4xl mx-auto">
                <div className="inline-block">
                  <span className="px-4 py-2 rounded-full glass-effect text-violet-400 text-sm font-semibold tracking-wide inline-flex items-center gap-2">
                    <ClipboardList className="w-4 h-4" />
                    Servizio Dedicato
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
                    IT & Cyber Security Project Management
                  </span>
                  <span className="block text-2xl md:text-3xl text-gray-400 mt-2 font-normal">
                    a Roma, EUR, Ostia e Fiumicino
                  </span>
                </h1>

                <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  I nostri servizi di Project e Program Management organizzano, gestiscono e supervisionano l'intero processo fino alla sua consegna con successo per aziende di Roma e provincia.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  {heroAdvantages.map((item, index) => (
                    <div key={index} className="flex items-center justify-center gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm font-semibold tracking-wide">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Button size="lg" onClick={scrollToContact} className="group bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-10 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-violet-500/20">
                  Richiedi una consulenza gratuita
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
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
                <h2 className="text-4xl md:text-5xl font-bold text-white">Project Manager IT a Roma</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto rounded-full" />
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Grazie al know-how e all'esperienza dei nostri Project Manager nel guidare i progetti, ti supportiamo in tutte le fasi del progetto fornendo al contempo un valore aggiunto: <strong className="text-white">la finalizzazione del progetto</strong>.
                </p>
              </div>
            </MorphingSection>

            <div className="space-y-12">
              <MorphingSection delay={0.1}>
                <div className="p-8 md:p-10 rounded-3xl glass-effect border border-violet-500/20 hover:border-violet-500/40 transition-all duration-500">
                  <div className="text-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Definizione Progetto, Modelli e Obiettivi</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mt-4 max-w-2xl mx-auto">Vi possiamo supportare fin dalla fase di concezione o ideazione del progetto e/o comunque nella fase iniziale per:</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
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
              </MorphingSection>

              <MorphingSection delay={0.2}>
                <div className="p-8 md:p-10 rounded-3xl glass-effect border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-500">
                  <div className="text-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                      <Layers className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Pianificazione e Controllo</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mt-4 max-w-2xl mx-auto">Siamo al vostro fianco in tutta la fase di pianificazione e controllo del progetto e vi supportiamo nella realizzazione di:</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-3 max-w-3xl mx-auto">
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
              </MorphingSection>

              <MorphingSection delay={0.3}>
                <div className="p-8 md:p-10 rounded-3xl glass-effect border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500">
                  <div className="text-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Esecuzione e Finalizzazione Progetto</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mt-4 max-w-2xl mx-auto">Il nostro obiettivo principale e accompagnarvi nella realizzazione del progetto. Facciamo questo raggiungendo gli obiettivi prefissati in termini di:</p>
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {esecuzioneItems.map((item, index) => (
                      <div key={index} className="px-6 py-3 rounded-2xl glass-effect border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                        <span className="text-white font-semibold text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </MorphingSection>
            </div>

            <MorphingSection delay={0.4}>
              <div className="mt-16 text-center">
                <Button size="lg" onClick={scrollToContact} className="group bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-12 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-violet-500/20">
                  Metti i tuoi progetti sulla strada giusta: contattaci oggi!
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* Zone copertura */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="p-10 rounded-3xl glass-effect border border-violet-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Project Management IT a Roma Sud</h2>
                </div>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">CoreNexus offre servizi di Project Management IT per aziende in tutto il quadrante sud di Roma:</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {coverageAreas.map((area, index) => (
                    <span key={index} className="px-4 py-2 rounded-full glass-effect border border-violet-500/20 text-violet-400 text-sm font-medium">{area}</span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm">Per le zone non elencate offriamo Project Management IT da remoto in tutta Italia.</p>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={faqs} accentColor="violet" gradientFrom="violet-500" gradientTo="indigo-500" />

        {/* Contact Form */}
        <section id="contattaci-pm" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
          <div className="max-w-2xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Contattaci</h2>
                <p className="text-xl text-gray-400 max-w-xl mx-auto">Compila il modulo sottostante, ti ricontatteremo a breve per maggiori informazioni!</p>
              </div>
            </MorphingSection>

            <MorphingSection delay={0.1}>
              <div className="p-8 md:p-10 rounded-3xl glass-effect border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">Nome e Cognome <span className="text-red-400">*</span></label>
                    <Input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Il tuo nome e cognome" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl py-6 focus:border-violet-500/50" required />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">E-Mail <span className="text-red-400">*</span></label>
                    <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="La tua email" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl py-6 focus:border-violet-500/50" required />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">Telefono <span className="text-red-400">*</span></label>
                    <Input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Il tuo numero di telefono" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl py-6 focus:border-violet-500/50" required />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">Messaggio</label>
                    <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Descrivi il tuo progetto e le tue esigenze..." rows={5} className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:border-violet-500/50 resize-none" />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="privacy-pm" checked={formData.privacy} onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })} className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-violet-500 focus:ring-violet-500" />
                    <label htmlFor="privacy-pm" className="text-gray-400 text-sm">
                      Letta la <Link to="/privacy-policy" className="text-violet-400 hover:text-violet-300 underline">privacy policy</Link> autorizzo il trattamento dei dati <span className="text-red-400">*</span>
                    </label>
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white py-6 rounded-2xl font-semibold text-lg shadow-lg shadow-violet-500/20 disabled:opacity-50">
                    {isSubmitting ? (
                      <span className="flex items-center gap-2"><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Invio in corso...</span>
                    ) : (
                      <span className="flex items-center gap-2"><Send className="w-5 h-5" />Invio Richiesta</span>
                    )}
                  </Button>
                </form>
              </div>
            </MorphingSection>
          </div>
        </section>

        <footer className="bg-black border-t border-white/10 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <p className="text-gray-400 text-sm">
              © 2026 <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">CoreNexus Technology Solution</Link> - Tutti i diritti riservati.
            </p>
            <p className="text-xs text-gray-600">v2.1 - 26/05/2026</p>
          </div>
        </footer>

        <WhatsAppWidget />
      </div>
    </>
  );
}
