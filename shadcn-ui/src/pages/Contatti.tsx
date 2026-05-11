import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowLeft, ExternalLink } from 'lucide-react';
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
      value: '+39 353 401 2055',
      href: 'tel:+393534012055',
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
      value: '+39 353 401 2055',
      href: 'https://wa.me/393534012055?text=Ciao%2C%20vorrei%20informazioni%20sui%20vostri%20servizi%20IT',
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
        title="Contatti CoreNexus | Assistenza IT Roma EUR Ostia Fiumicino Pomezia"
        description="Contatta CoreNexus Technology Solution per assistenza informatica a Roma, EUR, Ostia Lido, Fiumicino e Pomezia. Tel: +39 353 401 2055, Email: info@corenexus.it. Supporto IT rapido per aziende e privati."
        keywords={[
          'contatti CoreNexus Roma',
          'assistenza informatica Roma contatti',
          'supporto IT Roma telefono',
          'consulenza informatica Roma email',
          'assistenza computer Roma EUR',
          'tecnico informatico Roma contatti',
          'supporto sistemistico Roma',
          'contatti assistenza IT Ostia Lido',
          'contatti assistenza IT Fiumicino',
          'contatti assistenza IT Pomezia',
          'assistenza IT Roma Sud contatti',
          'CoreNexus telefono email WhatsApp',
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

        {/* Google Business Profile + Trovaci Online */}
        <section className="py-12 px-6 relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <MorphingSection>
              <div className="p-8 rounded-3xl glass-effect border border-white/5">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Trovaci Online</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Google Business Profile */}
                  <a
                    href="https://www.google.com/maps/place/CoreNexus+Technology+Solution"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 group hover:bg-white/5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold text-sm">Google Business Profile</h3>
                      <p className="text-gray-400 text-xs mt-0.5">Recensioni, orari e indicazioni</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors shrink-0 ml-auto" />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/corenexus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 group hover:bg-white/5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold text-sm">Facebook</h3>
                      <p className="text-gray-400 text-xs mt-0.5">Segui le nostre novità</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors shrink-0 ml-auto" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/corenexus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 group hover:bg-white/5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold text-sm">LinkedIn</h3>
                      <p className="text-gray-400 text-xs mt-0.5">Connettiti con il nostro team</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors shrink-0 ml-auto" />
                  </a>
                </div>
              </div>
            </MorphingSection>
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
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link
                      to="/dove-siamo"
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium inline-flex items-center gap-1"
                    >
                      Vedi la mappa completa →
                    </Link>
                    <a
                      href="https://www.google.com/maps/place/CoreNexus+Technology+Solution"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium inline-flex items-center gap-1"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Apri su Google Maps →
                    </a>
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