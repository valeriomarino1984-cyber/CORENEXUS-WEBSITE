import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ArrowLeft,
  Wrench,
  Monitor,
  HardDrive,
  Server,
  Cloud,
  Database,
  Cpu,
  Settings,
  Check,
  Headphones,
  Clock,
  RefreshCw,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { breadcrumbSchema } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';

export default function AssistenzaSistemistica() {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  const assistenzaBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
    { name: 'Assistenza Sistemistica', url: '/assistenza-sistemistica' },
  ]);

  const assistenzaSchema = {
    "@context": "https://schema.org",
    "@graph": [
      assistenzaBreadcrumb,
      {
        "@type": "Service",
        "name": "Assistenza Sistemistica Professionale",
        "description": "Supporto IT completo per aziende a Roma: manutenzione server, help desk, backup, gestione infrastrutture, monitoraggio sistemi",
        "provider": {
          "@type": "Organization",
          "name": "CoreNexus",
          "url": "https://corenexus.it"
        },
        "areaServed": {
          "@type": "City",
          "name": "Roma"
        },
        "serviceType": "Assistenza Sistemistica"
      }
    ]
  };

  const keyPoints = [
    'Supporto tecnico completo per infrastrutture on-premise e cloud',
    'Monitoraggio proattivo 24/7 per prevenire problemi prima che si verifichino',
    'Interventi rapidi da remoto o in sede entro tempi garantiti',
    'Manutenzione preventiva programmata per ridurre i tempi di fermo',
    'Gestione completa del ciclo di vita di server, workstation e periferiche',
  ];

  const technologies = [
    { name: 'Gestione Server', desc: 'Installazione, configurazione e manutenzione di server Windows Server, Linux (Debian, Ubuntu, CentOS)', icon: Server },
    { name: 'Virtualizzazione', desc: 'Ambienti virtualizzati con Proxmox, VMware, Hyper-V per ottimizzare risorse e costi', icon: Cpu },
    { name: 'Backup & Recovery', desc: 'Strategie di backup automatizzate con Veeam, Acronis e soluzioni cloud ibride', icon: Database },
    { name: 'Help Desk', desc: 'Supporto tecnico di primo e secondo livello con ticketing system e SLA definiti', icon: Headphones },
    { name: 'Monitoraggio Zabbix', desc: 'Monitoring proattivo di server, rete e servizi con alerting automatico e dashboard', icon: Monitor },
    { name: 'Cloud Management', desc: 'Gestione ambienti cloud e ibridi: Microsoft 365, Google Workspace, AWS, Azure', icon: Cloud },
    { name: 'Storage & NAS', desc: 'Configurazione e gestione sistemi di storage NAS Synology, QNAP con RAID e replica', icon: HardDrive },
    { name: 'Patch Management', desc: 'Aggiornamenti di sicurezza e software pianificati per minimizzare rischi e downtime', icon: RefreshCw },
    { name: 'Active Directory', desc: 'Gestione centralizzata utenti, gruppi, policy e permessi con Active Directory e LDAP', icon: Settings },
    { name: 'Assistenza On-Site', desc: 'Interventi in sede a Roma Sud, EUR, Ostia, Fiumicino e provincia con tempi garantiti', icon: Clock },
  ];

  const packages = [
    {
      name: 'Pacchetto Smart',
      hours: '20 ore',
      ideal: 'Ideale per piccole imprese con esigenze di supporto occasionale',
      features: [
        'Assistenza remota e telefonica',
        'Manutenzione base server e workstation',
        'Monitoraggio sistemi essenziale',
        'Backup settimanale verificato',
        'Supporto email entro 24h',
      ],
      discount: '5%',
      gradient: 'from-emerald-500 to-teal-500',
      highlighted: false,
    },
    {
      name: 'Pacchetto Plus',
      hours: '50 ore',
      ideal: 'Per aziende che necessitano di supporto continuativo e proattivo',
      features: [
        'Tutto del pacchetto Smart',
        'Assistenza remota illimitata',
        'Monitoraggio 24/7 con Zabbix',
        'Backup giornaliero automatico',
        'Supporto prioritario entro 4h',
        'Manutenzione preventiva mensile',
        'Report mensili dettagliati',
      ],
      discount: '10%',
      gradient: 'from-teal-500 to-emerald-500',
      highlighted: true,
    },
    {
      name: 'Pacchetto Enterprise',
      hours: 'Progetto',
      ideal: 'Soluzioni personalizzate per organizzazioni con infrastrutture complesse',
      features: [
        'Tutto del pacchetto Plus',
        'Assistenza on-site inclusa',
        'Account manager dedicato',
        'SLA personalizzato',
        'Disaster recovery planning',
        'Consulenza strategica IT',
        'Formazione del personale',
        'Gestione completa infrastruttura',
      ],
      discount: '20%',
      gradient: 'from-emerald-500 to-green-500',
      highlighted: false,
    },
  ];

  return (
    <>
      <SEO
        title="Assistenza Sistemistica Roma | Supporto IT Aziendale - CoreNexus"
        description="Assistenza sistemistica professionale per aziende a Roma. Manutenzione server, help desk, monitoraggio 24/7, backup, gestione infrastrutture IT. Supporto rapido e affidabile."
        keywords={[
          'assistenza sistemistica Roma',
          'supporto IT aziendale',
          'manutenzione server Roma',
          'help desk aziendale',
          'monitoraggio sistemi IT',
          'backup aziendale Roma',
          'gestione server',
          'sistemista Roma EUR',
          'assistenza informatica Ostia',
          'supporto tecnico Fiumicino',
        ]}
        canonical="/assistenza-sistemistica"
        schema={assistenzaSchema}
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
                      <Wrench className="w-4 h-4" />
                      Servizio Dedicato
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                      Assistenza Sistemistica
                    </span>
                  </h1>

                  <p className="text-xl text-gray-400 leading-relaxed">
                    Supporto IT completo e professionale per la tua azienda. Dalla manutenzione quotidiana
                    alla gestione di infrastrutture complesse, siamo il tuo reparto IT dedicato.
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
                    Richiedi una consulenza gratuita
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Right side - Visual element */}
                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl glass-effect border border-emerald-500/20 p-8 flex flex-col items-center justify-center gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        {[Wrench, Monitor, HardDrive, Server, Cloud, Database, Cpu, Settings, Headphones].map((Icon, i) => (
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
                  Pacchetti di Assistenza Sistemistica
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Pacchetti flessibili per ogni esigenza: dal supporto occasionale alla gestione completa dell'infrastruttura IT.
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
                      <div className={`text-4xl font-bold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                        {pkg.hours}
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

                    <div className="text-center space-y-4">
                      <div className="inline-block px-4 py-2 rounded-full glass-effect">
                        <span className="text-emerald-400 font-bold text-lg">Sconto del {pkg.discount}</span>
                      </div>
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
                    Assistenza Sistemistica nel Dettaglio
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
                </div>

                <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                  <p>
                    L'assistenza sistemistica è il <strong className="text-white">cuore pulsante di ogni infrastruttura IT
                    aziendale</strong>. Senza un supporto tecnico competente e tempestivo, anche la migliore
                    tecnologia può diventare un ostacolo invece che un vantaggio competitivo.
                  </p>

                  <p>
                    Il nostro servizio di assistenza sistemistica copre <strong className="text-white">l'intero ciclo di vita
                    dei sistemi IT</strong>: dalla progettazione e installazione, alla configurazione, monitoraggio,
                    manutenzione preventiva e risoluzione dei problemi.
                  </p>

                  <p>
                    Grazie al <strong className="text-white">monitoraggio proattivo con Zabbix</strong>, siamo in grado di
                    individuare e risolvere potenziali problemi prima che impattino sulla produttività della tua
                    azienda. Riceviamo alert in tempo reale su performance, spazio disco, carico CPU, stato dei
                    servizi e molto altro.
                  </p>

                  <p>
                    Operiamo come il <strong className="text-white">tuo reparto IT dedicato</strong>: ci occupiamo di tutto,
                    dalla gestione quotidiana delle workstation e delle stampanti, alla manutenzione dei server
                    enterprise, passando per la gestione degli account utente e delle policy di sicurezza.
                  </p>

                  <p>
                    Il nostro team è specializzato in ambienti <strong className="text-white">Windows Server e Linux</strong>,
                    con competenze avanzate su Active Directory, virtualizzazione (Proxmox, VMware), backup
                    (Veeam, Acronis) e cloud (Microsoft 365, Google Workspace).
                  </p>
                </div>
              </div>
            </MorphingSection>

            {/* Technologies Grid */}
            <MorphingSection delay={0.2}>
              <div className="mt-16">
                <h3 className="text-3xl font-bold text-white text-center mb-4">
                  I Nostri Servizi di Assistenza
                </h3>
                <p className="text-gray-400 text-center mb-12 text-lg">
                  Competenze e tecnologie per una gestione IT completa e affidabile
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

            {/* SLA Box */}
            <MorphingSection delay={0.3}>
              <div className="mt-12 p-8 rounded-3xl glass-effect border border-emerald-500/20">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-emerald-400 mb-2">&lt; 4h</div>
                    <p className="text-gray-300">Tempo di risposta garantito per interventi prioritari</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
                    <p className="text-gray-300">Monitoraggio continuo della tua infrastruttura IT</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
                    <p className="text-gray-300">Uptime garantito con i nostri contratti Enterprise</p>
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
                  Hai bisogno di assistenza IT?
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Contattaci per un audit gratuito della tua infrastruttura. Ti mostreremo come
                  possiamo migliorare l'efficienza e ridurre i costi IT della tua azienda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-emerald-500/20"
                  >
                    Richiedi Audit Gratuito
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