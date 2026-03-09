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
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';

export default function SicurezzaInformatica() {
  const navigate = useNavigate();
  const scrollToContact = () => {
    navigate('/#contact');
  };

  const sicurezzaBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
    { name: 'Sicurezza Informatica', url: '/sicurezza-informatica' },
  ]);

  const sicurezzaSchema = {
    "@context": "https://schema.org",
    "@graph": [
      sicurezzaBreadcrumb,
      {
        "@type": "Service",
        "name": "Sicurezza Informatica Aziendale",
        "description": "Servizi di cybersecurity per aziende a Roma: firewall, monitoraggio SIEM Wazuh, Zabbix, vulnerability assessment, backup, compliance GDPR",
        "provider": {
          "@type": "Organization",
          "name": "CoreNexus Technology Solution",
          "url": "https://corenexus.it"
        },
        "areaServed": {
          "@type": "City",
          "name": "Roma"
        },
        "serviceType": "Sicurezza Informatica"
      }
    ]
  };

  const keyPoints = [
    'Proteggiamo la tua azienda da minacce informatiche e attacchi cyber',
    'Implementiamo soluzioni di sicurezza multilivello personalizzate',
    'Monitoriamo 24/7 la tua infrastruttura con Wazuh SIEM e Zabbix',
    'Garantiamo conformità GDPR e normative di settore',
    'Formiamo il tuo personale sulle best practice di sicurezza',
  ];

  const technologies = [
    { name: 'Firewall Next-Gen', desc: 'Protezione perimetrale avanzata con Fortinet, pfSense, OPNsense e deep packet inspection', icon: Shield },
    { name: 'SIEM / Wazuh', desc: 'Monitoraggio centralizzato degli eventi di sicurezza con correlazione e alerting in tempo reale', icon: Eye },
    { name: 'Zabbix Monitoring', desc: 'Monitoraggio infrastrutturale completo con metriche real-time, alerting e capacity planning', icon: Activity },
    { name: 'Antivirus Enterprise', desc: 'Soluzioni endpoint protection con gestione centralizzata e aggiornamenti automatici', icon: Bug },
    { name: 'Vulnerability Assessment', desc: 'Scansione periodica delle vulnerabilità per identificare e correggere punti deboli', icon: ScanLine },
    { name: 'Backup & Disaster Recovery', desc: 'Strategie di backup 3-2-1 con recovery plan testati e documentati', icon: FileWarning },
    { name: 'Crittografia', desc: 'Protezione dei dati sensibili con crittografia end-to-end su storage e comunicazioni', icon: Lock },
    { name: 'Autenticazione MFA', desc: 'Multi-factor authentication per accessi sicuri a sistemi e applicazioni aziendali', icon: Fingerprint },
    { name: 'Anti-Spam / Anti-Phishing', desc: 'Filtri avanzati per proteggere le email aziendali da phishing e malware', icon: AlertTriangle },
    { name: 'Gestione Password', desc: 'Policy di password sicure e implementazione di password manager aziendali', icon: KeyRound },
    { name: 'Compliance GDPR', desc: 'Consulenza e implementazione delle misure tecniche richieste dal GDPR', icon: ShieldAlert },
  ];

  const wazuhFeatures = [
    { icon: Eye, title: 'Rilevamento Intrusioni (IDS)', desc: 'Analisi in tempo reale dei log di sistema per identificare tentativi di accesso non autorizzato, brute force e attività sospette.' },
    { icon: ScanLine, title: 'Vulnerability Detection', desc: 'Scansione automatica delle vulnerabilità CVE su tutti gli endpoint, con prioritizzazione per livello di rischio critico.' },
    { icon: ShieldCheck, title: 'File Integrity Monitoring', desc: 'Monitoraggio delle modifiche ai file critici di sistema, configurazioni e registri per rilevare manomissioni.' },
    { icon: ShieldAlert, title: 'Compliance & Auditing', desc: 'Verifica automatica della conformità a standard PCI-DSS, HIPAA, GDPR, NIST 800-53 con report dettagliati.' },
    { icon: Bell, title: 'Alerting Intelligente', desc: 'Sistema di alerting multi-livello con correlazione eventi, riduzione falsi positivi e notifiche via email, Slack, Telegram.' },
    { icon: Database, title: 'Log Management Centralizzato', desc: 'Raccolta e indicizzazione centralizzata di tutti i log aziendali con retention policy configurabili e ricerca full-text.' },
  ];

  const zabbixFeatures = [
    { icon: Server, title: 'Monitoraggio Server', desc: 'Controllo completo di CPU, RAM, disco, processi e servizi su server fisici e virtuali con template predefiniti.' },
    { icon: Wifi, title: 'Monitoraggio Rete', desc: 'Analisi del traffico di rete, latenza, packet loss, bandwidth e stato delle interfacce su switch, router e firewall.' },
    { icon: Cpu, title: 'Metriche Applicative', desc: 'Monitoraggio di database (MySQL, PostgreSQL), web server (Apache, Nginx), servizi mail e applicazioni custom.' },
    { icon: TrendingUp, title: 'Capacity Planning', desc: 'Analisi dei trend storici per prevedere esaurimento risorse, pianificare upgrade e ottimizzare l\'infrastruttura.' },
    { icon: Globe, title: 'Web Monitoring', desc: 'Controllo disponibilità e tempi di risposta di siti web e API con simulazione di scenari multi-step.' },
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
        'Report vulnerabilità e raccomandazioni',
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
        title="Sicurezza Informatica Aziendale Roma | Wazuh & Zabbix Monitoring - CoreNexus Technology Solution"
        description="Servizi di sicurezza informatica per aziende a Roma. Monitoraggio con Wazuh SIEM e Zabbix, firewall, vulnerability assessment, backup, compliance GDPR. Proteggiamo la tua azienda dalle minacce cyber."
        keywords={[
          'sicurezza informatica Roma',
          'cybersecurity aziendale',
          'Wazuh SIEM Roma',
          'Zabbix monitoring',
          'monitoraggio infrastruttura IT',
          'firewall aziendale Roma',
          'vulnerability assessment',
          'penetration test Roma',
          'compliance GDPR',
          'antivirus enterprise',
          'protezione dati aziendali',
          'monitoraggio rete aziendale',
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
                <Link
                  to="/servizi"
                  className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm font-medium"
                >
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
                  </h1>

                  <p className="text-xl text-gray-400 leading-relaxed">
                    Proteggiamo la tua azienda dalle minacce informatiche con soluzioni di cybersecurity
                    avanzate, monitoraggio continuo con <strong className="text-white">Wazuh</strong> e <strong className="text-white">Zabbix</strong>, e strategie di difesa multilivello.
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

                {/* Right side - Visual element */}
                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl glass-effect border border-red-500/20 p-8 flex flex-col items-center justify-center gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        {[Shield, Lock, Eye, AlertTriangle, ShieldCheck, Fingerprint, Activity, Bug, KeyRound].map((Icon, i) => (
                          <div
                            key={i}
                            className="w-16 h-16 rounded-2xl glass-effect flex items-center justify-center hover:bg-red-500/20 transition-all duration-300 hover:scale-110"
                          >
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

        {/* ===== WAZUH SIEM SECTION ===== */}
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
                  Piattaforma open-source di Security Information and Event Management per il rilevamento delle minacce,
                  il monitoraggio dell'integrità e la risposta agli incidenti in tempo reale.
                </p>
              </div>
            </MorphingSection>

            {/* Wazuh Metrics */}
            <MorphingSection delay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {wazuhMetrics.map((metric, index) => (
                  <div key={index} className="p-6 rounded-2xl glass-effect border border-white/5 hover:border-red-500/30 transition-all duration-300 text-center group hover:scale-105">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                      {metric.value}
                    </div>
                    <div className="text-gray-400 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </MorphingSection>

            {/* Wazuh Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wazuhFeatures.map((feature, index) => (
                <MorphingSection key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-2xl glass-effect border border-white/5 hover:border-red-500/30 transition-all duration-500 group hover:bg-white/5 h-full">
                    <div className="flex items-start gap-4">
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

            {/* Wazuh Dashboard Preview */}
            <MorphingSection delay={0.3}>
              <div className="mt-16 p-8 rounded-3xl glass-effect border border-red-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <MonitorCheck className="w-6 h-6 text-red-400" />
                  Dashboard Wazuh — Panoramica Metriche
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Security Events */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 text-sm font-medium">Security Events (24h)</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-red-500/20 text-red-400">Live</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Critici</span>
                        <span className="text-red-400 font-bold">12</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full" style={{ width: '15%' }} />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Alti</span>
                        <span className="text-orange-400 font-bold">47</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full" style={{ width: '35%' }} />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Medi</span>
                        <span className="text-yellow-400 font-bold">234</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full" style={{ width: '60%' }} />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Bassi</span>
                        <span className="text-green-400 font-bold">1,892</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: '90%' }} />
                      </div>
                    </div>
                  </div>

                  {/* Compliance Score */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 text-sm font-medium">Compliance Score</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Conforme</span>
                    </div>
                    <div className="flex items-center justify-center my-6">
                      <div className="relative w-32 h-32">
                        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                          <circle cx="60" cy="60" r="50" stroke="rgba(255,255,255,0.1)" strokeWidth="10" fill="none" />
                          <circle cx="60" cy="60" r="50" stroke="url(#complianceGrad)" strokeWidth="10" fill="none"
                            strokeDasharray="314" strokeDashoffset="31" strokeLinecap="round" />
                          <defs>
                            <linearGradient id="complianceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#22c55e" />
                              <stop offset="100%" stopColor="#10b981" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-3xl font-bold text-green-400">90%</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">PCI-DSS</span>
                        <span className="text-green-400">92%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">GDPR</span>
                        <span className="text-green-400">95%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">NIST 800-53</span>
                        <span className="text-yellow-400">83%</span>
                      </div>
                    </div>
                  </div>

                  {/* Vulnerability Summary */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 text-sm font-medium">Vulnerabilità Rilevate</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-400">Scan recente</span>
                    </div>
                    <div className="space-y-4 mt-4">
                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                        <div className="flex items-center justify-between">
                          <span className="text-red-400 text-sm font-medium">Critiche (CVSS 9+)</span>
                          <span className="text-red-400 font-bold text-lg">2</span>
                        </div>
                        <p className="text-gray-500 text-xs mt-1">CVE-2024-3094, CVE-2024-21762</p>
                      </div>
                      <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
                        <div className="flex items-center justify-between">
                          <span className="text-orange-400 text-sm font-medium">Alte (CVSS 7-8.9)</span>
                          <span className="text-orange-400 font-bold text-lg">8</span>
                        </div>
                        <p className="text-gray-500 text-xs mt-1">Patch disponibili per 6 su 8</p>
                      </div>
                      <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                        <div className="flex items-center justify-between">
                          <span className="text-yellow-400 text-sm font-medium">Medie (CVSS 4-6.9)</span>
                          <span className="text-yellow-400 font-bold text-lg">23</span>
                        </div>
                        <p className="text-gray-500 text-xs mt-1">In fase di remediation</p>
                      </div>
                      <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                        <div className="flex items-center justify-between">
                          <span className="text-green-400 text-sm font-medium">Basse (CVSS 0-3.9)</span>
                          <span className="text-green-400 font-bold text-lg">45</span>
                        </div>
                        <p className="text-gray-500 text-xs mt-1">Rischio accettabile</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* ===== ZABBIX MONITORING SECTION ===== */}
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
                  Piattaforma enterprise di monitoraggio infrastrutturale per server, reti, applicazioni e servizi cloud
                  con metriche in tempo reale, alerting avanzato e capacity planning.
                </p>
              </div>
            </MorphingSection>

            {/* Zabbix Metrics */}
            <MorphingSection delay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {zabbixMetrics.map((metric, index) => (
                  <div key={index} className="p-6 rounded-2xl glass-effect border border-white/5 hover:border-green-500/30 transition-all duration-300 text-center group hover:scale-105">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                      {metric.value}
                    </div>
                    <div className="text-gray-400 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </MorphingSection>

            {/* Zabbix Features Grid */}
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

            {/* Zabbix Dashboard Preview */}
            <MorphingSection delay={0.3}>
              <div className="mt-16 p-8 rounded-3xl glass-effect border border-green-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Gauge className="w-6 h-6 text-green-400" />
                  Dashboard Zabbix — Metriche Infrastruttura
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {/* Server Status Cards */}
                  {[
                    { name: 'SRV-DC01', cpu: 23, ram: 67, disk: 45, status: 'OK' },
                    { name: 'SRV-DB01', cpu: 58, ram: 82, disk: 71, status: 'Warning' },
                    { name: 'SRV-WEB01', cpu: 12, ram: 41, disk: 33, status: 'OK' },
                    { name: 'SRV-MAIL01', cpu: 34, ram: 55, disk: 62, status: 'OK' },
                  ].map((server, index) => (
                    <div key={index} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white font-semibold text-sm">{server.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          server.status === 'OK'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {server.status}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-400">CPU</span>
                            <span className={server.cpu > 50 ? 'text-yellow-400' : 'text-green-400'}>{server.cpu}%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-1.5">
                            <div
                              className={`h-1.5 rounded-full ${server.cpu > 50 ? 'bg-yellow-500' : 'bg-green-500'}`}
                              style={{ width: `${server.cpu}%` }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-400">RAM</span>
                            <span className={server.ram > 80 ? 'text-orange-400' : server.ram > 60 ? 'text-yellow-400' : 'text-green-400'}>{server.ram}%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-1.5">
                            <div
                              className={`h-1.5 rounded-full ${server.ram > 80 ? 'bg-orange-500' : server.ram > 60 ? 'bg-yellow-500' : 'bg-green-500'}`}
                              style={{ width: `${server.ram}%` }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-400">Disco</span>
                            <span className={server.disk > 70 ? 'text-orange-400' : 'text-green-400'}>{server.disk}%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-1.5">
                            <div
                              className={`h-1.5 rounded-full ${server.disk > 70 ? 'bg-orange-500' : 'bg-green-500'}`}
                              style={{ width: `${server.disk}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Network & Services Status */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Network Metrics */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-green-400" />
                      Metriche di Rete
                    </h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Bandwidth In', value: '245 Mbps', max: '1 Gbps', pct: 24.5 },
                        { name: 'Bandwidth Out', value: '128 Mbps', max: '1 Gbps', pct: 12.8 },
                        { name: 'Latenza Media', value: '2.3 ms', max: '< 10 ms', pct: 23 },
                        { name: 'Packet Loss', value: '0.01%', max: '< 0.1%', pct: 10 },
                        { name: 'Connessioni Attive', value: '1,247', max: '10,000', pct: 12.5 },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm w-40">{item.name}</span>
                          <div className="flex-1 mx-3">
                            <div className="w-full bg-white/10 rounded-full h-1.5">
                              <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-1.5 rounded-full" style={{ width: `${item.pct}%` }} />
                            </div>
                          </div>
                          <span className="text-green-400 text-sm font-medium w-24 text-right">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Services Status */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <HardDrive className="w-4 h-4 text-green-400" />
                      Stato Servizi
                    </h4>
                    <div className="space-y-2">
                      {[
                        { name: 'Active Directory', status: 'running', uptime: '99.99%' },
                        { name: 'DNS Server', status: 'running', uptime: '99.98%' },
                        { name: 'DHCP Server', status: 'running', uptime: '99.99%' },
                        { name: 'File Server (SMB)', status: 'running', uptime: '99.95%' },
                        { name: 'Exchange / Mail', status: 'running', uptime: '99.90%' },
                        { name: 'Web Server (IIS/Nginx)', status: 'running', uptime: '99.97%' },
                        { name: 'Database (SQL)', status: 'warning', uptime: '99.85%' },
                        { name: 'Backup Service', status: 'running', uptime: '99.99%' },
                      ].map((svc, i) => (
                        <div key={i} className="flex items-center justify-between py-1.5 px-3 rounded-lg hover:bg-white/5 transition-colors">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              svc.status === 'running' ? 'bg-green-400' : 'bg-yellow-400'
                            } animate-pulse`} />
                            <span className="text-gray-300 text-sm">{svc.name}</span>
                          </div>
                          <span className={`text-xs font-medium ${
                            svc.status === 'running' ? 'text-green-400' : 'text-yellow-400'
                          }`}>
                            {svc.uptime}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* ===== WAZUH + ZABBIX INTEGRATION ===== */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="p-10 rounded-3xl glass-effect border border-purple-500/20">
                <div className="text-center space-y-6 mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Wazuh + Zabbix: <span className="bg-gradient-to-r from-red-400 via-purple-400 to-green-400 bg-clip-text text-transparent">Monitoraggio Completo</span>
                  </h2>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    L'integrazione di Wazuh e Zabbix offre una visione a 360° della tua infrastruttura IT,
                    combinando sicurezza e performance in un'unica strategia di monitoraggio.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-red-400 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Wazuh — Sicurezza
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Rilevamento minacce e intrusioni',
                        'Analisi log di sicurezza',
                        'File integrity monitoring',
                        'Vulnerability detection (CVE)',
                        'Compliance automatizzata',
                        'Incident response',
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                          <Check className="w-4 h-4 text-red-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-green-400 flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      Zabbix — Performance
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Monitoraggio risorse server (CPU, RAM, Disco)',
                        'Analisi traffico e latenza di rete',
                        'Stato servizi e applicazioni',
                        'Capacity planning e trend analysis',
                        'SLA monitoring e reporting',
                        'Alerting multi-canale',
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 text-center">
                  <p className="text-gray-400 text-lg mb-6">
                    Insieme, queste piattaforme forniscono <strong className="text-white">rilevamento proattivo</strong> delle minacce
                    e <strong className="text-white">ottimizzazione continua</strong> delle performance, riducendo i tempi di risposta
                    agli incidenti del <strong className="text-purple-400">75%</strong>.
                  </p>
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group bg-gradient-to-r from-red-600 via-purple-600 to-green-600 hover:from-red-700 hover:via-purple-700 hover:to-green-700 text-white px-10 py-7 text-lg rounded-2xl font-semibold"
                  >
                    Richiedi una demo gratuita
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
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
                  Pacchetti di Sicurezza Informatica
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Soluzioni scalabili per proteggere la tua azienda, dal assessment iniziale alla sicurezza gestita 24/7 con Wazuh e Zabbix.
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <MorphingSection key={index} delay={index * 0.15}>
                  <div
                    className={`relative p-8 rounded-3xl glass-effect border transition-all duration-500 hover:scale-105 h-full flex flex-col ${
                      pkg.highlighted
                        ? 'border-red-500/50 shadow-lg shadow-red-500/20'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    {pkg.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold uppercase tracking-wider">
                          Più Richiesto
                        </span>
                      </div>
                    )}

                    <div className="text-center space-y-4 mb-8">
                      <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                      <div className={`text-4xl font-bold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                        {pkg.hours}
                      </div>
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
                        className={`w-full py-6 rounded-2xl font-semibold text-white ${
                          pkg.highlighted
                            ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700'
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
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="space-y-12">
                <div className="text-center space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Sicurezza Informatica nel Dettaglio
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
                </div>

                <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                  <p>
                    La sicurezza informatica è diventata una <strong className="text-white">priorità assoluta per ogni
                    azienda</strong>, indipendentemente dalle dimensioni. Gli attacchi informatici sono in costante
                    aumento e le conseguenze di una violazione possono essere devastanti: perdita di dati,
                    interruzione dell'attività, danni reputazionali e sanzioni GDPR.
                  </p>

                  <p>
                    Il nostro approccio alla cybersecurity è <strong className="text-white">multilivello e proattivo</strong>.
                    Non ci limitiamo a installare un firewall: analizziamo l'intera superficie di attacco della tua
                    azienda, identifichiamo le vulnerabilità e implementiamo una strategia di difesa completa.
                  </p>

                  <p>
                    Utilizziamo <strong className="text-white">Wazuh come piattaforma SIEM</strong> (Security Information
                    and Event Management) per il monitoraggio centralizzato di tutti gli eventi di sicurezza.
                    Questo ci permette di rilevare anomalie, tentativi di intrusione e comportamenti sospetti
                    in tempo reale. Parallelamente, <strong className="text-white">Zabbix</strong> monitora le performance
                    dell'infrastruttura — CPU, RAM, disco, rete, servizi — garantendo che ogni componente
                    funzioni in modo ottimale e prevenendo downtime.
                  </p>

                  <p>
                    L'integrazione di <strong className="text-red-400">Wazuh</strong> e <strong className="text-green-400">Zabbix</strong> ci
                    consente di correlare eventi di sicurezza con metriche di performance, identificando pattern
                    che singolarmente sarebbero invisibili. Ad esempio, un picco anomalo di CPU combinato con
                    tentativi di login falliti può indicare un attacco in corso.
                  </p>

                  <p>
                    La <strong className="text-white">formazione del personale</strong> è un pilastro fondamentale della
                    nostra strategia: il fattore umano è spesso l'anello debole della catena di sicurezza.
                    Organizziamo sessioni di awareness su phishing, social engineering e best practice quotidiane.
                  </p>
                </div>
              </div>
            </MorphingSection>

            {/* Technologies Grid */}
            <MorphingSection delay={0.2}>
              <div className="mt-16">
                <h3 className="text-3xl font-bold text-white text-center mb-4">
                  Le Nostre Soluzioni di Sicurezza
                </h3>
                <p className="text-gray-400 text-center mb-12 text-lg">
                  Tecnologie e servizi per una protezione completa della tua azienda
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl glass-effect border border-white/5 hover:border-red-500/30 transition-all duration-300 group hover:bg-white/5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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

            {/* Warning Box */}
            <MorphingSection delay={0.3}>
              <div className="mt-12 p-8 rounded-3xl glass-effect border border-red-500/20">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">Lo sapevi?</h4>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Il <strong className="text-red-400">60% delle PMI</strong> che subisce un attacco informatico grave
                      chiude entro 6 mesi. Non aspettare che sia troppo tardi: investi nella sicurezza della tua
                      azienda oggi stesso.
                    </p>
                  </div>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <MorphingSection>
              <div className="p-12 rounded-3xl glass-effect border border-red-500/20 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Proteggi la tua azienda oggi
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Richiedi un vulnerability assessment gratuito con Wazuh e un health check infrastrutturale con Zabbix.
                  Analizziamo la tua infrastruttura e ti mostriamo dove sei vulnerabile.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-red-500/20"
                  >
                    Richiedi Assessment Gratuito
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
            <p className="text-xs text-gray-600">v1.6 - 09/03/2026</p>
          </div>
        </footer>

        <WhatsAppWidget />
      </div>
    </>
  );
}