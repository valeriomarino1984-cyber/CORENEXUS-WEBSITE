import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Zap, Shield, Headphones } from 'lucide-react';
import Card3D from './Card3D';
import MorphingSection from './MorphingSection';

export default function PricingSection() {
  const plans = [
    {
      name: 'Pacchetto Base',
      icon: Zap,
      price: 'Su preventivo',
      description: 'Ideale per piccole imprese che necessitano di supporto IT essenziale',
      features: [
        'Assistenza remota (max 4 ore/mese)',
        'Monitoraggio base dei sistemi',
        'Backup settimanale',
        'Supporto email entro 24h',
        'Aggiornamenti di sicurezza',
      ],
      highlighted: false,
    },
    {
      name: 'Pacchetto Professional',
      icon: Shield,
      price: 'Su preventivo',
      description: 'Per aziende che richiedono supporto completo e continuativo',
      features: [
        'Assistenza remota illimitata',
        'Monitoraggio 24/7 con alerting',
        'Backup giornaliero automatico',
        'Supporto prioritario entro 4h',
        'Manutenzione preventiva mensile',
        'Gestione completa server e rete',
        'Report mensili dettagliati',
      ],
      highlighted: true,
    },
    {
      name: 'Pacchetto Enterprise',
      icon: Headphones,
      price: 'Su preventivo',
      description: 'Soluzioni personalizzate per grandi organizzazioni',
      features: [
        'Tutto del pacchetto Professional',
        'Assistenza on-site inclusa',
        'Account manager dedicato',
        'SLA personalizzato',
        'Disaster recovery planning',
        'Consulenza strategica IT',
        'Formazione del personale',
      ],
      highlighted: false,
    },
  ];

  const maintenanceServices = [
    {
      title: 'Contratti di Manutenzione Server',
      description: 'Manteniamo i tuoi server sempre aggiornati, sicuri e performanti',
      features: [
        'Patch management e aggiornamenti di sicurezza',
        'Monitoraggio proattivo delle performance',
        'Ottimizzazione delle risorse',
        'Backup e disaster recovery',
      ],
    },
    {
      title: 'Manutenzione Reti Aziendali',
      description: 'Gestiamo la tua infrastruttura di rete per garantire connettività ottimale',
      features: [
        'Configurazione e ottimizzazione firewall',
        'Gestione switch e access point',
        'Monitoraggio traffico di rete',
        'Implementazione VPN e sicurezza perimetrale',
      ],
    },
    {
      title: 'Manutenzione Sistemi di Videosorveglianza',
      description: 'Assistenza specializzata per sistemi Hikvision e altre piattaforme',
      features: [
        'Verifica funzionamento telecamere',
        'Aggiornamento firmware NVR/DVR',
        'Ottimizzazione storage e registrazioni',
        'Configurazione accessi remoti sicuri',
      ],
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 px-6 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-black to-gray-900/30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Pacchetti di Assistenza */}
        <MorphingSection className="text-center space-y-6 mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white">Pacchetti di Assistenza</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Scegli il piano più adatto alle esigenze della tua azienda
          </p>
        </MorphingSection>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <MorphingSection key={index} delay={index * 0.15}>
                <Card3D intensity={12}>
                  <Card
                    className={`group relative overflow-hidden p-8 h-full ${
                      plan.highlighted
                        ? 'glass-effect border-blue-500/50 shadow-2xl shadow-blue-500/20'
                        : 'glass-effect border-white/10'
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="absolute top-0 right-0 bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">
                        PIÙ POPOLARE
                      </div>
                    )}

                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                        </div>
                      </div>

                      <div>
                        <p className="text-3xl font-bold text-white">{plan.price}</p>
                        <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
                      </div>

                      <div className="space-y-3 pt-4">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        onClick={scrollToContact}
                        className={`w-full mt-6 py-6 rounded-xl font-semibold ${
                          plan.highlighted
                            ? 'premium-button text-white'
                            : 'glass-effect border-white/20 hover:border-white/40 text-white hover:bg-white/10'
                        }`}
                        variant={plan.highlighted ? 'default' : 'outline'}
                      >
                        Richiedi Preventivo
                      </Button>
                    </div>
                  </Card>
                </Card3D>
              </MorphingSection>
            );
          })}
        </div>

        {/* Contratti di Manutenzione */}
        <MorphingSection className="text-center space-y-6 mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white">Contratti di Manutenzione</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Servizi di manutenzione continuativa per mantenere la tua infrastruttura IT sempre efficiente
          </p>
        </MorphingSection>

        <div className="grid md:grid-cols-3 gap-8">
          {maintenanceServices.map((service, index) => (
            <MorphingSection key={index} delay={index * 0.15}>
              <Card3D intensity={10}>
                <Card className="group glass-effect border-white/10 hover:border-white/20 p-8 bg-transparent h-full">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-white/10">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={scrollToContact}
                      variant="outline"
                      className="w-full mt-6 glass-effect border-white/20 hover:border-white/40 text-white hover:bg-white/10 py-5 rounded-xl font-semibold"
                    >
                      Scopri di più
                    </Button>
                  </div>
                </Card>
              </Card3D>
            </MorphingSection>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm mb-6">
            Tutti i pacchetti sono personalizzabili in base alle tue esigenze specifiche
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="premium-button text-white px-10 py-6 text-lg rounded-2xl font-semibold"
          >
            Contattaci per un Preventivo Personalizzato
          </Button>
        </div>
      </div>
    </section>
  );
}