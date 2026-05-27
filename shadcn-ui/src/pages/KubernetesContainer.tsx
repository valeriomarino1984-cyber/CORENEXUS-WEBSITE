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
  MapPin,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema, faqSchema, localBusinessServiceSchema, standardAreaServed } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';

export default function KubernetesContainer() {
  const navigate = useNavigate();
  const scrollToContact = () => { navigate('/#contact'); };

  const kubernetesBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
    { name: 'Kubernetes e Container', url: '/kubernetes-container' },
  ]);

  const faqs = [
    {
      question: "Cos'e Kubernetes e perche e utile per la mia azienda?",
      answer: "Kubernetes e una piattaforma open-source per l'orchestrazione di container. Permette di gestire, scalare e distribuire automaticamente le applicazioni containerizzate. Per le aziende di Roma e provincia, significa maggiore affidabilita, scalabilita automatica e riduzione dei costi infrastrutturali del 30-50%.",
    },
    {
      question: "Qual e la differenza tra Docker e Kubernetes?",
      answer: "Docker e la tecnologia per creare e gestire singoli container. Kubernetes e l'orchestratore che gestisce centinaia di container Docker, distribuendoli su piu server, bilanciando il carico e garantendo che siano sempre attivi. In pratica, Docker crea i container, Kubernetes li gestisce su larga scala.",
    },
    {
      question: "Cos'e MicroK8s e quando si usa?",
      answer: "MicroK8s e una distribuzione leggera di Kubernetes sviluppata da Canonical. E ideale per ambienti edge, dispositivi IoT, sviluppo locale e piccoli cluster. Lo utilizziamo per soluzioni IoT containerizzate su dispositivi embedded.",
    },
    {
      question: "Posso migrare le mie applicazioni esistenti su container?",
      answer: "Si, il processo si chiama containerizzazione. Analizziamo le vostre applicazioni esistenti, le rifattorizziamo se necessario e le impacchettiamo in container Docker. Questo permette di passare da una architettura monolitica a microservizi, migliorando scalabilita e manutenibilita.",
    },
    {
      question: "Kubernetes funziona sia on-premise che in cloud?",
      answer: "Assolutamente si. Progettiamo cluster Kubernetes sia on-premise (nei vostri server aziendali) che in cloud (Azure AKS, AWS EKS, Google GKE). Possiamo anche creare architetture ibride per massima flessibilita. Operiamo per aziende di Roma, EUR, Ostia, Fiumicino e Pomezia.",
    },
    {
      question: "Quanto costa implementare Kubernetes in azienda a Roma?",
      answer: "Il costo dipende dalla complessita dell'infrastruttura. Offriamo una consulenza gratuita per valutare la vostra situazione e proporre la soluzione piu adatta al vostro budget. In molti casi, la migrazione a container porta a una riduzione dei costi infrastrutturali del 30-50%.",
    },
  ];

  const kubernetesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessServiceSchema(
        "Kubernetes e Container Roma EUR Ostia Fiumicino",
        "Progettazione e gestione cluster Kubernetes per aziende a Roma, EUR, Ostia Lido, Fiumicino e Pomezia. Docker, MicroK8s, microservizi, Azure AKS.",
        "/kubernetes-container",
        "Kubernetes e Container"
      ),
      kubernetesBreadcrumb,
      faqSchema(faqs),
      {
        "@type": "Service",
        "name": "Kubernetes e Container Roma - Orchestrazione Microservizi",
        "description": "Progettazione, implementazione e gestione di cluster Kubernetes per aziende di Roma, EUR, Ostia e Fiumicino. Containerizzazione con Docker, orchestrazione microservizi, soluzioni IoT con MicroK8s.",
        "provider": {
          "@type": "Organization",
          "name": "CoreNexus Technology Solution",
          "url": "https://corenexus.it"
        },
        "areaServed": standardAreaServed,
        "serviceType": "Kubernetes Container Orchestration"
      }
    ]
  };

  const coverageAreas = [
    'EUR', 'Ostia Lido', 'Fiumicino', 'Acilia', 'Pomezia',
    'Ardea', 'Santa Palomba', 'Mostacciano', 'Torrino', 'Laurentina',
    'Spinaceto', 'Ostiense', 'Magliana', 'San Paolo', 'Garbatella',
  ];

  const offerings = [
    {
      icon: Server,
      title: 'Cluster Kubernetes on-premise e cloud',
      description: "Progettiamo e deployiamo cluster Kubernetes su infrastrutture on-premise o su piattaforme cloud come Azure AKS, garantendo alta disponibilita, sicurezza e performance ottimali per aziende di Roma e provincia.",
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Container,
      title: 'Containerizzazione con Docker',
      description: "Trasformiamo le vostre applicazioni monolitiche in container Docker leggeri e portabili, semplificando il deploy, la manutenzione e la scalabilita di ogni componente.",
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Workflow,
      title: 'Orchestrazione microservizi',
      description: "Implementiamo architetture a microservizi per la raccolta ed elaborazione dati in tempo reale, con bilanciamento del carico, auto-scaling e self-healing automatico.",
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Cpu,
      title: 'Soluzioni IoT con MicroK8s',
      description: "Deployiamo container su dispositivi embedded e edge con MicroK8s, portando la potenza di Kubernetes anche su hardware a basse risorse per soluzioni IoT avanzate.",
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: RefreshCw,
      title: 'Manutenzione e scaling dei cluster',
      description: "Gestiamo l'intero ciclo di vita dei vostri cluster: aggiornamenti, patch di sicurezza, scaling orizzontale e verticale, monitoraggio continuo e ottimizzazione delle risorse.",
      gradient: 'from-teal-500 to-cyan-600',
    },
    {
      icon: Cloud,
      title: 'Migrazione a container',
      description: "Accompagniamo la vostra azienda nella transizione da infrastrutture tradizionali a soluzioni containerizzate, con un piano di migrazione graduale e senza interruzioni di servizio.",
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
    { icon: Scale, title: 'Scalabilita automatica', description: 'I cluster si adattano automaticamente al carico di lavoro, scalando risorse in tempo reale' },
    { icon: Shield, title: 'Alta disponibilita', description: 'Self-healing e replica automatica garantiscono che i servizi siano sempre attivi e raggiungibili' },
    { icon: Zap, title: 'Deploy rapidi e sicuri', description: 'Rilascio di nuove versioni in secondi con rolling update e rollback automatico' },
    { icon: DollarSign, title: 'Riduzione costi infrastrutturali', description: 'Ottimizzazione delle risorse hardware con container leggeri e condivisione efficiente' },
    { icon: TrendingDown, title: 'Meno complessita operativa', description: 'Gestione centralizzata di tutte le applicazioni con un unico pannello di controllo' },
    { icon: Globe, title: 'Portabilita totale', description: "Le applicazioni containerizzate funzionano ovunque: on-premise, cloud o ambienti ibridi" },
  ];

  const idealFor = [
    'Aziende che gestiscono applicazioni web complesse a Roma',
    'Piattaforme IoT con raccolta dati distribuita',
    'Sistemi di elaborazione dati in tempo reale',
    'Aziende che vogliono ridurre i costi infrastrutturali',
    'Startup che necessitano di infrastrutture scalabili',
    'Imprese in fase di modernizzazione IT a Roma e provincia',
  ];

  return (
    <>
      <SEO
        title="Kubernetes e Container Roma | Docker MicroK8s Microservizi EUR Ostia - CoreNexus"
        description="Progettazione e gestione cluster Kubernetes per aziende a Roma, EUR, Ostia, Fiumicino e Pomezia. Containerizzazione Docker, orchestrazione microservizi, MicroK8s IoT, Azure AKS. Riduzione costi IT 30-50%. Consulenza gratuita."
        keywords={[
          'Kubernetes Roma',
          'container Docker Roma',
          'microservizi Roma',
          'Kubernetes aziende Roma',
          'containerizzazione Roma',
          'Docker Roma EUR',
          'MicroK8s IoT Roma',
          'Azure AKS Roma',
          'orchestrazione container Roma',
          'Kubernetes Ostia Fiumicino',
          'container Pomezia',
          'DevOps Kubernetes Roma',
          'migrazione container Roma',
          'consulenza Kubernetes Roma',
          'cluster Kubernetes Roma Sud',
          'microservizi EUR Roma',
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
                <Link to="/servizi" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
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
                    <span className="block text-3xl md:text-4xl text-gray-400 mt-2 font-normal">
                      a Roma, EUR, Ostia e Fiumicino
                    </span>
                  </h1>

                  <p className="text-xl text-gray-400 leading-relaxed">
                    Progettiamo, implementiamo e gestiamo cluster Kubernetes per aziende di Roma e provincia che vogliono modernizzare la propria infrastruttura IT con architetture a microservizi.
                  </p>

                  <p className="text-lg text-gray-500 leading-relaxed">
                    Grazie alla nostra esperienza con <span className="text-cyan-400 font-semibold">Kubernetes</span>, <span className="text-cyan-400 font-semibold">MicroK8s</span> e <span className="text-cyan-400 font-semibold">Docker</span>, aiutiamo le PMI di Roma a passare da infrastrutture monolitiche a soluzioni containerizzate: piu scalabili, piu resilienti e piu efficienti.
                  </p>

                  <Button size="lg" onClick={scrollToContact} className="group premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold">
                    Richiedi una consulenza gratuita
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>

                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl glass-effect border border-cyan-500/20 p-8 flex flex-col items-center justify-center gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        {[Container, Server, Cloud, Cpu, Layers, Box, Network, Workflow, Globe].map((Icon, i) => (
                          <div key={i} className="w-16 h-16 rounded-2xl glass-effect flex items-center justify-center hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110">
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

        {/* Cosa Offriamo */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Servizi Kubernetes e Container a Roma</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Soluzioni complete di containerizzazione e orchestrazione per ogni esigenza aziendale a Roma, EUR, Ostia e Fiumicino
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
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{offering.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{offering.description}</p>
                  </div>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* Ideale Per */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
          <div className="max-w-4xl mx-auto relative z-10">
            <MorphingSection>
              <div className="p-10 rounded-3xl glass-effect border border-cyan-500/20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Ideale per aziende di Roma e provincia</h2>
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

        {/* Tecnologie */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
          <div className="max-w-6xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Tecnologie Utilizzate</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Stack tecnologico all'avanguardia per soluzioni container robuste e scalabili
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

        {/* Vantaggi */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Vantaggi della Containerizzazione</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Perche le aziende di Roma scelgono Kubernetes e i container per la propria infrastruttura
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

        {/* Zone copertura */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="p-10 rounded-3xl glass-effect border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Kubernetes e Container a Roma Sud: le zone coperte</h2>
                </div>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  CoreNexus implementa soluzioni Kubernetes e containerizzazione per aziende in tutto il quadrante sud di Roma:
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {coverageAreas.map((area, index) => (
                    <span key={index} className="px-4 py-2 rounded-full glass-effect border border-cyan-500/20 text-cyan-400 text-sm font-medium">
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm">Per aziende in altre zone offriamo consulenza Kubernetes da remoto in tutta Italia.</p>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={faqs} />

        {/* CTA */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black" />
          <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <MorphingSection>
              <div className="p-12 rounded-3xl glass-effect border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Pronto a modernizzare la tua infrastruttura a Roma?</h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Analizziamo insieme la tua architettura attuale e progettiamo la migrazione a container su misura per il tuo business a Roma, EUR, Ostia o Fiumicino.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={scrollToContact} className="group premium-button text-white px-12 py-7 text-lg rounded-2xl font-semibold">
                    Richiedi una consulenza gratuita
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                  <Link to="/servizi">
                    <Button size="lg" variant="outline" className="glass-effect border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-10 py-7 text-lg rounded-2xl font-semibold">
                      Vedi tutti i servizi
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
