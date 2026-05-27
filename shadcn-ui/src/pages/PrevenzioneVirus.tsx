import { useEffect } from 'react';
import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ArrowLeft,
  Shield,
  Bug,
  Lock,
  AlertTriangle,
  Check,
  Database,
  Users,
  Search,
  HardDrive,
  Eye,
  Zap,
  FileWarning,
  MapPin,
  ShieldAlert,
  RefreshCw,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema, localBusinessServiceSchema, standardAreaServed } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';
import FAQSection from '@/components/FAQSection';

export default function PrevenzioneVirus() {
  const navigate = useNavigate();
  const scrollToContact = () => { navigate('/#contact'); };

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
    { name: 'Prevenzione Virus e Ransomware', url: '/prevenzione-virus-ransomware' },
  ]);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessServiceSchema(
        "Prevenzione Virus e Ransomware Roma EUR Ostia Fiumicino",
        "Protezione da virus e ransomware per aziende a Roma, EUR, Ostia, Fiumicino e Pomezia. Antivirus endpoint gestito, backup anti-ransomware, formazione dipendenti, vulnerability assessment, incident response.",
        "/prevenzione-virus-ransomware",
        "Prevenzione Virus e Ransomware"
      ),
      breadcrumb,
      {
        "@type": "Service",
        "name": "Prevenzione Virus e Ransomware Roma",
        "description": "Protezione completa da virus e ransomware per PMI di Roma: antivirus endpoint gestito, backup anti-ransomware, formazione anti-phishing, vulnerability assessment e incident response.",
        "provider": {
          "@type": "Organization",
          "name": "CoreNexus Technology Solution",
          "url": "https://corenexus.it"
        },
        "areaServed": standardAreaServed,
        "serviceType": "Prevenzione Virus e Ransomware"
      }
    ]
  };

  const stats = [
    { value: '60%', label: 'delle PMI colpite da ransomware chiude entro 6 mesi', color: 'from-red-500 to-orange-500' },
    { value: '91%', label: 'degli attacchi inizia con una email di phishing', color: 'from-orange-500 to-yellow-500' },
    { value: '21 gg', label: 'tempo medio di fermo operativo dopo un attacco ransomware', color: 'from-yellow-500 to-red-500' },
    { value: '0€', label: 'costo del riscatto se hai backup anti-ransomware attivo', color: 'from-emerald-500 to-teal-500' },
  ];

  const services = [
    {
      icon: Bug,
      title: 'Antivirus Endpoint Gestito',
      gradient: 'from-red-500 to-orange-500',
      description: "L'antivirus di Windows non basta. I ransomware moderni lo aggirano facilmente. CoreNexus implementa soluzioni endpoint protection di livello enterprise con protezione comportamentale, analisi AI in tempo reale e gestione centralizzata da console unica.",
      benefits: [
        'Protezione comportamentale contro ransomware zero-day',
        'Console di gestione centralizzata per tutti i dispositivi',
        'Aggiornamenti automatici delle definizioni',
        'Alert immediati in caso di minaccia rilevata',
        'Compatibile con Windows, Mac e server Linux',
      ],
    },
    {
      icon: HardDrive,
      title: 'Backup Anti-Ransomware',
      gradient: 'from-blue-500 to-indigo-600',
      description: "Il backup e la tua ultima linea di difesa contro il ransomware. Se i tuoi dati sono cifrati, un backup recente e integro significa poter ripristinare tutto senza pagare il riscatto. CoreNexus configura backup immutabili che il ransomware non puo cifrare.",
      benefits: [
        'Backup immutabili non modificabili dal ransomware',
        'Regola 3-2-1: 3 copie su 2 supporti con 1 off-site',
        'Backup automatici notturni con verifica integrita',
        'Ripristino testato periodicamente',
        'Recovery point objective (RPO) inferiore a 24 ore',
      ],
    },
    {
      icon: Users,
      title: 'Formazione Anti-Phishing',
      gradient: 'from-purple-500 to-violet-600',
      description: "Il fattore umano e il punto debole piu sfruttato dagli hacker. Il 91% degli attacchi inizia con una email di phishing aperta da un dipendente. CoreNexus eroga sessioni di formazione pratiche per insegnare ai tuoi dipendenti a riconoscere le minacce.",
      benefits: [
        'Sessioni di formazione pratiche in presenza o da remoto',
        'Simulazioni di phishing per testare la consapevolezza',
        'Guide operative su come riconoscere email pericolose',
        'Formazione su social engineering e truffa CEO',
        'Report post-formazione con livello di rischio per reparto',
      ],
    },
    {
      icon: Search,
      title: 'Vulnerability Assessment',
      gradient: 'from-amber-500 to-orange-600',
      description: "Non puoi difenderti da cio che non conosci. Il vulnerability assessment e una scansione completa della tua infrastruttura per identificare porte aperte, servizi vulnerabili, software non aggiornati e configurazioni errate prima che lo facciano gli hacker.",
      benefits: [
        'Scansione completa di server, PC e apparati di rete',
        'Identificazione CVE critiche non patchate',
        'Report prioritizzato per livello di rischio',
        'Piano di remediation con tempi e costi',
        'Scansione ripetuta dopo gli interventi di fix',
      ],
    },
    {
      icon: Eye,
      title: 'Monitoraggio con Wazuh SIEM',
      gradient: 'from-emerald-500 to-teal-600',
      description: "Wazuh monitora in tempo reale tutti gli eventi di sicurezza della tua infrastruttura. Rileva tentativi di intrusione, comportamenti anomali e attivita sospette prima che diventino un attacco. Il modulo Active Response blocca automaticamente le minacce.",
      benefits: [
        'Monitoraggio 24/7 di server, PC e rete',
        'Rilevamento comportamenti anomali in tempo reale',
        'Active Response: blocco automatico IP malevoli',
        'Alert immediati via email, SMS o Slack',
        'Dashboard con panoramica completa della sicurezza',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Incident Response',
      gradient: 'from-rose-500 to-red-600',
      description: "Se sei gia stato colpito da un virus o ransomware, ogni minuto conta. Il team CoreNexus interviene in emergenza per contenere il danno, rimuovere il malware, ripristinare i dati dal backup e rimettere in piedi la tua operativita nel minor tempo possibile.",
      benefits: [
        'Intervento di emergenza in giornata a Roma e provincia',
        'Analisi forense per identificare il vettore di attacco',
        'Rimozione completa del malware da tutti i sistemi',
        'Ripristino dati dal backup verificato',
        'Hardening post-incidente per prevenire recidive',
      ],
    },
  ];

  const faqs = [
    {
      question: "Cos'e il ransomware e come proteggersi?",
      answer: "Il ransomware e un tipo di malware che cifra i file della vittima e chiede un riscatto per restituirli. Per proteggersi servono: antivirus endpoint enterprise, backup immutabili off-site, formazione dei dipendenti anti-phishing e monitoraggio continuo. CoreNexus offre tutti questi servizi per PMI di Roma, EUR, Ostia e Fiumicino.",
    },
    {
      question: "Quanto costa un attacco ransomware per una PMI?",
      answer: "Il costo medio di un attacco ransomware per una PMI italiana e di 200.000-500.000 euro considerando fermo operativo, perdita dati, danno reputazionale e costi di ripristino. Il 60% delle PMI colpite chiude entro 6 mesi. Un investimento in prevenzione e infinitamente inferiore.",
    },
    {
      question: "Operate per la prevenzione virus a Roma Sud?",
      answer: "Si, CoreNexus e specializzata nella sicurezza informatica per PMI del quadrante sud di Roma. Interveniamo on-site a EUR, Ostia, Fiumicino, Acilia, Casal Palocco, Pomezia, Mostacciano, Torrino, Laurentina e zone limitrofe.",
    },
    {
      question: "Cosa fare se sono gia stato colpito da ransomware?",
      answer: "Primo: non pagare il riscatto. Secondo: isolare immediatamente i sistemi infetti dalla rete. Terzo: contattare CoreNexus per un intervento di emergenza. Il nostro team analizza l'attacco, rimuove il malware e ripristina i dati dal backup. Interveniamo in giornata a Roma e provincia.",
    },
    {
      question: "L'antivirus di Windows e sufficiente?",
      answer: "No. Windows Defender offre una protezione base, ma non e sufficiente contro ransomware sofisticati e attacchi zero-day. Le soluzioni enterprise che utilizziamo (come SentinelOne, Bitdefender GravityZone o Malwarebytes ThreatDown) offrono protezione comportamentale, analisi AI e gestione centralizzata — capacita che Defender non ha.",
    },
  ];

  const coverageAreas = [
    'EUR', 'Ostia Lido', 'Ostia Antica', 'Fiumicino', 'Isola Sacra',
    'Acilia', 'Casal Palocco', 'Infernetto', 'Axa', 'Malafede',
    'Mostacciano', 'Torrino', 'Laurentina', 'Spinaceto', 'Mezzocammino',
    'Pomezia', 'Ardea', 'Santa Palomba', 'Castel Romano', 'Garbatella',
    'Ostiense', 'Marconi', 'Magliana', 'San Paolo',
  ];

  return (
    <>
      <SEO
        title="Prevenzione Virus e Ransomware Roma | Antivirus Aziendale EUR Ostia Fiumicino - CoreNexus"
        description="Protezione da virus e ransomware per aziende a Roma, EUR, Ostia, Fiumicino e Pomezia. Antivirus endpoint gestito, backup anti-ransomware, formazione anti-phishing, vulnerability assessment e incident response. Preventivo gratuito."
        keywords={[
          'prevenzione virus ransomware Roma',
          'antivirus aziendale Roma',
          'protezione ransomware Roma',
          'ransomware Roma',
          'antivirus endpoint Roma',
          'sicurezza informatica virus Roma',
          'backup anti-ransomware Roma',
          'formazione anti-phishing Roma',
          'vulnerability assessment Roma',
          'incident response Roma',
          'protezione malware Roma',
          'antivirus PMI Roma',
          'prevenzione ransomware EUR Roma',
          'sicurezza informatica Ostia',
          'protezione virus Fiumicino',
          'recupero dati ransomware Roma',
        ]}
        canonical="/prevenzione-virus-ransomware"
        schema={schema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6 premium-gradient">
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
                      Prevenzione Virus e Ransomware
                    </span>
                    <span className="block text-3xl md:text-4xl text-gray-400 mt-2 font-normal">
                      a Roma, EUR, Ostia e Fiumicino
                    </span>
                  </h1>

                  <p className="text-xl text-gray-400 leading-relaxed">
                    Il ransomware e la minaccia numero uno per le PMI italiane. Un singolo attacco puo bloccare la tua azienda per settimane e costarti centinaia di migliaia di euro. CoreNexus ti protegge prima che succeda — e ti aiuta a ripartire se succede.
                  </p>

                  <div className="space-y-3">
                    {[
                      'Antivirus endpoint enterprise con protezione comportamentale',
                      'Backup immutabili anti-ransomware con ripristino garantito',
                      'Formazione dipendenti per riconoscere phishing e truffe',
                      'Vulnerability assessment completo della tua infrastruttura',
                      'Monitoraggio 24/7 con Wazuh e blocco automatico minacce',
                      'Incident response in emergenza a Roma e provincia',
                    ].map((point, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-gray-300 text-lg">{point}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" onClick={scrollToContact} className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-red-500/20">
                    Richiedi una consulenza gratuita
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>

                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl glass-effect border border-red-500/20 p-8 flex flex-col items-center justify-center gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        {[Shield, Bug, Lock, AlertTriangle, Eye, Database, Users, Search, RefreshCw].map((Icon, i) => (
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

        {/* Statistiche */}
        <section className="py-16 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-white mb-2">Il ransomware in numeri</h2>
                <p className="text-gray-400">Dati che ogni imprenditore dovrebbe conoscere</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 rounded-2xl glass-effect border border-white/10">
                    <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                      {stat.value}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{stat.label}</p>
                  </div>
                ))}
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* Servizi */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className="max-w-6xl mx-auto relative z-10 space-y-8">
            <MorphingSection>
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Come proteggiamo la tua azienda a Roma
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Sei servizi integrati per una protezione completa da virus e ransomware
                </p>
              </div>
            </MorphingSection>

            {services.map((service, index) => (
              <MorphingSection key={index} delay={index * 0.1}>
                <div className={`p-8 md:p-10 rounded-3xl glass-effect border border-white/10 hover:border-white/20 transition-all duration-500 ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                      <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-300">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </MorphingSection>
            ))}
          </div>
        </section>

        {/* Warning box */}
        <section className="py-8 px-6 relative">
          <div className="max-w-5xl mx-auto">
            <MorphingSection>
              <div className="p-8 rounded-3xl glass-effect border border-red-500/30 bg-red-950/10">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">Sei gia stato colpito da ransomware?</h4>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Non pagare il riscatto — spesso non recuperi i dati comunque e finanzi i criminali. Isola immediatamente i sistemi infetti dalla rete e contattaci subito. Il nostro team interviene in emergenza a Roma e provincia per contenere il danno e ripristinare la tua operativita.
                    </p>
                    <Button onClick={scrollToContact} className="mt-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold">
                      Emergenza — Contattaci ora
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </MorphingSection>
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
                  <h2 className="text-2xl font-bold text-white">Prevenzione virus e ransomware a Roma Sud</h2>
                </div>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  CoreNexus protegge le aziende da virus e ransomware in tutto il quadrante sud di Roma con interventi on-site rapidi:
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {coverageAreas.map((area, index) => (
                    <span key={index} className="px-4 py-2 rounded-full glass-effect border border-red-500/20 text-red-400 text-sm font-medium">
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm">Per aziende in altre zone offriamo protezione da virus e ransomware da remoto in tutta Italia.</p>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={faqs} accentColor="red" gradientFrom="red-500" gradientTo="orange-500" />

        {/* CTA */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <MorphingSection>
              <div className="p-12 rounded-3xl glass-effect border border-red-500/20 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Non aspettare di essere attaccato</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Contattaci per una valutazione gratuita del rischio informatico della tua azienda a Roma. In meno di un'ora ti diciamo quanto sei esposto e cosa fare per proteggerti.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={scrollToContact} className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-red-500/20">
                    Valutazione gratuita del rischio
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
            <p className="text-xs text-gray-600">v1.0 - 26/05/2026</p>
          </div>
        </footer>

        <WhatsAppWidget />
      </div>
    </>
  );
}
