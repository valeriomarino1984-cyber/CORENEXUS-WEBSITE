import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { breadcrumbSchema, contactPageSchema, localBusinessSchema } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';

export default function Contatti() {
  const contactBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contatti', url: '/contatti' },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      contactBreadcrumb,
      contactPageSchema,
      localBusinessSchema,
    ]
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefono',
      value: '+39 391 377 3304',
      href: 'tel:+393913773304',
      description: 'Chiamaci per assistenza immediata',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@corenexus.it',
      href: 'mailto:info@corenexus.it',
      description: 'Scrivici per preventivi e informazioni',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+39 391 377 3304',
      href: 'https://wa.me/393913773304?text=Ciao%2C%20vorrei%20informazioni%20sui%20vostri%20servizi%20IT',
      description: 'Scrivici su WhatsApp per una risposta rapida',
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      icon: Mail,
      title: 'Supporto Tecnico',
      value: 'supporto@corenexus.it',
      href: 'mailto:supporto@corenexus.it',
      description: 'Per richieste di assistenza tecnica',
      gradient: 'from-purple-500 to-violet-600',
    },
  ];

  return (
    <>
      <SEO
        title="Contatti CoreNexus Technology Solution | Assistenza IT Roma - Telefono, Email, WhatsApp"
        description="Contatta CoreNexus Technology Solution per assistenza informatica a Roma. Telefono: +39 391 377 3304, Email: info@corenexus.it. Supporto IT rapido per aziende a Roma Sud, EUR, Ostia, Fiumicino."
        keywords={[
          'contatti CoreNexus',
          'assistenza informatica Roma contatti',
          'supporto IT Roma telefono',
          'consulenza informatica Roma email',
          'assistenza computer Roma',
          'tecnico informatico Roma contatti',
          'supporto sistemistico Roma',
          'CoreNexus telefono',
          'CoreNexus email',
          'assistenza IT Ostia',
          'assistenza IT EUR',
          'assistenza IT Fiumicino',
        ]}
        canonical="/contatti"
        schema={combinedSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-16 px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-purple-950/20" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="mb-6">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Torna alla Home
                </Link>
              </div>

              <div className="text-center space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
                  Contattaci
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Siamo a tua disposizione per consulenze, preventivi e supporto tecnico.
                  Rispondiamo rapidamente a tutte le richieste.
                </p>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, i) => (
                <MorphingSection key={i} delay={i * 0.1}>
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block p-6 rounded-2xl glass-effect border border-white/5 hover:border-blue-500/30 transition-all duration-300 group hover:bg-white/5 h-full"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-1">{info.title}</h3>
                    <p className="text-blue-400 font-medium mb-2">{info.value}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </a>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* Orari e Zona */}
        <section className="py-12 px-6 relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <MorphingSection>
                <div className="p-8 rounded-3xl glass-effect border border-white/5 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Orari di Apertura</h2>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-gray-300">Lunedì - Venerdì</span>
                      <span className="text-white font-semibold">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-gray-300">Sabato</span>
                      <span className="text-gray-500">Su appuntamento</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-300">Domenica</span>
                      <span className="text-gray-500">Chiuso</span>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-gray-400">
                    <span className="text-amber-400 font-medium">⚡ Emergenze:</span> Per urgenze fuori orario, contattaci via WhatsApp o email. Rispondiamo il prima possibile.
                  </p>
                </div>
              </MorphingSection>

              <MorphingSection delay={0.1}>
                <div className="p-8 rounded-3xl glass-effect border border-white/5 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Zona Operativa</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Operiamo principalmente a <strong className="text-white">Roma Sud</strong> e zone limitrofe, con interventi rapidi in loco e supporto remoto su tutto il territorio nazionale.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Roma EUR', 'Ostia Lido', 'Fiumicino', 'Acilia', 'Mostacciano', 'Pomezia', 'Casal Palocco', 'Infernetto'].map((zona, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full glass-effect text-gray-300 text-sm border border-white/10">
                        {zona}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/dove-siamo"
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium inline-flex items-center gap-1"
                    >
                      Vedi la mappa completa →
                    </Link>
                  </div>
                </div>
              </MorphingSection>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactSection />

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <p className="text-gray-400 text-sm">
              © 2026 <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">CoreNexus Technology Solution</Link> - Tutti i diritti riservati.
            </p>
            <p className="text-xs text-gray-600">v2.1 - 12/04/2026</p>
          </div>
        </footer>

        <WhatsAppWidget />
      </div>
    </>
  );
}