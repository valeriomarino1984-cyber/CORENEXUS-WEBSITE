import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ArrowLeft,
  Shield,
  Eye,
  Activity,
  Bug,
  AlertTriangle,
  Server,
  Cpu,
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
  FileText,
  Search,
  Brain,
  Target,
  CheckCircle2,
  ChevronRight,
  Terminal,
  Share2,
  Check,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema, localBusinessServiceSchema, standardAreaServed } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';
import { useState, useEffect, useRef } from 'react';

/* ── AI Terminal animation ── */
function AITerminal() {
  const lines = [
    { type: 'comment', text: '# Wazuh alert ricevuto' },
    { type: 'kv', key: 'rule.id', val: '5710', valClass: 'text-green-400' },
    { type: 'kv', key: 'desc', val: 'SSH brute-force detected', valClass: 'text-gray-300' },
    { type: 'kv', key: 'src_ip', val: '192.168.4.87', valClass: 'text-red-400' },
    { type: 'kv', key: 'attempts', val: '847 in 60s', valClass: 'text-red-400' },
    { type: 'blank' },
    { type: 'comment', text: '# AI Correlator processing...' },
    { type: 'kv', key: 'threat_score', val: 'CRITICAL (9.4)', valClass: 'text-red-400' },
    { type: 'kv', key: 'mitre', val: 'T1110.001 — Brute Force', valClass: 'text-green-400' },
    { type: 'kv', key: 'ioc_match', val: 'AbuseIPDB 98/100', valClass: 'text-red-400' },
    { type: 'blank' },
    { type: 'comment', text: '# Autoresponder attivato' },
    { type: 'kv', key: 'action_1', val: 'firewall-drop → OK', valClass: 'text-green-400' },
    { type: 'kv', key: 'action_2', val: 'TheHive case → #2847', valClass: 'text-green-400' },
    { type: 'kv', key: 'action_3', val: 'report generato → ✓', valClass: 'text-green-400' },
    { type: 'kv', key: 'elapsed', val: '00:00:04.2', valClass: 'text-green-400' },
  ];

  const [visibleLines, setVisibleLines] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= lines.length) {
          setTimeout(() => setVisibleLines(0), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 300);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [lines.length]);

  return (
    <div className="p-6 rounded-2xl glass-effect border border-red-500/20 font-mono text-xs leading-relaxed overflow-hidden">
      <div className="text-gray-500 border-b border-white/10 pb-2 mb-3 text-[10px] tracking-wider uppercase">
        // AI ALERT ANALYSIS ENGINE · LIVE
      </div>
      {lines.slice(0, visibleLines).map((line, i) => {
        if (line.type === 'blank') return <div key={i} className="h-3" />;
        if (line.type === 'comment')
          return (
            <div key={i} className="text-gray-500">
              {line.text}
            </div>
          );
        return (
          <div key={i}>
            <span className="text-cyan-400">{line.key}</span>
            <span className="text-gray-500">: </span>
            <span className={line.valClass}>{line.val}</span>
          </div>
        );
      })}
      <span className="inline-block w-2 h-3.5 bg-cyan-400 align-middle animate-pulse mt-1" />
    </div>
  );
}

export default function SocAsAService() {
  const navigate = useNavigate();
  const scrollToContact = () => {
    navigate('/#contact');
  };

  const socBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
    { name: 'SOC as a Service', url: '/soc-as-a-service' },
  ]);

  const socSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      localBusinessServiceSchema(
        'SOC as a Service Roma | Security Operations Center',
        'SOC as a Service per aziende a Roma, EUR, Ostia Lido, Fiumicino e Pomezia. Wazuh SIEM, TheHive, Cortex, Zabbix e AI Autoresponder per rilevazione, analisi e risposta agli incidenti 24/7.',
        '/soc-as-a-service',
        'SOC as a Service'
      ),
      socBreadcrumb,
      {
        '@type': 'Service',
        name: 'SOC as a Service — Security Operations Center',
        description:
          'Servizio SOC gestito con Wazuh SIEM, TheHive 5, Cortex, Zabbix e AI Autoresponder. Rilevazione minacce, gestione incidenti, risposta automatica e monitoraggio infrastruttura 24/7 per aziende a Roma.',
        provider: {
          '@type': 'Organization',
          name: 'CoreNexus Technology Solution',
          url: 'https://corenexus.it',
        },
        areaServed: standardAreaServed,
        serviceType: 'SOC as a Service',
      },
    ],
  };

  const stats = [
    { num: '< 5 min', label: 'MTTD — Mean Time to Detect', icon: Clock, color: 'from-red-500 to-orange-500' },
    { num: '100+', label: 'Agenti monitorati in tempo reale', icon: Server, color: 'from-orange-500 to-yellow-500' },
    { num: '99.9%', label: 'Uptime SLA garantito', icon: MonitorCheck, color: 'from-yellow-500 to-red-500' },
    { num: '0-Day', label: 'Threat intelligence feeds attivi', icon: Shield, color: 'from-red-500 to-pink-500' },
  ];

  const archLayer1 = [
    { name: 'Wazuh Agents', desc: 'Log, FIM, SCA, rootkit', color: 'text-red-400' },
    { name: 'Zabbix Agent', desc: 'Metriche infrastruttura', color: 'text-cyan-400' },
    { name: 'Syslog / CEF', desc: 'Firewall, switch, AP', color: 'text-orange-400' },
    { name: 'Threat Intel Feeds', desc: 'Abuse.ch, OTX, CINS', color: 'text-green-400' },
  ];

  const archLayer2 = [
    { name: 'Wazuh Manager', desc: 'Rule engine, MITRE ATT&CK', color: 'text-red-400' },
    { name: 'OpenSearch', desc: 'Dashboard & analytics', color: 'text-cyan-400' },
    { name: 'AI Correlator', desc: 'Anomaly detection ML', color: 'text-orange-400' },
  ];

  const archLayer3 = [
    { name: 'TheHive 5', desc: 'Case management IRP', color: 'text-red-400' },
    { name: 'Cortex', desc: 'Analisi IoC automatizzata', color: 'text-cyan-400' },
    { name: 'MISP', desc: 'Threat sharing platform', color: 'text-green-400' },
  ];

  const archLayer4 = [
    { name: 'Active Response', desc: 'IP block, quarantena host', color: 'text-red-400' },
    { name: 'AI Playbook', desc: 'Remediation guidata LLM', color: 'text-orange-400' },
    { name: 'Report & GRC', desc: 'Compliance automatica', color: 'text-cyan-400' },
  ];

  const components = [
    {
      icon: Shield,
      name: 'Wazuh',
      role: 'SIEM · XDR · HIDS',
      desc: 'Piattaforma SIEM/XDR open-source di riferimento per la raccolta e correlazione di log, rilevazione di intrusioni, File Integrity Monitoring e conformità normativa.',
      features: [
        'Mappatura MITRE ATT&CK in tempo reale',
        'Active Response automatico (firewall-drop, quarantena)',
        'Dashboard OpenSearch personalizzate',
        'Supporto PCI-DSS, ISO 27001, NIS2',
      ],
      gradient: 'from-red-500 to-orange-500',
      borderColor: 'hover:border-red-500/30',
      accentColor: 'text-red-400',
    },
    {
      icon: Search,
      name: 'TheHive 5',
      role: 'Incident Response · Case Management',
      desc: 'Piattaforma open-source per la gestione degli incidenti di sicurezza. Centralizza casi, task, osservabili e comunicazioni del team SOC.',
      features: [
        'Import alert automatico da Wazuh',
        'Template playbook per tipologia di incidente',
        'Timeline forense integrata',
        'Notifiche email/Slack su escalation',
      ],
      gradient: 'from-orange-500 to-amber-600',
      borderColor: 'hover:border-orange-500/30',
      accentColor: 'text-orange-400',
    },
    {
      icon: Cpu,
      name: 'Cortex',
      role: 'Analizzatore IoC · Automation Engine',
      desc: 'Motore di analisi degli indicatori di compromissione (IoC). Integra decine di servizi esterni per arricchire automaticamente gli osservabili di TheHive.',
      features: [
        'Analisi IP/URL/hash su VirusTotal, Shodan, AbuseIPDB',
        'Responder per azioni di remediation automatica',
        'Analisi in parallelo multi-analyzer',
        'Report IoC allegati ai casi TheHive',
      ],
      gradient: 'from-cyan-500 to-blue-600',
      borderColor: 'hover:border-cyan-500/30',
      accentColor: 'text-cyan-400',
    },
    {
      icon: BarChart3,
      name: 'Zabbix',
      role: 'Infrastructure Monitoring · Dashboard',
      desc: "Monitoraggio completo dell'infrastruttura: server, switch, firewall, applicazioni. Dashboard real-time con alerting su soglie e anomalie.",
      features: [
        'Metriche CPU, RAM, disco, rete in tempo reale',
        'Trigger intelligenti con escalation multi-livello',
        'Dashboard personalizzate per reparto/cliente',
        'Integrazione alert → TheHive per correlazione',
      ],
      gradient: 'from-green-500 to-emerald-600',
      borderColor: 'hover:border-green-500/30',
      accentColor: 'text-green-400',
    },
    {
      icon: Brain,
      name: 'AI Autoresponder',
      role: 'LLM-Powered · Playbook Automation',
      desc: 'Layer di intelligenza artificiale che analizza gli alert, suggerisce e attiva automaticamente le azioni di risposta più appropriate, riducendo i falsi positivi.',
      features: [
        'Classificazione alert con LLM (severità, tipo, contesto)',
        'Generazione automatica report incidente in italiano',
        'Raccomandazione playbook contestuale',
        'Apprendimento su pattern storici client-specifici',
      ],
      gradient: 'from-red-500 to-purple-600',
      borderColor: 'hover:border-red-500/30',
      accentColor: 'text-red-400',
    },
  ];

  const aiFeatures = [
    'Classificazione automatica degli alert per severità e tipologia (brute force, lateral movement, exfiltration) tramite modello LLM fine-tuned su log di sicurezza.',
    "Correlazione cross-source: l'IA mette in relazione eventi Wazuh, anomalie Zabbix e IoC Cortex per ricostruire la kill chain completa.",
    'Generazione automatica del report incidente in italiano, pronto per il responsabile sicurezza e conforme NIS2/ISO 27001.',
    'Esecuzione guidata del playbook: blocco IP, isolamento host, revoca credenziali — con approvazione umana opzionale per azioni ad alto impatto.',
    "Feedback loop: ogni decisione dell'analista migliora il modello nel tempo, adattandosi al contesto specifico del cliente.",
  ];

  const monitoringFeatures = [
    'Monitoraggio agentless SNMP per dispositivi di rete',
    'Alert predittivi su tendenze di saturazione',
    'SLA tracking per servizi critici',
    'Integrazione webhook → Teams / Slack / Email',
    'Correlazione metriche infra ↔ alert sicurezza',
  ];

  const monitoringMetrics = [
    { label: 'CPU Load (avg 5min)', value: '72%', pct: 72, color: 'bg-gradient-to-r from-cyan-500 to-cyan-400' },
    { label: 'RAM Utilizzo', value: '61%', pct: 61, color: 'bg-gradient-to-r from-green-500 to-green-400' },
    { label: 'Disco /var/log', value: '88%', pct: 88, color: 'bg-gradient-to-r from-red-500 to-red-400' },
    { label: 'Network Throughput', value: '43%', pct: 43, color: 'bg-gradient-to-r from-cyan-500 to-cyan-400' },
    { label: 'Wazuh Agents Online', value: '97%', pct: 97, color: 'bg-gradient-to-r from-green-500 to-green-400' },
    { label: 'Active Response Fired', value: '3', pct: 15, color: 'bg-gradient-to-r from-orange-500 to-orange-400' },
    { label: 'Open TheHive Cases', value: '4', pct: 20, color: 'bg-gradient-to-r from-red-500 to-red-400' },
  ];

  const processSteps = [
    { num: '01', title: 'Assessment', desc: "Analisi dell'infrastruttura, asset inventory, gap analysis NIS2/ISO 27001", gradient: 'from-red-500 to-orange-500' },
    { num: '02', title: 'Design', desc: 'Architettura SOC su misura, sizing server, piano di deployment', gradient: 'from-orange-500 to-yellow-500' },
    { num: '03', title: 'Deploy', desc: 'Installazione Wazuh, TheHive, Cortex, Zabbix. Tuning regole e soglie', gradient: 'from-yellow-500 to-red-500' },
    { num: '04', title: 'Integrazione AI', desc: 'Attivazione autoresponder, calibrazione modello, test playbook', gradient: 'from-red-500 to-purple-500' },
    { num: '05', title: 'Go-Live & MDR', desc: 'Operatività, reportistica mensile, miglioramento continuo', gradient: 'from-purple-500 to-red-500' },
  ];

  const keyPoints = [
    'Rilevazione, analisi e risposta agli incidenti 24/7',
    'Ecosistema integrato: Wazuh SIEM, TheHive, Cortex, Zabbix',
    'Autoresponders potenziati dall\'Intelligenza Artificiale',
    'Blocco automatico degli IP malevoli con Active Response',
    'Report e compliance NIS2/ISO 27001 automatizzati',
  ];

  const ArchTool = ({ name, desc, color }: { name: string; desc: string; color: string }) => (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/20 transition-colors">
      <Check className={`w-4 h-4 ${color} flex-shrink-0 mt-0.5`} />
      <div>
        <span className="text-white font-medium text-sm block">{name}</span>
        <span className="text-gray-400 text-xs">{desc}</span>
      </div>
    </div>
  );

  return (
    <>
      <SEO
        title="SOC as a Service per aziende a Roma, EUR, Ostia, Fiumicino e Pomezia. Security Operations Center gestito con Wazuh SIEM, TheHive, Cortex, Zabbix e AI Autoresponder. Rilevazione minacce 24/7, incident response e compliance NIS2. Preventivo gratuito."
        description="SOC as a Service per aziende a Roma. Wazuh SIEM, TheHive, Cortex, Zabbix e AI Autoresponder. Rilevazione minacce, gestione incidenti e risposta automatica 24/7. CoreNexus Technology Solution."
        keywords={[
          'SOC as a Service Roma',
          'Security Operations Center Roma',
          'SOC gestito Roma',
          'Wazuh SIEM Roma',
          'TheHive Roma',
          'Cortex analisi IoC',
          'Zabbix monitoring Roma',
          'AI cybersecurity Roma',
          'rilevamento minacce Roma',
          'incident response Roma',
          'MITRE ATT&CK Roma',
          'MDR Roma',
          'monitoraggio sicurezza 24/7',
          'SOC open source',
          'cybersecurity PMI Roma',
          'SOC Roma EUR',
          'Security Operations Center Ostia Fiumicino',
          'NIS2 compliance Roma',
          'SOC as a Service PMI Roma',
        ]}
        canonical="/soc-as-a-service"
        schema={socSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* ══════════════ HERO ══════════════ */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6 premium-gradient">
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
                      SOC as a Service · Powered by Open Source &amp; AI
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                      Security Operations Center
                    </span>
                    <br />
                    <span className="text-white">24/7</span><span className="block text-3xl md:text-4xl text-gray-400 mt-2 font-normal">per aziende a Roma, EUR, Ostia e Fiumicino</span>
                  </h1>

                  <p className="text-xl text-gray-400 leading-relaxed">
                    Rilevazione, analisi e risposta agli incidenti con un ecosistema integrato:
                    <strong className="text-white"> Wazuh SIEM</strong>, <strong className="text-white">TheHive</strong>,{' '}
                    <strong className="text-white">Cortex</strong>, <strong className="text-white">Zabbix</strong> e
                    autoresponders potenziati dall&apos;Intelligenza Artificiale.
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

                  <div className="flex gap-4 flex-wrap">
                    <Button
                      size="lg"
                      onClick={() => window.location.href = 'mailto:info@corenexus.it?subject=Richiesta%20Demo%20SOC%20Wazuh'}
                      className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-red-500/20"
                    >
                      Richiedi una Demo
                      <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                    <a href="#architettura">
                      <Button
                        size="lg"
                        variant="outline"
                        className="glass-effect border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-10 py-7 text-lg rounded-2xl font-semibold"
                      >
                        Scopri l&apos;Architettura
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Right side - Visual element */}
                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl glass-effect border border-red-500/20 p-8 flex flex-col items-center justify-center gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        {[Shield, Eye, Activity, Brain, Search, Cpu, BarChart3, Ban, Bell].map((Icon, i) => (
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

        {/* ══════════════ STAT BAR ══════════════ */}
        <section className="py-16 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className="p-6 rounded-2xl glass-effect border border-white/5 hover:border-red-500/30 transition-all duration-300 text-center group hover:scale-105">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <s.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${s.color} bg-clip-text text-transparent mb-2`}>
                      {s.num}
                    </div>
                    <div className="text-gray-400 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* ══════════════ ARCHITETTURA ══════════════ */}
        <section id="architettura" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-effect border border-red-500/30">
                  <Eye className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Architettura</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Stack tecnico <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">integrato</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Un ecosistema open-source di livello enterprise orchestrato per rilevare, correlare e rispondere
                  alle minacce in modo automatizzato e scalabile.
                </p>
              </div>
            </MorphingSection>

            <MorphingSection delay={0.1}>
              <div className="p-8 rounded-3xl glass-effect border border-red-500/20">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Activity className="w-6 h-6 text-red-400" />
                  Flusso Operativo SOC
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Layer 1 */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 text-sm font-medium">01 · Raccolta &amp; Telemetria</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-red-500/20 text-red-400">Input</span>
                    </div>
                    <div className="space-y-2">
                      {archLayer1.map((t, i) => (
                        <ArchTool key={i} {...t} />
                      ))}
                    </div>
                  </div>

                  {/* Layer 2 */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 text-sm font-medium">02 · SIEM &amp; Analisi</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-400">Correlazione</span>
                    </div>
                    <div className="space-y-2">
                      {archLayer2.map((t, i) => (
                        <ArchTool key={i} {...t} />
                      ))}
                    </div>
                  </div>

                  {/* Layer 3 */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 text-sm font-medium">03 · Gestione Incidenti</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400">IRP</span>
                    </div>
                    <div className="space-y-2">
                      {archLayer3.map((t, i) => (
                        <ArchTool key={i} {...t} />
                      ))}
                    </div>
                  </div>

                  {/* Layer 4 */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 text-sm font-medium">04 · Risposta &amp; Remediation</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Output</span>
                    </div>
                    <div className="space-y-2">
                      {archLayer4.map((t, i) => (
                        <ArchTool key={i} {...t} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* ══════════════ COMPONENTI ══════════════ */}
        <section id="componenti" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/15 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-effect border border-red-500/30">
                  <Cpu className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Componenti</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Le piattaforme <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">al centro</span> del SOC
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Ogni strumento è scelto per robustezza, licenza open-source e integrabilità.
                  CoreNexus li orchestra in un unico ecosistema coerente.
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((comp, i) => (
                <MorphingSection key={i} delay={i * 0.08}>
                  <div
                    className={`p-6 rounded-2xl glass-effect border border-white/5 ${comp.borderColor} transition-all duration-500 group hover:bg-white/5 h-full`}
                  >
                    <div className="flex flex-col items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${comp.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <comp.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-1">{comp.name}</h4>
                        <div className={`text-xs ${comp.accentColor} font-medium uppercase tracking-wider mb-3`}>
                          {comp.role}
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">{comp.desc}</p>
                        <ul className="space-y-2">
                          {comp.features.map((f, j) => (
                            <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                              <Check className={`w-4 h-4 ${comp.accentColor} flex-shrink-0 mt-0.5`} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ AI SECTION ══════════════ */}
        <section id="ai" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-effect border border-red-500/30">
                  <Brain className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Intelligenza Artificiale</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Risposta <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">autonoma</span> potenziata dall&apos;IA
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Il layer AI di CoreNexus si integra con Wazuh e TheHive per analizzare ogni alert
                  in contesto, ridurre i falsi positivi e attivare risposte automatiche proporzionate alla minaccia.
                </p>
              </div>
            </MorphingSection>

            <MorphingSection delay={0.1}>
              <div className="p-8 rounded-3xl glass-effect border border-red-500/20">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="space-y-0">
                      {aiFeatures.map((feat, i) => (
                        <div key={i} className="flex items-start gap-4 py-4 border-b border-white/5 last:border-b-0">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                          </div>
                          <span className="text-gray-400 text-sm leading-relaxed">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <AITerminal />
                  </div>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* ══════════════ MONITORING ZABBIX ══════════════ */}
        <section id="monitoring" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/15 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-effect border border-green-500/30">
                  <Activity className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Monitoring</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Visibilità <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">totale</span> sull&apos;infrastruttura
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Zabbix garantisce il controllo in tempo reale di ogni componente.
                  Dashboard custom, alert predittivi e correlazione con gli eventi di sicurezza Wazuh.
                </p>
              </div>
            </MorphingSection>

            <MorphingSection delay={0.1}>
              <div className="p-8 rounded-3xl glass-effect border border-green-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Gauge className="w-6 h-6 text-green-400" />
                  Dashboard Zabbix — Infrastruttura Cliente
                </h3>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left: Info */}
                  <div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      Ogni deployment CoreNexus include dashboard Zabbix personalizzate per il cliente,
                      con viste separate per IT manager, sistemisti e security team.
                      Alert su soglie critiche integrati direttamente in TheHive come alert di supporto.
                    </p>
                    <ul className="space-y-3">
                      {monitoringFeatures.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Metrics */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 text-sm font-medium">Esempio metriche monitorate</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Live</span>
                    </div>
                    <div className="space-y-4">
                      {monitoringMetrics.map((m, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-400">{m.label}</span>
                            <span className={m.pct > 80 ? 'text-red-400' : m.pct > 60 ? 'text-yellow-400' : 'text-green-400'}>{m.value}</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${m.color}`}
                              style={{ width: `${m.pct}%`, transition: 'width 1.8s ease-out' }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* ══════════════ PROCESSO ══════════════ */}
        <section id="processo" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-effect border border-red-500/30">
                  <Target className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Metodologia</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Come <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">lavoriamo</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Dal primo assessment all&apos;operatività completa in meno di 30 giorni,
                  con un processo strutturato e documentato in ogni fase.
                </p>
              </div>
            </MorphingSection>

            <MorphingSection delay={0.1}>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                {processSteps.map((step, i) => (
                  <div key={i} className="text-center group">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-white text-lg font-bold">{step.num}</span>
                    </div>
                    <h4 className="text-white font-bold text-base mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* ══════════════ CTA ══════════════ */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <MorphingSection>
              <div className="p-12 rounded-3xl glass-effect border border-red-500/20 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Pronto a proteggere la tua infrastruttura?
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Parliamo della tua situazione. Offriamo una sessione di assessment gratuita
                  per analizzare la tua infrastruttura e progettare il SOC più adatto alle tue esigenze.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => window.location.href = 'mailto:info@corenexus.it?subject=Richiesta%20Demo%20SOC%20Wazuh'}
                    className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-red-500/20"
                  >
                    Prenota una Demo
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                  <a href="tel:+393534012055">
                    <Button
                      size="lg"
                      variant="outline"
                      className="glass-effect border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-10 py-7 text-lg rounded-2xl font-semibold"
                    >
                      Chiama Ora
                    </Button>
                  </a>
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
            <p className="text-xs text-gray-600">v2.1 - 26/05/2026</p>
          </div>
        </footer>

        <WhatsAppWidget />
      </div>
    </>
  );
}
