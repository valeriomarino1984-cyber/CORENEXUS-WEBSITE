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
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema, localBusinessServiceSchema, standardAreaServed } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';
import { useState, useEffect, useRef } from 'react';

/* ── Animated scan line ── */
function ScanLine() {
  return (
    <div
      className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none z-10 opacity-40"
      style={{
        background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
        animation: 'socScan 6s ease-in-out infinite',
      }}
    />
  );
}

/* ── Blinking dot ── */
function BlinkDot({ color = 'bg-cyan-400' }: { color?: string }) {
  return (
    <span className={`inline-block w-1.5 h-1.5 rounded-full ${color} animate-pulse`} />
  );
}

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
          // Reset after a pause
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
    <div className="bg-[#0a0f14] border border-white/10 rounded-2xl p-6 font-mono text-xs leading-relaxed overflow-hidden">
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

/* ── Metric bar ── */
function MetricBar({
  label,
  value,
  pct,
  color,
}: {
  label: string;
  value: string;
  pct: number;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[11px] text-gray-500 tracking-wide min-w-[180px]">{label}</span>
      <div className="flex-1 h-1.5 bg-white/5 border border-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color} shadow-lg`}
          style={{ width: `${pct}%`, transition: 'width 1.8s ease-out' }}
        />
      </div>
      <span className="font-mono text-[11px] text-white min-w-[36px] text-right">{value}</span>
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
    { num: '< 5', unit: 'min', label: 'MTTD — Mean Time to Detect' },
    { num: '100+', unit: '', label: 'Agenti monitorati in tempo reale' },
    { num: '99.9%', unit: '', label: 'Uptime SLA garantito' },
    { num: '0-Day', unit: '', label: 'Threat intelligence feeds attivi' },
  ];

  const archLayer1 = [
    { name: 'Wazuh Agents', desc: 'Log, FIM, SCA, rootkit', dot: 'bg-red-500 shadow-red-500/50' },
    { name: 'Zabbix Agent', desc: 'Metriche infrastruttura', dot: 'bg-cyan-400 shadow-cyan-400/50' },
    { name: 'Syslog / CEF', desc: 'Firewall, switch, AP', dot: 'bg-orange-500 shadow-orange-500/50' },
    { name: 'Threat Intel Feeds', desc: 'Abuse.ch, OTX, CINS', dot: 'bg-green-400 shadow-green-400/50' },
  ];

  const archLayer2 = [
    { name: 'Wazuh Manager', desc: 'Rule engine, MITRE ATT&CK', dot: 'bg-red-500 shadow-red-500/50' },
    { name: 'OpenSearch', desc: 'Dashboard & analytics', dot: 'bg-cyan-400 shadow-cyan-400/50' },
    { name: 'AI Correlator', desc: 'Anomaly detection ML', dot: 'bg-orange-500 shadow-orange-500/50' },
  ];

  const archLayer3 = [
    { name: 'TheHive 5', desc: 'Case management IRP', dot: 'bg-red-500 shadow-red-500/50' },
    { name: 'Cortex', desc: 'Analisi IoC automatizzata', dot: 'bg-cyan-400 shadow-cyan-400/50' },
    { name: 'MISP', desc: 'Threat sharing platform', dot: 'bg-green-400 shadow-green-400/50' },
  ];

  const archLayer4 = [
    { name: 'Active Response', desc: 'IP block, quarantena host', dot: 'bg-red-500 shadow-red-500/50' },
    { name: 'AI Playbook', desc: 'Remediation guidata LLM', dot: 'bg-orange-500 shadow-orange-500/50' },
    { name: 'Report & GRC', desc: 'Compliance automatica', dot: 'bg-cyan-400 shadow-cyan-400/50' },
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
      gradient: 'from-red-500 to-red-700',
      borderColor: 'hover:border-red-500/40',
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
      borderColor: 'hover:border-orange-500/40',
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
      borderColor: 'hover:border-cyan-500/40',
      accentColor: 'text-cyan-400',
    },
    {
      icon: BarChart3,
      name: 'Zabbix',
      role: 'Infrastructure Monitoring · Dashboard',
      desc: 'Monitoraggio completo dell\'infrastruttura: server, switch, firewall, applicazioni. Dashboard real-time con alerting su soglie e anomalie.',
      features: [
        'Metriche CPU, RAM, disco, rete in tempo reale',
        'Trigger intelligenti con escalation multi-livello',
        'Dashboard personalizzate per reparto/cliente',
        'Integrazione alert → TheHive per correlazione',
      ],
      gradient: 'from-green-500 to-emerald-600',
      borderColor: 'hover:border-green-500/40',
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
      borderColor: 'hover:border-red-500/40',
      accentColor: 'text-red-400',
    },
  ];

  const aiFeatures = [
    'Classificazione automatica degli alert per severità e tipologia (brute force, lateral movement, exfiltration) tramite modello LLM fine-tuned su log di sicurezza.',
    'Correlazione cross-source: l\'IA mette in relazione eventi Wazuh, anomalie Zabbix e IoC Cortex per ricostruire la kill chain completa.',
    'Generazione automatica del report incidente in italiano, pronto per il responsabile sicurezza e conforme NIS2/ISO 27001.',
    'Esecuzione guidata del playbook: blocco IP, isolamento host, revoca credenziali — con approvazione umana opzionale per azioni ad alto impatto.',
    'Feedback loop: ogni decisione dell\'analista migliora il modello nel tempo, adattandosi al contesto specifico del cliente.',
  ];

  const processSteps = [
    { num: '01', title: 'Assessment', desc: 'Analisi dell\'infrastruttura, asset inventory, gap analysis NIS2/ISO 27001' },
    { num: '02', title: 'Design', desc: 'Architettura SOC su misura, sizing server, piano di deployment' },
    { num: '03', title: 'Deploy', desc: 'Installazione Wazuh, TheHive, Cortex, Zabbix. Tuning regole e soglie' },
    { num: '04', title: 'Integrazione AI', desc: 'Attivazione autoresponder, calibrazione modello, test playbook' },
    { num: '05', title: 'Go-Live & MDR', desc: 'Operatività, reportistica mensile, miglioramento continuo' },
  ];

  const ArchTool = ({ name, desc, dot }: { name: string; desc: string; dot: string }) => (
    <div className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/[0.04] transition-all duration-200 rounded-lg">
      <div className={`w-2 h-2 rounded-full ${dot} shadow-sm flex-shrink-0`} />
      <span className="text-white font-semibold text-sm tracking-wide">{name}</span>
      <span className="text-gray-500 text-xs ml-auto text-right max-w-[140px] leading-tight hidden sm:block">{desc}</span>
    </div>
  );

  return (
    <>
      <SEO
        title="SOC as a Service Roma | Security Operations Center 24/7 - CoreNexus"
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
        ]}
        canonical="/soc-as-a-service"
        schema={socSchema}
      />

      {/* Inject keyframe for scan animation */}
      <style>{`
        @keyframes socScan {
          0%   { top: 0; opacity: 0; }
          10%  { opacity: 0.4; }
          90%  { opacity: 0.4; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>

      <div className="min-h-screen bg-black">
        <Header />

        {/* ══════════════ HERO ══════════════ */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6 min-h-[90vh] flex items-center">
          <ScanLine />
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-cyan-950/10" />
          <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-red-500/[0.06] blur-3xl pointer-events-none" />
          <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float" />

          <div className="max-w-7xl mx-auto relative z-10 w-full">
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

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider mb-8">
                <BlinkDot color="bg-cyan-400" />
                SOC as a Service · Powered by Open Source &amp; AI
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.95] tracking-tight text-white mb-6">
                Security<br />
                Operations<br />
                <span className="text-red-500">Center</span>{' '}
                <span className="text-cyan-400">24/7</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-500 font-light max-w-xl leading-relaxed mb-10">
                Rilevazione, analisi e risposta agli incidenti con un ecosistema integrato:
                Wazuh SIEM, TheHive, Cortex, Zabbix e autoresponders potenziati dall&apos;Intelligenza Artificiale.
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="mailto:info@corenexus.it?subject=Richiesta%20Demo%20SOC%20Wazuh"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Richiedi una Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#architettura"
                  className="inline-flex items-center gap-2 border border-white/10 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 font-semibold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-200"
                >
                  Scopri l&apos;Architettura
                </a>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* ══════════════ STAT BAR ══════════════ */}
        <section className="border-y border-white/10 bg-[#0d1117]">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="p-8 border-r border-white/10 last:border-r-0">
                <div className="text-4xl md:text-5xl font-black text-white leading-none mb-1.5 tracking-tight">
                  {s.num.includes('<') ? (
                    <>
                      &lt; <span className="text-red-500">5</span>min
                    </>
                  ) : s.num.includes('+') ? (
                    <>
                      <span className="text-red-500">100</span>+
                    </>
                  ) : s.num.includes('%') ? (
                    <>
                      <span className="text-red-500">99.9</span>%
                    </>
                  ) : (
                    <>
                      <span className="text-red-500">0</span>-Day
                    </>
                  )}
                </div>
                <div className="font-mono text-[11px] text-gray-500 tracking-wider uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════ ARCHITETTURA ══════════════ */}
        <section id="architettura" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/5 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="font-mono text-[11px] text-red-500 tracking-widest uppercase mb-4">// Architettura</div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5 tracking-tight">
                Stack tecnico <span className="text-red-500">integrato</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-xl leading-relaxed mb-16">
                Un ecosistema open-source di livello enterprise orchestrato per rilevare, correlare e rispondere
                alle minacce in modo automatizzato e scalabile.
              </p>
            </MorphingSection>

            <MorphingSection delay={0.1}>
              <div className="bg-[#0d1117] border border-white/10 p-6 md:p-10 rounded-2xl">
                <div className="font-mono text-[11px] text-cyan-400 tracking-wider uppercase mb-8 flex items-center gap-3">
                  Flusso operativo SOC
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* Row 1: Raccolta → Analisi */}
                <div className="grid md:grid-cols-3 gap-1 mb-1">
                  <div className="bg-[#111820] border border-white/10 p-5 rounded-xl">
                    <div className="font-mono text-[10px] text-gray-500 tracking-wider uppercase mb-4 pb-3 border-b border-white/10">
                      01 · Raccolta &amp; Telemetria
                    </div>
                    <div className="space-y-2">
                      {archLayer1.map((t, i) => (
                        <ArchTool key={i} {...t} />
                      ))}
                    </div>
                  </div>

                  <div className="hidden md:flex flex-col items-center justify-center gap-2 p-4">
                    <div className="text-2xl text-red-500 animate-pulse">⟶</div>
                    <div className="font-mono text-[10px] text-gray-500 tracking-wider text-center leading-relaxed">
                      CORRELAZIONE<br />&amp;<br />ANALISI
                    </div>
                    <div className="text-2xl text-red-500 animate-pulse">⟶</div>
                  </div>

                  <div className="bg-[#111820] border border-white/10 p-5 rounded-xl">
                    <div className="font-mono text-[10px] text-gray-500 tracking-wider uppercase mb-4 pb-3 border-b border-white/10">
                      02 · SIEM &amp; Analisi
                    </div>
                    <div className="space-y-2">
                      {archLayer2.map((t, i) => (
                        <ArchTool key={i} {...t} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="h-px bg-white/10 my-1" />

                {/* Row 2: Gestione Incidenti → Risposta */}
                <div className="grid md:grid-cols-3 gap-1">
                  <div className="bg-[#111820] border border-white/10 p-5 rounded-xl">
                    <div className="font-mono text-[10px] text-gray-500 tracking-wider uppercase mb-4 pb-3 border-b border-white/10">
                      03 · Gestione Incidenti
                    </div>
                    <div className="space-y-2">
                      {archLayer3.map((t, i) => (
                        <ArchTool key={i} {...t} />
                      ))}
                    </div>
                  </div>

                  <div className="hidden md:flex flex-col items-center justify-center gap-2 p-4">
                    <div className="text-2xl text-red-500 animate-pulse">⟵</div>
                    <div className="font-mono text-[10px] text-gray-500 tracking-wider text-center leading-relaxed">
                      RISPOSTA<br />AUTOMATICA
                    </div>
                    <div className="text-2xl text-red-500 animate-pulse">⟵</div>
                  </div>

                  <div className="bg-[#111820] border border-white/10 p-5 rounded-xl">
                    <div className="font-mono text-[10px] text-gray-500 tracking-wider uppercase mb-4 pb-3 border-b border-white/10">
                      04 · Risposta &amp; Remediation
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
        <section id="componenti" className="py-24 px-6 relative bg-[#0d1117] border-y border-white/10">
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="font-mono text-[11px] text-red-500 tracking-widest uppercase mb-4">// Componenti</div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5 tracking-tight">
                Le piattaforme <span className="text-red-500">al centro</span> del SOC
              </h2>
              <p className="text-gray-500 text-lg max-w-xl leading-relaxed mb-16">
                Ogni strumento è scelto per robustezza, licenza open-source e integrabilità.
                CoreNexus li orchestra in un unico ecosistema coerente.
              </p>
            </MorphingSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
              {components.map((comp, i) => (
                <MorphingSection key={i} delay={i * 0.08}>
                  <div
                    className={`bg-[#0d1117] border border-white/10 ${comp.borderColor} p-8 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group h-full rounded-xl`}
                  >
                    {/* Top accent line */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${comp.gradient} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`}
                    />

                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-[#111820] border border-white/10 flex items-center justify-center mb-5 rounded-lg relative">
                        <comp.icon className={`w-6 h-6 ${comp.accentColor}`} />
                        <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-br ${comp.gradient} shadow-lg animate-pulse`} />
                      </div>

                      <h3 className="text-xl font-bold text-white tracking-wide mb-1">{comp.name}</h3>
                      <div className={`font-mono text-[10px] ${comp.accentColor} tracking-widest uppercase mb-4`}>
                        {comp.role}
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">{comp.desc}</p>

                      <ul className="space-y-0">
                        {comp.features.map((f, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-2 py-2 border-t border-white/5 text-gray-500 text-[13px]"
                          >
                            <ChevronRight className={`w-3 h-3 ${comp.accentColor} flex-shrink-0`} />
                            {f}
                          </li>
                        ))}
                      </ul>
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
              <div className="font-mono text-[11px] text-red-500 tracking-widest uppercase mb-4">// Intelligenza Artificiale</div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-10 tracking-tight">
                Risposta <span className="text-red-500">autonoma</span> potenziata dall&apos;IA
              </h2>
            </MorphingSection>

            <MorphingSection delay={0.1}>
              <div className="bg-gradient-to-br from-[#0d1117] to-[#111820] border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden">
                {/* Big AI watermark */}
                <div className="absolute -right-5 -top-5 text-[160px] font-black text-red-500/[0.04] leading-none pointer-events-none select-none">
                  AI
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
                  <div>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                      Il layer AI di CoreNexus si integra con Wazuh e TheHive per analizzare ogni alert
                      in contesto, ridurre i falsi positivi e attivare risposte automatiche proporzionate alla minaccia.
                    </p>

                    <ul className="space-y-0">
                      {aiFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-4 py-4 border-b border-white/5 last:border-b-0">
                          <span className="font-mono text-[11px] text-red-500 min-w-[24px] pt-0.5">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="text-gray-500 text-sm leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
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
        <section id="monitoring" className="py-24 px-6 relative bg-[#0d1117] border-y border-white/10">
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="font-mono text-[11px] text-red-500 tracking-widest uppercase mb-4">// Monitoring</div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5 tracking-tight">
                Visibilità <span className="text-red-500">totale</span> sull&apos;infrastruttura
              </h2>
              <p className="text-gray-500 text-lg max-w-xl leading-relaxed mb-16">
                Zabbix garantisce il controllo in tempo reale di ogni componente.
                Dashboard custom, alert predittivi e correlazione con gli eventi di sicurezza Wazuh.
              </p>
            </MorphingSection>

            <MorphingSection delay={0.1}>
              <div className="grid lg:grid-cols-2 gap-[2px] bg-[#0d1117] border border-white/10 rounded-2xl overflow-hidden">
                {/* Left: Info */}
                <div className="p-8 md:p-10 border-r border-white/10">
                  <div className="font-mono text-[10px] text-green-400 tracking-widest uppercase mb-5">
                    Dashboard Zabbix · Infrastruttura Cliente
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Ogni deployment CoreNexus include dashboard Zabbix personalizzate per il cliente,
                    con viste separate per IT manager, sistemisti e security team.
                    Alert su soglie critiche integrati direttamente in TheHive come alert di supporto.
                  </p>
                  <ul className="space-y-0">
                    {[
                      'Monitoraggio agentless SNMP per dispositivi di rete',
                      'Alert predittivi su tendenze di saturazione',
                      'SLA tracking per servizi critici',
                      'Integrazione webhook → Teams / Slack / Email',
                      'Correlazione metriche infra ↔ alert sicurezza',
                    ].map((f, i) => (
                      <li key={i} className="flex items-center gap-2 py-2 border-t border-white/5 text-gray-500 text-[13px]">
                        <ChevronRight className="w-3 h-3 text-green-400 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Metrics */}
                <div className="p-8 md:p-10">
                  <div className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase mb-6">
                    Esempio metriche monitorate
                  </div>
                  <div className="space-y-4">
                    <MetricBar label="CPU Load (avg 5min)" value="72%" pct={72} color="bg-cyan-400 shadow-cyan-400/30" />
                    <MetricBar label="RAM Utilizzo" value="61%" pct={61} color="bg-green-400 shadow-green-400/30" />
                    <MetricBar label="Disco /var/log" value="88%" pct={88} color="bg-red-500 shadow-red-500/30" />
                    <MetricBar label="Network Throughput" value="43%" pct={43} color="bg-cyan-400 shadow-cyan-400/30" />
                    <MetricBar label="Wazuh Agents Online" value="97%" pct={97} color="bg-green-400 shadow-green-400/30" />
                    <MetricBar label="Active Response Fired" value="3" pct={15} color="bg-orange-500 shadow-orange-500/30" />
                    <MetricBar label="Open TheHive Cases" value="4" pct={20} color="bg-red-500 shadow-red-500/30" />
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
              <div className="font-mono text-[11px] text-red-500 tracking-widest uppercase mb-4">// Metodologia</div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5 tracking-tight">
                Come <span className="text-red-500">lavoriamo</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-xl leading-relaxed mb-16">
                Dal primo assessment all&apos;operatività completa in meno di 30 giorni,
                con un processo strutturato e documentato in ogni fase.
              </p>
            </MorphingSection>

            <MorphingSection delay={0.1}>
              <div className="relative">
                {/* Connecting line (desktop) */}
                <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0">
                  {processSteps.map((step, i) => (
                    <div key={i} className="text-center px-2 lg:px-4 relative z-10 group">
                      <div className="w-14 h-14 bg-[#0d1117] border border-white/10 rounded-full flex items-center justify-center mx-auto mb-5 font-mono text-sm font-bold text-red-500 group-hover:border-red-500/50 group-hover:shadow-lg group-hover:shadow-red-500/20 transition-all duration-300">
                        {step.num}
                      </div>
                      <h4 className="text-white font-bold text-base tracking-wide mb-2">{step.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* ══════════════ CTA ══════════════ */}
        <section className="py-20 px-6 relative border-t border-white/10">
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="bg-[#0d1117] border border-white/10 border-l-[3px] border-l-red-500 p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-2xl">
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
                    Pronto a proteggere<br />la tua infrastruttura?
                  </h3>
                  <p className="text-gray-500 text-[15px] max-w-md leading-relaxed">
                    Parliamo della tua situazione. Offriamo una sessione di assessment gratuita
                    per analizzare la tua infrastruttura e progettare il SOC più adatto alle tue esigenze.
                  </p>
                </div>
                <div className="flex gap-4 flex-wrap shrink-0">
                  <a
                    href="mailto:info@corenexus.it?subject=Richiesta%20Demo%20SOC%20Wazuh"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Prenota una Demo
                  </a>
                  <a
                    href="tel:+393534012055"
                    className="inline-flex items-center gap-2 border border-white/10 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 font-semibold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-200"
                  >
                    Chiama ora
                  </a>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0d1117] border-t border-white/10 py-10 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white font-bold tracking-widest text-lg">
              CORE<span className="text-red-500">NEXUS</span> Technology Solution
            </div>
            <p className="font-mono text-[10px] text-gray-500 tracking-wider">
              Roma Sud · Ostia · Fiumicino · EUR · Acilia · Pomezia
            </p>
            <p className="font-mono text-[10px] text-gray-500 tracking-wider">
              © 2026 CoreNexus. Tutti i diritti riservati.
            </p>
          </div>
        </footer>

        <WhatsAppWidget />
      </div>
    </>
  );
}