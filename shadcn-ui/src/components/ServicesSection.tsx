import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Network, Shield, Camera, Server, Activity } from 'lucide-react';
import TiltCard from './TiltCard';
import MorphingSection from './MorphingSection';

export default function ServicesSection() {
  const services = [
    {
      icon: Wrench,
      title: 'Assistenza sistemistica professionale',
      description:
        'Offriamo supporto tecnico informatico completo per infrastrutture aziendali on-premise e cloud. Monitoraggio costante, manutenzione preventiva e interventi rapidi da remoto o in sede. Le nostre soluzioni sistemistiche garantiscono continuità operativa, stabilità dei sistemi e riduzione dei tempi di fermo.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Network,
      title: 'Gestione reti aziendali',
      description:
        'Progettiamo, installiamo e gestiamo reti aziendali sicure e performanti, ottimizzando la connettività e la produttività interna. Configurazione di switch, firewall, access point e VPN per un accesso protetto e sempre disponibile. Servizi dedicati alla sicurezza e al monitoraggio delle reti IT.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Shield,
      title: 'Sicurezza informatica',
      description:
        'Proteggiamo i dati e i sistemi aziendali da minacce interne ed esterne. Implementiamo soluzioni di cybersecurity, firewall, antivirus e piani di backup su misura. Analisi delle vulnerabilità, controllo accessi e formazione per la sicurezza informatica del personale.',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: Camera,
      title: 'Sistemi di sicurezza, videosorveglianza e allarme Hikvision',
      description:
        'Installazione e gestione di sistemi di sicurezza completi Hikvision: videosorveglianza ad alta definizione, sistemi di allarme integrati e video verifica basata su intelligenza artificiale. Soluzioni intelligenti con riconoscimento facciale, analisi comportamentale e notifiche in tempo reale per la protezione totale di uffici, negozi e ambienti industriali.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Server,
      title: 'Assistenza server enterprise',
      description:
        'Servizi di gestione e manutenzione server per infrastrutture di livello enterprise. Configurazione, backup, virtualizzazione e monitoraggio proattivo dei sistemi. Garantiamo performance elevate, sicurezza dei dati e supporto tecnico continuo.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Activity,
      title: 'Implementazione monitoraggio Wazuh e Zabbix',
      description:
        'Implementiamo soluzioni di monitoraggio avanzato con Wazuh per la sicurezza e SIEM, e Zabbix per il monitoraggio infrastrutturale. Configurazione di alerting in tempo reale, dashboard personalizzate e analisi proattiva delle performance. Visibilità completa su server, reti e applicazioni per prevenire problemi prima che impattino il business.',
      gradient: 'from-yellow-500 to-amber-500',
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
                <Card className="group glass-effect border-white/10 hover:border-white/20 bg-transparent text-white h-full transition-all duration-300">
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
              </TiltCard>
            </MorphingSection>
          ))}
        </div>
      </div>
    </section>
  );
}