import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ArrowLeft,
  Network,
  Shield,
  Wifi,
  Cable,
  Server,
  Check,
  Zap,
  Router,
  Globe,
  Lock,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';

export default function NetworkingReti() {
  const navigate = useNavigate();
  const scrollToContact = () => {
    navigate('/#contact');
  };

  const networkingBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
    { name: 'Networking e Reti', url: '/networking-reti' },
  ]);

  const networkingSchema = {
    "@context": "https://schema.org",
    "@graph": [
      networkingBreadcrumb,
      {
        "@type": "Service",
        "name": "Networking e Reti Aziendali",
        "description": "Consulenza, implementazione e supporto per la realizzazione e gestione delle reti aziendali a Roma",
        "provider": {
          "@type": "Organization",
          "name": "CoreNexus Technology Solution",
          "url": "https://corenexus.it"
        },
        "areaServed": {
          "@type": "City",
          "name": "Roma"
        },
        "serviceType": "Networking e Reti"
      }
    ]
  };

  const keyPoints = [
    'Sviluppiamo configurazioni di rete personalizzate per ogni esigenza',
    'Definiamo la tipologia di rete più adatta alla tua azienda',
    'Semplifichiamo e ottimizziamo le reti preesistenti',
    'Ottimizziamo cablaggi strutturati e infrastrutture fisiche',
    'Garantiamo alta disponibilità e ridondanza degli apparati',
  ];

  const technologies = [
    { name: 'Firewall', desc: 'Protezione perimetrale avanzata con Fortinet, pfSense e OPNsense' },
    { name: 'VPN', desc: 'Connessioni sicure site-to-site e remote access per smart working' },
    { name: 'Switch managed', desc: 'Configurazione e gestione switch Layer 2/3 enterprise' },
    { name: 'VLAN', desc: 'Segmentazione logica della rete per sicurezza e performance' },
    { name: 'Wi-Fi Enterprise', desc: 'Reti wireless professionali con access point gestiti centralmente' },
    { name: 'DMZ', desc: 'Zone demilitarizzate per servizi esposti in sicurezza' },
    { name: 'Load Balancer', desc: 'Bilanciamento del carico per alta disponibilità dei servizi' },
    { name: 'Cablaggio strutturato', desc: 'Progettazione e realizzazione cablaggi Cat.6/6A certificati' },
    { name: 'QoS', desc: 'Quality of Service per prioritizzare traffico VoIP e applicazioni critiche' },
    { name: 'Monitoraggio rete', desc: 'Monitoring 24/7 con Zabbix e SNMP per prevenire disservizi' },
  ];

  const packages = [
    {
      name: 'Pacchetto Smart',
      hours: '20 ore',
      ideal: 'Ideale per interventi mirati e configurazioni singole',
      features: [
        'Analisi infrastruttura di rete esistente',
        'Configurazione firewall e VPN',
        'Ottimizzazione rete base',
        'Supporto remoto incluso',
        'Report finale intervento',
      ],
      discount: '5%',
      gradient: 'from-cyan-500 to-blue-500',
      highlighted: false,
    },
    {
      name: 'Pacchetto Plus',
      hours: '50 ore',
      ideal: 'Adatto a progetti di media complessità e ristrutturazioni di rete',
      features: [
        'Tutto del pacchetto Smart',
        'Progettazione rete completa',
        'Configurazione VLAN e QoS',
        'Setup Wi-Fi enterprise',
        'Monitoraggio rete per 3 mesi',
        'Assistenza prioritaria',
        'Documentazione tecnica completa',
      ],
      discount: '10%',
      gradient: 'from-blue-500 to-purple-500',
      highlighted: true,
    },
    {
      name: 'Pacchetto Enterprise',
      hours: 'Progetto',
      ideal: 'Per progetti continuativi e infrastrutture complesse',
      features: [
        'Tutto del pacchetto Plus',
        'Progettazione e cablaggio strutturato',
        'Ridondanza e alta disponibilità',
        'Load balancing e failover',
        'Monitoraggio 24/7 continuativo',
        'Account manager dedicato',
        'SLA personalizzato',
        'Formazione del personale IT',
      ],
      discount: '20%',
      gradient: 'from-purple-500 to-pink-500',
      highlighted: false,
    },
  ];

  return (
    <>
      <SEO
        title="Networking e Reti Aziendali Roma | Gestione Reti IT - CoreNexus Technology Solution"
        description="Consulenza, implementazione e supporto per reti aziendali a Roma. Firewall, VPN, VLAN, Wi-Fi enterprise, cablaggio strutturato. Soluzioni networking professionali per PMI."
        keywords={[
          'networking Roma',
          'reti aziendali Roma',
          'gestione reti IT',
          'firewall aziendale',
          'VPN aziendale Roma',
          'cablaggio strutturato Roma',
          'Wi-Fi enterprise',
          'VLAN configurazione',
          'switch managed',
          'consulenza networking',
        ]}
        canonical="/networking-reti"
        schema={networkingSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-black to-blue-950/30" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="mb-6">
                <Link
                  to="/servizi"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Torna ai Servizi
                </Link>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-block">
                    <span className="px-4 py-2 rounded-full glass-effect text-cyan-400 text-sm font-semibold tracking-wide flex items-center gap-2">
                      <Network className="w-4 h-4" />
                      Servizio Dedicato
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
                    Networking e Reti
                  </h1>

                  <p className="text-xl text-gray-400 leading-relaxed">
                    Consulenza, implementazione e supporto per la realizzazione e la gestione delle reti aziendali.
                    Progettiamo infrastrutture di rete affidabili, sicure e performanti.
                  </p>

                  <div className="space-y-4">
                    {keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
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
                    Richiedi una consulenza gratuita
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Right side - Visual element */}
                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl glass-effect border border-cyan-500/20 p-8 flex flex-col items-center justify-center gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        {[Network, Shield, Wifi, Cable, Server, Router, Globe, Lock, Zap].map((Icon, i) => (
                          <div
                            key={i}
                            className="w-16 h-16 rounded-2xl glass-effect flex items-center justify-center hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            <Icon className="w-7 h-7 text-cyan-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl -z-10" />
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
                  Pacchetti di Consulenza Networking
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Scegli il pacchetto più adatto alle tue esigenze. Ogni pacchetto include analisi iniziale e supporto dedicato.
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <MorphingSection key={index} delay={index * 0.15}>
                  <div
                    className={`relative p-8 rounded-3xl glass-effect border transition-all duration-500 hover:scale-105 h-full flex flex-col ${
                      pkg.highlighted
                        ? 'border-blue-500/50 shadow-lg shadow-blue-500/20'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    {pkg.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold uppercase tracking-wider">
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
                          <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center space-y-4">
                      <div className="inline-block px-4 py-2 rounded-full glass-effect">
                        <span className="text-cyan-400 font-bold text-lg">Sconto del {pkg.discount}</span>
                      </div>
                      <Button
                        onClick={scrollToContact}
                        className={`w-full py-6 rounded-2xl font-semibold text-white ${
                          pkg.highlighted
                            ? 'premium-button'
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
          <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="space-y-12">
                <div className="text-center space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Networking e Reti nel Dettaglio
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
                </div>

                <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Partendo da un'analisi approfondita delle strutture esistenti, realizziamo piani di intervento
                    per migliorare il business grazie alle nuove tecnologie di networking.
                  </p>

                  <p>
                    La rete aziendale svolge un <strong className="text-white">ruolo fondamentale nel corretto funzionamento
                    delle infrastrutture IT</strong> ed è il collante dei vari sistemi informativi. Il corretto funzionamento
                    della rete è quindi <strong className="text-white">direttamente responsabile dell'operatività e della
                    produzione</strong> aziendale.
                  </p>

                  <p>
                    Ad esempio, utilizzando un Router adatto alla gestione del tuo traffico di dati, può influire
                    notevolmente sulle performance, portandole da sufficienti a eccellenti, indipendentemente dalla
                    qualità della linea dati.
                  </p>

                  <p>
                    Costruire una buona struttura di Networking significa valutare l'uso che si fa delle applicazioni,
                    la tipologia e le dimensioni dei dati trasferiti, dei servizi messi a disposizione. Tutto questo per
                    calcolare la <strong className="text-white">capacità trasmissiva dell'infrastruttura di rete</strong> di
                    cui si necessita.
                  </p>

                  <p>
                    Senza la giusta tipologia di rete, si naviga in lentezza, si perde tempo a scaricare e archiviare
                    file di normale routine, non si riesce a collegarsi in un tempo adeguato ai software, ai server e
                    ad altri dispositivi.
                  </p>

                  <p>
                    Ci occupiamo anche di <strong className="text-white">particolari configurazioni con più reti logiche
                    all'interno della stessa rete fisica</strong> per gestire migrazioni di rete o integrazione con altri
                    partner, grazie agli apparati di switching e di firewalling per la protezione dei dati.
                  </p>
                </div>
              </div>
            </MorphingSection>

            {/* Technologies Grid */}
            <MorphingSection delay={0.2}>
              <div className="mt-16">
                <h3 className="text-3xl font-bold text-white text-center mb-4">
                  Installazione, Configurazione e Gestione
                </h3>
                <p className="text-gray-400 text-center mb-12 text-lg">
                  Tecnologie e servizi che implementiamo per la tua rete aziendale
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl glass-effect border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group hover:bg-white/5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Network className="w-5 h-5 text-white" />
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

            {/* Redundancy Note */}
            <MorphingSection delay={0.3}>
              <div className="mt-12 p-8 rounded-3xl glass-effect border border-cyan-500/20">
                <p className="text-gray-300 text-lg leading-relaxed text-center">
                  <strong className="text-cyan-400">Alta disponibilità:</strong> Ci occupiamo di installazioni con
                  ridondanza di apparati al fine di garantire l'alta disponibilità del servizio e la continuità
                  operativa della tua azienda.
                </p>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <MorphingSection>
              <div className="p-12 rounded-3xl glass-effect border border-cyan-500/20 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Contattaci per una consulenza gratuita
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Analizziamo la tua infrastruttura di rete e ti proponiamo le soluzioni più adatte.
                  Senza impegno.
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