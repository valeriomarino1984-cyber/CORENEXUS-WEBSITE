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
  Award,
  Globe,
  ShieldCheck,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';
import FAQSection from '@/components/FAQSection';

export default function ImpiantiAllarme() {
  const navigate = useNavigate();
  const scrollToContact = () => {
    navigate('/#contact');
  };

  const allarmeBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
    { name: 'Impianti di Allarme e Videosorveglianza', url: '/impianti-allarme-videosorveglianza' },
  ]);

  const faqSchemaData = {
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Gli impianti di videosorveglianza Hikvision sono a norma GDPR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, i nostri sistemi Hikvision sono configurati seguendo le normative sulla privacy, con gestione dei log di accesso e oscuramento delle aree pubbliche per la piena conformità legale a Roma."
      }
    }, {
      "@type": "Question",
      "name": "È possibile integrare l'allarme con la videosorveglianza su smartphone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Certamente. Integriamo telecamere e sensori in un'unica app, permettendo di ricevere notifiche push con video-verifica immediata in caso di intrusione, ovunque ti trovi."
      }
    }, {
      "@type": "Question",
      "name": "Effettuate installazioni di videosorveglianza ad Ostia, Fiumicino e Roma Sud?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, operiamo su tutto il territorio di Roma Sud e provincia, realizzando sopralluoghi gratuiti e progettando impianti su misura per uffici, magazzini e aree industriali."
      }
    }]
  };

  const allarmeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      allarmeBreadcrumb,
      {
        "@type": "Service",
        "name": "Impianti di Allarme e Videosorveglianza",
        "description": "Installazione e manutenzione impianti di allarme e videosorveglianza a Roma. Sistemi antintrusione, TVCC, controllo accessi per aziende e privati. Partner ufficiali Hikvision, Ajax, Risco, Dahua.",
        "provider": {
          "@type": "Organization",
          "name": "CoreNexus Technology Solution",
          "url": "https://corenexus.it"
        },
        "areaServed": {
          "@type": "City",
          "name": "Roma"
        },
        "serviceType": "Impianti di Sicurezza"
      },
      faqSchemaData
    ]
  };

  const keyPoints = [
    'Progettiamo e installiamo impianti di allarme su misura per la tua esigenza',
    'Sistemi di videosorveglianza IP ad alta definizione con visione notturna',
    'Controllo remoto da smartphone e tablet ovunque ti trovi',
    'Integrazione con sistemi domotici e controllo accessi',
    'Manutenzione programmata e assistenza tecnica dedicata',
    'Partner dei maggiori marchi mondiali: Hikvision, Ajax, Risco, Dahua',
  ];

  const alarmBrands = [
    {
      name: 'Hikvision',
      logo: '/assets/brands/hikvision-logo.png',
      description: 'Leader mondiale nella produzione di sistemi di sicurezza. Hikvision offre centrali di allarme ibride con tecnologia AX PRO, sensori wireless avanzati e integrazione completa con i sistemi di videosorveglianza.',
      highlights: ['Centrali AX PRO wireless', 'Sensori PIR con immunità animali', 'Integrazione TVCC nativa', 'App Hik-Connect'],
      category: 'Allarme & Videosorveglianza',
    },
    {
      name: 'Ajax Systems',
      logo: '/assets/brands/ajax-logo.jpg',
      description: 'Il sistema di allarme wireless più premiato d\'Europa. Ajax combina design elegante, tecnologia proprietaria Jeweller e affidabilità certificata di grado 2 per una protezione senza compromessi.',
      highlights: ['Tecnologia Jeweller fino a 2km', 'Grado 2 certificato EN 50131', 'Verifica foto allarme', 'Batterie fino a 7 anni'],
      category: 'Allarme',
    },
    {
      name: 'Risco',
      logo: '/assets/brands/risco-logo.jpg',
      description: 'Soluzioni professionali di sicurezza dal 1978. Risco è sinonimo di affidabilità con le sue centrali LightSYS e ProSYS, ideali per installazioni residenziali e commerciali di ogni dimensione.',
      highlights: ['Centrali LightSYS & ProSYS', 'Rilevatori VDT anti-mascheramento', 'Cloud RISCO per gestione remota', 'Oltre 45 anni di esperienza'],
      category: 'Allarme',
    },
  ];

  const cctvBrands = [
    {
      name: 'Hikvision',
      logo: 'https://mgx-backend-cdn.metadl.com/generate/images/720946/2026-03-09/ee0f1c86-8565-436a-8215-c49fb2a849f1.png',
      description: 'N°1 al mondo nella videosorveglianza. Hikvision offre telecamere IP fino a 32MP, tecnologia ColorVu per immagini a colori 24/7, AcuSense con AI per ridurre i falsi allarmi e soluzioni NVR professionali.',
      highlights: ['Telecamere fino a 32MP', 'ColorVu visione a colori H24', 'AcuSense AI anti falsi allarmi', 'NVR fino a 64 canali'],
      category: 'Videosorveglianza',
    },
    {
      name: 'Dahua',
      logo: 'https://mgx-backend-cdn.metadl.com/generate/images/720946/2026-03-09/49fe99b9-34ab-4c51-b7b3-9c0864680864.png',
      description: 'Secondo produttore mondiale di sistemi di videosorveglianza. Dahua eccelle con la tecnologia WizSense per analisi AI, telecamere TiOC con sirena e luce integrata, e soluzioni Full-Color per riprese notturne cristalline.',
      highlights: ['WizSense AI integrata', 'TiOC deterrenza attiva', 'Full-Color visione notturna', 'SMD Plus rilevamento smart'],
      category: 'Videosorveglianza',
    },
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
        'Centrale di allarme wireless Ajax / Risco',
        'Fino a 8 sensori (volumetrici + contatti)',
        '2-4 telecamere IP Hikvision / Dahua Full HD',
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
        'Centrale di allarme filare/ibrida Risco ProSYS',
        'Fino a 16 sensori multi-zona',
        '4-8 telecamere IP Hikvision 4K con AcuSense AI',
        'Videoregistratore NVR 8 canali',
        'Controllo accessi con badge Hikvision',
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
        'Telecamere PTZ e termiche Hikvision / Dahua',
        'Videoregistratore NVR 16+ canali',
        'Protezione perimetrale avanzata',
        'Analisi video intelligente AI (AcuSense / WizSense)',
        'Riconoscimento targhe (LPR)',
        'Monitoraggio remoto 24/7',
        'SLA e assistenza prioritaria',
      ],
      gradient: 'from-emerald-500 to-cyan-500',
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: 'Gli impianti di videosorveglianza Hikvision sono a norma GDPR?',
      answer: 'Sì, i nostri sistemi Hikvision sono configurati seguendo le normative sulla privacy, con gestione dei log di accesso e oscuramento delle aree pubbliche per la piena conformità legale a Roma.',
    },
    {
      question: 'È possibile integrare l\'allarme con la videosorveglianza su smartphone?',
      answer: 'Certamente. Integriamo telecamere e sensori in un\'unica app, permettendo di ricevere notifiche push con video-verifica immediata in caso di intrusione, ovunque ti trovi.',
    },
    {
      question: 'Effettuate installazioni di videosorveglianza ad Ostia, Fiumicino e Roma Sud?',
      answer: 'Sì, operiamo su tutto il territorio di Roma Sud e provincia, realizzando sopralluoghi gratuiti e progettando impianti su misura per uffici, magazzini e aree industriali.',
    },
  ];

  return (
    <>
      <SEO
        title="Impianti di Allarme e Videosorveglianza Roma | Hikvision Ajax Risco Dahua - CoreNexus Technology Solution"
        description="Installazione impianti di allarme e videosorveglianza a Roma. Partner Hikvision, Ajax Systems, Risco, Dahua. Telecamere IP HD/4K, centrali antintrusione, controllo accessi per aziende e privati."
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
          'Hikvision Roma',
          'Ajax Systems Roma',
          'Risco Roma',
          'Dahua Roma',
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
                    professionali per aziende e privati a Roma e provincia. Lavoriamo con i{' '}
                    <strong className="text-emerald-400">maggiori marchi mondiali</strong> del settore sicurezza.
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

        {/* Brand Partners Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/10 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-emerald-400 text-sm font-semibold">
                  <Award className="w-4 h-4" />
                  Partner Ufficiali
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  I Marchi Leader Mondiali
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Collaboriamo con i <strong className="text-white">più grandi produttori mondiali</strong> di sistemi
                  di allarme e videosorveglianza per garantirti prodotti affidabili, certificati e all'avanguardia.
                </p>
              </div>
            </MorphingSection>

            {/* Alarm Brands */}
            <MorphingSection delay={0.1}>
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    <Siren className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Sistemi di Allarme</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {alarmBrands.map((brand, index) => (
                    <div
                      key={index}
                      className="group p-6 rounded-3xl glass-effect border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:scale-[1.02]"
                    >
                      <div className="h-24 mb-6 flex items-center justify-center rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors overflow-hidden p-4">
                        <img
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          className="max-h-16 max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                        />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-bold text-white">{brand.name}</h4>
                          <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-medium">
                            {brand.category}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{brand.description}</p>
                        <div className="pt-3 space-y-2">
                          {brand.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MorphingSection>

            {/* CCTV Brands */}
            <MorphingSection delay={0.2}>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Videosorveglianza</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {cctvBrands.map((brand, index) => (
                    <div
                      key={index}
                      className="group p-8 rounded-3xl glass-effect border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02]"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-40 h-24 flex items-center justify-center rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors overflow-hidden p-4 flex-shrink-0">
                          <img
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            className="max-h-16 max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                          />
                        </div>
                        <div className="space-y-3 flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xl font-bold text-white">{brand.name}</h4>
                            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 font-medium">
                              {brand.category}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">{brand.description}</p>
                          <div className="pt-2 grid grid-cols-2 gap-2">
                            {brand.highlights.map((highlight, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MorphingSection>

            {/* Brand Trust Banner */}
            <MorphingSection delay={0.3}>
              <div className="mt-16 p-8 rounded-3xl glass-effect border border-emerald-500/20 bg-gradient-to-r from-emerald-950/30 to-teal-950/30">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl">Perché scegliamo questi brand?</h4>
                      <p className="text-gray-400 text-sm mt-1">Qualità, affidabilità e innovazione certificata</p>
                    </div>
                  </div>
                  <div className="flex-1 grid sm:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                        4+
                      </div>
                      <p className="text-gray-400 text-sm mt-1">Brand leader mondiali</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                        100%
                      </div>
                      <p className="text-gray-400 text-sm mt-1">Prodotti certificati</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                        3+ anni
                      </div>
                      <p className="text-gray-400 text-sm mt-1">Garanzia prodotti</p>
                    </div>
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
                  Tutti i pacchetti includono prodotti <strong className="text-white">Hikvision, Ajax, Risco e Dahua</strong>.
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
                    soluzione più adeguata. Utilizziamo esclusivamente prodotti dei brand leader mondiali:{' '}
                    <strong className="text-emerald-400">Hikvision</strong>,{' '}
                    <strong className="text-emerald-400">Ajax Systems</strong>,{' '}
                    <strong className="text-emerald-400">Risco</strong> e{' '}
                    <strong className="text-emerald-400">Dahua</strong>.
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

        {/* FAQ Section */}
        <FAQSection faqs={faqs} accentColor="emerald" gradientFrom="emerald-500" gradientTo="teal-500" />

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
                  e ti proponiamo la soluzione più adatta alle tue esigenze con i migliori brand del settore.
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
              © 2026 <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">CoreNexus Technology Solution</Link> - Tutti i diritti riservati.
            </p>
            <p className="text-xs text-gray-600">v2.0 - 25/03/2026</p>
          </div>
        </footer>

        <WhatsAppWidget />
      </div>
    </>
  );
}