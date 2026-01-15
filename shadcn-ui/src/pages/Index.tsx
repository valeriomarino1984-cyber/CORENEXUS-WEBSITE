import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import WebsitesSection from '@/components/WebsitesSection';
import FreePBXSection from '@/components/FreePBXSection';
import BrandsSection from '@/components/BrandsSection';
import CoverageSection from '@/components/CoverageSection';
import ContactSection from '@/components/ContactSection';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { localBusinessSchema, professionalServiceSchema, breadcrumbSchema } from '@/utils/seoSchemas';

export default function Index() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const homeBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/#services' },
    { name: 'Chi Siamo', url: '/#about' },
    { name: 'Contatti', url: '/#contact' }
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, professionalServiceSchema, homeBreadcrumb]
  };

  return (
    <>
      <SEO
        title="Assistenza Informatica Roma EUR Ostia | Supporto IT Aziendale"
        description="Assistenza informatica professionale a Roma EUR, Ostia Lido e Fiumicino. Supporto IT aziendale, gestione reti, cybersecurity, videosorveglianza Hikvision, server enterprise e centralini VoIP FreePBX. Servizi sistemistici per PMI."
        keywords={[
          'assistenza informatica Roma EUR',
          'supporto IT Ostia Lido',
          'cybersecurity Roma sud',
          'managed services Fiumicino',
          'sistemista Roma EUR',
          'assistenza server enterprise',
          'videosorveglianza Hikvision Roma',
          'centralino VoIP FreePBX',
          'gestione reti aziendali',
          'sicurezza informatica PMI',
          'consulenza IT Roma',
          'supporto sistemistico Ostia',
          'backup aziendali cloud',
          'manutenzione server Roma'
        ]}
        canonical="/"
        schema={combinedSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section - Apple Premium Style */}
        <section className="relative overflow-hidden pt-32 pb-24 px-6 premium-gradient">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1),transparent)]" />
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center space-y-8 animate-fade-in-up">
              <div className="inline-block">
                <span className="px-6 py-3 rounded-full glass-effect text-blue-400 text-sm font-semibold tracking-wide flex items-center gap-2 animate-pulse-glow">
                  <Sparkles className="w-4 h-4" />
                  Tecnologia e innovazione al servizio della tua impresa
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold gradient-text leading-tight tracking-tight">
                Assistenza informatica<br />e supporto sistemistico<br />per aziende a Roma
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
                Offriamo servizi informatici professionali per la gestione di reti aziendali, la sicurezza informatica, 
                i sistemi di videosorveglianza Hikvision, l'assistenza server enterprise e centralini VoIP FreePBX a Roma Sud, Ostia, Fiumicino, EUR e provincia.
              </p>

              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="group premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold"
                  aria-label="Richiedi una consulenza gratuita"
                >
                  Richiedi Consulenza Gratuita
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>

              <p className="text-sm text-gray-500 pt-6 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Soluzioni IT affidabili, sicure e scalabili per la crescita della tua azienda
              </p>
            </div>
          </div>
        </section>

        {/* Chi Siamo Section - Dark Glassmorphism */}
        <section id="about" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center space-y-8 animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Chi siamo</h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                <p className="text-xl">
                  Siamo un team specializzato in <strong>assistenza informatica aziendale</strong> e <strong>servizi sistemistici professionali</strong> a Roma e provincia, 
                  dedicato a imprese che desiderano migliorare le proprie infrastrutture tecnologiche.
                </p>
                
                <p>
                  La nostra esperienza copre tutto il ciclo di vita dei sistemi IT: progettazione, implementazione, monitoraggio e manutenzione di reti aziendali, 
                  server enterprise, sistemi di sicurezza informatica e videosorveglianza nelle zone di Roma Sud, Ostia, Fiumicino, EUR, Acilia, Pomezia e limitrofe.
                </p>
                
                <p>
                  Con un approccio orientato alla sicurezza e all'efficienza, aiutiamo le aziende a ridurre i costi operativi, 
                  prevenire interruzioni del servizio e proteggere i propri dati sensibili.
                </p>
              </div>

              <div className="pt-12">
                <h3 className="text-3xl font-semibold text-white mb-8">I nostri obiettivi</h3>
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {[
                    'Garantire infrastrutture informatiche performanti e sicure',
                    'Fornire supporto sistemistico continuo e professionale',
                    'Ottimizzare la gestione dei server e delle reti aziendali'
                  ].map((goal, index) => (
                    <article 
                      key={index}
                      className="p-8 rounded-3xl glass-effect hover:bg-white/10 transition-all duration-500 card-hover group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold text-white">{index + 1}</span>
                      </div>
                      <p className="text-gray-200 font-medium leading-relaxed">
                        {goal}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />
        <FeaturesSection />
        <PricingSection />
        <WebsitesSection />
        <FreePBXSection />
        <BrandsSection />
        <CoverageSection />
        <ContactSection />
        <WhatsAppWidget />

        {/* Footer - Premium Dark with Legal Links */}
        <footer className="bg-black border-t border-white/10 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {/* Company Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">CoreNexus</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Assistenza informatica professionale e supporto sistemistico per aziende a Roma Sud, Ostia, Fiumicino, EUR e provincia.
                </p>
                <address className="text-gray-400 text-sm not-italic">
                  <p>Roma, Lazio</p>
                </address>
              </div>

              {/* Quick Links */}
              <nav className="space-y-4" aria-label="Link rapidi">
                <h4 className="text-lg font-semibold text-white">Link Utili</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                      Servizi IT
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                      Chi Siamo
                    </a>
                  </li>
                  <li>
                    <a href="#coverage" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                      Zone di Copertura
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                      Contatti
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Legal Links */}
              <nav className="space-y-4" aria-label="Informazioni legali">
                <h4 className="text-lg font-semibold text-white">Informazioni Legali</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/cookie-policy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                      Termini e Condizioni
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <p className="text-gray-400 text-sm">
                    © 2025 <a href="https://corenexus.it" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">CoreNexus.it</a> - Tutti i diritti riservati.
                  </p>
                </div>
                <p className="text-xs text-gray-500">
                  Assistenza informatica Roma | Supporto IT aziendale Ostia | Sistemista professionale Fiumicino | Assistenza IT EUR
                </p>
                <p className="text-xs text-gray-500">
                  Sito realizzato da <a href="https://corenexus.it" className="text-blue-400 hover:text-blue-300 transition-colors">CoreNexus.it</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}