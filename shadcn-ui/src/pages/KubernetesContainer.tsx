import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import FAQSection from '@/components/FAQSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  ArrowLeft,
  Container,
  Check,
  Server,
  Cloud,
  Cpu,
  Layers,
  Globe,
  Box,
  Network,
  Workflow,
  TrendingDown,
  Zap,
  Shield,
  DollarSign,
  Scale,
  RefreshCw,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema, faqSchema } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';

export default function KubernetesContainer() {
  const navigate = useNavigate();
  const scrollToContact = () => {
    navigate('/#contact');
  };

  const kubernetesBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
    { name: 'Kubernetes e Container', url: '/kubernetes-container' },
  ]);

  const faqs = [
    {
      question: 'Cos\'è Kubernetes e perché è utile per la mia azienda?',
      answer: 'Kubernetes è una piattaforma open-source per l\'orchestrazione di container. Permette di gestire, scalare e distribuire automaticamente le applicazioni containerizzate. Per le aziende, significa maggiore affidabilità, scalabilità automatica e riduzione dei costi infrastrutturali, eliminando i tempi di inattività e semplificando la gestione delle applicazioni.',
    },
    {
      question: 'Qual è la differenza tra Docker e Kubernetes?',
      answer: 'Docker è la tecnologia per creare e gestire singoli container (pacchetti isolati con le applicazioni). Kubernetes è l\'orchestratore che gestisce centinaia o migliaia di container Docker, distribuendoli su più server, bilanciando il carico e garantendo che siano sempre attivi. In pratica, Docker crea i container, Kubernetes li gestisce su larga scala.',
    },
    {
      question: 'Cos\'è MicroK8s e quando si usa?',
      answer: 'MicroK8s è una distribuzione leggera di Kubernetes sviluppata da Canonical. È ideale per ambienti edge, dispositivi IoT, sviluppo locale e piccoli cluster. Lo utilizziamo per soluzioni IoT containerizzate su dispositivi embedded e per ambienti di sviluppo/test rapidi.',
    },
    {
      question: 'Posso migrare le mie applicazioni esistenti su container?',
      answer: 'Sì, il processo si chiama "containerizzazione". Analizziamo le vostre applicazioni esistenti, le rifattorizziamo se necessario e le impacchettiamo in container Docker. Questo permette di passare da un\'architettura monolitica a microservizi, migliorando scalabilità e manutenibilità.',
    },
    {
      question: 'Kubernetes funziona sia on-premise che in cloud?',
      answer: 'Assolutamente sì. Progettiamo cluster Kubernetes sia on-premise (nei vostri server aziendali) che in cloud (Azure AKS, AWS EKS, Google GKE). Possiamo anche creare architetture ibride che combinano entrambi gli approcci per massima flessibilità.',
    },
    {
      question: 'Quanto costa implementare Kubernetes in azienda?',
      answer: 'Il costo dipende dalla complessità dell\'infrastruttura e dal numero di applicazioni da containerizzare. Offriamo una consulenza gratuita per valutare la vostra situazione e proporre la soluzione più adatta al vostro budget. In molti casi, la migrazione a container porta a una riduzione dei costi infrastrutturali del 30-50%.',
    },
  ];

  const kubernetesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      kubernetesBreadcrumb,
      faqSchema(faqs),
      {
        "@type": "Service",
        "name": "Kubernetes e Container - Orchestrazione Microservizi",
        "description": "Progettazione, implementazione e gestione di cluster Kubernetes per aziende. Containerizzazione con Docker, orchestrazione microservizi, soluzioni IoT con MicroK8s a Roma.",
        "provider": {
          "@type": "Organization",
          "name": "CoreNexus Technology Solution",
          "url": "https://corenexus.it"
        },
        "areaServed": {
          "@type": "City",
          "name": "Roma"
        },
        "serviceType": "Kubernetes Container Orchestration"
      }
    ]
  };

  const offerings = [
    {
      icon: Server,
      title: 'Cluster Kubernetes on-premise e cloud',
      description: 'Progettiamo e deployiamo cluster Kubernetes su infrastrutture on-premise o su piattaforme cloud come Azure AKS, garantendo alta disponibilità, sicurezza e performance ottimali.',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Container,
      title: 'Containerizzazione con Docker',
      description: 'Trasformiamo le vostre applicazioni monolitiche in container Docker leggeri e portabili, semplificando il deploy, la manutenzione e la scalabilità di ogni componente.',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Workflow,
      title: 'Orchestrazione microservizi',
      description: 'Implementiamo architetture a microservizi per la raccolta ed elaborazione dati in tempo reale, con bilanciamento del carico, auto-scaling e self-healing automatico.',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Cpu,
      title: 'Soluzioni IoT con MicroK8s',
      description: 'Deployiamo container su dispositivi embedded e edge con MicroK8s, portando la potenza di Kubernetes anche su hardware a basse risorse per soluzioni IoT avanzate.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: RefreshCw,
      title: 'Manutenzione e scaling dei cluster',
      description: 'Gestiamo l\'intero ciclo di vita dei vostri cluster: aggiornamenti, patch di sicurezza, scaling orizzontale e verticale, monitoraggio continuo e ottimizzazione delle risorse.',
      gradient: 'from-teal-500 to-cyan-600',
    },
    {
      icon: Cloud,
      title: 'Migrazione a container',
      description: 'Accompagniamo la vostra azienda nella transizione da infrastrutture tradizionali a soluzioni containerizzate, con un piano di migrazione graduale e senza interruzioni di servizio.',
      gradient: 'from-sky-500 to-blue-600',
    },
  ];

  const technologies = [
    { icon: Container, title: 'Kubernetes (K8s)', description: 'Orchestrazione container enterprise-grade' },
    { icon: Box, title: 'Docker', description: 'Containerizzazione e gestione immagini' },
    { icon: Cpu, title: 'MicroK8s', description: 'Kubernetes leggero per edge e IoT' },
    { icon: Cloud, title: 'Azure AKS', description: 'Kubernetes gestito su Microsoft Azure' },
    { icon: Layers, title: 'Helm Charts', description: 'Package manager per deploy Kubernetes' },
    { icon: Network, title: 'Service Mesh', description: 'Networking avanzato tra microservizi' },
  ];

  const benefits = [
    { icon: Scale, title: 'Scalabilità automatica', description: 'I cluster si adattano automaticamente al carico di lavoro, scalando risorse in tempo reale' },
    { icon: Shield, title: 'Alta disponibilità', description: 'Self-healing e replica automatica garantiscono che i servizi siano sempre attivi e raggiungibili' },
    { icon: Zap, title: 'Deploy rapidi e sicuri', description: 'Rilascio di nuove versioni in secondi con rolling update e rollback automatico' },
    { icon: DollarSign, title: 'Riduzione costi infrastrutturali', description: 'Ottimizzazione delle risorse hardware con container leggeri e condivisione efficiente' },
    { icon: TrendingDown, title: 'Meno complessità operativa', description: 'Gestione centralizzata di tutte le applicazioni con un unico pannello di controllo' },
    { icon: Globe, title: 'Portabilità totale', description: 'Le applicazioni containerizzate funzionano ovunque: on-premise, cloud o ambienti ibridi' },
  ];

  const idealFor = [
    'Aziende che gestiscono applicazioni web complesse',
    'Piattaforme IoT con raccolta dati distribuita',
    'Sistemi di elaborazione dati in tempo reale',
    'Aziende che vogliono ridurre i costi infrastrutturali',
    'Startup che necessitano di infrastrutture scalabili',
    'Imprese in fase di modernizzazione IT',
  ];

  return (
    <>
      <SEO
        title="Kubernetes e Container Roma EUR Ostia Fiumicino | Docker MicroK8s - CoreNexus"
        description="Progettazione e gestione cluster Kubernetes per aziende a Roma, EUR, Ostia Lido, Fiumicino e Pomezia. Containerizzazione Docker, orchestrazione microservizi, MicroK8s IoT, deploy Azure AKS. Migrazione a container."
        keywords={[
          'Kubernetes Roma',
          'container Docker Roma EUR',
          'microservizi Roma',
          'cluster Kubernetes aziende Roma',
          'MicroK8s IoT Roma',
          'Azure AKS Roma',
          'containerizzazione applicazioni Roma',
          'Kubernetes Ostia Lido',
          'Docker Fiumicino',
          'container Pomezia',
          'orchestrazione container Roma Sud',
          'DevOps Kubernetes Roma',
          'migrazione container Roma',
          'deploy microservizi Roma EUR',
          'consulenza Kubernetes Roma',
        ]}
        canonical="/kubernetes-container"
        schema={kubernetesSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-black to-blue-950/30" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="mb-6">
                <Link
                  to="/servizi"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Torna ai Servizi
                </Link>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-block">
                    <span className="px-4 py-2 rounded-full glass-effect text-cyan-400 text-sm font-semibold tracking-wide flex items-center gap-2">
                      <Container className="w-4 h-4" />
                      Kubernetes &amp; Container
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
                    Kubernetes e Container per le Aziende
                  </h1>

                  <p className="text-xl text-gray-400 leading-relaxed">
                    Progettiamo, implementiamo e gestiamo cluster Kubernetes per aziende che vogliono modernizzare
                    la propria infrastruttura IT con architetture a microservizi.
                  </p>

                  <p className="text-lg text-gray-500 leading-relaxed">
                    Grazie alla nostra esperienza con <span className="text-cyan-400 font-semibold">Kubernetes</span>,{' '}
                    <span className="text-cyan-400 font-semibold">MicroK8s</span> e{' '}
                    <span className="text-cyan-400 font-semibold">Docker</span>, aiutiamo le PMI e le aziende di Roma
                    a passare da infrastrutture monolitiche a soluzioni containerizzate: più scalabili, più resilienti
                    e più efficienti.
                  </p>

                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold"
                  >
                    Richiedi una consulenza gratuita
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Right side - Visual element */}
                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl glass-effect border border-cyan-500/20 p-8 flex flex-col items-center justify-center gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        {[Container, Server, Cloud, Cpu, Layers, Box, Network, Workflow, Globe].map((Icon, i) => (
                          <div
                            key={i}
                            className="w-16 h-16 rounded-2xl glass-effect flex items-center justify-center hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            <Icon className="w-7 h-7 text-cyan-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl -z-10" />
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
                  Soluzioni complete di containerizzazione e orchestrazione per ogni esigenza aziendale
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offerings.map((offering, index) => (
                <MorphingSection key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-3xl glass-effect border border-white/10 hover:border-cyan-500/30 transition-all duration-500 group h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${offering.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <offering.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {offering.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* Ideale Per Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
          <div className="max-w-4xl mx-auto relative z-10">
            <MorphingSection>
              <div className="p-10 rounded-3xl glass-effect border border-cyan-500/20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                  Ideale per
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {idealFor.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* Tecnologie Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
          <div className="max-w-6xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Tecnologie Utilizzate
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Stack tecnologico all&apos;avanguardia per soluzioni container robuste e scalabili
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, i) => (
                <MorphingSection key={i} delay={i * 0.1}>
                  <div className="p-6 rounded-2xl glass-effect border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group hover:bg-white/5 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <tech.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-1">{tech.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                </MorphingSection>
              ))}
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
                  Vantaggi della Containerizzazione
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Perché le aziende scelgono Kubernetes e i container per la propria infrastruttura
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, i) => (
                <MorphingSection key={i} delay={i * 0.1}>
                  <Card className="glass-effect border-white/10 hover:border-cyan-500/20 bg-transparent text-white card-hover text-center h-full">
                    <CardContent className="pt-8 pb-8">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-400">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* CTA Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black" />
          <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <MorphingSection>
              <div className="p-12 rounded-3xl glass-effect border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Pronto a modernizzare la tua infrastruttura?
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Analizziamo insieme la tua architettura attuale e progettiamo la migrazione a container su misura per il tuo business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group premium-button text-white px-12 py-7 text-lg rounded-2xl font-semibold"
                  >
                    Richiedi una consulenza gratuita
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
              © 2026 <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">CoreNexus Technology Solution</Link> - Tutti i diritti riservati.
            </p>
            <p className="text-xs text-gray-600">v2.1 - 13/04/2026</p>
          </div>
        </footer>

        <WhatsAppWidget />
      </div>
    </>
  );
}