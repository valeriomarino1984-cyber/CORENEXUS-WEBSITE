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
  MapPin,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema, localBusinessServiceSchema, standardAreaServed } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';
import FAQSection from '@/components/FAQSection';

export default function SitiWeb() {
  const navigate = useNavigate();
  const scrollToContact = () => { navigate('/#contact'); };

  const sitiBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
    { name: 'Siti Web', url: '/siti-web' },
  ]);

  const sitiSchema = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessServiceSchema(
        "Creazione Siti Web ed E-commerce Roma EUR Ostia Fiumicino",
        "Realizzazione siti web professionali, e-commerce e landing page a Roma, EUR, Ostia Lido, Fiumicino e Pomezia. Design responsive, SEO ottimizzato, performance elevate.",
        "/siti-web",
        "Web Design e Sviluppo"
      ),
      sitiBreadcrumb,
      {
        "@type": "Service",
        "name": "Creazione Siti Web ed E-commerce Roma",
        "description": "Realizzazione siti web professionali, e-commerce e landing page a Roma, EUR, Ostia e Fiumicino. Design responsive, SEO ottimizzato e performance elevate per PMI.",
        "provider": { "@type": "Organization", "name": "CoreNexus Technology Solution", "url": "https://corenexus.it" },
        "areaServed": standardAreaServed,
        "serviceType": "Web Development"
      }
    ]
  };

  const coverageAreas = [
    'EUR', 'Ostia Lido', 'Ostia Antica', 'Fiumicino', 'Isola Sacra',
    'Acilia', 'Casal Palocco', 'Infernetto', 'Axa', 'Pomezia',
    'Mostacciano', 'Torrino', 'Laurentina', 'Spinaceto', 'Garbatella',
    'Ostiense', 'Magliana', 'San Paolo', 'Ardea', 'Santa Palomba',
  ];

  const faqs = [
    {
      question: "Quanto costa un sito web professionale a Roma?",
      answer: "Un sito web professionale per una PMI di Roma parte da 399 euro per un sito vetrina responsive fino a 5 pagine. Un e-commerce completo parte da 599 euro. Il prezzo varia in base al numero di pagine, funzionalita e complessita del design. Offriamo sempre un preventivo gratuito.",
    },
    {
      question: "Quanto tempo ci vuole per realizzare un sito web?",
      answer: "Un sito web vetrina richiede in media 2-3 settimane dalla raccolta dei contenuti al lancio. Un e-commerce completo richiede 4-6 settimane. I tempi dipendono dalla disponibilita dei contenuti (testi, immagini, prodotti) e dalla rapidita di approvazione del design.",
    },
    {
      question: "Il sito sara ottimizzato per i motori di ricerca?",
      answer: "Si, ogni sito che realizziamo include ottimizzazione SEO on-page: struttura URL corretta, meta tag, sitemap XML, velocita di caricamento ottimizzata, markup schema.org e integrazione Google Search Console. Per campagne SEO avanzate offriamo servizi aggiuntivi.",
    },
    {
      question: "Realizzate siti web per aziende a Roma Sud, EUR e Ostia?",
      answer: "Si, siamo specializzati nella realizzazione di siti web per PMI del quadrante sud di Roma: EUR, Ostia, Fiumicino, Acilia, Pomezia, Casal Palocco, Mostacciano, Torrino, Laurentina e zone limitrofe. Offriamo incontri conoscitivi in presenza o da remoto.",
    },
    {
      question: "Il sito funziona su smartphone e tablet?",
      answer: "Assolutamente. Tutti i siti che realizziamo sono Mobile First: progettati prima per smartphone e poi adattati a tablet e desktop. Questo e fondamentale sia per l'esperienza utente che per il posizionamento Google, che penalizza i siti non ottimizzati per mobile.",
    },
  ];

  const keyPoints = [
    'Design responsive ottimizzato per tutti i dispositivi',
    'Ottimizzazione SEO per il posizionamento a Roma e provincia',
    'Performance elevate con tempi di caricamento rapidi',
    'Integrazione con sistemi di pagamento sicuri',
    'Pannello di gestione contenuti intuitivo',
  ];

  const websitePackages = [
    {
      icon: Globe,
      title: 'Sito Web Responsive',
      description: 'Sito web professionale di presentazione per la tua azienda a Roma',
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
        title="Creazione Siti Web Roma | Web Design E-commerce EUR Ostia Fiumicino - CoreNexus"
        description="Realizzazione siti web professionali ed e-commerce a Roma, EUR, Ostia, Fiumicino e Pomezia. Design responsive, SEO ottimizzato, performance elevate. Sito vetrina da 399 euro, e-commerce da 599 euro. Preventivo gratuito."
        keywords={[
          'creazione siti web Roma',
          'siti web Roma',
          'web design Roma',
          'realizzazione siti web Roma',
          'web design Roma EUR',
          'e-commerce Roma',
          'siti web professionali Roma',
          'realizzazione siti internet Roma',
          'landing page Roma',
          'sito responsive Roma',
          'creazione siti web Ostia',
          'web design Fiumicino',
          'siti web Pomezia',
          'sviluppo web Roma Sud',
          'sito web aziendale Roma',
          'e-commerce Ostia Fiumicino',
          'web agency Roma Sud',
          'sito web EUR Roma',
        ]}
        canonical="/siti-web"
        schema={sitiSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6 premium-gradient">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-purple-950/30" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="mb-6">
                <Link to="/servizi" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
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
                    <span className="block text-3xl md:text-4xl text-gray-400 mt-2 font-normal">
                      a Roma, EUR, Ostia e Fiumicino
                    </span>
                  </h1>

                  <p className="text-xl text-gray-400 leading-relaxed">
                    Realizziamo siti web professionali e negozi online che trasformano i visitatori in clienti. Design moderno, performance elevate e SEO ottimizzato per PMI di Roma e provincia.
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

                  <Button size="lg" onClick={scrollToContact} className="group premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold">
                    Richiedi un preventivo gratuito
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>

                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl glass-effect border border-blue-500/20 p-8 flex flex-col items-center justify-center gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        {[Globe, ShoppingCart, Smartphone, Code, Palette, Search, Layout, Zap, Shield].map((Icon, i) => (
                          <div key={i} className="w-16 h-16 rounded-2xl glass-effect flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 hover:scale-110">
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
                <h2 className="text-4xl md:text-5xl font-bold text-white">I Nostri Pacchetti Web a Roma</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Soluzioni web su misura per ogni esigenza, dal sito vetrina all'e-commerce completo
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
                <h2 className="text-4xl md:text-5xl font-bold text-white">Perche Scegliere CoreNexus per il tuo Sito Web</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Ogni sito che realizziamo e costruito con le migliori tecnologie e best practice del settore
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
                <h2 className="text-4xl md:text-5xl font-bold text-white">Come Realizziamo il tuo Sito Web</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">Un approccio strutturato per garantire risultati eccellenti</p>
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

        {/* Zone copertura */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="p-10 rounded-3xl glass-effect border border-blue-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Creazione siti web a Roma Sud</h2>
                </div>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  CoreNexus realizza siti web ed e-commerce per aziende in tutto il quadrante sud di Roma. Incontri in presenza o da remoto:
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {coverageAreas.map((area, index) => (
                    <span key={index} className="px-4 py-2 rounded-full glass-effect border border-blue-500/20 text-blue-400 text-sm font-medium">{area}</span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm">Per le zone non elencate offriamo servizi di web design da remoto in tutta Italia.</p>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={faqs} accentColor="blue" gradientFrom="blue-500" gradientTo="purple-500" />

        {/* CTA Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <MorphingSection>
              <div className="p-12 rounded-3xl glass-effect border border-blue-500/20 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Pronto a portare la tua azienda online?</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Contattaci per una consulenza gratuita. Analizzeremo le tue esigenze e ti proporremo la soluzione web ideale per la tua azienda a Roma, EUR, Ostia o Fiumicino.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={scrollToContact} className="group premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold">
                    Richiedi Preventivo Gratuito
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
            <p className="text-xs text-gray-600">v2.1 - 26/05/2026</p>
          </div>
        </footer>

        <WhatsAppWidget />
      </div>
    </>
  );
}
