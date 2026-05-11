import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ArrowLeft,
  Monitor,
  Server,
  Network,
  HardDrive,
  Shield,
  Cpu,
  Check,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';

interface TechItem {
  name: string;
  description: string;
}

interface TechCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  bgGlow: string;
  items: TechItem[];
}

export default function Tecnologie() {
  const navigate = useNavigate();
  const scrollToContact = () => {
    navigate('/#contact');
  };

  const tecnologieBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Tecnologie', url: '/tecnologie' },
  ]);

  const tecnologieSchema = {
    "@context": "https://schema.org",
    "@graph": [
      tecnologieBreadcrumb,
      {
        "@type": "ItemList",
        "name": "Tecnologie utilizzate da CoreNexus Technology Solution",
        "description": "Panoramica completa delle tecnologie, piattaforme e strumenti utilizzati da CoreNexus Technology Solution per i servizi IT aziendali a Roma",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Sistemi Operativi: Linux Debian, RedHat, Windows Server"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Virtualizzazione: VMware, Proxmox, Hyper-V"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Networking: Cisco, Fortinet, MikroTik, pfSense, OPNsense"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Backup: Veeam, Acronis, R-Drive Image"
          }
        ]
      }
    ]
  };

  const categories: TechCategory[] = [
    {
      title: 'Sistemi Operativi',
      icon: Monitor,
      color: 'text-blue-400',
      borderColor: 'border-blue-500/20',
      bgGlow: 'from-blue-500/10',
      items: [
        {
          name: 'Linux Debian',
          description: 'Distribuzione stabile e affidabile, ideale per server aziendali, web server e infrastrutture mission-critical. Nota per la sua sicurezza e il vasto repository di pacchetti.',
        },
        {
          name: 'Linux RedHat (RHEL)',
          description: 'La distribuzione enterprise per eccellenza, con supporto commerciale di livello mondiale. Perfetta per ambienti aziendali che richiedono certificazioni e SLA garantiti.',
        },
        {
          name: 'Windows Server',
          description: 'Piattaforma server Microsoft per Active Directory, Exchange, SQL Server e applicazioni .NET. Gestione centralizzata di utenti, policy e risorse aziendali.',
        },
      ],
    },
    {
      title: 'Virtualizzazione',
      icon: Server,
      color: 'text-purple-400',
      borderColor: 'border-purple-500/20',
      bgGlow: 'from-purple-500/10',
      items: [
        {
          name: 'VMware vSphere',
          description: 'La piattaforma di virtualizzazione leader di mercato. Offre funzionalità avanzate come vMotion, HA, DRS e gestione centralizzata tramite vCenter per ambienti enterprise.',
        },
        {
          name: 'Proxmox VE',
          description: 'Soluzione open-source completa per virtualizzazione e containerizzazione. Supporta KVM e LXC, con interfaccia web intuitiva, clustering e backup integrato.',
        },
        {
          name: 'Microsoft Hyper-V',
          description: 'Hypervisor nativo di Microsoft, perfettamente integrato con Windows Server. Ideale per ambienti già basati su tecnologie Microsoft con replica e failover clustering.',
        },
      ],
    },
    {
      title: 'Networking',
      icon: Network,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/20',
      bgGlow: 'from-cyan-500/10',
      items: [
        {
          name: 'Cisco',
          description: 'Leader mondiale nel networking. Switch, router e access point di classe enterprise con IOS/IOS-XE, supporto VLAN, QoS, routing avanzato e sicurezza integrata.',
        },
        {
          name: 'Fortinet',
          description: 'Soluzioni di sicurezza di rete all-in-one. FortiGate offre firewall NGFW, VPN, IPS, web filtering e SD-WAN in un\'unica piattaforma ad alte prestazioni.',
        },
        {
          name: 'MikroTik',
          description: 'Router e switch con RouterOS, estremamente versatili e dal rapporto qualità-prezzo imbattibile. Ideali per reti complesse con funzionalità avanzate di routing e firewall.',
        },
        {
          name: 'pfSense',
          description: 'Firewall e router open-source basato su FreeBSD. Offre VPN, load balancing, traffic shaping e un ecosistema di pacchetti aggiuntivi per ogni esigenza di rete.',
        },
        {
          name: 'OPNsense',
          description: 'Fork moderno di pfSense con interfaccia rinnovata, aggiornamenti frequenti e focus sulla sicurezza. Supporta plugin, Sensei analytics e integrazione con Suricata IDS/IPS.',
        },
      ],
    },
    {
      title: 'Backup & Disaster Recovery',
      icon: HardDrive,
      color: 'text-green-400',
      borderColor: 'border-green-500/20',
      bgGlow: 'from-green-500/10',
      items: [
        {
          name: 'Veeam Backup & Replication',
          description: 'Soluzione enterprise per backup, replica e ripristino di ambienti virtuali e fisici. Supporta VMware, Hyper-V, cloud e offre RPO/RTO minimi con verifica automatica.',
        },
        {
          name: 'Acronis Cyber Protect',
          description: 'Piattaforma unificata di backup e cybersecurity. Protezione anti-ransomware, backup su cloud, disaster recovery e gestione centralizzata per endpoint e server.',
        },
        {
          name: 'R-Drive Image',
          description: 'Strumento potente per la creazione di immagini disco e clonazione. Ideale per backup bare-metal, migrazione di sistemi e ripristino rapido di workstation e server.',
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Tecnologie IT Roma | Stack Tecnologico Aziendale - CoreNexus Technology Solution"
        description="Stack tecnologico CoreNexus per aziende a Roma, EUR, Ostia Lido, Fiumicino e Pomezia: Linux, Windows Server, VMware, Proxmox, Cisco, Fortinet, MikroTik, pfSense, Wazuh, Zabbix, Veeam, Acronis e molto altro."
        keywords={[
          'tecnologie IT Roma',
          'stack tecnologico aziendale Roma',
          'Linux server Roma',
          'Windows Server Roma',
          'VMware vSphere Roma',
          'Proxmox VE Roma',
          'Cisco Roma',
          'Fortinet Roma',
          'MikroTik Roma',
          'pfSense Roma',
          'Wazuh Roma',
          'Zabbix Roma',
          'Veeam backup Roma',
          'Acronis Roma',
          'tecnologie IT Roma EUR Ostia Fiumicino',
        ]}
        canonicalUrl="https://corenexus.it/tecnologie"
        structuredData={tecnologieSchema}
      />
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 px-6">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-black to-purple-950/30" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
            <MorphingSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Cpu className="w-4 h-4" />
                Il nostro stack tecnologico
              </div>
            </MorphingSection>

            <MorphingSection>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-white">Le </span>
                <span className="gradient-text">Tecnologie</span>
                <br />
                <span className="text-white">che utilizziamo</span>
              </h1>
            </MorphingSection>

            <MorphingSection>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Selezioniamo le migliori tecnologie sul mercato per garantire
                <strong className="text-white"> affidabilità, sicurezza e prestazioni</strong> alla tua infrastruttura IT.
              </p>
            </MorphingSection>

            <MorphingSection>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="group premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold"
                >
                  Richiedi una consulenza
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Link to="/servizi">
                  <Button
                    size="lg"
                    variant="outline"
                    className="glass-effect border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-10 py-7 text-lg rounded-2xl font-semibold"
                  >
                    <ArrowLeft className="mr-2" />
                    Vedi i servizi
                  </Button>
                </Link>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* Technology Categories */}
        {categories.map((category, catIndex) => (
          <section key={catIndex} className="py-20 px-6 relative">
            <div className={`absolute inset-0 bg-gradient-to-b ${catIndex % 2 === 0 ? 'from-black via-gray-950/50 to-black' : 'from-black to-black'}`} />
            <div className="max-w-7xl mx-auto relative z-10">
              <MorphingSection>
                <div className="flex items-center gap-4 mb-12">
                  <div className={`p-4 rounded-2xl glass-effect ${category.borderColor}`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {category.title}
                    </h2>
                    <p className="text-gray-500 mt-1">
                      {category.items.length} tecnologie
                    </p>
                  </div>
                </div>
              </MorphingSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <MorphingSection key={itemIndex}>
                    <div
                      className={`group p-8 rounded-3xl glass-effect ${category.borderColor} hover:border-opacity-50 transition-all duration-500 hover:-translate-y-2 h-full`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.bgGlow} to-transparent ${category.color.replace('text-', 'bg-')}`} />
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </MorphingSection>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Why These Technologies */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Perché queste tecnologie?
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Ogni tecnologia nel nostro stack è stata selezionata per offrire il massimo valore ai nostri clienti.
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Affidabilità comprovata',
                  description: 'Utilizziamo solo tecnologie testate in ambienti enterprise, con track record di stabilità e supporto a lungo termine.',
                },
                {
                  icon: Cpu,
                  title: 'Prestazioni ottimali',
                  description: 'Ogni soluzione è scelta per garantire le massime prestazioni nel suo ambito, riducendo latenza e downtime.',
                },
                {
                  icon: Shield,
                  title: 'Sicurezza integrata',
                  description: 'La sicurezza è al centro di ogni scelta tecnologica, con aggiornamenti costanti e best practice di hardening.',
                },
                {
                  icon: Check,
                  title: 'Interoperabilità',
                  description: 'Le nostre tecnologie sono selezionate per lavorare in sinergia, creando ecosistemi IT coerenti e facilmente gestibili.',
                },
              ].map((item, index) => (
                <MorphingSection key={index}>
                  <div className="flex gap-5 p-6 rounded-2xl glass-effect border border-white/5 hover:border-white/10 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                        <item.icon className="w-6 h-6 text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <MorphingSection>
              <div className="p-12 rounded-3xl glass-effect border border-cyan-500/20 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Hai bisogno di una consulenza tecnologica?
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Analizziamo la tua infrastruttura e ti consigliamo le tecnologie più adatte alle tue esigenze.
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
              © 2026 <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">CoreNexus Technology Solution</Link> - Tutti i diritti riservati.
            </p>
            <p className="text-xs text-gray-600">v2.0 - 25/03/2026</p>
          </div>
        </footer>

        <WhatsAppWidget />
      </div>
    </>
  );
}