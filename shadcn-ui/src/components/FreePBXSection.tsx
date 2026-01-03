import { Phone, Shield, Settings, Cloud, Headphones, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FreePBXSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Totalmente Personalizzabile',
      description: 'Configurazione su misura per le esigenze specifiche della tua azienda'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'On-Premise',
      description: 'Installazione locale per massimo controllo e sicurezza dei dati'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'FreePBX & Asterisk',
      description: 'Tecnologia open-source affidabile e collaudata a livello enterprise'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Sicurezza Avanzata',
      description: 'Protezione contro intrusioni e chiamate fraudolente'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Integrazione Completa',
      description: 'Connessione con CRM, gestionale e altri sistemi aziendali'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Supporto Dedicato',
      description: 'Assistenza tecnica continua e formazione del personale'
    }
  ];

  const packages = [
    {
      name: 'Centralino Base',
      price: 'Su preventivo',
      description: 'Soluzione ideale per piccole imprese',
      features: [
        'Fino a 10 interni',
        'IVR (menu vocale) base',
        'Registrazione chiamate',
        'Code di attesa',
        'Casella vocale',
        'Installazione e configurazione',
        '3 mesi di supporto incluso'
      ]
    },
    {
      name: 'Centralino Professionale',
      price: 'Su preventivo',
      description: 'Per aziende in crescita',
      features: [
        'Fino a 50 interni',
        'IVR avanzato multi-livello',
        'Call center con statistiche',
        'Integrazione CRM',
        'App mobile per interni',
        'Backup automatico',
        'Supporto prioritario 12 mesi'
      ],
      highlighted: true
    },
    {
      name: 'Centralino Enterprise',
      price: 'Su preventivo',
      description: 'Soluzione completa per grandi aziende',
      features: [
        'Interni illimitati',
        'Multi-sede con VPN',
        'Disaster recovery',
        'Integrazione avanzata ERP/CRM',
        'Reportistica personalizzata',
        'Formazione del personale',
        'SLA con supporto H24/7'
      ]
    }
  ];

  return (
    <section id="freepbx" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Centered */}
        <div className="text-center space-y-6 mb-20 animate-fade-in-up flex flex-col items-center">
          <div className="inline-block">
            <span className="px-6 py-3 rounded-full glass-effect text-green-400 text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Centralini VoIP Professionali
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold gradient-text text-center">
            Centralini FreePBX & Asterisk
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center">
            Soluzioni telefoniche professionali totalmente personalizzabili e on-premise per il massimo controllo e sicurezza
          </p>
        </div>

        {/* Features Grid - Centered */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl glass-effect hover:bg-white/10 transition-all duration-500 card-hover group flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Packages - Centered */}
        <div className="space-y-12">
          <div className="text-center flex flex-col items-center">
            <h3 className="text-4xl font-bold text-white mb-4">Pacchetti Centralino</h3>
            <p className="text-gray-400 text-lg">Scegli la soluzione più adatta alle tue esigenze</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`p-8 rounded-3xl transition-all duration-500 card-hover flex flex-col ${
                  pkg.highlighted
                    ? 'glass-effect border-2 border-green-500/50 shadow-2xl shadow-green-500/20 scale-105'
                    : 'glass-effect hover:bg-white/5'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center mb-6">
                  {pkg.highlighted && (
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white text-sm font-semibold mb-4">
                      Più Richiesto
                    </div>
                  )}
                  
                  <h4 className="text-2xl font-bold text-white mb-2">{pkg.name}</h4>
                  <div className="text-3xl font-bold gradient-text mb-3">{pkg.price}</div>
                  <p className="text-gray-400 mb-6">{pkg.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <span className="text-sm leading-relaxed text-left">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={scrollToContact}
                  className={`w-full py-6 rounded-xl font-semibold text-base ${
                    pkg.highlighted
                      ? 'premium-button text-white'
                      : 'glass-effect border border-white/20 hover:border-white/40 text-white hover:bg-white/10'
                  }`}
                >
                  Richiedi Preventivo
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Centered */}
        <div className="mt-20 text-center glass-effect p-12 rounded-3xl flex flex-col items-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-4">
            Hai bisogno di una soluzione personalizzata?
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl">
            Ogni azienda ha esigenze uniche. Contattaci per una consulenza gratuita e progetteremo insieme il centralino perfetto per te.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold"
          >
            Consulenza Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
}