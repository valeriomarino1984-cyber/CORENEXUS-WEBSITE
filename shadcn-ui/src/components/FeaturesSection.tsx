import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Settings, Search, Headphones } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Award,
      title: 'Esperienza nel settore IT',
      description: 'Anni di esperienza nella gestione di infrastrutture aziendali complesse.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Settings,
      title: 'Soluzioni personalizzate',
      description: 'Servizi informatici su misura per le esigenze specifiche di ogni azienda.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Search,
      title: 'Monitoraggio proattivo',
      description: 'Preveniamo i problemi prima che impattino la produttività.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Headphones,
      title: 'Assistenza costante',
      description: 'Supporto sistemistico e tecnico con tempi di risposta rapidi.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-24 px-6 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-black to-gray-900/30" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white">Perché scegliere noi</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Partner tecnologico affidabile per la crescita digitale della tua azienda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group glass-effect border-white/10 hover:border-white/20 card-hover bg-transparent text-white animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center">
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 glow-effect`}>
                  <feature.icon className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-xl text-white group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}