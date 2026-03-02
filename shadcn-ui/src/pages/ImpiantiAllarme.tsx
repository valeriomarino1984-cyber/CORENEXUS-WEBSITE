import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ArrowLeft,
  Camera,
  Bell,
  Shield,
  Wifi,
  Smartphone,
  Eye,
  Lock,
  Radio,
  Check,
  MonitorPlay,
  ScanLine,
  Siren,
  AlertTriangle,
  HardDrive,
  Cloud,
  Sun,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { breadcrumbSchema } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';

export default function ImpiantiAllarme() {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  const allarmeBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
    { name: 'Impianti di Allarme e Videosorveglianza', url: '/impianti-allarme-videosorveglianza' },
  ]);

  const allarmeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      allarmeBreadcrumb,
      {
        "@type": "Service",
        "name": "Impianti di Allarme e Videosorveglianza",
        "description": "Installazione e manutenzione impianti di allarme e videosorveglianza a Roma. Sistemi antintrusione, TVCC, controllo accessi per aziende e privati.",
        "provider": {
          "@type": "Organization",
          "name": "CoreNexus",
          "url": "https://corenexus.it"
        },
        "areaServed": {
          "@type": "City",
          "name": "Roma"
        },
        "serviceType": "Impianti di Sicurezza"
      }
    ]
  };

  const keyPoints = [
    'Progettiamo e installiamo impianti di allarme su misura per la tua esigenza',
    'Sistemi di videosorveglianza IP ad alta definizione con visione notturna',
    'Controllo remoto da smartphone e tablet ovunque ti trovi',
    'Integrazione con sistemi domotici e controllo accessi',
    'Manutenzione programmata e assistenza tecnica dedicata',
  ];

  const technologies = [
    { name: 'Telecamere IP HD/4K', desc: 'Telecamere ad alta risoluzione con visione notturna IR, WDR e analisi video intelligente', icon: Camera },
    { name: 'Centrali di Allarme', desc: 'Centrali antintrusione certificate con comunicazione multi-canale (GSM, IP, radio)', icon: Siren },
    { name: 'Sensori Perimetrali', desc: 'Rilevatori volumetrici, contatti magnetici, barriere IR e sensori di vibrazione', icon: Radio },
    { name: 'Videoregistratori NVR', desc: 'Network Video Recorder con storage locale e backup cloud per registrazioni continue', icon: HardDrive },
    { name: 'Controllo Accessi', desc: 'Sistemi di accesso con badge, biometria, PIN e integrazione con impianto di allarme', icon: Lock },
    { name: 'App Mobile', desc: 'Gestione completa dell\'impianto da smartphone: live view, notifiche push, arma/disarma', icon: Smartphone },
    { name: 'Analisi Video AI', desc: 'Rilevamento intelligente di intrusioni, riconoscimento targhe e analisi comportamentale', icon: ScanLine },
    { name: 'Cloud & Backup', desc: 'Archiviazione cloud delle registrazioni con accesso sicuro e crittografia end-to-end', icon: Cloud },
    { name: 'Monitoraggio Remoto', desc: 'Sorveglianza 24/7 con collegamento a centrali operative e intervento rapido', icon: MonitorPlay },
    { name: 'Sistemi Wireless', desc: 'Soluzioni senza fili per installazioni rapide e non invasive, ideali per ristrutturazioni', icon: Wifi },
  ];

  const packages = [
    {
      name: 'Pacchetto Casa',
      subtitle: 'Residenziale',
      ideal: 'Ideale per appartamenti e villette con protezione base antintrusione e videosorveglianza',
      features: [
        'Sopralluogo e progettazione gratuita',
        'Centrale di allarme wireless',
        'Fino a 8 sensori (volumetrici + contatti)',
        '2-4 telecamere IP Full HD',
        'Videoregistratore NVR 4 canali',
        'App mobile per controllo remoto',
        'Installazione e configurazione completa',
      ],
      gradient: 'from-emerald-500 to-teal-500',
      highlighted: false,
    },
    {
      name: 'Pacchetto Business',
      subtitle: 'Aziendale',
      ideal: 'Per uffici, negozi e attività commerciali che necessitano di sicurezza professionale',
      features: [
        'Tutto del pacchetto Casa',
        'Centrale di allarme filare/ibrida',
        'Fino a 16 sensori multi-zona',
        '4-8 telecamere IP 4K con AI',
        'Videoregistratore NVR 8 canali',
        'Controllo accessi con badge',
        'Collegamento a centrale operativa',
        'Manutenzione annuale inclusa',
      ],
      gradient: 'from-teal-500 to-emerald-500',
      highlighted: true,
    },
    {
      name: 'Pacchetto Enterprise',
      subtitle: 'Industriale',
      ideal: 'Sicurezza completa per capannoni, magazzini e siti industriali con sorveglianza H24',
      features: [
        'Tutto del pacchetto Business',
        'Telecamere PTZ e termiche',
        'Videoregistratore NVR 16+ canali',
        'Protezione perimetrale avanzata',
        'Analisi video intelligente AI',
        'Riconoscimento targhe (LPR)',
        'Monitoraggio remoto 24/7',
        'SLA e assistenza prioritaria',
      ],
      gradient: 'from-emerald-500 to-cyan-500',
      highlighted: false,
    },
  ];

  return (
    <>
      <SEO
        title="Impianti di Allarme e Videosorveglianza Roma | TVCC - CoreNexus"
        description="Installazione impianti di allarme e videosorveglianza a Roma. Telecamere IP HD/4K, centrali antintrusione, controllo accessi, monitoraggio remoto per aziende e privati."
        keywords={[
          'impianti allarme Roma',
          'videosorveglianza Roma',
          'telecamere IP Roma',
          'TVCC Roma',
          'antintrusione Roma',
          'controllo accessi Roma',
          'installazione allarme',
          'telecamere 4K',
          'sicurezza aziendale Roma',
          'impianti sicurezza Roma',
        ]}
        canonical="/impianti-allarme-videosorveglianza"
        schema={allarmeSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-black to-teal-950/20" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="mb-6">
                <Link
                  to="/servizi"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Torna ai Servizi
                </Link>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-block">
                    <span className="px-4 py-2 rounded-full glass-effect text-emerald-400 text-sm font-semibold tracking-wide flex items-center gap-2">
                      <Camera className="w-4 h-4" />
                      Servizio Dedicato
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                      Impianti di Allarme e Videosorveglianza
                    </span>
                  </h1>

                  <p className="text-xl text-gray-400 leading-relaxed">
                    Progettiamo, installiamo e manuteniamo impianti di allarme e sistemi di videosorveglianza
                    professionali per aziende e privati a Roma e provincia.
                  </p>

                  <div className="space-y-4">
                    {keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-gray-300 text-lg">{point}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-emerald-500/20"
                  >
                    Richiedi un sopralluogo gratuito
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Right side - Visual element */}
                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl glass-effect border border-emerald-500/20 p-8 flex flex-col items-center justify-center gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        {[Camera, Bell, Shield, Wifi, Smartphone, Eye, Lock, Radio, Sun].map((Icon, i) => (
                          <div
                            key={i}
                            className="w-16 h-16 rounded-2xl glass-effect flex items-center justify-center hover:bg-emerald-500/20 transition-all duration-300 hover:scale-110"
                          >
                            <Icon className="w-7 h-7 text-emerald-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl -z-10" />
                  </div>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Pacchetti Allarme e Videosorveglianza
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Soluzioni complete per ogni esigenza: dalla protezione della casa alla sicurezza industriale.
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <MorphingSection key={index} delay={index * 0.15}>
                  <div
                    className={`relative p-8 rounded-3xl glass-effect border transition-all duration-500 hover:scale-105 h-full flex flex-col ${
                      pkg.highlighted
                        ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/20'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    {pkg.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold uppercase tracking-wider">
                          Più Richiesto
                        </span>
                      </div>
                    )}

                    <div className="text-center space-y-4 mb-8">
                      <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                        {pkg.subtitle}
                      </div>
                      <p className="text-gray-400 text-sm">{pkg.ideal}</p>
                    </div>

                    <div className="space-y-3 mb-8 flex-1">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                      <Button
                        onClick={scrollToContact}
                        className={`w-full py-6 rounded-2xl font-semibold text-white ${
                          pkg.highlighted
                            ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700'
                            : 'glass-effect border border-white/20 hover:bg-white/10'
                        }`}
                      >
                        Richiedi Preventivo
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Description Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/10 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="space-y-12">
                <div className="text-center space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    I Nostri Impianti nel Dettaglio
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
                </div>

                <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                  <p>
                    La sicurezza fisica è il <strong className="text-white">primo livello di protezione</strong> per
                    la tua casa o la tua azienda. Un impianto di allarme e videosorveglianza ben progettato
                    rappresenta il deterrente più efficace contro furti, intrusioni e atti vandalici.
                  </p>

                  <p>
                    Progettiamo ogni impianto <strong className="text-white">su misura</strong>, partendo da un
                    sopralluogo tecnico gratuito per analizzare le vulnerabilità del sito e definire la
                    soluzione più adeguata. Utilizziamo esclusivamente prodotti di brand leader nel settore
                    della sicurezza.
                  </p>

                  <p>
                    I nostri sistemi di <strong className="text-white">videosorveglianza IP</strong> offrono
                    immagini ad alta definizione (fino a 4K), visione notturna avanzata e analisi video
                    intelligente basata su AI per il rilevamento automatico di intrusioni, il riconoscimento
                    targhe e l'analisi comportamentale.
                  </p>

                  <p>
                    Tutti i nostri impianti sono <strong className="text-white">gestibili da remoto</strong> tramite
                    app mobile dedicata: puoi visualizzare le telecamere in tempo reale, ricevere notifiche
                    push in caso di allarme e armare/disarmare il sistema ovunque ti trovi.
                  </p>
                </div>
              </div>
            </MorphingSection>

            {/* Technologies Grid */}
            <MorphingSection delay={0.2}>
              <div className="mt-16">
                <h3 className="text-3xl font-bold text-white text-center mb-4">
                  Tecnologie e Soluzioni
                </h3>
                <p className="text-gray-400 text-center mb-12 text-lg">
                  Componenti e servizi per un impianto di sicurezza completo e affidabile
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl glass-effect border border-white/5 hover:border-emerald-500/30 transition-all duration-300 group hover:bg-white/5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <tech.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-lg mb-1">{tech.name}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{tech.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MorphingSection>

            {/* Info Box */}
            <MorphingSection delay={0.3}>
              <div className="mt-12 p-8 rounded-3xl glass-effect border border-emerald-500/20">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">Normativa e Privacy</h4>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Tutti i nostri impianti di videosorveglianza sono installati nel <strong className="text-emerald-400">pieno
                      rispetto della normativa GDPR</strong> e delle linee guida del Garante della Privacy.
                      Ti supportiamo nella predisposizione della cartellonistica obbligatoria e nella
                      gestione della documentazione necessaria.
                    </p>
                  </div>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/20 to-black" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <MorphingSection>
              <div className="p-12 rounded-3xl glass-effect border border-emerald-500/20 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Proteggi ciò che conta di più
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Richiedi un sopralluogo gratuito e senza impegno. Analizziamo il tuo sito
                  e ti proponiamo la soluzione più adatta alle tue esigenze.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-emerald-500/20"
                  >
                    Richiedi Sopralluogo Gratuito
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                  <Link to="/servizi">
                    <Button
                      size="lg"
                      variant="outline"
                      className="glass-effect border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-10 py-7 text-lg rounded-2xl font-semibold"
                    >
                      Vedi tutti i servizi
                    </Button>
                  </Link>
                </div>
              </div>
            </MorphingSection>
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