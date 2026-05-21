import { useEffect, useRef, useCallback } from 'react';
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
import { ArrowRight, Sparkles, Building2, Rocket, Scale, Factory, Gift, Server, ShieldCheck, Cog, CheckCircle } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { localBusinessSchema, professionalServiceSchema, breadcrumbSchema } from '@/utils/seoSchemas';

export default function Index() {
  const location = useLocation();
  const navigate = useNavigate();
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const orb4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const handleParallax = useCallback(() => {
    const scrollY = window.scrollY;
    if (orb1Ref.current) orb1Ref.current.style.transform = `translateY(${scrollY * 0.3}px) translateX(${Math.sin(scrollY * 0.002) * 30}px)`;
    if (orb2Ref.current) orb2Ref.current.style.transform = `translateY(${scrollY * 0.15}px) translateX(${Math.cos(scrollY * 0.003) * 40}px)`;
    if (orb3Ref.current) orb3Ref.current.style.transform = `translateY(${scrollY * 0.2}px) translateX(${Math.sin(scrollY * 0.0025) * 25}px)`;
    if (orb4Ref.current) orb4Ref.current.style.transform = `translateY(${scrollY * 0.1}px) translateX(${Math.cos(scrollY * 0.002) * 35}px)`;
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { handleParallax(); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleParallax]);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const homeBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/#services' },
    { name: 'Cosa Facciamo', url: '/#about' },
    { name: 'Contatti', url: '/contatti' }
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, professionalServiceSchema, homeBreadcrumb]
  };

  const targetAudiences = [
    { icon: Building2, title: "PMI", description: "Riduciamo costi IT, inefficienze e problemi quotidiani con soluzioni pratiche e su misura.", gradient: "from-blue-500 to-cyan-500" },
    { icon: Rocket, title: "Startup", description: "Costruiamo infrastrutture scalabili fin dall'inizio, evitando errori costosi.", gradient: "from-purple-500 to-pink-500" },
    { icon: Scale, title: "Studi professionali", description: "Proteggiamo dati sensibili e garantiamo continuità operativa e compliance.", gradient: "from-amber-500 to-orange-500" },
    { icon: Factory, title: "Aziende industriali", description: "Integriamo sistemi, miglioriamo affidabilità e sicurezza dell'infrastruttura IT.", gradient: "from-emerald-500 to-teal-500" }
  ];

  const cosaFacciamo = [
    { icon: Server, title: "Infrastrutture IT", description: "Progettazione e gestione di server, reti e ambienti virtualizzati.", gradient: "from-blue-500 to-indigo-600" },
    { icon: ShieldCheck, title: "Cyber Security", description: "Protezione dei sistemi e dei dati aziendali con soluzioni di sicurezza avanzate.", gradient: "from-red-500 to-rose-600" },
    { icon: Cog, title: "Automazione IT", description: "Ottimizzazione dei processi tecnologici tramite automazione e integrazione dei sistemi.", gradient: "from-purple-500 to-violet-600" }
  ];

  const percheSceglierci = [
    "Supporto tecnico specializzato",
    "Infrastrutture progettate per crescere",
    "Monitoraggio e prevenzione dei problemi",
    "Soluzioni scalabili e sicure",
    "Interventi rapidi e professionali"
  ];

  const heroTitle = "Assistenza Informatica e Supporto IT per Aziende a Roma";

  return (
    <>
      <SEO
        title="Assistenza Informatica Roma EUR Ostia Fiumicino Pomezia | Supporto IT Aziendale - CoreNexus"
        description="Assistenza informatica professionale a Roma, EUR, Ostia Lido, Fiumicino e Pomezia. Supporto IT aziendale, gestione reti, cybersecurity, server Wazuh e Zabbix, videosorveglianza Hikvision, centralini VoIP FreePBX. Interventi rapidi on-site e da remoto."
        keywords={['assistenza informatica Roma','assistenza informatica Roma EUR','supporto IT Ostia Lido','assistenza informatica Fiumicino','assistenza informatica Pomezia','supporto IT Roma Sud','sistemista Roma EUR','cybersecurity Roma','assistenza server Roma','videosorveglianza Hikvision Roma','centralino VoIP Roma','gestione reti aziendali Roma','tecnico informatico Roma','managed services Roma','assistenza IT aziendale Roma EUR Ostia Fiumicino']}
        canonical="/"
        schema={combinedSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-24 px-6 premium-gradient">

          {/* Ambient glow CSS-only */}
          <div className="hero-ambient-1" />
          <div className="hero-ambient-2" />
          <div className="hero-ambient-3" />

          {/* Parallax Floating Orbs */}
          <div ref={orb1Ref} className="absolute top-10 left-[5%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-orb-1 pointer-events-none" style={{ transition: 'transform 0.1s linear' }} />
          <div ref={orb2Ref} className="absolute bottom-10 right-[5%] w-[450px] h-[450px] bg-purple-500/20 rounded-full blur-3xl animate-orb-2 pointer-events-none" style={{ transition: 'transform 0.1s linear' }} />
          <div ref={orb3Ref} className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl animate-orb-3 pointer-events-none" style={{ transition: 'transform 0.1s linear' }} />
          <div ref={orb4Ref} className="absolute bottom-[30%] left-[15%] w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-3xl animate-orb-1 pointer-events-none" style={{ transition: 'transform 0.1s linear', animationDelay: '3s' }} />

          <div className="max-w-7xl mx-auto relative z-10 animate-hero-zoom">
            <div className="space-y-8 text-center text-[#F5F5F7]">

              <div className="inline-block hero-stagger-1">
                <span className="px-6 py-3 rounded-full glass-effect text-blue-400 text-sm font-semibold tracking-wide flex items-center gap-2 animate-pulse-glow">
                  <Sparkles className="w-4 h-4" />
                  Tecnologia e innovazione al servizio della tua impresa
                </span>
              </div>

              <h1
                className="text-6xl md:text-8xl font-bold glitch-text leading-tight tracking-tight hero-stagger-2"
                data-text={heroTitle}
              >
                {heroTitle}
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light hero-stagger-3">
                Aiutiamo le aziende a lavorare senza interruzioni grazie a servizi informatici affidabili: gestione delle reti aziendali, sicurezza informatica, server e sistemi di comunicazione.
              </p>

              <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed hero-stagger-4">
                Operiamo a Roma Sud, EUR, Ostia, Fiumicino e provincia, con supporto rapido e soluzioni su misura.
              </p>

              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center hero-stagger-5">
                <Button size="lg" onClick={scrollToContact} className="group premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold" aria-label="Richiedi una consulenza gratuita">
                  Richiedi una consulenza gratuita
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>

              <p className="text-sm text-gray-500 pt-6 flex items-center justify-center gap-2 hero-stagger-5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Soluzioni IT affidabili, sicure e scalabili per la crescita della tua azienda
              </p>
            </div>
          </div>
        </section>

        {/* Cosa Facciamo */}
        <section id="about" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center space-y-8">
              <div className="reveal-on-scroll">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Cosa Facciamo</h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  Offriamo soluzioni IT complete per garantire sicurezza, efficienza e continuità operativa alla tua azienda.
                </p>
              </div>
              <div className="pt-8 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {cosaFacciamo.map((item, index) => (
                  <article key={index} className={`p-10 rounded-3xl glass-effect hover:bg-white/10 transition-all duration-500 card-hover group text-center ${index === 0 ? 'reveal-left' : index === 2 ? 'reveal-right' : 'reveal-on-scroll'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{item.description}</p>
                  </article>
                ))}
              </div>
              <div className="pt-16 reveal-on-scroll">
                <h3 className="text-3xl md:text-4xl font-semibold text-white mb-10">Perché scegliere CoreNexus Technology Solution</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                  {percheSceglierci.map((item, index) => (
                    <div key={index} className={`flex items-center gap-4 p-6 rounded-2xl glass-effect hover:bg-white/10 transition-all duration-500 group ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-gray-200 font-medium leading-relaxed text-left">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-10 reveal-on-scroll">
                <Button size="lg" onClick={scrollToContact} className="group premium-button text-white px-12 py-7 text-lg rounded-2xl font-semibold" aria-label="Scopri come possiamo aiutarti">
                  Scopri come possiamo aiutarti
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* A Chi Ci Rivolgiamo */}
        <section id="target-audience" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center space-y-6 mb-16 reveal-on-scroll">
              <h2 className="text-5xl md:text-6xl font-bold text-white">A chi ci rivolgiamo</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">Soluzioni IT personalizzate per ogni tipo di realtà aziendale</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {targetAudiences.map((audience, index) => (
                <article key={index} className={`p-8 rounded-3xl glass-effect hover:bg-white/10 transition-all duration-500 card-hover group text-center ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <audience.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{audience.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{audience.description}</p>
                </article>
              ))}
            </div>
            <div className="text-center reveal-on-scroll">
              <Button size="lg" onClick={scrollToContact} className="group premium-button text-white px-12 py-7 text-lg rounded-2xl font-semibold" aria-label="Parliamo del tuo caso">
                Parliamo del tuo caso
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </section>

        {/* Audit IT Gratuito */}
        <section id="audit" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/20 to-black" />
          <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-orb-2" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-orb-1" style={{ animationDelay: '1.5s' }} />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center reveal-on-scroll">
              <div className="p-12 rounded-3xl glass-effect border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-500">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-8 mx-auto shadow-lg shadow-emerald-500/30">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">🎁 Audit IT gratuito</h2>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-4">Valutiamo l'infrastruttura, individuiamo criticità e opportunità di miglioramento.</p>
                <p className="text-lg text-emerald-400 font-semibold mb-10">Senza impegno.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => navigate('/audit-gratuito')} className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-12 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300">
                    Scopri di più
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                  <Button size="lg" onClick={scrollToContact} variant="outline" className="group glass-effect border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 px-12 py-7 text-lg rounded-2xl font-semibold transition-all duration-300">
                    Prenota ora
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
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

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div className="space-y-4 reveal-left">
                <h3 className="text-xl font-bold text-white">CoreNexus Technology Solution</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Assistenza informatica professionale e supporto sistemistico per aziende a Roma Sud, Ostia, Fiumicino, EUR e provincia.</p>
                <address className="text-gray-400 text-sm not-italic space-y-1">
                  <p>Roma, Lazio</p>
                  <p>📞 <a href="tel:+393534012055" className="text-blue-400 hover:text-blue-300 transition-colors">+39 353 401 2055</a></p>
                  <p>✉️ <a href="mailto:info@corenexus.it" className="text-blue-400 hover:text-blue-300 transition-colors">info@corenexus.it</a></p>
                </address>
              </div>
              <nav className="space-y-4 reveal-on-scroll" aria-label="Link rapidi">
                <h4 className="text-lg font-semibold text-white">Link Utili</h4>
                <ul className="space-y-2">
                  <li><Link to="/servizi" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Servizi IT</Link></li>
                  <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Cosa Facciamo</a></li>
                  <li><Link to="/audit-gratuito" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">🎁 Audit IT Gratuito</Link></li>
                  <li><Link to="/dove-siamo" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Dove Siamo</Link></li>
                  <li><Link to="/contatti" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Contatti</Link></li>
                  <li><Link to="/blog" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Blog</Link></li>
                </ul>
              </nav>
              <nav className="space-y-4 reveal-right" aria-label="Informazioni legali">
                <h4 className="text-lg font-semibold text-white">Informazioni Legali</h4>
                <ul className="space-y-2">
                  <li><Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Privacy Policy</Link></li>
                  <li><Link to="/cookie-policy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Cookie Policy</Link></li>
                  <li><Link to="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Termini e Condizioni</Link></li>
                </ul>
              </nav>
            </div>
            <div className="border-t border-white/10 pt-8">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <p className="text-gray-400 text-sm">© 2026 <a href="https://corenexus.it" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">CoreNexus Technology Solution</a> - Tutti i diritti riservati.</p>
                </div>
                <p className="text-xs text-gray-500">Assistenza informatica Roma | Assistenza informatica Ostia | Assistenza informatica Fiumicino | Assistenza informatica EUR | Assistenza informatica Acilia | Assistenza informatica Mostacciano</p>
                <p className="text-xs text-gray-500">Sito realizzato da <a href="https://corenexus.it" className="text-blue-400 hover:text-blue-300 transition-colors">CoreNexus Technology Solution</a></p>
                <p className="text-xs text-gray-600">v2.5 - 21/05/2026</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
