import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Globe, ShoppingCart, Smartphone, Zap, Shield, Palette, Sparkles } from 'lucide-react';

export default function WebsitesSection() {
  const websitePackages = [
    {
      icon: Globe,
      title: 'Sito Web Responsive',
      description: 'Sito web professionale di presentazione per la tua azienda',
      price: '399',
      gradient: 'from-blue-500 to-indigo-600',
      features: [
        'Design responsive (mobile, tablet, desktop)',
        'Fino a 5 pagine personalizzate',
        'Ottimizzazione SEO di base',
        'Form di contatto integrato',
        'Integrazione Google Maps',
        'Hosting incluso per 1 anno',
        'Certificato SSL (HTTPS)',
        'Backup automatici settimanali',
        'Supporto tecnico 30 giorni',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Negozio online completo per vendere i tuoi prodotti',
      price: '599',
      gradient: 'from-purple-500 to-pink-600',
      features: [
        'Catalogo prodotti illimitato',
        'Carrello e checkout sicuro',
        'Gestione ordini e clienti',
        'Integrazione pagamenti (Stripe, PayPal)',
        'Gestione spedizioni e corrieri',
        'Sistema di coupon e sconti',
        'Dashboard amministrazione',
        'Ottimizzazione SEO prodotti',
        'Supporto tecnico 60 giorni',
      ],
    },
  ];

  const additionalFeatures = [
    { icon: Smartphone, title: 'Mobile First', description: 'Ottimizzato per dispositivi mobili' },
    { icon: Zap, title: 'Performance', description: 'Caricamento veloce e ottimizzato' },
    { icon: Shield, title: 'Sicurezza', description: 'Protezione SSL e backup automatici' },
    { icon: Palette, title: 'Design Moderno', description: 'Interfaccia elegante e professionale' },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="websites" className="py-24 px-6 relative bg-gradient-to-b from-black via-gray-900/50 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Creazione Siti Web
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Trasforma la tua presenza online con siti web professionali e negozi e-commerce completi
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Soluzioni web <span className="text-blue-400 font-semibold">chiavi in mano</span> per far crescere il tuo business online
          </p>
        </div>

        {/* Website Packages */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-start">
          {websitePackages.map((pkg, index) => (
            <Card
              key={index}
              className="glass-effect border-white/10 hover:border-white/20 bg-transparent text-white card-hover animate-fade-in-up h-full flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="flex-shrink-0 text-center">
                <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-4 glow-effect mx-auto`}>
                  <pkg.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl text-white">{pkg.title}</CardTitle>
                <CardDescription className="text-lg text-gray-400 min-h-[3.5rem]">
                  {pkg.description}
                </CardDescription>
                <div className="flex items-baseline gap-2 mt-4 justify-center">
                  <span className="text-5xl font-bold text-white">€{pkg.price}</span>
                  <span className="text-gray-400">a partire da</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow flex flex-col">
                <div className="space-y-3 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 justify-center text-center">
                      <div className="relative flex-shrink-0 mt-0.5">
                        <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
                        <div className="absolute inset-0 animate-ping opacity-75">
                          <Sparkles className="w-5 h-5 text-blue-400" />
                        </div>
                      </div>
                      <span className="text-gray-300 text-left">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={scrollToContact}
                  className="w-full premium-button text-white py-6 text-lg rounded-2xl font-semibold mt-6"
                >
                  Richiedi Preventivo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          {additionalFeatures.map((feature, index) => (
            <Card
              key={index}
              className="glass-effect border-white/10 hover:border-white/20 bg-transparent text-white card-hover text-center"
            >
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <Card className="glass-effect border-white/10 bg-transparent text-white max-w-3xl mx-auto">
            <CardContent className="py-12 px-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Hai un progetto in mente?
              </h3>
              <p className="text-lg text-gray-400 mb-8">
                Contattaci per una consulenza gratuita e scopri come possiamo aiutarti a realizzare il tuo sito web ideale
              </p>
              <Button 
                onClick={scrollToContact}
                className="premium-button text-white px-8 py-6 text-lg rounded-2xl font-semibold"
              >
                Richiedi Consulenza Gratuita
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}