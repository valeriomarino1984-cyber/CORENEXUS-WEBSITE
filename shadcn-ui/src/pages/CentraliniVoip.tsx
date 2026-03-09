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
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';

export default function CentraliniVoip() {
  const navigate = useNavigate();
  const scrollToContact = () => {
    navigate('/#contact');
  };

  const voipBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
    { name: 'Centralini VoIP', url: '/centralini-voip' },
  ]);

  const voipSchema = {
    "@context": "https://schema.org",
    "@graph": [
      voipBreadcrumb,
      {
        "@type": "Service",
        "name": "Centralini VoIP FreePBX",
        "description": "Installazione e configurazione centralini VoIP FreePBX e Asterisk a Roma. Soluzioni telefoniche professionali on-premise per aziende.",
        "provider": {
          "@type": "Organization",
          "name": "CoreNexus Technology Solution",
          "url": "https://corenexus.it"
        },
        "areaServed": {
          "@type": "City",
          "name": "Roma"
        },
        "serviceType": "VoIP PBX"
      }
    ]
  };

  const keyPoints = [
    'Centralini totalmente personalizzabili per ogni esigenza',
    'Installazione on-premise per massimo controllo e sicurezza',
    'Tecnologia FreePBX e Asterisk open-source e affidabile',
    'Integrazione con CRM, gestionali e sistemi aziendali',
    'Supporto tecnico dedicato e formazione del personale',
  ];

  const voipFeatures = [
    { icon: Settings, title: 'Totalmente Personalizzabile', description: 'Configurazione su misura per le esigenze specifiche della tua azienda' },
    { icon: Shield, title: 'On-Premise', description: 'Installazione locale per massimo controllo e sicurezza dei dati' },
    { icon: Phone, title: 'FreePBX & Asterisk', description: 'Tecnologia open-source affidabile e collaudata a livello enterprise' },
    { icon: Lock, title: 'Sicurezza Avanzata', description: 'Protezione contro intrusioni e chiamate fraudolente con fail2ban e firewall' },
    { icon: Cloud, title: 'Integrazione Completa', description: 'Connessione con CRM, gestionale e altri sistemi aziendali via API' },
    { icon: Headphones, title: 'Supporto Dedicato', description: 'Assistenza tecnica continua e formazione del personale' },
  ];

  const voipCapabilities = [
    { icon: PhoneCall, title: 'IVR Multi-livello', description: 'Menu vocali interattivi personalizzabili con risponditore automatico' },
    { icon: PhoneForwarded, title: 'Code di Attesa', description: 'Gestione intelligente delle code con musica di attesa e annunci' },
    { icon: Voicemail, title: 'Casella Vocale', description: 'Voicemail con notifica email e trascrizione dei messaggi' },
    { icon: BarChart3, title: 'Statistiche Chiamate', description: 'Report dettagliati su chiamate, tempi di attesa e performance' },
    { icon: Users, title: 'Conferenze', description: 'Sale conferenza virtuali per meeting audio con più partecipanti' },
    { icon: Smartphone, title: 'App Mobile', description: 'Interno aziendale sul tuo smartphone con app softphone dedicate' },
    { icon: Wifi, title: 'Multi-Sede', description: 'Collegamento tra sedi diverse con VPN per chiamate interne gratuite' },
    { icon: Settings, title: 'Registrazione', description: 'Registrazione automatica delle chiamate per formazione e compliance' },
  ];

  const voipPackages = [
    {
      name: 'Centralino Base',
      price: 'Su preventivo',
      description: 'Soluzione ideale per piccole imprese',
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
        'Backup automatico',
        'Supporto prioritario 12 mesi',
      ],
      highlighted: true,
      gradient: 'from-green-500 to-blue-500',
    },
    {
      name: 'Centralino Enterprise',
      price: 'Su preventivo',
      description: 'Soluzione completa per grandi aziende',
      features: [
        'Interni illimitati',
        'Multi-sede con VPN',
        'Disaster recovery',
        'Integrazione avanzata ERP/CRM',
        'Reportistica personalizzata',
        'Formazione del personale',
        'SLA con supporto H24/7',
      ],
      highlighted: false,
      gradient: 'from-blue-500 to-purple-500',
    },
  ];

  return (
    <>
      <SEO
        title="Centralini VoIP FreePBX Roma | Telefonia Aziendale - CoreNexus Technology Solution"
        description="Installazione e configurazione centralini VoIP FreePBX e Asterisk a Roma. Soluzioni telefoniche professionali on-premise per aziende. IVR, code di attesa, integrazione CRM."
        keywords={[
          'centralino VoIP Roma',
          'FreePBX Roma',
          'centralino telefonico aziendale',
          'Asterisk Roma',
          'telefonia VoIP aziendale',
          'centralino IP Roma',
          'PBX aziendale',
          'centralino on-premise',
          'IVR aziendale',
          'telefonia IP Roma',
        ]}
        canonical="/centralini-voip"
        schema={voipSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-black to-blue-950/30" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="mb-6">
                <Link
                  to="/servizi"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Torna ai Servizi
                </Link>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-block">
                    <span className="px-4 py-2 rounded-full glass-effect text-green-400 text-sm font-semibold tracking-wide flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Telefonia Professionale
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
                    Centralini VoIP
                  </h1>

                  <p className="text-xl text-gray-400 leading-relaxed">
                    Soluzioni telefoniche professionali con FreePBX e Asterisk.
                    Centralini totalmente personalizzabili, on-premise, con integrazione CRM e supporto dedicato.
                  </p>

                  <div className="space-y-4">
                    {keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-gray-300 text-lg">{point}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold"
                  >
                    Richiedi un preventivo gratuito
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Right side - Visual element */}
                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl glass-effect border border-green-500/20 p-8 flex flex-col items-center justify-center gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        {[Phone, Shield, Settings, Lock, Cloud, Headphones, Smartphone, PhoneCall, Wifi].map((Icon, i) => (
                          <div
                            key={i}
                            className="w-16 h-16 rounded-2xl glass-effect flex items-center justify-center hover:bg-green-500/20 transition-all duration-300 hover:scale-110"
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            <Icon className="w-7 h-7 text-green-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl blur-xl -z-10" />
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
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Perché Scegliere FreePBX
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Una piattaforma telefonica enterprise con la flessibilità dell&apos;open-source
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {voipFeatures.map((f, i) => (
                <MorphingSection key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-3xl glass-effect hover:bg-white/10 transition-all duration-500 card-hover group flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

        {/* Capabilities Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black" />
          <div className="max-w-6xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Funzionalità del Centralino
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full" />
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Tutte le funzionalità di un centralino enterprise, senza costi di licenza
                </p>
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

        {/* Packages Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float" />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Pacchetti Centralino
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Scegli la soluzione più adatta alle tue esigenze
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {voipPackages.map((pkg, index) => (
                <MorphingSection key={index} delay={index * 0.15}>
                  <div
                    className={`p-8 rounded-3xl transition-all duration-500 card-hover flex flex-col h-full ${
                      pkg.highlighted
                        ? 'glass-effect border-2 border-green-500/50 shadow-2xl shadow-green-500/20 scale-105'
                        : 'glass-effect hover:bg-white/5'
                    }`}
                  >
                    <div className="flex flex-col items-center text-center mb-6">
                      {pkg.highlighted && (
                        <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white text-sm font-semibold mb-4">
                          Più Richiesto
                        </div>
                      )}
                      <h4 className="text-2xl font-bold text-white mb-2">{pkg.name}</h4>
                      <div className="text-3xl font-bold gradient-text mb-3">{pkg.price}</div>
                      <p className="text-gray-400 mb-6">{pkg.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                          </div>
                          <span className="text-sm leading-relaxed text-left">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={scrollToContact}
                      className={`w-full py-6 rounded-xl font-semibold text-base ${
                        pkg.highlighted
                          ? 'premium-button text-white'
                          : 'glass-effect border border-white/20 hover:border-white/40 text-white hover:bg-white/10'
                      }`}
                    >
                      Richiedi Preventivo
                    </Button>
                  </div>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="space-y-12">
                <div className="text-center space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    FreePBX nel Dettaglio
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full" />
                </div>

                <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                  <p>
                    FreePBX è la piattaforma di comunicazione unificata più diffusa al mondo, basata sul potente
                    motore <strong className="text-white">Asterisk</strong>. Offre tutte le funzionalità di un centralino
                    enterprise senza costi di licenza.
                  </p>

                  <p>
                    Con un centralino VoIP on-premise, la tua azienda mantiene il <strong className="text-white">pieno
                    controllo sulle comunicazioni</strong>, senza dipendere da servizi cloud esterni. I dati delle
                    chiamate restano all&apos;interno della tua rete aziendale.
                  </p>

                  <p>
                    Grazie all&apos;integrazione con i <strong className="text-white">trunk SIP</strong> dei principali
                    operatori, puoi ridurre significativamente i costi telefonici mantenendo la massima qualità audio
                    nelle conversazioni.
                  </p>

                  <p>
                    Il centralino si integra perfettamente con il tuo <strong className="text-white">CRM e gestionale
                    aziendale</strong>, permettendo di visualizzare le informazioni del chiamante, registrare le
                    chiamate e generare report dettagliati sulle performance del team.
                  </p>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <MorphingSection>
              <div className="p-12 rounded-3xl glass-effect border border-green-500/20 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Modernizza la telefonia aziendale
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Contattaci per una consulenza gratuita. Analizzeremo le tue esigenze telefoniche e ti proporremo la soluzione VoIP ideale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold"
                  >
                    Richiedi Consulenza Gratuita
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
              © 2025 <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">CoreNexus Technology Solution</Link> - Tutti i diritti riservati.
            </p>
            <p className="text-xs text-gray-600">v1.5 - 09/03/2026</p>
          </div>
        </footer>

        <WhatsAppWidget />
      </div>
    </>
  );
}