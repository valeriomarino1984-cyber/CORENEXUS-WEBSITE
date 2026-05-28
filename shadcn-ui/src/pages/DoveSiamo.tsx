import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  MapPin,
  Navigation,
  Clock,
  Phone,
  Mail,
  Building2,
  Car,
  Train,
  Check,
  Globe,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema, standardAreaServed, standardSameAs } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';

const mapBadges = [
  { name: 'Ostia', top: '72%', left: '18%', color: '#3b82f6' },
  { name: 'Fiumicino', top: '45%', left: '8%', color: '#3b82f6' },
  { name: 'Ostia Antica', top: '65%', left: '28%', color: '#3b82f6' },
  { name: 'Acilia', top: '58%', left: '33%', color: '#a855f7' },
  { name: 'Casal Palocco', top: '70%', left: '38%', color: '#a855f7' },
  { name: 'Dragona', top: '50%', left: '24%', color: '#a855f7' },
  { name: 'Mostacciano', top: '52%', left: '52%', color: '#f97316' },
  { name: 'Torrino', top: '58%', left: '56%', color: '#f97316' },
  { name: 'Spinaceto', top: '65%', left: '52%', color: '#f97316' },
  { name: 'EUR', top: '44%', left: '56%', color: '#10b981' },
  { name: 'Pomezia', top: '78%', left: '58%', color: '#10b981' },
  { name: 'Ardea', top: '88%', left: '62%', color: '#10b981' },
];

const mapLegend = [
  { label: 'Zona Litorale Romano', color: '#3b82f6' },
  { label: 'Zona Sud-Ovest', color: '#a855f7' },
  { label: 'Zona Sud', color: '#f97316' },
  { label: 'Zona EUR e Industriale', color: '#10b981' },
];

export default function DoveSiamo() {
  const navigate = useNavigate();
  const scrollToContact = () => { navigate('/#contact'); };

  const doveSiamoBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Dove Siamo', url: '/dove-siamo' },
  ]);

  const doveSiamoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      doveSiamoBreadcrumb,
      {
        "@type": "LocalBusiness",
        "name": "CoreNexus Technology Solution",
        "description": "Assistenza informatica professionale a Roma Sud, EUR, Ostia, Fiumicino e provincia. Sistemisti IT, sicurezza informatica, reti aziendali e videosorveglianza.",
        "url": "https://corenexus.it",
        "telephone": "+393534012055",
        "email": "info@corenexus.it",
        "areaServed": standardAreaServed,
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 41.7519, "longitude": 12.375 },
          "geoRadius": "30000"
        },
        "sameAs": standardSameAs
      }
    ]
  };

  const coverageZones = [
    {
      area: 'Zona Litorale Romano',
      description: 'Copertura completa del litorale romano con interventi rapidi e assistenza on-site per aziende e privati.',
      locations: ['Ostia Lido', 'Ostia Antica', 'Fiumicino', 'Focene', 'Isola Sacra', 'Maccarese'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGlow: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-400',
      dotColor: 'bg-blue-400',
      responseTime: 'Entro 30 min',
    },
    {
      area: 'Zona Sud-Ovest',
      description: 'Area residenziale e commerciale con alta densita di clienti business. Interventi on-site con tempi certi.',
      locations: ['Acilia', 'Casal Palocco', 'Infernetto', 'Casal Bernocchi', 'Dragona', 'Dragoncello', 'Axa', 'Malafede'],
      gradient: 'from-purple-500 to-pink-500',
      bgGlow: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      textColor: 'text-purple-400',
      dotColor: 'bg-purple-400',
      responseTime: 'Entro 30 min',
    },
    {
      area: 'Zona Sud',
      description: 'Quartieri residenziali e direzionali con eccellente copertura di servizio IT e sicurezza informatica.',
      locations: ['Mostacciano', 'Torrino', 'Laurentina', 'Spinaceto', 'Mezzocammino', 'Cecchignola', 'Fonte Ostiense', 'Vitinia'],
      gradient: 'from-orange-500 to-red-500',
      bgGlow: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      textColor: 'text-orange-400',
      dotColor: 'bg-orange-400',
      responseTime: 'Entro 45 min',
    },
    {
      area: 'Zona EUR e Business District',
      description: 'Cuore direzionale di Roma con servizi IT dedicati alle aziende del quartiere EUR e zone limitrofe.',
      locations: ['EUR', 'Ferratella', 'Tre Fontane', 'Palazzo dei Congressi', 'Viale Europa', 'Montagnola'],
      gradient: 'from-emerald-500 to-teal-500',
      bgGlow: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-400',
      dotColor: 'bg-emerald-400',
      responseTime: 'Entro 30 min',
    },
    {
      area: 'Zona Industriale e Pontina',
      description: 'Copertura delle aree industriali e produttive lungo la direttrice Pontina. Specializzati in IT per PMI.',
      locations: ['Pomezia', 'Ardea', 'Santa Palomba', 'Castel Romano', 'Pratica di Mare', 'Torvaianica'],
      gradient: 'from-amber-500 to-yellow-500',
      bgGlow: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
      textColor: 'text-amber-400',
      dotColor: 'bg-amber-400',
      responseTime: 'Entro 60 min',
    },
    {
      area: 'Roma Centro e Altre Zone',
      description: 'Servizio disponibile su appuntamento per tutta Roma e provincia. Assistenza remota immediata.',
      locations: ['Roma Centro', 'Trastevere', 'Testaccio', 'San Paolo', 'Ostiense', 'Garbatella', 'Marconi', 'Magliana'],
      gradient: 'from-rose-500 to-red-500',
      bgGlow: 'bg-rose-500/10',
      borderColor: 'border-rose-500/20',
      textColor: 'text-rose-400',
      dotColor: 'bg-rose-400',
      responseTime: 'Su appuntamento',
    },
  ];

  const advantages = [
    {
      icon: Car,
      title: 'Interventi On-Site Rapidi a Roma',
      description: 'Raggiungiamo la tua sede in tempi brevi grazie alla nostra posizione strategica nel quadrante sud di Roma, EUR, Ostia e Fiumicino.',
    },
    {
      icon: Clock,
      title: 'Tempi di Risposta Garantiti',
      description: 'SLA personalizzati con tempi di intervento certi, dalla presa in carico alla risoluzione del problema IT.',
    },
    {
      icon: Globe,
      title: 'Assistenza Remota Illimitata',
      description: 'Per le zone piu distanti offriamo supporto remoto immediato tramite connessione sicura VPN per tutta Italia.',
    },
    {
      icon: Building2,
      title: 'Conoscenza del Territorio',
      description: 'Operiamo da anni nel quadrante sud di Roma: conosciamo le infrastrutture, i provider locali e le esigenze delle PMI della zona.',
    },
  ];

  return (
    <>
      <SEO
        title="Dove Siamo | Assistenza IT Roma Sud EUR Ostia Fiumicino Pomezia Acilia - CoreNexus"
        description="CoreNexus Technology Solution offre assistenza informatica a Roma, EUR, Ostia Lido, Fiumicino, Pomezia, Acilia, Casal Palocco e tutta Roma Sud. Interventi on-site rapidi per PMI e privati. Verifica la copertura nella tua zona."
        keywords={[
          'assistenza informatica Roma Sud',
          'dove siamo CoreNexus',
          'assistenza IT Roma',
          'supporto IT Ostia Lido',
          'assistenza IT Fiumicino',
          'sistemista EUR Roma',
          'assistenza informatica Pomezia',
          'supporto IT Acilia',
          'assistenza computer Casal Palocco',
          'tecnico informatico Roma Sud',
          'intervento IT on-site Roma',
          'zone copertura assistenza IT Roma',
          'assistenza IT Roma EUR',
          'supporto informatico Ostia',
          'tecnico IT Torrino Roma',
          'assistenza informatica Spinaceto',
          'IT Roma Ardea',
        ]}
        canonical="/dove-siamo"
        schema={doveSiamoSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6 premium-gradient">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-purple-950/20" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-8">
                <div className="inline-block">
                  <span className="px-4 py-2 rounded-full glass-effect text-blue-400 text-sm font-semibold tracking-wide flex items-center gap-2 mx-auto">
                    <MapPin className="w-4 h-4" />
                    Copertura Territoriale
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                    Dove Operiamo
                  </span>
                  <span className="block text-3xl md:text-4xl text-gray-400 mt-2 font-normal">
                    Roma, EUR, Ostia, Fiumicino e tutta Roma Sud
                  </span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  CoreNexus Technology Solution offre assistenza informatica professionale nel quadrante sud di Roma con interventi on-site rapidi. Sistemisti IT, sicurezza informatica, reti aziendali e videosorveglianza per PMI e privati.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" onClick={scrollToContact} className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-blue-500/20">
                    Verifica la copertura nella tua zona
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="rounded-3xl glass-effect border border-white/10 overflow-hidden p-4">
                <div className="flex flex-wrap gap-4 mb-4 px-2">
                  {mapLegend.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full border-2 border-white flex-shrink-0" style={{ background: item.color, boxShadow: `0 0 6px ${item.color}` }} />
                      <span className="text-gray-400 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="relative w-full rounded-xl overflow-hidden" style={{ height: '480px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95386.38555866488!2d12.374999999999998!3d41.7519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258a111bd74ac3%3A0x3094f9ab2388100!2sOstia%2C%20Roma%2C%20Italy!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block', position: 'absolute', inset: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Zone di Copertura CoreNexus Technology Solution - Assistenza IT Roma Sud e Litorale"
                  />
                  {mapBadges.map((badge, idx) => (
                    <div
                      key={idx}
                      className="absolute flex items-center gap-1 px-2 py-1 rounded-full text-white text-xs font-semibold pointer-events-none"
                      style={{ top: badge.top, left: badge.left, background: badge.color + 'dd', border: `1px solid ${badge.color}`, boxShadow: `0 0 8px ${badge.color}88`, zIndex: 10, transform: 'translate(-50%, -50%)', whiteSpace: 'nowrap' }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                      {badge.name}
                    </div>
                  ))}
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* Coverage Zones */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Assistenza IT Roma: le nostre zone di copertura</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Assistenza informatica professionale con tempi di intervento garantiti in tutte le principali zone di Roma Sud e provincia.
                </p>
              </div>
            </MorphingSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coverageZones.map((zone, index) => (
                <MorphingSection key={index} delay={index * 0.1}>
                  <div className={`relative p-8 rounded-3xl glass-effect border ${zone.borderColor} transition-all duration-500 hover:scale-105 h-full flex flex-col`}>
                    <div className={`absolute top-0 right-0 w-32 h-32 ${zone.bgGlow} rounded-full blur-2xl -z-10`} />
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${zone.gradient} flex items-center justify-center flex-shrink-0`}>
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{zone.area}</h3>
                        <div className={`flex items-center gap-1.5 ${zone.textColor} text-sm font-medium`}>
                          <Clock className="w-3.5 h-3.5" />
                          {zone.responseTime}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-5 leading-relaxed">{zone.description}</p>
                    <div className="space-y-2 flex-1">
                      {zone.locations.map((location, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <div className={`w-2 h-2 rounded-full ${zone.dotColor} flex-shrink-0`} />
                          <span className="text-gray-300 text-sm">{location}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Perche Scegliere un Partner IT Locale a Roma</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Essere vicini ai nostri clienti ci permette di offrire un servizio piu rapido, efficiente e personalizzato.
                </p>
              </div>
            </MorphingSection>
            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((adv, index) => (
                <MorphingSection key={index} delay={index * 0.15}>
                  <div className="p-8 rounded-3xl glass-effect border border-white/5 hover:border-blue-500/30 transition-all duration-300 group hover:bg-white/5">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <adv.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{adv.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{adv.description}</p>
                      </div>
                    </div>
                  </div>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* Come Raggiungerci */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Come Raggiungerci a Roma Sud</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
              </div>
            </MorphingSection>
            <div className="grid md:grid-cols-3 gap-8">
              <MorphingSection delay={0.1}>
                <div className="p-8 rounded-3xl glass-effect border border-white/10 text-center space-y-4 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto">
                    <Car className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">In Auto</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Facilmente raggiungibili dalla Via Cristoforo Colombo, Via Pontina e dal Grande Raccordo Anulare (uscite EUR, Ostia, Acilia).</p>
                </div>
              </MorphingSection>
              <MorphingSection delay={0.2}>
                <div className="p-8 rounded-3xl glass-effect border border-white/10 text-center space-y-4 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto">
                    <Train className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Con i Mezzi</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Raggiungibili con la Roma-Lido (Ostia), Metro B (EUR) e numerose linee bus ATAC che collegano le zone servite.</p>
                </div>
              </MorphingSection>
              <MorphingSection delay={0.3}>
                <div className="p-8 rounded-3xl glass-effect border border-white/10 text-center space-y-4 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto">
                    <Navigation className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Intervento On-Site</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Siamo noi a venire da te! Il nostro team si sposta direttamente presso la tua sede per interventi tecnici e installazioni a Roma e provincia.</p>
                </div>
              </MorphingSection>
            </div>
          </div>
        </section>

        {/* Assistenza remota */}
        <section className="py-16 px-6 relative">
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="p-8 rounded-3xl glass-effect border border-blue-500/20">
                <div className="flex items-start gap-4">
                  <Globe className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">Assistenza Informatica Remota in Tutta Italia</h4>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Non sei nella nostra zona di copertura on-site? Nessun problema! Offriamo <strong className="text-blue-400">assistenza remota professionale</strong> per tutta Italia tramite connessione sicura. Monitoraggio, manutenzione, supporto tecnico e consulenza IT senza limiti geografici.
                    </p>
                  </div>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <MorphingSection>
              <div className="p-12 rounded-3xl glass-effect border border-blue-500/20 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Hai bisogno di assistenza IT nella tua zona?</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Contattaci per verificare la disponibilita del servizio e ricevere un preventivo personalizzato per la tua area a Roma, EUR, Ostia o Fiumicino.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={scrollToContact} className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-blue-500/20">
                    Contattaci Ora
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                  <Link to="/servizi">
                    <Button size="lg" variant="outline" className="glass-effect border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-10 py-7 text-lg rounded-2xl font-semibold">
                      Scopri i Nostri Servizi
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
