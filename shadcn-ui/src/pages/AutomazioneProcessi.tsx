import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  ArrowLeft,
  Cog,
  Check,
  Server,
  RefreshCw,
  Link2,
  Rocket,
  Terminal,
  Layers,
  Code,
  Container,
  Workflow,
  TrendingDown,
  Zap,
  Clock,
  Shield,
  DollarSign,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';

export default function AutomazioneProcessi() {
  const navigate = useNavigate();
  const scrollToContact = () => {
    navigate('/#contact');
  };

  const automazioneBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
    { name: 'Automazione Processi IT', url: '/automazione-processi' },
  ]);

  const automazioneSchema = {
    "@context": "https://schema.org",
    "@graph": [
      automazioneBreadcrumb,
      {
        "@type": "Service",
        "name": "Automazione dei Processi IT",
        "description": "Progettiamo e sviluppiamo architetture di automazione su misura per ottimizzare i flussi di lavoro IT, ridurre l'errore umano e liberare risorse strategiche.",
        "provider": {
          "@type": "Organization",
          "name": "CoreNexus Technology Solution",
          "url": "https://corenexus.it"
        },
        "areaServed": {
          "@type": "City",
          "name": "Roma"
        },
        "serviceType": "IT Process Automation"
      }
    ]
  };

  const offerings = [
    {
      icon: Server,
      title: 'Automazione delle infrastrutture',
      description: 'Progettiamo sistemi di automazione per la gestione di server, reti e ambienti cloud, riducendo interventi manuali e tempi di configurazione.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: RefreshCw,
      title: 'Automazione dei processi operativi',
      description: 'Sviluppiamo workflow automatizzati per attività ripetitive come provisioning utenti, gestione backup, patching e monitoraggio sistemi.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Link2,
      title: 'Integrazione tra sistemi',
      description: 'Colleghiamo piattaforme e servizi diversi tramite API e orchestrazione automatizzata, creando flussi di lavoro digitali più efficienti.',
      gradient: 'from-yellow-500 to-amber-500',
    },
    {
      icon: Rocket,
      title: 'Automazione DevOps e deployment',
      description: 'Implementiamo pipeline di automazione per il rilascio e la gestione delle applicazioni, migliorando velocità, affidabilità e tracciabilità delle modifiche.',
      gradient: 'from-red-500 to-pink-500',
    },
  ];

  const technologies = [
    { icon: Terminal, title: 'Scripting Avanzato', description: 'Python, PowerShell, Bash per automazione personalizzata' },
    { icon: Workflow, title: 'Orchestrazione', description: 'Framework di orchestrazione e automation avanzati' },
    { icon: Code, title: 'Integrazione API', description: 'Connessione tra sistemi tramite API e microservizi' },
    { icon: Container, title: 'Containerizzazione', description: 'Docker, Kubernetes per orchestrazione container' },
    { icon: Layers, title: 'Infrastructure as Code', description: 'Automazione infrastrutturale con Terraform, Ansible' },
  ];

  const benefits = [
    { icon: TrendingDown, title: 'Riduzione errori umani', description: 'Processi automatizzati eliminano gli errori manuali ripetitivi' },
    { icon: Zap, title: 'Maggiore efficienza operativa', description: 'Flussi di lavoro ottimizzati per massima produttività' },
    { icon: Clock, title: 'Tempi di provisioning ridotti', description: 'Configurazione e deploy in minuti invece che ore' },
    { icon: Shield, title: 'Infrastrutture affidabili e scalabili', description: 'Sistemi robusti che crescono con il tuo business' },
    { icon: DollarSign, title: 'Riduzione costi operativi IT', description: 'Meno interventi manuali, più risorse per l\'innovazione' },
  ];

  return (
    <>
      <SEO
        title="Automazione Processi IT Roma | DevOps & Automation - CoreNexus Technology Solution"
        description="Progettiamo architetture di automazione su misura per ottimizzare i flussi di lavoro IT. Automazione infrastrutture, DevOps, integrazione sistemi e Infrastructure as Code a Roma."
        keywords={[
          'automazione IT Roma',
          'automazione processi IT',
          'DevOps Roma',
          'Infrastructure as Code',
          'automazione infrastrutture',
          'CI/CD pipeline',
          'orchestrazione IT',
          'automazione server',
          'integrazione API',
          'containerizzazione Docker',
        ]}
        canonical="/automazione-processi"
        schema={automazioneSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-black to-red-950/30" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="mb-6">
                <Link
                  to="/servizi"
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Torna ai Servizi
                </Link>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-block">
                    <span className="px-4 py-2 rounded-full glass-effect text-orange-400 text-sm font-semibold tracking-wide flex items-center gap-2">
                      <Cog className="w-4 h-4" />
                      Automazione IT
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
                    Automazione dei Processi IT
                  </h1>

                  <p className="text-xl text-gray-400 leading-relaxed">
                    Trasformiamo la complessità operativa in efficienza sistemica.
                    Progettiamo e sviluppiamo architetture di automazione su misura per ottimizzare i flussi di lavoro IT,
                    ridurre l&apos;errore umano e liberare risorse strategiche.
                  </p>

                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold"
                  >
                    Richiedi una consulenza
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Right side - Visual element */}
                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl glass-effect border border-orange-500/20 p-8 flex flex-col items-center justify-center gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        {[Cog, Server, RefreshCw, Link2, Rocket, Terminal, Workflow, Code, Container].map((Icon, i) => (
                          <div
                            key={i}
                            className="w-16 h-16 rounded-2xl glass-effect flex items-center justify-center hover:bg-orange-500/20 transition-all duration-300 hover:scale-110"
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            <Icon className="w-7 h-7 text-orange-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-xl -z-10" />
                  </div>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* Cosa Offriamo Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Cosa Offriamo
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Soluzioni di automazione complete per ogni aspetto della tua infrastruttura IT
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 gap-8">
              {offerings.map((offering, index) => (
                <MorphingSection key={index} delay={index * 0.15}>
                  <div className="p-8 rounded-3xl glass-effect border border-white/10 hover:border-orange-500/30 transition-all duration-500 group h-full">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${offering.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <offering.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">
                          {offering.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                          {offering.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* Tecnologie Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black" />
          <div className="max-w-6xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Tecnologie Utilizzate
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Utilizziamo strumenti e framework moderni per garantire soluzioni robuste e scalabili
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, i) => {
                // Fill the last row center if odd number
                const isLast = i === technologies.length - 1 && technologies.length % 3 !== 0;
                return (
                  <MorphingSection key={i} delay={i * 0.1}>
                    <div className={`p-6 rounded-2xl glass-effect border border-white/5 hover:border-orange-500/30 transition-all duration-300 group hover:bg-white/5 h-full ${isLast ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <tech.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-lg mb-1">{tech.title}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{tech.description}</p>
                        </div>
                      </div>
                    </div>
                  </MorphingSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Vantaggi Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Vantaggi per le Aziende
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  L&apos;automazione IT porta benefici concreti e misurabili al tuo business
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, i) => {
                const isLastOdd = i === benefits.length - 1 && benefits.length % 3 !== 0;
                return (
                  <MorphingSection key={i} delay={i * 0.1}>
                    <Card className={`glass-effect border-white/10 hover:border-orange-500/20 bg-transparent text-white card-hover text-center h-full ${isLastOdd ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                      <CardContent className="pt-8 pb-8">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mx-auto mb-4">
                          <benefit.icon className="w-7 h-7 text-orange-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-sm text-gray-400">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </MorphingSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/20 to-black" />
          <div className="absolute top-10 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-float" />

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <MorphingSection>
              <div className="p-12 rounded-3xl glass-effect border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Vuoi automatizzare i tuoi processi IT?
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Analizziamo insieme i tuoi flussi operativi e progettiamo una soluzione su misura.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group premium-button text-white px-12 py-7 text-lg rounded-2xl font-semibold"
                  >
                    Richiedi una consulenza
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                  <Link to="/servizi">
                    <Button
                      size="lg"
                      variant="outline"
                      className="glass-effect border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-10 py-7 text-lg rounded-2xl font-semibold"
                    >
                      Vedi tutti i servizi
                    </Button>
                  </Link>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <p className="text-gray-400 text-sm">
              © 2025 <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">CoreNexus Technology Solution</Link> - Tutti i diritti riservati.
            </p>
            <p className="text-xs text-gray-600">v1.7 - 09/03/2026</p>
          </div>
        </footer>

        <WhatsAppWidget />
      </div>
    </>
  );
}