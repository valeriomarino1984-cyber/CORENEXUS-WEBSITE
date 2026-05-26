import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Network, Shield, Camera, Server, Activity } from 'lucide-react';
import TiltCard from './TiltCard';
import MorphingSection from './MorphingSection';

export default function ServicesSection() {
  const services = [
    {
      icon: Wrench,
      title: 'Consulenza sistemistica professionale',
      description:
        'Offriamo supporto tecnico informatico completo per infrastrutture aziendali on-premise e cloud. Monitoraggio costante, manutenzione preventiva e interventi rapidi da remoto o in sede. Le nostre soluzioni sistemistiche garantiscono continuità operativa, stabilità dei sistemi e riduzione dei tempi di fermo.',
      gradient: 'from-blue-500 to-cyan-500',
      glowColor: '59, 130, 246',
    },
    {
      icon: Network,
      title: 'Gestione reti aziendali',
      description:
        'Progettiamo, installiamo e gestiamo reti aziendali sicure e performanti, ottimizzando la connettività e la produttività interna. Configurazione di switch, firewall, access point e VPN per un accesso protetto e sempre disponibile. Servizi dedicati alla sicurezza e al monitoraggio delle reti IT.',
      gradient: 'from-indigo-500 to-purple-500',
      glowColor: '99, 102, 241',
    },
    {
      icon: Shield,
      title: 'Sicurezza informatica',
      description:
        'Proteggiamo i dati e i sistemi aziendali da minacce interne ed esterne. Implementiamo soluzioni di cybersecurity, firewall, antivirus e piani di backup su misura. Analisi delle vulnerabilità, controllo accessi e formazione per la sicurezza informatica del personale.',
      gradient: 'from-red-500 to-orange-500',
      glowColor: '239, 68, 68',
    },
    {
      icon: Camera,
      title: 'Sistemi di sicurezza, videosorveglianza e allarme Hikvision',
      description:
        'Installazione e gestione di sistemi di sicurezza completi Hikvision: videosorveglianza ad alta definizione, sistemi di allarme integrati e video verifica basata su intelligenza artificiale. Soluzioni intelligenti con riconoscimento facciale, analisi comportamentale e notifiche in tempo reale.',
      gradient: 'from-green-500 to-emerald-500',
      glowColor: '16, 185, 129',
    },
    {
      icon: Server,
      title: 'Assistenza server enterprise',
      description:
        'Servizi di gestione e manutenzione server per infrastrutture di livello enterprise. Configurazione, backup, virtualizzazione e monitoraggio proattivo dei sistemi. Garantiamo performance elevate, sicurezza dei dati e supporto tecnico continuo.',
      gradient: 'from-violet-500 to-purple-500',
      glowColor: '139, 92, 246',
    },
    {
      icon: Activity,
      title: 'Implementazione monitoraggio Wazuh e Zabbix',
      description:
        'Implementiamo soluzioni di monitoraggio avanzato con Wazuh per la sicurezza e SIEM, e Zabbix per il monitoraggio infrastrutturale. Configurazione di alerting in tempo reale, dashboard personalizzate e analisi proattiva delle performance.',
      gradient: 'from-yellow-500 to-amber-500',
      glowColor: '245, 158, 11',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 relative bg-gradient-to-b from-black via-gray-900/30 to-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <MorphingSection className="text-center space-y-6 mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white">Servizi informatici per aziende</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Soluzioni IT complete per la gestione, sicurezza e ottimizzazione delle infrastrutture aziendali
          </p>
        </MorphingSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <MorphingSection key={index} delay={index * 0.1}>
              <TiltCard tiltIntensity={8} glareEffect={true}>
                <div
                  className="service-card-wrapper group relative h-full rounded-2xl p-[1.5px]"
                  style={{ '--glow': service.glowColor } as React.CSSProperties}
                >
                  {/* Bordo animato */}
                  <div className="service-card-border absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <Card className="relative glass-effect border-transparent bg-transparent text-white h-full transition-all duration-300 rounded-2xl z-10">
                    <CardHeader className="flex flex-col items-center text-center">
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 glow-effect`}>
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-white group-hover:gradient-text transition-all duration-300">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-base text-gray-400 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </TiltCard>
            </MorphingSection>
          ))}
        </div>
      </div>

      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        .service-card-wrapper {
          background: rgba(29, 29, 31, 0.72);
          border-radius: 16px;
        }

        .service-card-border {
          background: conic-gradient(
            from var(--angle),
            transparent 0deg,
            transparent 60deg,
            rgba(var(--glow), 0.8) 90deg,
            rgba(var(--glow), 1) 120deg,
            rgba(var(--glow), 0.8) 150deg,
            transparent 180deg,
            transparent 360deg
          );
          animation: rotate-border 3s linear infinite;
          animation-play-state: paused;
        }

        .service-card-wrapper:hover .service-card-border {
          animation-play-state: running;
        }

        @keyframes rotate-border {
          to { --angle: 360deg; }
        }

        .service-card-wrapper:hover {
          box-shadow: 0 0 30px rgba(var(--glow), 0.2), 0 0 60px rgba(var(--glow), 0.1);
        }
      `}</style>
    </section>
  );
}
