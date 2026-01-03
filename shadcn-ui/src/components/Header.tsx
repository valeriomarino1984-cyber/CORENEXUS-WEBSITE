import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, LogIn, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-effect shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            CoreNexus.it
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
            >
              Servizi
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
            >
              Chi Siamo
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
          <nav className="md:hidden mt-4 pb-4 space-y-4 glass-effect rounded-2xl p-6 animate-fade-in-up">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider py-2"
            >
              Servizi
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider py-2"
            >
              Chi Siamo
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider py-2"
            >
              Contatti
            </button>
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
          </nav>
        )}
      </div>
    </header>
  );
}