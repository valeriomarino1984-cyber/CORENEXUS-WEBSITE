import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, LogIn, Shield, ChevronDown, Network, ShieldCheck, Wrench, ClipboardList, Camera, Globe, FileText, Phone, Cog, Cpu, Briefcase, Monitor, BookOpen, Container, Radar } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const isHomePage = location.pathname === '/';
  const isServicesPage = [
    '/servizi',
    '/networking-reti',
    '/sicurezza-informatica',
    '/assistenza-sistemistica',
    '/project-management',
    '/impianti-allarme-videosorveglianza',
    '/siti-web',
    '/contratti-manutenzione',
    '/centralini-voip',
    '/automazione-processi',
    '/kubernetes-container',
    '/soc-as-a-service',
  ].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
    setIsMobileMenuOpen(false);
  };

  const goHome = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsMobileMenuOpen(false);
  };

  const serviceLinks = [
    { name: 'Tutti i Servizi', path: '/servizi', icon: null },
    { name: 'Contratti di Manutenzione', path: '/contratti-manutenzione', icon: FileText },
    { name: 'Consulenza Sistemistica', path: '/assistenza-sistemistica', icon: Wrench },
    { name: 'Automazione Processi IT', path: '/automazione-processi', icon: Cog },
    { name: 'Kubernetes e Container', path: '/kubernetes-container', icon: Container },
    { name: 'Project Management', path: '/project-management', icon: ClipboardList },
    { name: 'Networking e Reti', path: '/networking-reti', icon: Network },
    { name: 'Sicurezza Informatica', path: '/sicurezza-informatica', icon: ShieldCheck },
    { name: 'Il Tuo Sistema SOC', path: '/soc-as-a-service', icon: Radar },
    { name: 'Allarme e Videosorveglianza', path: '/impianti-allarme-videosorveglianza', icon: Camera },
    { name: 'Siti Web & E-commerce', path: '/siti-web', icon: Globe },
    { name: 'Centralini VoIP', path: '/centralini-voip', icon: Phone },
  ];

  const navLinkClass = (isActive: boolean) =>
    `text-gray-300 hover:text-white transition-colors duration-300 text-[13px] font-medium uppercase tracking-wider whitespace-nowrap ${isActive ? 'text-white' : ''}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-effect shadow-2xl' : 'bg-transparent'
      }`}
      style={{ border: 'none' }}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-3">
        {/* Desktop: Two rows, both centered */}
        <div className="hidden lg:flex flex-col items-center gap-2">
          {/* Row 1: Logo centered */}
          <div
            className="text-xl xl:text-2xl font-bold gradient-text cursor-pointer whitespace-nowrap"
            onClick={goHome}
          >
            CoreNexus Technology Solution
          </div>

          {/* Row 2: Nav links + buttons, all centered */}
          <nav className="flex items-center justify-center gap-3 xl:gap-4">
            <button onClick={goHome} className={navLinkClass(false)}>
              Home
            </button>

            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center gap-1 ${navLinkClass(isServicesPage)}`}
              >
                Servizi
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 glass-effect rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-fade-in-up">
                  {serviceLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        navigate(link.path);
                        setIsServicesOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-5 py-3.5 text-left text-sm transition-all duration-200 ${
                        location.pathname === link.path
                          ? 'text-white bg-white/10'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      } ${index === 0 ? 'border-b border-white/10 font-semibold' : ''}`}
                    >
                      {link.icon && <link.icon className="w-4 h-4 text-blue-400" />}
                      {link.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => navigate('/tecnologie')}
              className={navLinkClass(location.pathname === '/tecnologie')}
            >
              Tecnologie
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={navLinkClass(false)}
            >
              Cosa Facciamo
            </button>
            <button
              onClick={() => navigate('/blog')}
              className={navLinkClass(location.pathname.startsWith('/blog'))}
            >
              Blog
            </button>
            <button
              onClick={() => navigate('/dove-siamo')}
              className={navLinkClass(location.pathname === '/dove-siamo')}
            >
              Dove Siamo
            </button>
            <button
              onClick={() => navigate('/contatti')}
              className={navLinkClass(location.pathname === '/contatti')}
            >
              Contatti
            </button>
            <button
              onClick={() => navigate('/assistenza-remota')}
              className={navLinkClass(location.pathname === '/assistenza-remota')}
            >
              Assistenza Remota
            </button>

            <Button
              onClick={() => navigate('/login')}
              variant="outline"
              className="glass-effect border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-3 xl:px-4 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap"
            >
              <LogIn className="w-3.5 h-3.5 mr-1" />
              Area Clienti
            </Button>
            <Button
              onClick={() => navigate('/admin/login')}
              variant="outline"
              className="glass-effect border-red-500/30 hover:border-red-500/50 text-red-500 hover:bg-red-500/10 px-3 xl:px-4 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap"
            >
              <Shield className="w-3.5 h-3.5 mr-1" />
              Area Admin
            </Button>
          </nav>
        </div>

        {/* Mobile: logo + hamburger */}
        <div className="flex lg:hidden items-center justify-between">
          <div
            className="text-lg font-bold gradient-text cursor-pointer whitespace-nowrap flex-shrink-0"
            onClick={goHome}
          >
            CoreNexus Technology Solution
          </div>

          <button
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-2 glass-effect rounded-2xl p-6 animate-fade-in-up">
            <button
              onClick={goHome}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider py-2"
            >
              Home
            </button>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider py-2"
              >
                Servizi
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileServicesOpen && (
                <div className="ml-4 space-y-1 mt-1 mb-2">
                  {serviceLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        navigate(link.path);
                        setIsMobileMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                      className={`block w-full text-left py-2 px-3 rounded-lg text-sm transition-all duration-200 ${
                        location.pathname === link.path
                          ? 'text-white bg-white/10'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {link.icon && <link.icon className="w-4 h-4 text-blue-400" />}
                        {link.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                navigate('/tecnologie');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider py-2 ${
                location.pathname === '/tecnologie' ? 'text-white' : ''
              }`}
            >
              <span className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                Tecnologie
              </span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider py-2"
            >
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-400" />
                Cosa Facciamo
              </span>
            </button>
            <button
              onClick={() => {
                navigate('/blog');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider py-2 ${
                location.pathname.startsWith('/blog') ? 'text-white' : ''
              }`}
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                Blog
              </span>
            </button>
            <button
              onClick={() => {
                navigate('/dove-siamo');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider py-2"
            >
              Dove Siamo
            </button>
            <button
              onClick={() => {
                navigate('/contatti');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider py-2 ${
                location.pathname === '/contatti' ? 'text-white' : ''
              }`}
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                Contatti
              </span>
            </button>
            <button
              onClick={() => {
                navigate('/assistenza-remota');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider py-2 ${
                location.pathname === '/assistenza-remota' ? 'text-white' : ''
              }`}
            >
              <span className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-cyan-400" />
                Assistenza Remota
              </span>
            </button>
            <div className="pt-2 space-y-2">
              <Button
                onClick={() => navigate('/login')}
                variant="outline"
                className="w-full glass-effect border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-6 py-3 rounded-xl text-sm font-semibold"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Area Riservata Clienti
              </Button>
              <Button
                onClick={() => navigate('/admin/login')}
                variant="outline"
                className="w-full glass-effect border-red-500/30 hover:border-red-500/50 text-red-500 hover:bg-red-500/10 px-6 py-3 rounded-xl text-sm font-semibold"
              >
                <Shield className="w-4 h-4 mr-2" />
                Area Riservata Admin
              </Button>
              <Button
                onClick={() => {
                  navigate('/contatti');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full premium-button text-white px-6 py-3 rounded-xl text-sm font-semibold"
              >
                Richiedi Preventivo
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}