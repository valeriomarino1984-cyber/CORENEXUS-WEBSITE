import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  ArrowLeft,
  Globe,
  ShoppingCart,
  Check,
  Smartphone,
  Zap,
  Shield,
  Palette,
  Search,
  Code,
  Layout,
  Image,
  BarChart3,
  Layers,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';

export default function SitiWeb() {
  const navigate = useNavigate();
  const scrollToContact = () => {
    navigate('/#contact');
  };

  const sitiBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
    { name: 'Siti Web', url: '/siti-web' },
  ]);

  const sitiSchema = {
    "@context": "https://schema.org",
    "@graph": [
      sitiBreadcrumb,
      {
        "@type": "Service",
        "name": "Creazione Siti Web ed E-commerce",
        "description": "Realizzazione siti web professionali, e-commerce e landing page a Roma. Design responsive, SEO ottimizzato e performance elevate.",
        "provider": {
          "@type": "Organization",
          "name": "CoreNexus Technology Solution",
          "url": "https://corenexus.it"
        },
        "areaServed": {
          "@type": "City",
          "name": "Roma"
        },
        "serviceType": "Web Development"
      }
    ]
  };

  const keyPoints = [
    'Design responsive ottimizzato per tutti i dispositivi',
    'Ottimizzazione SEO per posizionamento sui motori di ricerca',
    'Performance elevate con tempi di caricamento rapidi',
    'Integrazione con sistemi di pagamento sicuri',
    'Pannello di gestione contenuti intuitivo',
  ];

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

  const webFeatures = [
    { icon: Smartphone, title: 'Mobile First', description: 'Ottimizzato per dispositivi mobili con design adattivo' },
    { icon: Zap, title: 'Performance', description: 'Caricamento veloce e ottimizzato per Core Web Vitals' },
    { icon: Shield, title: 'Sicurezza', description: 'Protezione SSL, backup automatici e firewall applicativo' },
    { icon: Palette, title: 'Design Moderno', description: 'Interfaccia elegante, professionale e personalizzata' },
    { icon: Search, title: 'SEO Ottimizzato', description: 'Struttura ottimizzata per i motori di ricerca' },
    { icon: BarChart3, title: 'Analytics', description: 'Integrazione Google Analytics e monitoraggio conversioni' },
  ];

  const processSteps = [
    { icon: Layout, title: 'Analisi e Progettazione', description: 'Studiamo le tue esigenze, il target e la concorrenza per definire la struttura ideale del sito.' },
    { icon: Palette, title: 'Design UI/UX', description: 'Creiamo mockup e prototipi con un design moderno, intuitivo e coerente con la tua brand identity.' },
    { icon: Code, title: 'Sviluppo', description: 'Realizziamo il sito con tecnologie moderne, codice pulito e ottimizzato per le performance.' },
    { icon: Image, title: 'Contenuti e SEO', description: 'Ottimizziamo testi, immagini e struttura per il posizionamento sui motori di ricerca.' },
    { icon: Layers, title: 'Test e Lancio', description: 'Testiamo su tutti i dispositivi e browser prima del lancio ufficiale del sito.' },
    { icon: Zap, title: 'Supporto Continuo', description: 'Assistenza post-lancio, aggiornamenti e manutenzione per mantenere il sito sempre al top.' },
  ];

  return (
    <>
      <SEO
        title="Creazione Siti Web ed E-commerce Roma | Web Design - CoreNexus Technology Solution"
        description="Realizzazione siti web professionali, e-commerce e landing page a Roma. Design responsive, SEO ottimizzato, performance elevate. Preventivi personalizzati per la tua azienda."
        keywords={[
          'creazione siti web Roma',
          'web design Roma',
          'e-commerce Roma',
          'siti web professionali',
          'realizzazione siti internet',
          'landing page Roma',
          'sito responsive',
          'SEO Roma',
          'negozio online Roma',
          'web developer Roma',
        ]}
        canonical="/siti-web"
        schema={sitiSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-purple-950/30" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="mb-6">
                <Link
                  to="/servizi"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Torna ai Servizi
                </Link>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-block">
                    <span className="px-4 py-2 rounded-full glass-effect text-blue-400 text-sm font-semibold tracking-wide flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Web Development
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
                    Siti Web & E-commerce
                  </h1>

                  <p className="text-xl text-gray-400 leading-relaxed">
                    Realizziamo siti web professionali e negozi online che trasformano i visitatori in clienti.
                    Design moderno, performance elevate e SEO ottimizzato.
                  </p>

                  <div className="space-y-4">
                    {keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
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
                    Richiedi un preventivo gratuito
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Right side - Visual element */}
                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl glass-effect border border-blue-500/20 p-8 flex flex-col items-center justify-center gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        {[Globe, ShoppingCart, Smartphone, Code, Palette, Search, Layout, Zap, Shield].map((Icon, i) => (
                          <div
                            key={i}
                            className="w-16 h-16 rounded-2xl glass-effect flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            <Icon className="w-7 h-7 text-blue-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10" />
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
                  I Nostri Pacchetti Web
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Soluzioni web su misura per ogni esigenza, dal sito vetrina all&apos;e-commerce completo
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 gap-8 mb-16 items-start max-w-5xl mx-auto">
              {websitePackages.map((pkg, index) => (
                <MorphingSection key={index} delay={index * 0.15}>
                  <Card className="glass-effect border-white/10 hover:border-white/20 bg-transparent text-white card-hover h-full flex flex-col">
                    <CardHeader className="flex-shrink-0 text-center">
                      <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-4 glow-effect mx-auto`}>
                        <pkg.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-3xl text-white">{pkg.title}</CardTitle>
                      <p className="text-lg text-gray-400 min-h-[3.5rem]">{pkg.description}</p>
                      <div className="flex items-baseline gap-2 mt-4 justify-center">
                        <span className="text-5xl font-bold text-white">€{pkg.price}</span>
                        <span className="text-gray-400">a partire da</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-grow flex flex-col">
                      <div className="space-y-3 flex-grow">
                        {pkg.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-left">{feat}</span>
                          </div>
                        ))}
                      </div>
                      <Button onClick={scrollToContact} className="w-full premium-button text-white py-6 text-lg rounded-2xl font-semibold mt-6">
                        Richiedi Preventivo
                      </Button>
                    </CardContent>
                  </Card>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Perché Scegliere Noi
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Ogni sito che realizziamo è costruito con le migliori tecnologie e best practice del settore
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webFeatures.map((f, i) => (
                <MorphingSection key={i} delay={i * 0.1}>
                  <Card className="glass-effect border-white/10 hover:border-white/20 bg-transparent text-white card-hover text-center h-full">
                    <CardContent className="pt-8 pb-8">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                        <f.icon className="w-7 h-7 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                      <p className="text-sm text-gray-400">{f.description}</p>
                    </CardContent>
                  </Card>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Il Nostro Processo
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Un approccio strutturato per garantire risultati eccellenti
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, i) => (
                <MorphingSection key={i} delay={i * 0.1}>
                  <div className="p-6 rounded-2xl glass-effect border border-white/5 hover:border-blue-500/30 transition-all duration-300 group hover:bg-white/5 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-blue-400 font-bold text-sm">STEP {i + 1}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
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
              <div className="p-12 rounded-3xl glass-effect border border-blue-500/20 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Pronto a portare la tua azienda online?
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Contattaci per una consulenza gratuita. Analizzeremo le tue esigenze e ti proporremo la soluzione web ideale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold"
                  >
                    Richiedi Preventivo Gratuito
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