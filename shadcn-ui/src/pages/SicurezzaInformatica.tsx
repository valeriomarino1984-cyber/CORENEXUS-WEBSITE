import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  ShieldCheck,
  Fingerprint,
  ScanLine,
  Bug,
  Check,
  KeyRound,
  FileWarning,
  ShieldAlert,
  Activity,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  BarChart3,
  Bell,
  Database,
  Globe,
  Gauge,
  MonitorCheck,
  TrendingUp,
  Clock,
  Zap,
  Ban,
  LayoutDashboard,
  MapPin,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema, localBusinessServiceSchema, standardAreaServed } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';
import ActiveResponseDemo from '@/components/ActiveResponseDemo';
import FAQSection from '@/components/FAQSection';

export default function SicurezzaInformatica() {
  const navigate = useNavigate();
  const scrollToContact = () => { navigate('/#contact'); };

  const sicurezzaBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
    { name: 'Sicurezza Informatica', url: '/sicurezza-informatica' },
  ]);

  const sicurezzaSchema = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessServiceSchema(
        "Sicurezza Informatica Roma EUR Ostia Fiumicino",
        "Cybersecurity professionale per aziende a Roma, EUR, Ostia Lido, Fiumicino e Pomezia. Wazuh SIEM, Zabbix monitoring, firewall, vulnerability assessment, compliance GDPR.",
        "/sicurezza-informatica",
        "Sicurezza Informatica"
      ),
      sicurezzaBreadcrumb,
      {
        "@type": "Service",
        "name": "Sicurezza Informatica Aziendale Roma",
        "description": "Cybersecurity professionale per PMI a Roma: Wazuh SIEM, Zabbix monitoring, Active Response con blocco automatico IP, firewall next-gen, vulnerability assessment, compliance GDPR. Servizio gestito 24/7 per aziende di Roma, EUR, Ostia, Fiumicino e Pomezia.",
        "provider": {
          "@type": "Organization",
          "name": "CoreNexus Technology Solution",
          "url": "https://corenexus.it"
        },
        "areaServed": standardAreaServed,
        "serviceType": "Sicurezza Informatica"
      }
    ]
  };

  const faqs = [
    {
      question: "Cos'e la sicurezza informatica aziendale e perche e importante?",
      answer: "La sicurezza informatica aziendale e l'insieme di tecnologie, processi e pratiche per proteggere reti, sistemi e dati da attacchi, danni o accessi non autorizzati. E fondamentale perche il 60% delle PMI che subisce un attacco grave chiude entro 6 mesi. CoreNexus offre soluzioni di cybersecurity complete per aziende di Roma, EUR, Ostia e Fiumicino.",
    },
    {
      question: "Cosa e Wazuh e come protegge la mia azienda?",
      answer: "Wazuh e una piattaforma SIEM open source che monitora in tempo reale tutti gli eventi di sicurezza della tua infrastruttura. Rileva intrusioni, vulnerabilita CVE, modifiche ai file critici e blocca automaticamente gli IP malevoli con Active Response. Lo installiamo e gestiamo per aziende di Roma e provincia.",
    },
    {
      question: "Qual e la differenza tra Wazuh e Zabbix?",
      answer: "Wazuh si occupa della sicurezza: rileva minacce, gestisce log di sicurezza, verifica la compliance GDPR e blocca attacchi automaticamente. Zabbix monitora le performance dell'infrastruttura: CPU, RAM, rete, servizi. Insieme offrono una visione completa a 360 gradi della tua infrastruttura IT.",
    },
    {
      question: "Operate a Roma Sud per la sicurezza informatica?",
      answer: "Si, CoreNexus e specializzata nella sicurezza informatica per aziende del quadrante sud di Roma. Operiamo quotidianamente a EUR, Ostia Lido, Fiumicino, Acilia, Casal Palocco, Pomezia, Ardea, Mostacciano, Torrino, Laurentina, Spinaceto e zone limitrofe con interventi on-site rapidi.",
    },
    {
      question: "Cosa include un vulnerability assessment?",
      answer: "Il vulnerability assessment e una scansione completa della tua infrastruttura IT per identificare punti deboli: porte aperte, servizi vulnerabili, configurazioni errate, CVE non patchate. Forniamo un report dettagliato con prioritizzazione delle vulnerabilita e piano di remediation. Lo offriamo gratuitamente come primo step.",
    },
  ];

  const coverageAreas = [
    'EUR', 'Ostia Lido', 'Ostia Antica', 'Fiumicino', 'Isola Sacra',
    'Acilia', 'Casal Palocco', 'Infernetto', 'Axa', 'Malafede',
    'Mostacciano', 'Torrino', 'Laurentina', 'Spinaceto', 'Mezzocammino',
    'Pomezia', 'Ardea', 'Santa Palomba', 'Castel Romano', 'Garbatella',
    'Ostiense', 'Marconi', 'Magliana', 'San Paolo',
  ];

  const keyPoints = [
    'Proteggiamo la tua azienda da minacce informatiche e attacchi cyber',
    'Implementiamo soluzioni di sicurezza multilivello personalizzate',
    'Monitoriamo 24/7 la tua infrastruttura con Wazuh SIEM e Zabbix',
    'Blocco automatico degli IP malevoli con Active Response',
    'Dashboard personalizzate per il tuo team IT e management',
  ];

  const technologies = [
    { name: 'Firewall Next-Gen', desc: 'Protezione perimetrale avanzata con Fortinet, pfSense, OPNsense e deep packet inspection', icon: Shield },
    { name: 'SIEM / Wazuh', desc: 'Monitoraggio centralizzato degli eventi di sicurezza con correlazione e alerting in tempo reale', icon: Eye },
    { name: 'Zabbix Monitoring', desc: 'Monitoraggio infrastrutturale completo con metriche real-time, alerting e capacity planning', icon: Activity },
    { name: 'Antivirus Enterprise', desc: 'Soluzioni endpoint protection con gestione centralizzata e aggiornamenti automatici', icon: Bug },
    { name: 'Vulnerability Assessment', desc: 'Scansione periodica delle vulnerabilita per identificare e correggere punti deboli', icon: ScanLine },
    { name: 'Backup & Disaster Recovery', desc: 'Strategie di backup 3-2-1 con recovery plan testati e documentati', icon: FileWarning },
    { name: 'Crittografia', desc: 'Protezione dei dati sensibili con crittografia end-to-end su storage e comunicazioni', icon: Lock },
    { name: 'Autenticazione MFA', desc: 'Multi-factor authentication per accessi sicuri a sistemi e applicazioni aziendali', icon: Fingerprint },
    { name: 'Anti-Spam / Anti-Phishing', desc: 'Filtri avanzati per proteggere le email aziendali da phishing e malware', icon: AlertTriangle },
    { name: 'Gestione Password', desc: 'Policy di password sicure e implementazione di password manager aziendali', icon: KeyRound },
    { name: 'Compliance GDPR', desc: 'Consulenza e implementazione delle misure tecniche richieste dal GDPR', icon: ShieldAlert },
  ];

  const wazuhFeatures = [
    { icon: Eye, title: 'Rilevamento Intrusioni (IDS)', desc: 'Analisi in tempo reale dei log di sistema per identificare tentativi di accesso non autorizzato, brute force e attivita sospette.' },
    { icon: ScanLine, title: 'Vulnerability Detection', desc: 'Scansione automatica delle vulnerabilita CVE su tutti gli endpoint, con prioritizzazione per livello di rischio critico.' },
    { icon: ShieldCheck, title: 'File Integrity Monitoring', desc: 'Monitoraggio delle modifiche ai file critici di sistema, configurazioni e registri per rilevare manomissioni.' },
    { icon: ShieldAlert, title: 'Compliance & Auditing', desc: 'Verifica automatica della conformita a standard PCI-DSS, HIPAA, GDPR, NIST 800-53 con report dettagliati.' },
    { icon: Bell, title: 'Alerting Intelligente', desc: 'Sistema di alerting multi-livello con correlazione eventi, riduzione falsi positivi e notifiche via email, Slack, Telegram.' },
    { icon: Database, title: 'Log Management Centralizzato', desc: 'Raccolta e indicizzazione centralizzata di tutti i log aziendali con retention policy configurabili e ricerca full-text.' },
    { icon: Ban, title: 'Active Response — Blocco IP', desc: 'Risposta automatica agli attacchi: blocco immediato degli IP malevoli tramite firewall rules dinamiche, ban temporaneo o permanente in caso di brute force, port scanning o exploit attempts.' },
    { icon: LayoutDashboard, title: 'Dashboard Personalizzate', desc: 'Creiamo dashboard su misura per il tuo team: viste executive per il management, pannelli tecnici per il SOC, report automatici e KPI di sicurezza personalizzati per ogni reparto.' },
  ];

  const zabbixFeatures = [
    { icon: Server, title: 'Monitoraggio Server', desc: 'Controllo completo di CPU, RAM, disco, processi e servizi su server fisici e virtuali con template predefiniti.' },
    { icon: Wifi, title: 'Monitoraggio Rete', desc: "Analisi del traffico di rete, latenza, packet loss, bandwidth e stato delle interfacce su switch, router e firewall." },
    { icon: Cpu, title: 'Metriche Applicative', desc: 'Monitoraggio di database (MySQL, PostgreSQL), web server (Apache, Nginx), servizi mail e applicazioni custom.' },
    { icon: TrendingUp, title: 'Capacity Planning', desc: "Analisi dei trend storici per prevedere esaurimento risorse, pianificare upgrade e ottimizzare l'infrastruttura." },
    { icon: Globe, title: 'Web Monitoring', desc: 'Controllo disponibilita e tempi di risposta di siti web e API con simulazione di scenari multi-step.' },
    { icon: Gauge, title: 'Dashboard Real-Time', desc: 'Dashboard personalizzabili con grafici interattivi, mappe di rete, SLA monitoring e report automatici.' },
  ];

  const wazuhMetrics = [
    { label: 'Eventi Analizzati / Giorno', value: '2.5M+', icon: BarChart3, color: 'from-red-500 to-orange-500' },
    { label: 'Regole di Correlazione', value: '4,200+', icon: Shield, color: 'from-orange-500 to-yellow-500' },
    { label: 'Tempo Medio di Rilevamento', value: '<30s', icon: Clock, color: 'from-yellow-500 to-red-500' },
    { label: 'CVE Monitorate', value: '180K+', icon: Bug, color: 'from-red-500 to-pink-500' },
  ];

  const zabbixMetrics = [
    { label: 'Metriche Raccolte / Min', value: '50K+', icon: Activity, color: 'from-green-500 to-emerald-500' },
    { label: 'Uptime Monitoraggio', value: '99.99%', icon: MonitorCheck, color: 'from-emerald-500 to-teal-500' },
    { label: 'Host Monitorabili', value: '10K+', icon: Server, color: 'from-teal-500 to-cyan-500' },
    { label: 'Trigger Attivi', value: '1,500+', icon: Zap, color: 'from-cyan-500 to-green-500' },
  ];

  const packages = [
    {
      name: 'Pacchetto Smart',
      hours: '20 ore',
      ideal: 'Ideale per assessment iniziale e implementazione misure base di sicurezza',
      features: [
        'Vulnerability assessment iniziale',
        'Configurazione firewall base',
        'Setup antivirus enterprise',
        'Implementazione backup sicuro',
        'Report vulnerabilita e raccomandazioni',
      ],
      discount: '5%',
      gradient: 'from-red-500 to-orange-500',
      highlighted: false,
    },
    {
      name: 'Pacchetto Plus',
      hours: '50 ore',
      ideal: 'Per aziende che necessitano di una protezione completa e monitoraggio',
      features: [
        'Tutto del pacchetto Smart',
        'Setup SIEM Wazuh completo',
        'Setup Zabbix monitoring infrastruttura',
        'Active Response con blocco IP automatico',
        'Dashboard personalizzate per il tuo team',
        'Monitoraggio 24/7 per 3 mesi',
        'Implementazione MFA',
        'Hardening server e workstation',
        'Policy di sicurezza documentate',
        'Formazione base del personale',
      ],
      discount: '10%',
      gradient: 'from-orange-500 to-red-500',
      highlighted: true,
    },
    {
      name: 'Pacchetto Enterprise',
      hours: 'Progetto',
      ideal: 'Sicurezza completa con monitoraggio continuativo e compliance',
      features: [
        'Tutto del pacchetto Plus',
        'Wazuh + Zabbix fully managed',
        'Active Response avanzato multi-livello',
        'Dashboard executive e SOC dedicate',
        'Penetration test periodici',
        'Monitoraggio 24/7 continuativo',
        'Incident response plan',
        'Compliance GDPR completa',
        'Account manager dedicato',
        'SLA personalizzato',
        'Formazione avanzata anti-phishing',
      ],
      discount: '20%',
      gradient: 'from-red-500 to-purple-500',
      highlighted: false,
    },
  ];

  return (
    <>
      <SEO
        title="Sicurezza Informatica Roma | Cybersecurity Aziendale EUR Ostia Fiumicino - CoreNexus"
        description="Sicurezza informatica professionale per aziende a Roma, EUR, Ostia, Fiumicino e Pomezia. Cybersecurity con Wazuh SIEM, Zabbix monitoring, firewall, vulnerability assessment e compliance GDPR. Active Response con blocco automatico IP. Preventivo gratuito."
        keywords={[
          'sicurezza informatica Roma',
          'cybersecurity aziendale Roma',
          'sicurezza informatica aziendale',
          'sicurezza informatica EUR Roma',
          'cybersecurity PMI Roma',
          'server Wazuh Roma',
          'server Zabbix Roma',
          'Wazuh SIEM Roma',
          'Zabbix monitoring Roma',
          'firewall aziendale Roma',
          'vulnerability assessment Roma',
          'penetration test Roma',
          'compliance GDPR Roma',
          'monitoraggio sicurezza IT Roma',
          'SOC Roma',
          'sicurezza informatica Ostia',
          'sicurezza informatica Fiumicino',
          'cybersecurity Roma Sud',
          'protezione dati aziendali Roma',
          'antivirus aziendale Roma',
          'sicurezza rete aziendale Roma',
        ]}
        canonical="/sicurezza-informatica"
        schema={sicurezzaSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-orange-950/20" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="mb-6">
                <Link to="/servizi" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm font-medium">
                  <ArrowLeft className="w-4 h-4" />
                  Torna ai Servizi
                </Link>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-block">
                    <span className="px-4 py-2 rounded-full glass-effect text-red-400 text-sm font-semibold tracking-wide flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Servizio Dedicato
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                      Sicurezza Informatica
                    </span>
                    <span className="block text-3xl md:text-4xl text-gray-400 mt-2 font-normal">
                      a Roma, EUR, Ostia e Fiumicino
                    </span>
                  </h1>

                  <p className="text-xl text-gray-400 leading-relaxed">
                    Proteggiamo la tua azienda dalle minacce informatiche con soluzioni di cybersecurity avanzate, monitoraggio continuo con <strong className="text-white">Wazuh</strong> e <strong className="text-white">Zabbix</strong>, e strategie di difesa multilivello per PMI di Roma e provincia.
                  </p>

                  <div className="space-y-4">
                    {keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-gray-300 text-lg">{point}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-red-500/20"
                  >
                    Richiedi una consulenza gratuita
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>

                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl glass-effect border border-red-500/20 p-8 flex flex-col items-center justify-center gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        {[Shield, Lock, Eye, AlertTriangle, ShieldCheck, Fingerprint, Activity, Bug, KeyRound].map((Icon, i) => (
                          <div key={i} className="w-16 h-16 rounded-2xl glass-effect flex items-center justify-center hover:bg-red-500/20 transition-all duration-300 hover:scale-110">
                            <Icon className="w-7 h-7 text-red-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-xl -z-10" />
                  </div>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* WAZUH SIEM SECTION */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/15 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-effect border border-red-500/30">
                  <Eye className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Security Monitoring</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Wazuh <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">SIEM Platform</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Piattaforma open-source di Security Information and Event Management per il rilevamento delle minacce, il monitoraggio dell'integrita e la risposta agli incidenti in tempo reale.
                </p>
              </div>
            </MorphingSection>

            <MorphingSection delay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {wazuhMetrics.map((metric, index) => (
                  <div key={index} className="p-6 rounded-2xl glass-effect border border-white/5 hover:border-red-500/30 transition-all duration-300 text-center group hover:scale-105">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>{metric.value}</div>
                    <div className="text-gray-400 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wazuhFeatures.map((feature, index) => (
                <MorphingSection key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-2xl glass-effect border border-white/5 hover:border-red-500/30 transition-all duration-500 group hover:bg-white/5 h-full">
                    <div className="flex flex-col items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-2">{feature.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                </MorphingSection>
              ))}
            </div>

            <MorphingSection delay={0.5}>
              <div className="mt-16">
                <div className="text-center space-y-4 mb-8">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-effect border border-red-500/30">
                    <Ban className="w-5 h-5 text-red-400" />
                    <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Demo Interattiva</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    Active Response in <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Azione</span>
                  </h3>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Guarda come Wazuh rileva e blocca automaticamente un attacco brute force SSH in tempo reale. Premi il pulsante per avviare la simulazione.
                  </p>
                </div>
                <ActiveResponseDemo />
              </div>
            </MorphingSection>

            <MorphingSection delay={0.4}>
              <div className="mt-16 grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl glass-effect border border-red-500/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                        <Ban className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Active Response</h3>
                        <p className="text-red-400 text-sm font-medium">Blocco Automatico IP</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">Il modulo Active Response di Wazuh reagisce automaticamente alle minacce rilevate, bloccando gli IP malevoli in tempo reale senza intervento umano.</p>
                    <div className="space-y-4 mb-6">
                      {[
                        { trigger: 'Brute Force SSH/RDP', action: 'Ban IP per 30 min dopo 5 tentativi falliti', severity: 'high' },
                        { trigger: 'Port Scanning', action: 'Blocco immediato IP + notifica SOC', severity: 'medium' },
                        { trigger: 'SQL Injection Attempt', action: 'Ban permanente + isolamento endpoint', severity: 'critical' },
                        { trigger: 'Malware Detection', action: 'Quarantena file + blocco comunicazione C2', severity: 'critical' },
                      ].map((rule, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-white font-medium text-sm">{rule.trigger}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${rule.severity === 'critical' ? 'bg-red-500/20 text-red-400' : rule.severity === 'high' ? 'bg-orange-500/20 text-orange-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{rule.severity}</span>
                          </div>
                          <p className="text-gray-400 text-xs">{rule.action}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 rounded-2xl bg-black/50 border border-red-500/20">
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-3 font-semibold">Flusso Active Response</p>
                      <div className="flex items-center justify-between gap-2">
                        {[
                          { step: '1', label: 'Evento', color: 'from-gray-500 to-gray-600' },
                          { step: '2', label: 'Analisi', color: 'from-yellow-500 to-orange-500' },
                          { step: '3', label: 'Match Regola', color: 'from-orange-500 to-red-500' },
                          { step: '4', label: 'Blocco IP', color: 'from-red-500 to-red-700' },
                          { step: '5', label: 'Alert', color: 'from-red-700 to-purple-600' },
                        ].map((item, i) => (
                          <div key={i} className="flex flex-col items-center gap-1 flex-1">
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xs font-bold`}>{item.step}</div>
                            <span className="text-gray-400 text-[10px] text-center">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-3xl glass-effect border border-blue-500/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                        <LayoutDashboard className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Dashboard Personalizzate</h3>
                        <p className="text-blue-400 text-sm font-medium">Su misura per il tuo team</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">Progettiamo e realizziamo dashboard Wazuh personalizzate per ogni livello aziendale: dal SOC tecnico al management executive, con KPI e metriche rilevanti.</p>
                    <div className="space-y-4 mb-6">
                      {[
                        { name: 'Dashboard Executive', desc: 'KPI di alto livello, trend mensili, risk score aziendale, ROI della sicurezza', icon: TrendingUp, color: 'text-blue-400' },
                        { name: 'Dashboard SOC / Tecnica', desc: 'Eventi real-time, alert attivi, IP bloccati, regole triggered, log flow', icon: MonitorCheck, color: 'text-cyan-400' },
                        { name: 'Dashboard Compliance', desc: 'Score GDPR/PCI-DSS, gap analysis, remediation progress, audit trail', icon: ShieldCheck, color: 'text-green-400' },
                        { name: 'Dashboard per Reparto', desc: 'Viste personalizzate per IT, HR, Finance con metriche specifiche per ruolo', icon: BarChart3, color: 'text-purple-400' },
                      ].map((dash, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                          <dash.icon className={`w-5 h-5 ${dash.color} flex-shrink-0 mt-0.5`} />
                          <div>
                            <span className="text-white font-medium text-sm block">{dash.name}</span>
                            <span className="text-gray-400 text-xs">{dash.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 rounded-2xl bg-black/50 border border-blue-500/20">
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-3 font-semibold">Esempio Dashboard Executive</p>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded-lg bg-white/5 text-center"><div className="text-lg font-bold text-green-400">A+</div><div className="text-[10px] text-gray-500">Security Score</div></div>
                        <div className="p-2 rounded-lg bg-white/5 text-center"><div className="text-lg font-bold text-blue-400">99.9%</div><div className="text-[10px] text-gray-500">Uptime</div></div>
                        <div className="p-2 rounded-lg bg-white/5 text-center"><div className="text-lg font-bold text-red-400">0</div><div className="text-[10px] text-gray-500">Breach</div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* ZABBIX MONITORING SECTION */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/15 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-effect border border-green-500/30">
                  <Activity className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Infrastructure Monitoring</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Zabbix <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Monitoring System</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Piattaforma enterprise di monitoraggio infrastrutturale per server, reti, applicazioni e servizi cloud con metriche in tempo reale, alerting avanzato e capacity planning.
                </p>
              </div>
            </MorphingSection>

            <MorphingSection delay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {zabbixMetrics.map((metric, index) => (
                  <div key={index} className="p-6 rounded-2xl glass-effect border border-white/5 hover:border-green-500/30 transition-all duration-300 text-center group hover:scale-105">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>{metric.value}</div>
                    <div className="text-gray-400 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {zabbixFeatures.map((feature, index) => (
                <MorphingSection key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-2xl glass-effect border border-white/5 hover:border-green-500/30 transition-all duration-500 group hover:bg-white/5 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-2">{feature.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Pacchetti di Sicurezza Informatica a Roma</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Soluzioni scalabili per proteggere la tua azienda a Roma, EUR, Ostia e Fiumicino — dal assessment iniziale alla sicurezza gestita 24/7 con Wazuh e Zabbix.
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <MorphingSection key={index} delay={index * 0.15}>
                  <div className={`relative p-8 rounded-3xl glass-effect border transition-all duration-500 hover:scale-105 h-full flex flex-col ${pkg.highlighted ? 'border-red-500/50 shadow-lg shadow-red-500/20' : 'border-white/10 hover:border-white/20'}`}>
                    {pkg.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold uppercase tracking-wider">Piu Richiesto</span>
                      </div>
                    )}
                    <div className="text-center space-y-4 mb-8">
                      <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                      <div className={`text-4xl font-bold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>{pkg.hours}</div>
                      <p className="text-gray-400 text-sm">{pkg.ideal}</p>
                    </div>
                    <div className="space-y-3 mb-8 flex-1">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center space-y-4">
                      <div className="inline-block px-4 py-2 rounded-full glass-effect">
                        <span className="text-red-400 font-bold text-lg">Sconto del {pkg.discount}</span>
                      </div>
                      <Button
                        onClick={scrollToContact}
                        className={`w-full py-6 rounded-2xl font-semibold text-white ${pkg.highlighted ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700' : 'glass-effect border border-white/20 hover:bg-white/10'}`}
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

        {/* Zone copertura */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="p-10 rounded-3xl glass-effect border border-red-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Sicurezza informatica a Roma Sud: le zone coperte</h2>
                </div>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  CoreNexus e il riferimento per la cybersecurity aziendale nel quadrante sud di Roma. Interveniamo on-site con tempi certi in tutte le principali zone:
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {coverageAreas.map((area, index) => (
                    <span key={index} className="px-4 py-2 rounded-full glass-effect border border-red-500/20 text-red-400 text-sm font-medium">
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm">Per le zone non elencate offriamo sicurezza informatica da remoto in tutta Italia.</p>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={faqs} accentColor="red" gradientFrom="red-500" gradientTo="orange-500" />

        {/* CTA Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <MorphingSection>
              <div className="p-12 rounded-3xl glass-effect border border-red-500/20 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Proteggi la tua azienda a Roma oggi</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Richiedi un vulnerability assessment gratuito con Wazuh e un health check infrastrutturale con Zabbix. Analizziamo la tua infrastruttura e ti mostriamo dove sei vulnerabile.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={scrollToContact} className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-red-500/20">
                    Richiedi Assessment Gratuito
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
