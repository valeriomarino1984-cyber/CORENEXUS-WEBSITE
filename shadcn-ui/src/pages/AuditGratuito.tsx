import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import FAQSection from '@/components/FAQSection';
import MorphingSection from '@/components/MorphingSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from '@/utils/seoSchemas';
import {
  ArrowLeft,
  ArrowRight,
  Gift,
  ShieldCheck,
  Network,
  Server,
  BarChart3,
  Clock,
  CheckCircle,
  Zap,
  FileSearch,
  AlertTriangle,
  TrendingUp,
  Users,
  MessageCircle,
} from 'lucide-react';

export default function AuditGratuito() {
  const auditBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Audit IT Gratuito', url: '/audit-gratuito' },
  ]);

  const auditServiceSchema = serviceSchema(
    'Audit IT Gratuito - Analisi Infrastruttura Informatica',
    'Audit IT gratuito e senza impegno per aziende a Roma. Analizziamo la tua infrastruttura informatica, individuiamo criticità e proponiamo soluzioni di miglioramento.'
  );

  const faqs = [
    {
      question: "Cos'è un audit IT e perché è importante?",
      answer:
        "Un audit IT è un'analisi approfondita dell'infrastruttura informatica aziendale. Permette di identificare vulnerabilità di sicurezza, inefficienze operative, rischi di downtime e opportunità di ottimizzazione. È fondamentale per prevenire problemi costosi e pianificare investimenti tecnologici mirati.",
    },
    {
      question: "L'audit IT è davvero gratuito?",
      answer:
        "Sì, l'audit IT iniziale è completamente gratuito e senza impegno. Offriamo questa analisi per permetterti di conoscere lo stato reale della tua infrastruttura e valutare consapevolmente eventuali interventi migliorativi.",
    },
    {
      question: 'Quanto tempo richiede un audit IT?',
      answer:
        "L'audit iniziale richiede generalmente da 1 a 3 giorni lavorativi, a seconda della complessità dell'infrastruttura. Al termine riceverai un report dettagliato con le nostre raccomandazioni.",
    },
    {
      question: "Cosa viene analizzato durante l'audit?",
      answer:
        "Analizziamo: sicurezza della rete e dei sistemi, stato di server e dispositivi, politiche di backup e disaster recovery, configurazione firewall e antivirus, efficienza delle risorse IT, conformità alle normative (GDPR), e performance generale dell'infrastruttura.",
    },
    {
      question: "Devo interrompere le attività aziendali durante l'audit?",
      answer:
        "No, l'audit viene condotto in modo non invasivo e senza interruzioni per la tua attività. Utilizziamo strumenti di analisi che operano in background senza impattare sulle prestazioni dei tuoi sistemi.",
    },
    {
      question: "Cosa ricevo al termine dell'audit?",
      answer:
        "Al termine dell'audit riceverai un report completo che include: panoramica dello stato attuale dell'infrastruttura, elenco delle criticità riscontrate ordinate per priorità, raccomandazioni di miglioramento con stima dei costi, e un piano d'azione suggerito.",
    },
  ];

  const auditFaqSchema = faqSchema(faqs);

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [auditBreadcrumb, auditServiceSchema, auditFaqSchema, localBusinessSchema],
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const auditSteps = [
    {
      icon: MessageCircle,
      step: '01',
      title: 'Contatto Iniziale',
      description: 'Ci contatti e fissiamo un appuntamento per comprendere le tue esigenze e il contesto aziendale.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileSearch,
      step: '02',
      title: 'Analisi Infrastruttura',
      description:
        'I nostri tecnici analizzano la tua infrastruttura IT: rete, server, sicurezza, backup e performance.',
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: BarChart3,
      step: '03',
      title: 'Report Dettagliato',
      description:
        'Ricevi un report completo con criticità, rischi e raccomandazioni prioritarie per migliorare la tua IT.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: TrendingUp,
      step: '04',
      title: "Piano d'Azione",
      description:
        "Ti proponiamo un piano d'azione personalizzato con soluzioni concrete e stima dei costi, senza impegno.",
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  const auditAreas = [
    {
      icon: ShieldCheck,
      title: 'Sicurezza Informatica',
      description:
        'Verifica firewall, antivirus, policy di accesso, vulnerabilità note e conformità GDPR.',
      gradient: 'from-red-500 to-rose-600',
    },
    {
      icon: Network,
      title: 'Rete e Connettività',
      description:
        'Analisi della topologia di rete, performance, switch, access point Wi-Fi e segmentazione VLAN.',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Server,
      title: 'Server e Storage',
      description:
        'Stato di salute dei server, capacità storage, virtualizzazione, aggiornamenti e licenze software.',
      gradient: 'from-purple-500 to-violet-600',
    },
    {
      icon: Clock,
      title: 'Backup e Disaster Recovery',
      description:
        'Verifica delle politiche di backup, test di ripristino, piani di continuità operativa e RTO/RPO.',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Zap,
      title: 'Performance e Ottimizzazione',
      description:
        'Analisi delle prestazioni dei sistemi, colli di bottiglia, risorse sottoutilizzate o sovraccaricate.',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      icon: Users,
      title: 'Gestione Utenti e Policy',
      description:
        'Revisione delle policy di accesso, Active Directory, gestione password e formazione del personale.',
      gradient: 'from-cyan-500 to-blue-600',
    },
  ];

  const problemsWithoutAudit = [
    'Vulnerabilità di sicurezza sconosciute',
    'Rischio di downtime improvvisi e perdita dati',
    'Costi IT fuori controllo e sprechi nascosti',
    'Non conformità GDPR con rischio sanzioni',
    'Sistemi obsoleti che rallentano la produttività',
  ];

  const benefitsWithAudit = [
    'Identificazione delle vulnerabilità prima che diventino problemi',
    'Ottimizzazione dei costi IT eliminando sprechi e inefficienze',
    'Prevenzione di downtime e perdita dati con piani di backup adeguati',
    'Conformità alle normative GDPR e standard di sicurezza',
    'Pianificazione strategica degli investimenti tecnologici',
    'Miglioramento delle performance e della produttività aziendale',
  ];

  return (
    <>
      <SEO
        title="Audit IT Gratuito Roma EUR Ostia Fiumicino | Analisi Infrastruttura - CoreNexus"
        description="Audit IT gratuito e senza impegno per aziende a Roma, EUR, Ostia Lido, Fiumicino e Pomezia. Analizziamo sicurezza, rete, server e backup della tua infrastruttura. Individuiamo criticità e proponiamo soluzioni."
        keywords={[
          'audit IT gratuito Roma',
          'analisi infrastruttura informatica Roma EUR',
          'audit sicurezza informatica Roma',
          'verifica rete aziendale Roma',
          'analisi server aziendali Roma',
          'audit GDPR Roma',
          'consulenza IT gratuita Roma',
          'audit IT Ostia Lido',
          'audit IT Fiumicino',
          'audit IT Pomezia',
          'audit IT Roma Sud',
          'assessment infrastruttura IT Roma',
          'check-up informatico gratuito Roma EUR',
        ]}
        canonical="/audit-gratuito"
        schema={combinedSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-black to-teal-950/20" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute top-[50%] right-[15%] w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '4s' }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="mb-6">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Torna alla Home
                </Link>
              </div>

              <div className="text-center space-y-8">
                <div className="inline-block">
                  <span className="px-6 py-3 rounded-full glass-effect text-emerald-400 text-sm font-semibold tracking-wide flex items-center gap-2">
                    <Gift className="w-4 h-4" />
                    100% Gratuito e senza impegno
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                    Audit IT Gratuito
                  </span>
                  <br />
                  <span className="text-white text-4xl md:text-5xl">per la Tua Azienda</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Valutiamo la tua infrastruttura informatica, individuiamo criticità e opportunità di miglioramento.{' '}
                  <strong className="text-emerald-400">Senza costi, senza impegno.</strong>
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-12 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300"
                    aria-label="Prenota il tuo audit gratuito"
                  >
                    Prenota il tuo Audit Gratuito
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                  <a
                    href="https://wa.me/393534012055?text=Ciao%2C%20vorrei%20prenotare%20un%20audit%20IT%20gratuito%20per%20la%20mia%20azienda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors text-sm font-medium"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Oppure scrivici su WhatsApp
                  </a>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* Perché fare un Audit IT - Comparison */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className="max-w-6xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Perché fare un Audit IT?</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Molte aziende non conoscono il reale stato della propria infrastruttura IT fino a quando non si
                  verifica un problema. L&apos;audit previene situazioni critiche.
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Without Audit */}
              <MorphingSection delay={0.1}>
                <div className="p-8 rounded-3xl glass-effect border border-red-500/20 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Senza Audit</h3>
                  </div>
                  <ul className="space-y-4">
                    {problemsWithoutAudit.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MorphingSection>

              {/* With Audit */}
              <MorphingSection delay={0.2}>
                <div className="p-8 rounded-3xl glass-effect border border-emerald-500/20 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Con il nostro Audit</h3>
                  </div>
                  <ul className="space-y-4">
                    {benefitsWithAudit.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MorphingSection>
            </div>
          </div>
        </section>

        {/* Cosa Analizziamo - 6 Areas Grid */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/10 to-black" />
          <div className="max-w-6xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Cosa Analizziamo</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Il nostro audit copre tutti gli aspetti critici della tua infrastruttura IT
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {auditAreas.map((area, index) => (
                <MorphingSection key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-3xl glass-effect border border-white/5 hover:border-emerald-500/20 transition-all duration-500 group h-full">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <area.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{area.description}</p>
                  </div>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* Come Funziona - 4 Steps */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Come Funziona</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Un processo semplice in 4 step per analizzare e migliorare la tua infrastruttura
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 gap-8">
              {auditSteps.map((step, index) => (
                <MorphingSection key={index} delay={index * 0.15}>
                  <div className="p-8 rounded-3xl glass-effect border border-white/5 hover:border-emerald-500/20 transition-all duration-500 group relative overflow-hidden h-full">
                    <span className="absolute top-4 right-6 text-7xl font-black text-white/5 select-none">
                      {step.step}
                    </span>
                    <div className="relative z-10">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-emerald-400 text-sm font-bold tracking-wider mb-2">STEP {step.step}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/20 to-black" />
          <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '1.5s' }}
          />

          <div className="max-w-4xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center p-12 rounded-3xl glass-effect border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-500">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-8 mx-auto shadow-lg shadow-emerald-500/30">
                  <Gift className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Prenota il tuo Audit IT Gratuito
                </h2>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-4">
                  Non aspettare che un problema blocchi la tua azienda. Scopri lo stato reale della tua infrastruttura
                  IT oggi stesso.
                </p>

                <p className="text-lg text-emerald-400 font-semibold mb-10">
                  Gratuito. Senza impegno. Senza sorprese.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-12 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300"
                    aria-label="Prenota ora l'audit gratuito"
                  >
                    Prenota Ora
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                  <a
                    href="tel:+393534012055"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass-effect border border-white/20 text-white hover:bg-white/10 transition-all duration-300 text-lg font-semibold"
                  >
                    📞 +39 353 401 2055
                  </a>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* Contact Form Section */}
        <ContactSection />

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <p className="text-gray-400 text-sm">
              © 2026{' '}
              <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">
                CoreNexus Technology Solution
              </Link>{' '}
              - Tutti i diritti riservati.
            </p>
            <p className="text-xs text-gray-600">v2.1 - 16/04/2026</p>
          </div>
        </footer>

        <WhatsAppWidget />
      </div>
    </>
  );
}