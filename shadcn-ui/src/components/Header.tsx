import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, LogIn, Shield, ChevronDown, Network, ShieldCheck, Wrench, ClipboardList, Camera, MapPin } from 'lucide-react';
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
    { name: 'Networking e Reti', path: '/networking-reti', icon: Network },
    { name: 'Sicurezza Informatica', path: '/sicurezza-informatica', icon: ShieldCheck },
    { name: 'Assistenza Sistemistica', path: '/assistenza-sistemistica', icon: Wrench },
    { name: 'Project Management', path: '/project-management', icon: ClipboardList },
    { name: 'Allarme e Videosorveglianza', path: '/impianti-allarme-videosorveglianza', icon: Camera },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-effect shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text cursor-pointer" onClick={goHome}>
            CoreNexus.it
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={goHome}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider ${
                  isServicesPage ? 'text-white' : ''
                }`}
              >
                Servizi
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
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
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
            >
              Chi Siamo
            </button>
            <button
              onClick={() => {
                navigate('/dove-siamo');
              }}
              className={`text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider ${
                location.pathname === '/dove-siamo' ? 'text-white' : ''
              }`}
            >
              Dove Siamo
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
            >
              Contatti
            </button>
            <Button
              onClick={() => navigate('/login')}
              variant="outline"
              className="glass-effect border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-6 py-2 rounded-xl text-sm font-semibold"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Area Riservata Clienti
            </Button>
            <Button
              onClick={() => navigate('/admin/login')}
              variant="outline"
              className="glass-effect border-red-500/30 hover:border-red-500/50 text-red-500 hover:bg-red-500/10 px-6 py-2 rounded-xl text-sm font-semibold"
            >
              <Shield className="w-4 h-4 mr-2" />
              Area Riservata Admin
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 glass-effect rounded-2xl p-6 animate-fade-in-up">
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
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider py-2"
            >
              Chi Siamo
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
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider py-2"
            >
              Contatti
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
                onClick={() => scrollToSection('contact')}
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