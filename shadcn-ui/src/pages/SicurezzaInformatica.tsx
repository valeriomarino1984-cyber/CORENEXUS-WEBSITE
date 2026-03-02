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
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { breadcrumbSchema } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';

export default function SicurezzaInformatica() {
  const scrollToContact = () => {
    window.location.href = '/#contact';
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
        "description": "Servizi di cybersecurity per aziende a Roma: firewall, antivirus, monitoraggio, penetration test, compliance GDPR",
        "provider": {
          "@type": "Organization",
          "name": "CoreNexus",
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
    'Monitoriamo 24/7 la tua infrastruttura con sistemi SIEM avanzati',
    'Garantiamo conformità GDPR e normative di settore',
    'Formiamo il tuo personale sulle best practice di sicurezza',
  ];

  const technologies = [
    { name: 'Firewall Next-Gen', desc: 'Protezione perimetrale avanzata con Fortinet, pfSense, OPNsense e deep packet inspection', icon: Shield },
    { name: 'SIEM / Wazuh', desc: 'Monitoraggio centralizzato degli eventi di sicurezza con correlazione e alerting in tempo reale', icon: Eye },
    { name: 'Antivirus Enterprise', desc: 'Soluzioni endpoint protection con gestione centralizzata e aggiornamenti automatici', icon: Bug },
    { name: 'Vulnerability Assessment', desc: 'Scansione periodica delle vulnerabilità per identificare e correggere punti deboli', icon: ScanLine },
    { name: 'Backup & Disaster Recovery', desc: 'Strategie di backup 3-2-1 con recovery plan testati e documentati', icon: FileWarning },
    { name: 'Crittografia', desc: 'Protezione dei dati sensibili con crittografia end-to-end su storage e comunicazioni', icon: Lock },
    { name: 'Autenticazione MFA', desc: 'Multi-factor authentication per accessi sicuri a sistemi e applicazioni aziendali', icon: Fingerprint },
    { name: 'Anti-Spam / Anti-Phishing', desc: 'Filtri avanzati per proteggere le email aziendali da phishing e malware', icon: AlertTriangle },
    { name: 'Gestione Password', desc: 'Policy di password sicure e implementazione di password manager aziendali', icon: KeyRound },
    { name: 'Compliance GDPR', desc: 'Consulenza e implementazione delle misure tecniche richieste dal GDPR', icon: ShieldAlert },
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
        title="Sicurezza Informatica Aziendale Roma | Cybersecurity PMI - CoreNexus"
        description="Servizi di sicurezza informatica per aziende a Roma. Firewall, monitoraggio SIEM Wazuh, vulnerability assessment, backup, compliance GDPR. Proteggiamo la tua azienda dalle minacce cyber."
        keywords={[
          'sicurezza informatica Roma',
          'cybersecurity aziendale',
          'firewall aziendale Roma',
          'monitoraggio SIEM',
          'Wazuh Roma',
          'vulnerability assessment',
          'penetration test Roma',
          'compliance GDPR',
          'antivirus enterprise',
          'protezione dati aziendali',
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
                    avanzate, monitoraggio continuo e strategie di difesa multilivello.
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
                        {[Shield, Lock, Eye, AlertTriangle, ShieldCheck, Fingerprint, ScanLine, Bug, KeyRound].map((Icon, i) => (
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
                  Soluzioni scalabili per proteggere la tua azienda, dal assessment iniziale alla sicurezza gestita 24/7.
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
                    in tempo reale.
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
                  Richiedi un vulnerability assessment gratuito. Analizziamo la tua infrastruttura
                  e ti mostriamo dove sei vulnerabile.
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