import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  Check,
  Shield,
  Settings,
  Lock,
  Cloud,
  Headphones,
  Smartphone,
  PhoneCall,
  PhoneForwarded,
  Voicemail,
  BarChart3,
  Users,
  Wifi,
  Brain,
  Sparkles,
  MessageSquare,
  Bot,
  Zap,
  MapPin,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema, localBusinessServiceSchema, standardAreaServed } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';
import FAQSection from '@/components/FAQSection';

export default function CentraliniVoip() {
  const navigate = useNavigate();
  const scrollToContact = () => { navigate('/#contact'); };

  const voipBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
    { name: 'Centralini VoIP', url: '/centralini-voip' },
  ]);

  const voipSchema = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessServiceSchema(
        "Centralini VoIP FreePBX Roma EUR Ostia Fiumicino",
        "Installazione centralini VoIP FreePBX e Asterisk a Roma, EUR, Ostia Lido, Fiumicino e Pomezia. Integrazione AI, trascrizione automatica, telefonia aziendale professionale.",
        "/centralini-voip",
        "Centralini VoIP"
      ),
      voipBreadcrumb,
      {
        "@type": "Service",
        "name": "Centralini VoIP FreePBX Roma con Intelligenza Artificiale",
        "description": "Installazione e configurazione centralini VoIP FreePBX e Asterisk a Roma, EUR, Ostia e Fiumicino con integrazione AI. Soluzioni telefoniche professionali on-premise per PMI.",
        "provider": { "@type": "Organization", "name": "CoreNexus Technology Solution", "url": "https://corenexus.it" },
        "areaServed": standardAreaServed,
        "serviceType": "VoIP PBX con AI"
      }
    ]
  };

  const coverageAreas = [
    'EUR', 'Ostia Lido', 'Ostia Antica', 'Fiumicino', 'Isola Sacra',
    'Acilia', 'Casal Palocco', 'Infernetto', 'Pomezia', 'Ardea',
    'Mostacciano', 'Torrino', 'Laurentina', 'Spinaceto', 'Garbatella',
    'Ostiense', 'Magliana', 'San Paolo', 'Santa Palomba', 'Castel Romano',
  ];

  const faqs = [
    {
      question: "Cos'e un centralino VoIP e perche conviene rispetto al centralino tradizionale?",
      answer: "Un centralino VoIP (Voice over IP) trasmette le chiamate tramite internet invece della rete telefonica tradizionale. Rispetto ai centralini analogici costa molto meno, e scalabile, si integra con CRM e gestionali e permette di aggiungere funzionalita avanzate come trascrizione AI, app mobile e chiamate interne gratuite tra sedi. CoreNexus installa centralini VoIP FreePBX a Roma, EUR, Ostia e Fiumicino.",
    },
    {
      question: "Quanto costa installare un centralino VoIP aziendale a Roma?",
      answer: "Il costo dipende dal numero di interni, dalle funzionalita richieste e dall'hardware necessario. Un centralino base per 5-10 interni parte da poche centinaia di euro. Offriamo sempre un preventivo gratuito dopo un'analisi delle esigenze. I costi si ammortizzano rapidamente grazie al risparmio sulle chiamate.",
    },
    {
      question: "FreePBX funziona anche con lo smartphone fuori ufficio?",
      answer: "Si, FreePBX supporta app softphone per iOS e Android che permettono di usare il proprio interno aziendale ovunque ci si trovi. Con una VPN aziendale le chiamate sono sicure e crittografate. Ideale per smart working e team distribuiti.",
    },
    {
      question: "Operate per installazione centralini VoIP a Roma Sud, EUR e Ostia?",
      answer: "Si, CoreNexus installa e configura centralini VoIP FreePBX in tutto il quadrante sud di Roma: EUR, Ostia, Fiumicino, Acilia, Pomezia, Casal Palocco, Mostacciano, Torrino, Laurentina, Spinaceto e zone limitrofe. Interventi on-site con tempi certi.",
    },
    {
      question: "Cosa significa centralino VoIP con AI integrata?",
      answer: "Un centralino VoIP con AI integrata aggiunge funzionalita come trascrizione automatica delle chiamate in testo, analisi del sentiment del cliente, riassunti automatici post-chiamata, assistente vocale intelligente che risponde alle domande frequenti e automazione del CRM. CoreNexus sviluppa anche soluzioni AI personalizzate su misura per il tuo business.",
    },
  ];

  const keyPoints = [
    'Centralini totalmente personalizzabili per ogni esigenza',
    'Installazione on-premise per massimo controllo e sicurezza',
    'Tecnologia FreePBX e Asterisk open-source e affidabile',
    'Integrazione con CRM, gestionali e sistemi aziendali',
    'Intelligenza Artificiale integrata per automazione e analisi avanzata',
    'Progetti AI personalizzabili su misura per il tuo business',
  ];

  const voipFeatures = [
    { icon: Settings, title: 'Totalmente Personalizzabile', description: 'Configurazione su misura per le esigenze specifiche della tua azienda' },
    { icon: Shield, title: 'On-Premise', description: 'Installazione locale per massimo controllo e sicurezza dei dati' },
    { icon: Phone, title: 'FreePBX & Asterisk', description: 'Tecnologia open-source affidabile e collaudata a livello enterprise' },
    { icon: Lock, title: 'Sicurezza Avanzata', description: 'Protezione contro intrusioni e chiamate fraudolente con fail2ban e firewall' },
    { icon: Cloud, title: 'Integrazione Completa', description: 'Connessione con CRM, gestionale e altri sistemi aziendali via API' },
    { icon: Brain, title: 'AI Integrata', description: "Intelligenza artificiale per trascrizione, analisi sentiment e automazione delle comunicazioni" },
  ];

  const voipCapabilities = [
    { icon: PhoneCall, title: 'IVR Multi-livello', description: 'Menu vocali interattivi personalizzabili con risponditore automatico' },
    { icon: PhoneForwarded, title: 'Code di Attesa', description: 'Gestione intelligente delle code con musica di attesa e annunci' },
    { icon: Voicemail, title: 'Casella Vocale', description: 'Voicemail con notifica email e trascrizione dei messaggi' },
    { icon: BarChart3, title: 'Statistiche Chiamate', description: 'Report dettagliati su chiamate, tempi di attesa e performance' },
    { icon: Users, title: 'Conferenze', description: 'Sale conferenza virtuali per meeting audio con piu partecipanti' },
    { icon: Smartphone, title: 'App Mobile', description: 'Interno aziendale sul tuo smartphone con app softphone dedicate' },
    { icon: Wifi, title: 'Multi-Sede', description: 'Collegamento tra sedi diverse con VPN per chiamate interne gratuite' },
    { icon: Settings, title: 'Registrazione', description: 'Registrazione automatica delle chiamate per formazione e compliance' },
  ];

  const aiFeatures = [
    { icon: MessageSquare, title: 'Trascrizione Automatica', description: "Trascrizione in tempo reale delle chiamate con riconoscimento vocale avanzato. Ogni conversazione viene convertita in testo ricercabile e archiviabile." },
    { icon: Brain, title: 'Analisi del Sentiment', description: "L'AI analizza il tono e il sentiment delle conversazioni per identificare clienti insoddisfatti, opportunita di vendita e trend nelle comunicazioni." },
    { icon: Bot, title: 'Assistente Vocale AI', description: "Risponditore automatico intelligente basato su AI che comprende il linguaggio naturale, risponde alle domande frequenti e smista le chiamate in modo intelligente." },
    { icon: Sparkles, title: 'Riassunti Automatici', description: "Al termine di ogni chiamata, l'AI genera automaticamente un riassunto con i punti chiave, le azioni da intraprendere e le informazioni rilevanti." },
    { icon: Zap, title: 'Automazione Workflow', description: "Creazione automatica di ticket, aggiornamento CRM e invio follow-up basati sul contenuto delle chiamate, senza intervento manuale." },
    { icon: BarChart3, title: 'Analytics Predittive', description: "Analisi predittiva dei volumi di chiamata, identificazione pattern e suggerimenti per ottimizzare il servizio clienti e le risorse del team." },
  ];

  const voipPackages = [
    {
      name: 'Centralino Base',
      price: 'Su preventivo',
      description: 'Soluzione ideale per piccole imprese a Roma',
      features: [
        'Fino a 10 interni',
        'IVR (menu vocale) base',
        'Registrazione chiamate',
        'Code di attesa',
        'Casella vocale',
        'Installazione e configurazione',
        '3 mesi di supporto incluso',
      ],
      highlighted: false,
      gradient: 'from-cyan-500 to-green-500',
    },
    {
      name: 'Centralino Professionale',
      price: 'Su preventivo',
      description: 'Per aziende in crescita',
      features: [
        'Fino a 50 interni',
        'IVR avanzato multi-livello',
        'Call center con statistiche',
        'Integrazione CRM',
        'App mobile per interni',
        'Trascrizione AI delle chiamate',
        'Backup automatico',
        'Supporto prioritario 12 mesi',
      ],
      highlighted: true,
      gradient: 'from-green-500 to-blue-500',
    },
    {
      name: 'Centralino Enterprise + AI',
      price: 'Su preventivo',
      description: 'Soluzione completa con Intelligenza Artificiale',
      features: [
        'Interni illimitati',
        'Multi-sede con VPN',
        'Disaster recovery',
        'Integrazione avanzata ERP/CRM',
        'Suite AI completa (trascrizione, sentiment, riassunti)',
        'Assistente vocale AI personalizzato',
        'Analytics predittive e reportistica AI',
        'Progetto AI custom su misura',
        'SLA con supporto H24/7',
      ],
      highlighted: false,
      gradient: 'from-blue-500 to-purple-500',
    },
  ];

  return (
    <>
      <SEO
        title="Centralini VoIP Roma | FreePBX Asterisk AI EUR Ostia Fiumicino - CoreNexus"
        description="Installazione centralini VoIP FreePBX e Asterisk a Roma, EUR, Ostia, Fiumicino e Pomezia. Telefonia aziendale professionale con AI integrata: trascrizione automatica, assistente vocale, analisi sentiment. Preventivo gratuito."
        keywords={[
          'centralino VoIP Roma',
          'FreePBX Roma',
          'centralino telefonico aziendale Roma',
          'Asterisk Roma',
          'telefonia VoIP aziendale Roma',
          'centralino VoIP Roma EUR',
          'installazione centralino VoIP Roma',
          'centralino IP Roma',
          'PBX aziendale Roma',
          'centralino VoIP Ostia',
          'centralino VoIP Fiumicino',
          'centralino VoIP Pomezia',
          'installazione centralino Roma Sud',
          'VoIP AI Roma',
          'trascrizione chiamate AI Roma',
          'telefonia aziendale Roma',
        ]}
        canonical="/centralini-voip"
        schema={voipSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6 premium-gradient">
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-black to-blue-950/30" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="mb-6">
                <Link to="/servizi" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm font-medium">
                  <ArrowLeft className="w-4 h-4" />
                  Torna ai Servizi
                </Link>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-flex gap-3 flex-wrap">
                    <span className="px-4 py-2 rounded-full glass-effect text-green-400 text-sm font-semibold tracking-wide flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Telefonia Professionale
                    </span>
                    <span className="px-4 py-2 rounded-full glass-effect text-purple-400 text-sm font-semibold tracking-wide flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      AI Integrata
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
                    Centralini VoIP
                    <span className="block text-3xl md:text-4xl mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      + Intelligenza Artificiale
                    </span>
                    <span className="block text-2xl md:text-3xl text-gray-400 mt-2 font-normal">
                      a Roma, EUR, Ostia e Fiumicino
                    </span>
                  </h1>

                  <p className="text-xl text-gray-400 leading-relaxed">
                    Soluzioni telefoniche professionali con FreePBX e Asterisk, potenziate dall'Intelligenza Artificiale. Centralini personalizzabili con trascrizione automatica, analisi sentiment e progetti AI su misura per PMI di Roma e provincia.
                  </p>

                  <div className="space-y-4">
                    {keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform ${index >= 4 ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'bg-gradient-to-br from-green-500 to-blue-500'}`}>
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-gray-300 text-lg">{point}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" onClick={scrollToContact} className="group premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold">
                    Richiedi un preventivo gratuito
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>

                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl glass-effect border border-green-500/20 p-8 flex flex-col items-center justify-center gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        {[Phone, Shield, Settings, Lock, Cloud, Headphones, Brain, PhoneCall, Sparkles].map((Icon, i) => (
                          <div key={i} className={`w-16 h-16 rounded-2xl glass-effect flex items-center justify-center transition-all duration-300 hover:scale-110 ${i >= 6 ? 'hover:bg-purple-500/20' : 'hover:bg-green-500/20'}`}>
                            <Icon className={`w-7 h-7 ${i >= 6 ? 'text-purple-400' : 'text-green-400'}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 via-purple-500/10 to-blue-500/20 rounded-3xl blur-xl -z-10" />
                  </div>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Perche Scegliere FreePBX a Roma</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">Una piattaforma telefonica enterprise con la flessibilita dell'open-source e la potenza dell'AI</p>
              </div>
            </MorphingSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {voipFeatures.map((f, i) => (
                <MorphingSection key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-3xl glass-effect hover:bg-white/10 transition-all duration-500 card-hover group flex flex-col items-center text-center h-full">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${f.icon === Brain ? 'bg-gradient-to-br from-purple-500 to-pink-600' : 'bg-gradient-to-br from-green-500 to-blue-600'}`}>
                      <f.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{f.description}</p>
                  </div>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black" />
          <div className="max-w-6xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Funzionalita del Centralino VoIP</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full" />
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">Tutte le funzionalita di un centralino enterprise, senza costi di licenza</p>
              </div>
            </MorphingSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {voipCapabilities.map((cap, i) => (
                <MorphingSection key={i} delay={i * 0.08}>
                  <div className="p-6 rounded-2xl glass-effect border border-white/5 hover:border-green-500/30 transition-all duration-300 group hover:bg-white/5 h-full">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <cap.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{cap.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{cap.description}</p>
                  </div>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* AI Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-purple-500/30">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 text-sm font-semibold">Intelligenza Artificiale</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">AI & Centralini VoIP a Roma</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">Potenzia il tuo centralino con l'Intelligenza Artificiale. Trascrizione automatica, analisi del sentiment, assistenti vocali e molto altro per rivoluzionare le comunicazioni aziendali.</p>
              </div>
            </MorphingSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {aiFeatures.map((feature, i) => (
                <MorphingSection key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-3xl glass-effect border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 card-hover group h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </MorphingSection>
              ))}
            </div>

            <MorphingSection>
              <div className="p-10 rounded-3xl glass-effect border border-purple-500/20 bg-gradient-to-br from-purple-950/30 to-pink-950/20">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-300 text-sm font-medium">Progetti Su Misura</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Progetti AI Personalizzabili</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">Ogni azienda ha esigenze uniche. Il nostro team sviluppa <strong className="text-white">soluzioni AI personalizzate</strong> integrate direttamente nel tuo centralino VoIP, progettate per risolvere le sfide specifiche del tuo business a Roma, EUR, Ostia e Fiumicino.</p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: 'Chatbot vocali personalizzati', desc: 'Assistenti AI che rispondono alle chiamate con la voce e lo stile del tuo brand' },
                      { label: 'Routing intelligente', desc: 'Smistamento automatico delle chiamate basato su AI e analisi del contesto' },
                      { label: 'Integrazione LLM', desc: 'Modelli linguistici avanzati per comprensione e generazione di risposte naturali' },
                      { label: 'Dashboard AI analytics', desc: "Pannello di controllo con insight predittivi e KPI generati dall'intelligenza artificiale" },
                      { label: 'Automazione post-chiamata', desc: "Creazione automatica di task, email di follow-up e aggiornamento CRM tramite AI" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-2xl glass-effect hover:bg-white/5 transition-all duration-300 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{item.label}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* Packages */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Pacchetti Centralino VoIP a Roma</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">Scegli la soluzione piu adatta alle tue esigenze — ora anche con AI integrata</p>
              </div>
            </MorphingSection>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {voipPackages.map((pkg, index) => (
                <MorphingSection key={index} delay={index * 0.15}>
                  <div className={`p-8 rounded-3xl transition-all duration-500 card-hover flex flex-col h-full ${pkg.highlighted ? 'glass-effect border-2 border-green-500/50 shadow-2xl shadow-green-500/20 scale-105' : 'glass-effect hover:bg-white/5'}`}>
                    <div className="flex flex-col items-center text-center mb-6">
                      {pkg.highlighted && <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white text-sm font-semibold mb-4">Piu Richiesto</div>}
                      {index === 2 && <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold mb-4">AI Powered</div>}
                      <h4 className="text-2xl font-bold text-white mb-2">{pkg.name}</h4>
                      <div className="text-3xl font-bold gradient-text mb-3">{pkg.price}</div>
                      <p className="text-gray-400 mb-6">{pkg.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${feat.toLowerCase().includes('ai') || feat.toLowerCase().includes('intelligenza') ? 'bg-purple-500/20' : 'bg-green-500/20'}`}>
                            <div className={`w-2 h-2 rounded-full ${feat.toLowerCase().includes('ai') || feat.toLowerCase().includes('intelligenza') ? 'bg-purple-500' : 'bg-green-500'}`} />
                          </div>
                          <span className="text-sm leading-relaxed text-left">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Button onClick={scrollToContact} className={`w-full py-6 rounded-xl font-semibold text-base ${pkg.highlighted ? 'premium-button text-white' : 'glass-effect border border-white/20 hover:border-white/40 text-white hover:bg-white/10'}`}>
                      Richiedi Preventivo
                    </Button>
                  </div>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* Zone copertura */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="p-10 rounded-3xl glass-effect border border-green-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Installazione centralini VoIP a Roma Sud</h2>
                </div>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">CoreNexus installa e configura centralini VoIP FreePBX in tutto il quadrante sud di Roma con interventi on-site:</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {coverageAreas.map((area, index) => (
                    <span key={index} className="px-4 py-2 rounded-full glass-effect border border-green-500/20 text-green-400 text-sm font-medium">{area}</span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm">Per le zone non elencate offriamo configurazione e supporto centralini VoIP da remoto in tutta Italia.</p>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={faqs} accentColor="green" gradientFrom="green-500" gradientTo="blue-500" />

        {/* CTA */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <MorphingSection>
              <div className="p-12 rounded-3xl glass-effect border border-green-500/20 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Modernizza la telefonia della tua azienda a Roma</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">Contattaci per una consulenza gratuita. Analizzeremo le tue esigenze telefoniche e ti proporremo la soluzione VoIP + AI ideale per la tua azienda a Roma, EUR, Ostia o Fiumicino.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={scrollToContact} className="group premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold">
                    Richiedi Consulenza Gratuita
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                  <Link to="/servizi">
                    <Button size="lg" variant="outline" className="glass-effect border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-10 py-7 text-lg rounded-2xl font-semibold">
                      Vedi tutti i servizi
                    </Button>
                  </Link>
                </div>
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
