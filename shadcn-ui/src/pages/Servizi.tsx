import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  ArrowLeft,
  Wrench,
  Network,
  Shield,
  Camera,
  Server,
  Activity,
  Phone,
  Globe,
  ShoppingCart,
  Check,
  Zap,
  Headphones,
  Settings,
  Lock,
  Cloud,
  Smartphone,
  Palette,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';
import TiltCard from '@/components/TiltCard';

export default function Servizi() {
  const navigate = useNavigate();
  const scrollToContact = () => {
    navigate('/#contact');
  };

  const serviziBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
  ]);

  const serviziSchema = {
    "@context": "https://schema.org",
    "@graph": [
      serviziBreadcrumb,
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Servizi IT CoreNexus Technology Solution",
        "description": "Elenco completo dei servizi informatici offerti da CoreNexus Technology Solution a Roma",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Consulenza Sistemistica Professionale" },
          { "@type": "ListItem", "position": 2, "name": "Gestione Reti Aziendali" },
          { "@type": "ListItem", "position": 3, "name": "Sicurezza Informatica" },
          { "@type": "ListItem", "position": 4, "name": "Videosorveglianza Hikvision" },
          { "@type": "ListItem", "position": 5, "name": "Server Enterprise" },
          { "@type": "ListItem", "position": 6, "name": "Monitoraggio Wazuh e Zabbix" },
          { "@type": "ListItem", "position": 7, "name": "Centralini VoIP FreePBX" },
          { "@type": "ListItem", "position": 8, "name": "Creazione Siti Web ed E-commerce" },
        ]
      }
    ]
  };

  /* ── Servizi principali ── */
  const mainServices = [
    {
      icon: Wrench,
      title: 'Consulenza sistemistica professionale',
      shortDesc: 'Supporto tecnico completo per infrastrutture aziendali on-premise e cloud.',
      details: [
        'Monitoraggio costante e manutenzione preventiva',
        'Interventi rapidi da remoto o in sede',
        'Continuità operativa e riduzione tempi di fermo',
        'Gestione completa di workstation e periferiche',
        'Aggiornamenti software e patch di sicurezza',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Network,
      title: 'Gestione reti aziendali',
      shortDesc: 'Progettazione, installazione e gestione di reti sicure e performanti.',
      details: [
        'Configurazione switch, firewall e access point',
        'VPN per accesso remoto protetto',
        'Segmentazione VLAN e QoS',
        'Monitoraggio traffico e ottimizzazione banda',
        'Wi-Fi enterprise con autenticazione RADIUS',
      ],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Shield,
      title: 'Sicurezza informatica',
      shortDesc: 'Protezione completa dei dati e sistemi aziendali da minacce interne ed esterne.',
      details: [
        'Firewall next-gen e antivirus enterprise',
        'Analisi vulnerabilità e penetration testing',
        'Piani di backup e disaster recovery',
        'Formazione del personale sulla cybersecurity',
        'Compliance GDPR e normative di settore',
      ],
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: Camera,
      title: 'Videosorveglianza e allarme Hikvision',
      shortDesc: 'Sistemi di sicurezza completi con intelligenza artificiale integrata.',
      details: [
        'Telecamere HD/4K con visione notturna',
        'Riconoscimento facciale e analisi comportamentale',
        'Video verifica basata su AI',
        'Sistemi di allarme integrati',
        'Accesso remoto sicuro da smartphone',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Server,
      title: 'Assistenza server enterprise',
      shortDesc: 'Gestione e manutenzione server per infrastrutture di livello enterprise.',
      details: [
        'Configurazione e ottimizzazione server',
        'Virtualizzazione (VMware, Hyper-V, Proxmox)',
        'Backup automatizzati e disaster recovery',
        'Monitoraggio proattivo 24/7',
        'Migrazione cloud e hybrid cloud',
      ],
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Activity,
      title: 'Monitoraggio Wazuh e Zabbix',
      shortDesc: 'Soluzioni di monitoraggio avanzato per sicurezza e infrastruttura.',
      details: [
        'SIEM con Wazuh per threat detection',
        'Monitoraggio infrastrutturale con Zabbix',
        'Alerting in tempo reale e dashboard personalizzate',
        'Analisi proattiva delle performance',
        'Visibilità completa su server, reti e applicazioni',
      ],
      gradient: 'from-yellow-500 to-amber-500',
    },
  ];

  /* ── Centralini VoIP ── */
  const voipFeatures = [
    { icon: Settings, title: 'Totalmente Personalizzabile', description: 'Configurazione su misura per le esigenze specifiche della tua azienda' },
    { icon: Shield, title: 'On-Premise', description: 'Installazione locale per massimo controllo e sicurezza dei dati' },
    { icon: Phone, title: 'FreePBX & Asterisk', description: 'Tecnologia open-source affidabile e collaudata a livello enterprise' },
    { icon: Lock, title: 'Sicurezza Avanzata', description: 'Protezione contro intrusioni e chiamate fraudolente' },
    { icon: Cloud, title: 'Integrazione Completa', description: 'Connessione con CRM, gestionale e altri sistemi aziendali' },
    { icon: Headphones, title: 'Supporto Dedicato', description: 'Assistenza tecnica continua e formazione del personale' },
  ];

  const voipPackages = [
    {
      name: 'Centralino Base',
      price: 'Su preventivo',
      description: 'Soluzione ideale per piccole imprese',
      features: ['Fino a 10 interni', 'IVR (menu vocale) base', 'Registrazione chiamate', 'Code di attesa', 'Casella vocale', 'Installazione e configurazione', '3 mesi di supporto incluso'],
    },
    {
      name: 'Centralino Professionale',
      price: 'Su preventivo',
      description: 'Per aziende in crescita',
      features: ['Fino a 50 interni', 'IVR avanzato multi-livello', 'Call center con statistiche', 'Integrazione CRM', 'App mobile per interni', 'Backup automatico', 'Supporto prioritario 12 mesi'],
      highlighted: true,
    },
    {
      name: 'Centralino Enterprise',
      price: 'Su preventivo',
      description: 'Soluzione completa per grandi aziende',
      features: ['Interni illimitati', 'Multi-sede con VPN', 'Disaster recovery', 'Integrazione avanzata ERP/CRM', 'Reportistica personalizzata', 'Formazione del personale', 'SLA con supporto H24/7'],
    },
  ];

  /* ── Siti Web ── */
  const websitePackages = [
    {
      icon: Globe,
      title: 'Sito Web Responsive',
      description: 'Sito web professionale di presentazione per la tua azienda',
      price: '399',
      gradient: 'from-blue-500 to-indigo-600',
      features: [
        'Design responsive (mobile, tablet, desktop)',
        'Fino a 5 pagine personalizzate',
        'Ottimizzazione SEO di base',
        'Form di contatto integrato',
        'Integrazione Google Maps',
        'Hosting incluso per 1 anno',
        'Certificato SSL (HTTPS)',
        'Backup automatici settimanali',
        'Supporto tecnico 30 giorni',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Negozio online completo per vendere i tuoi prodotti',
      price: '599',
      gradient: 'from-purple-500 to-pink-600',
      features: [
        'Catalogo prodotti illimitato',
        'Carrello e checkout sicuro',
        'Gestione ordini e clienti',
        'Integrazione pagamenti (Stripe, PayPal)',
        'Gestione spedizioni e corrieri',
        'Sistema di coupon e sconti',
        'Dashboard amministrazione',
        'Ottimizzazione SEO prodotti',
        'Supporto tecnico 60 giorni',
      ],
    },
  ];

  const webFeatures = [
    { icon: Smartphone, title: 'Mobile First', description: 'Ottimizzato per dispositivi mobili' },
    { icon: Zap, title: 'Performance', description: 'Caricamento veloce e ottimizzato' },
    { icon: Shield, title: 'Sicurezza', description: 'Protezione SSL e backup automatici' },
    { icon: Palette, title: 'Design Moderno', description: 'Interfaccia elegante e professionale' },
  ];

  /* ── Pacchetti Assistenza ── */
  const assistancePlans = [
    {
      name: 'Pacchetto Base',
      icon: Zap,
      price: 'Su preventivo',
      description: 'Ideale per piccole imprese che necessitano di supporto IT essenziale',
      features: ['Assistenza remota (max 4 ore/mese)', 'Monitoraggio base dei sistemi', 'Backup settimanale', 'Supporto email entro 24h', 'Aggiornamenti di sicurezza'],
      highlighted: false,
    },
    {
      name: 'Pacchetto Professional',
      icon: Shield,
      price: 'Su preventivo',
      description: 'Per aziende che richiedono supporto completo e continuativo',
      features: ['Assistenza remota illimitata', 'Monitoraggio 24/7 con alerting', 'Backup giornaliero automatico', 'Supporto prioritario entro 4h', 'Manutenzione preventiva mensile', 'Gestione completa server e rete', 'Report mensili dettagliati'],
      highlighted: true,
    },
    {
      name: 'Pacchetto Enterprise',
      icon: Headphones,
      price: 'Su preventivo',
      description: 'Soluzioni personalizzate per grandi organizzazioni',
      features: ['Tutto del pacchetto Professional', 'Assistenza on-site inclusa', 'Account manager dedicato', 'SLA personalizzato', 'Disaster recovery planning', 'Consulenza strategica IT', 'Formazione del personale'],
      highlighted: false,
    },
  ];

  return (
    <>
      <SEO
        title="Servizi IT per Aziende Roma EUR Ostia Fiumicino | Assistenza Informatica - CoreNexus"
        description="Tutti i servizi informatici per aziende a Roma, EUR, Ostia Lido, Fiumicino e Pomezia: consulenza sistemistica, gestione reti, cybersecurity Wazuh e Zabbix, videosorveglianza Hikvision, server enterprise, centralini VoIP FreePBX, creazione siti web."
        keywords={[
          'servizi IT Roma',
          'servizi informatici Roma EUR',
          'assistenza informatica aziendale Roma',
          'gestione reti Roma Ostia Fiumicino',
          'cybersecurity aziendale Roma',
          'videosorveglianza Roma EUR',
          'server enterprise Roma',
          'centralino VoIP FreePBX Roma',
          'creazione siti web Roma',
          'consulenza IT Pomezia',
          'servizi IT Ostia Lido',
          'assistenza sistemistica Fiumicino',
          'automazione IT Roma',
          'Kubernetes Docker Roma',
          'contratti manutenzione IT Roma',
        ]}
        canonical="/servizi"
        schema={serviziSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6 premium-gradient">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1),transparent)]" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6 animate-fade-in-up">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna alla Home
            </Link>

            <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight tracking-tight">
              I Nostri Servizi IT
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Soluzioni informatiche complete per la gestione, sicurezza e crescita della tua azienda a Roma e provincia.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            SEZIONE 1 — Servizi Principali
        ═══════════════════════════════════════════════════ */}
        <section className="py-24 px-6 relative bg-gradient-to-b from-black via-gray-900/30 to-black">
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection className="text-center space-y-6 mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white">Servizi informatici per aziende</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
                Soluzioni IT complete per la gestione, sicurezza e ottimizzazione delle infrastrutture aziendali
              </p>
            </MorphingSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <MorphingSection key={index} delay={index * 0.1}>
                  <TiltCard tiltIntensity={8} glareEffect>
                    <Card className="group glass-effect border-white/10 hover:border-white/20 bg-transparent text-white h-full transition-all duration-300">
                      <CardHeader className="flex flex-col items-center text-center">
                        <div
                          className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 glow-effect`}
                        >
                          <service.icon className="w-10 h-10 text-white" />
                        </div>
                        <CardTitle className="text-2xl text-white group-hover:gradient-text transition-all duration-300">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-400 text-center leading-relaxed">{service.shortDesc}</p>
                        <ul className="space-y-2 pt-2">
                          {service.details.map((d, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                              <span className="text-gray-300 text-sm">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            SEZIONE 2 — Centralini VoIP FreePBX
        ═══════════════════════════════════════════════════ */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection className="text-center space-y-6 mb-20">
              <span className="px-6 py-3 rounded-full glass-effect text-green-400 text-sm font-semibold tracking-wide inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Centralini VoIP Professionali
              </span>
              <h2 className="text-5xl md:text-6xl font-bold gradient-text">Centralini FreePBX &amp; Asterisk</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Soluzioni telefoniche professionali totalmente personalizzabili e on-premise
              </p>
            </MorphingSection>

            {/* Features grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
              {voipFeatures.map((f, i) => (
                <div key={i} className="p-8 rounded-3xl glass-effect hover:bg-white/10 transition-all duration-500 card-hover group flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <f.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>

            {/* Packages */}
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-white mb-4">Pacchetti Centralino</h3>
                <p className="text-gray-400 text-lg">Scegli la soluzione più adatta alle tue esigenze</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {voipPackages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`p-8 rounded-3xl transition-all duration-500 card-hover flex flex-col ${
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
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            SEZIONE 3 — Creazione Siti Web
        ═══════════════════════════════════════════════════ */}
        <section className="py-24 px-6 relative bg-gradient-to-b from-black via-gray-900/50 to-black overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection className="text-center space-y-6 mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white">Creazione Siti Web</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
                Trasforma la tua presenza online con siti web professionali e negozi e-commerce completi
              </p>
            </MorphingSection>

            <div className="grid md:grid-cols-2 gap-8 mb-16 items-start">
              {websitePackages.map((pkg, index) => (
                <Card
                  key={index}
                  className="glass-effect border-white/10 hover:border-white/20 bg-transparent text-white card-hover h-full flex flex-col"
                >
                  <CardHeader className="flex-shrink-0 text-center">
                    <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-4 glow-effect mx-auto`}>
                      <pkg.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-3xl text-white">{pkg.title}</CardTitle>
                    <p className="text-lg text-gray-400 min-h-[3.5rem]">{pkg.description}</p>
                    <div className="flex items-baseline gap-2 mt-4 justify-center">
                      <span className="text-5xl font-bold text-white">€{pkg.price}</span>
                      <span className="text-gray-400">a partire da</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow flex flex-col">
                    <div className="space-y-3 flex-grow">
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-left">{feat}</span>
                        </div>
                      ))}
                    </div>
                    <Button onClick={scrollToContact} className="w-full premium-button text-white py-6 text-lg rounded-2xl font-semibold mt-6">
                      Richiedi Preventivo
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional web features */}
            <div className="grid md:grid-cols-4 gap-6">
              {webFeatures.map((f, i) => (
                <Card key={i} className="glass-effect border-white/10 hover:border-white/20 bg-transparent text-white card-hover text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                      <f.icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                    <p className="text-sm text-gray-400">{f.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            SEZIONE 4 — Pacchetti di Assistenza
        ═══════════════════════════════════════════════════ */}
        <section className="py-24 px-6 relative bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-black to-gray-900/30" />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection className="text-center space-y-6 mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white">Pacchetti di Assistenza</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
                Scegli il piano più adatto alle esigenze della tua azienda
              </p>
            </MorphingSection>

            <div className="grid md:grid-cols-3 gap-8">
              {assistancePlans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <MorphingSection key={index} delay={index * 0.15}>
                    <Card
                      className={`group relative overflow-hidden p-8 h-full ${
                        plan.highlighted
                          ? 'glass-effect border-blue-500/50 shadow-2xl shadow-blue-500/20'
                          : 'glass-effect border-white/10'
                      }`}
                    >
                      {plan.highlighted && (
                        <div className="absolute top-0 right-0 bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">
                          PIÙ POPOLARE
                        </div>
                      )}
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-white">{plan.price}</p>
                          <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
                        </div>
                        <div className="space-y-3 pt-4">
                          {plan.features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 text-sm">{feat}</span>
                            </div>
                          ))}
                        </div>
                        <Button
                          onClick={scrollToContact}
                          className={`w-full mt-6 py-6 rounded-xl font-semibold ${
                            plan.highlighted
                              ? 'premium-button text-white'
                              : 'glass-effect border-white/20 hover:border-white/40 text-white hover:bg-white/10'
                          }`}
                          variant={plan.highlighted ? 'default' : 'outline'}
                        >
                          Richiedi Preventivo
                        </Button>
                      </div>
                    </Card>
                  </MorphingSection>
                );
              })}
            </div>

            <div className="mt-20 text-center">
              <p className="text-gray-500 text-sm mb-6">
                Tutti i pacchetti sono personalizzabili in base alle tue esigenze specifiche
              </p>
              <Button onClick={scrollToContact} size="lg" className="premium-button text-white px-10 py-6 text-lg rounded-2xl font-semibold">
                Contattaci per un Preventivo Personalizzato
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Finale */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <MorphingSection>
              <div className="p-12 rounded-3xl glass-effect border border-blue-500/30 hover:border-blue-500/50 transition-all duration-500">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Hai bisogno di una soluzione su misura?
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
                  Ogni azienda ha esigenze uniche. Contattaci per una consulenza gratuita e progetteremo insieme la soluzione perfetta per te.
                </p>
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="group premium-button text-white px-12 py-7 text-lg rounded-2xl font-semibold"
                >
                  Richiedi una Consulenza Gratuita
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            </MorphingSection>
          </div>
        </section>

        <WhatsAppWidget />

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">CoreNexus Technology Solution</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Assistenza informatica professionale e supporto sistemistico per aziende a Roma Sud, Ostia, Fiumicino, EUR e provincia.
                </p>
                <address className="text-gray-400 text-sm not-italic">
                  <p>Roma, Lazio</p>
                </address>
              </div>
              <nav className="space-y-4" aria-label="Link rapidi">
                <h4 className="text-lg font-semibold text-white">Link Utili</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Home</Link></li>
                  <li><Link to="/servizi" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Servizi IT</Link></li>
                  <li><a href="/#about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Chi Siamo</a></li>
                  <li><a href="/#contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Contatti</a></li>
                </ul>
              </nav>
              <nav className="space-y-4" aria-label="Informazioni legali">
                <h4 className="text-lg font-semibold text-white">Informazioni Legali</h4>
                <ul className="space-y-2">
                  <li><Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Privacy Policy</Link></li>
                  <li><Link to="/cookie-policy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Cookie Policy</Link></li>
                  <li><Link to="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Termini e Condizioni</Link></li>
                </ul>
              </nav>
            </div>
            <div className="border-t border-white/10 pt-8">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <p className="text-gray-400 text-sm">
                    © 2026 <a href="https://corenexus.it" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">CoreNexus Technology Solution</a> - Tutti i diritti riservati.
                  </p>
                </div>
                <p className="text-xs text-gray-500">
                  Sito realizzato da <a href="https://corenexus.it" className="text-blue-400 hover:text-blue-300 transition-colors">CoreNexus Technology Solution</a>
                </p>
                <p className="text-xs text-gray-600">
                  v2.0 - 25/03/2026
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}