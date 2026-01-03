import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CoverageSection() {
  const coverageZones = [
    {
      area: 'Zona Litorale Romano',
      locations: ['Ostia', 'Ostia Antica', 'Fiumicino', 'Zone limitrofe'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      area: 'Zona Sud-Ovest',
      locations: ['Acilia', 'Casal Palocco', 'Infernetto', 'Casal Bernocchi', 'Dragona', 'Dragoncello'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      area: 'Zona Sud',
      locations: ['Mostacciano', 'Torrino', 'Laurentina', 'Spinaceto', 'Mezzocammino'],
      color: 'from-orange-500 to-red-500',
    },
    {
      area: 'Zona EUR e Industriale',
      locations: ['EUR', 'Pomezia', 'Ardea', 'Aree industriali adiacenti'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="coverage" className="py-24 px-6 relative bg-gradient-to-b from-black via-gray-900/50 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">Copertura Territoriale</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Zone di Copertura
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Assistenza IT professionale nelle principali zone di Roma e provincia
          </p>
        </div>

        {/* Interactive Map */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <Card className="glass-effect border-white/10 bg-transparent overflow-hidden">
            <CardContent className="p-4">
              <div className="relative w-full rounded-lg overflow-hidden bg-gray-900/50" style={{ height: '500px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95386.38555866488!2d12.374999999999998!3d41.7519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258a111bd74ac3%3A0x3094f9ab2388100!2sOstia%2C%20Roma%2C%20Italy!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="500"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zone di Copertura Assistenza IT - Roma Sud e Litorale"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coverage Zones Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coverageZones.map((zone, index) => (
            <Card
              key={index}
              className="glass-effect border-white/10 hover:border-white/20 bg-transparent text-white card-hover animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <CardContent className="pt-8 pb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${zone.color} flex items-center justify-center mx-auto mb-4 glow-effect`}>
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{zone.area}</h3>
                <ul className="space-y-2">
                  {zone.locations.map((location, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      <span className="text-sm">{location}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <Card className="glass-effect border-white/10 bg-transparent text-white max-w-3xl mx-auto">
            <CardContent className="py-12 px-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                La tua zona non è in elenco?
              </h3>
              <p className="text-lg text-gray-400 mb-8">
                Contattaci per verificare la disponibilità del servizio nella tua area. Stiamo continuamente espandendo la nostra copertura territoriale.
              </p>
              <Button 
                onClick={scrollToContact}
                className="premium-button text-white px-8 py-6 text-lg rounded-2xl font-semibold"
              >
                Richiedi Informazioni
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}