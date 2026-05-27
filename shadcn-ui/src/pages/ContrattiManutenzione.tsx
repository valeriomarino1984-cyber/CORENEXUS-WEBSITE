import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ArrowRight,
  ArrowLeft,
  FileText,
  Check,
  Zap,
  Shield,
  Headphones,
  Clock,
  Settings,
  Server,
  Activity,
  Wrench,
  BarChart3,
  Users,
  MapPin,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { breadcrumbSchema, localBusinessServiceSchema, standardAreaServed } from '@/utils/seoSchemas';
import MorphingSection from '@/components/MorphingSection';
import FAQSection from '@/components/FAQSection';

export default function ContrattiManutenzione() {
  const navigate = useNavigate();
  const scrollToContact = () => { navigate('/#contact'); };

  const manutenzioneBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Servizi', url: '/servizi' },
    { name: 'Contratti di Manutenzione', url: '/contratti-manutenzione' },
  ]);

  const faqSchemaData = {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Cosa include un contratto di manutenzione informatica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un contratto di manutenzione informatica include assistenza remota e on-site, monitoraggio 24/7, manutenzione preventiva, gestione backup, aggiornamenti di sicurezza e report periodici. CoreNexus offre contratti personalizzati per PMI a Roma, EUR, Ostia e Fiumicino."
        }
      },
      {
        "@type": "Question",
        "name": "Quali sono i vantaggi di un contratto di manutenzione informatica rispetto all'intervento a chiamata?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il contratto di manutenzione garantisce tempi di intervento certi (SLA), costi fissi e prevedibili, e un monitoraggio proattivo che previene i guasti prima che blocchino l'azienda."
        }
      },
      {
        "@type": "Question",
        "name": "Offrite assistenza informatica con canone mensile a Roma e provincia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Certamente. Proponiamo pacchetti di assistenza personalizzati per aziende a Roma EUR, Ostia, Fiumicino e Pomezia, includendo supporto remoto illimitato e interventi on-site programmati."
        }
      },
      {
        "@type": "Question",
        "name": "E possibile personalizzare il pacchetto di manutenzione?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Si, valutiamo insieme il numero di postazioni, server e apparati di rete per creare un piano su misura che includa backup, sicurezza e supporto sistemistico basato sulle reali esigenze della tua azienda."
        }
      },
      {
        "@type": "Question",
        "name": "In quali zone di Roma operate per i contratti di manutenzione?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Operiamo con interventi on-site in tutto il quadrante sud di Roma: EUR, Ostia, Fiumicino, Acilia, Casal Palocco, Pomezia, Ardea, Mostacciano, Torrino, Laurentina, Spinaceto e zone limitrofe."
        }
      }
    ]
  };

  const manutenzioneSchema = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessServiceSchema(
        "Contratti Manutenzione IT Roma EUR Ostia Fiumicino",
        "Contratti di assistenza e manutenzione informatica per aziende a Roma, EUR, Ostia Lido, Fiumicino e Pomezia. Monitoraggio proattivo 24/7, SLA garantiti.",
        "/contratti-manutenzione",
        "Contratti Manutenzione IT"
      ),
      manutenzioneBreadcrumb,
      {
        "@type": "Service",
        "name": "Contratti di Manutenzione IT Roma",
        "description": "Contratti di assistenza e manutenzione informatica per aziende a Roma. Supporto continuativo, monitoraggio proattivo e SLA garantiti per PMI di Roma Sud, EUR, Ostia e Fiumicino.",
        "provider": {
          "@type": "Organization",
          "name": "CoreNexus Technology Solution",
          "url": "https://corenexus.it"
        },
        "areaServed": standardAreaServed,
        "serviceType": "IT Maintenance"
      },
      faqSchemaData
    ]
  };

  const keyPoints = [
    'Assistenza continuativa con tempi di risposta garantiti',
    'Monitoraggio proattivo 24/7 delle infrastrutture',
    'Manutenzione preventiva per ridurre i tempi di fermo',
    'Report dettagliati e consulenza strategica IT',
    'Costi prevedibili e trasparenti senza sorprese',
  ];

  const benefits = [
    { icon: Clock, title: 'Tempi di Risposta Garantiti', description: 'SLA personalizzati con tempi di intervento certi, da 4 ore a intervento immediato' },
    { icon: Shield, title: 'Prevenzione Proattiva', description: 'Monitoraggio costante per individuare e risolvere problemi prima che impattino il business' },
    { icon: BarChart3, title: 'Costi Prevedibili', description: 'Canone fisso mensile che ti permette di pianificare il budget IT senza sorprese' },
    { icon: Users, title: 'Team Dedicato', description: 'Account manager e tecnici dedicati che conoscono la tua infrastruttura' },
    { icon: Activity, title: 'Monitoraggio 24/7', description: 'Sistemi di alerting in tempo reale con Zabbix e Wazuh per massima visibilita' },
    { icon: Wrench, title: 'Manutenzione Preventiva', description: 'Interventi programmati per aggiornamenti, patch di sicurezza e ottimizzazione' },
  ];

  const assistancePlans = [
    {
      name: 'Pacchetto Base',
      icon: Zap,
      price: 'Su preventivo',
      description: 'Ideale per piccole imprese che necessitano di supporto IT essenziale',
      features: [
        'Assistenza remota (max 4 ore/mese)',
        'Monitoraggio base dei sistemi',
        'Backup settimanale',
        'Supporto email entro 24h',
        'Aggiornamenti di sicurezza',
        'Report trimestrale',
      ],
      highlighted: false,
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Pacchetto Professional',
      icon: Shield,
      price: 'Su preventivo',
      description: 'Per aziende che richiedono supporto completo e continuativo',
      features: [
        'Assistenza remota illimitata',
        'Monitoraggio 24/7 con alerting',
        'Backup giornaliero automatico',
        'Supporto prioritario entro 4h',
        'Manutenzione preventiva mensile',
        'Gestione completa server e rete',
        'Report mensili dettagliati',
        'Consulenza IT trimestrale',
      ],
      highlighted: true,
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      name: 'Pacchetto Enterprise',
      icon: Headphones,
      price: 'Su preventivo',
      description: 'Soluzioni personalizzate per grandi organizzazioni',
      features: [
        'Tutto del pacchetto Professional',
        'Assistenza on-site inclusa',
        'Account manager dedicato',
        'SLA personalizzato',
        'Disaster recovery planning',
        'Consulenza strategica IT',
        'Formazione del personale',
        'Supporto H24/7',
      ],
      highlighted: false,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const includedServices = [
    { icon: Server, title: 'Gestione Server', description: 'Monitoraggio, aggiornamenti e ottimizzazione dei server aziendali' },
    { icon: Shield, title: 'Sicurezza IT', description: 'Antivirus, firewall, patch di sicurezza e protezione endpoint' },
    { icon: Activity, title: 'Monitoraggio Rete', description: 'Controllo continuo delle performance e disponibilita della rete' },
    { icon: Settings, title: 'Gestione Workstation', description: 'Configurazione, aggiornamento e supporto postazioni di lavoro' },
  ];

  const faqs = [
    {
      question: "Cosa include un contratto di manutenzione informatica?",
      answer: "Un contratto di manutenzione informatica CoreNexus include assistenza remota e on-site con SLA garantiti, monitoraggio 24/7 con Zabbix, manutenzione preventiva mensile, gestione backup automatici, aggiornamenti di sicurezza e report periodici. Operiamo per aziende di Roma, EUR, Ostia, Fiumicino e tutta la zona sud della capitale.",
    },
    {
      question: "Quali sono i vantaggi rispetto all'intervento a chiamata?",
      answer: "Il contratto di manutenzione garantisce tempi di intervento certi (SLA), costi fissi e prevedibili, e un monitoraggio proattivo che previene i guasti prima che blocchino la tua azienda. Con i piani Professional e Enterprise di CoreNexus, la tua infrastruttura e sempre sotto controllo.",
    },
    {
      question: "Offrite assistenza informatica con canone mensile a Roma e provincia?",
      answer: "Certamente. Proponiamo pacchetti di assistenza personalizzati per aziende a Roma EUR, Ostia, Fiumicino, Acilia, Pomezia e tutta la zona sud di Roma, includendo supporto remoto illimitato e interventi on-site programmati.",
    },
    {
      question: "E possibile personalizzare il pacchetto di manutenzione?",
      answer: "Si, valutiamo insieme il numero di postazioni, server e apparati di rete per creare un piano su misura che includa backup, sicurezza e supporto sistemistico basato sulle reali esigenze della tua azienda a Roma.",
    },
    {
      question: "In quali zone di Roma operate per i contratti di manutenzione?",
      answer: "Operiamo con interventi on-site in tutto il quadrante sud di Roma: EUR, Ostia Lido, Ostia Antica, Fiumicino, Isola Sacra, Acilia, Casal Palocco, Infernetto, Axa, Mostacciano, Torrino, Laurentina, Spinaceto, Pomezia, Ardea, Santa Palomba e zone limitrofe.",
    },
  ];

  const coverageAreas = [
    'EUR', 'Ostia Lido', 'Ostia Antica', 'Fiumicino', 'Isola Sacra',
    'Acilia', 'Casal Palocco', 'Infernetto', 'Axa', 'Malafede',
    'Mostacciano', 'Torrino', 'Laurentina', 'Spinaceto', 'Mezzocammino',
    'Pomezia', 'Ardea', 'Santa Palomba', 'Castel Romano', 'Garbatella',
    'Ostiense', 'Marconi', 'Magliana', 'San Paolo',
  ];

  return (
    <>
      <SEO
        title="Contratti Manutenzione Informatica Roma | Assistenza IT Aziendale EUR Ostia - CoreNexus"
        description="Contratti di manutenzione informatica per aziende a Roma, EUR, Ostia, Fiumicino e Pomezia. Assistenza IT con canone mensile fisso, monitoraggio 24/7, SLA garantiti. Manutenzione preventiva e supporto on-site. Preventivo gratuito."
        keywords={[
          'contratti manutenzione informatica Roma',
          'contratto manutenzione informatica',
          'assistenza informatica contratto Roma',
          'manutenzione informatica Roma',
          'contratti manutenzione IT Roma',
          'assistenza informatica canone mensile Roma',
          'manutenzione server Roma',
          'supporto IT aziendale Roma',
          'SLA informatica Roma',
          'monitoraggio IT 24/7 Roma',
          'assistenza remota Roma',
          'contratti IT Ostia Lido',
          'manutenzione IT Fiumicino',
          'contratti assistenza Pomezia',
          'supporto IT Roma Sud',
          'manutenzione preventiva IT Roma EUR',
        ]}
        canonical="/contratti-manutenzione"
        schema={manutenzioneSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6 premium-gradient">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-black to-blue-950/30" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="mb-6">
                <Link to="/servizi" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium">
                  <ArrowLeft className="w-4 h-4" />
                  Torna ai Servizi
                </Link>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-block">
                    <span className="px-4 py-2 rounded-full glass-effect text-emerald-400 text-sm font-semibold tracking-wide flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Contratti di Assistenza
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
                    Contratti di Manutenzione Informatica
                    <span className="block text-3xl md:text-4xl text-gray-400 mt-2 font-normal">
                      a Roma, EUR, Ostia e Fiumicino
                    </span>
                  </h1>

                  <p className="text-xl text-gray-400 leading-relaxed">
                    Proteggi la tua infrastruttura IT con un contratto di manutenzione su misura. Assistenza continuativa, monitoraggio proattivo 24/7 e tempi di risposta garantiti per PMI di Roma e provincia.
                  </p>

                  <div className="space-y-4">
                    {keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-gray-300 text-lg">{point}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" onClick={scrollToContact} className="group premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold">
                    Richiedi un preventivo gratuito
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>

                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl glass-effect border border-emerald-500/20 p-8 flex flex-col items-center justify-center gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        {[FileText, Shield, Clock, Server, Activity, Wrench, Settings, Headphones, Zap].map((Icon, i) => (
                          <div key={i} className="w-16 h-16 rounded-2xl glass-effect flex items-center justify-center hover:bg-emerald-500/20 transition-all duration-300 hover:scale-110">
                            <Icon className="w-7 h-7 text-emerald-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl blur-xl -z-10" />
                  </div>
                </div>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Vantaggi del Contratto di Manutenzione Informatica
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Un investimento che protegge il tuo business e riduce i costi imprevisti
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <MorphingSection key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-3xl glass-effect hover:bg-white/10 transition-all duration-500 card-hover group flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <b.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{b.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{b.description}</p>
                  </div>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/10 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">I Nostri Pacchetti di Assistenza</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Scegli il piano piu adatto alle esigenze della tua azienda a Roma. Tutti i pacchetti sono personalizzabili.
                </p>
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-3 gap-8">
              {assistancePlans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <MorphingSection key={index} delay={index * 0.15}>
                    <Card className={`group relative overflow-hidden p-8 h-full flex flex-col ${plan.highlighted ? 'glass-effect border-2 border-emerald-500/50 shadow-2xl shadow-emerald-500/20' : 'glass-effect border-white/10'}`}>
                      {plan.highlighted && (
                        <div className="absolute top-0 right-0 bg-gradient-to-br from-emerald-500 to-blue-600 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">
                          PIU POPOLARE
                        </div>
                      )}
                      <div className="space-y-6 flex-grow flex flex-col">
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-white">{plan.price}</p>
                          <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
                        </div>
                        <div className="space-y-3 pt-4 flex-grow">
                          {plan.features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 text-sm">{feat}</span>
                            </div>
                          ))}
                        </div>
                        <Button
                          onClick={scrollToContact}
                          className={`w-full mt-6 py-6 rounded-xl font-semibold ${plan.highlighted ? 'premium-button text-white' : 'glass-effect border-white/20 hover:border-white/40 text-white hover:bg-white/10'}`}
                          variant={plan.highlighted ? 'default' : 'outline'}
                        >
                          Richiedi Preventivo
                        </Button>
                      </div>
                    </Card>
                  </MorphingSection>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">Tutti i pacchetti sono personalizzabili in base alle tue esigenze specifiche</p>
            </div>
          </div>
        </section>

        {/* Included Services */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Cosa Include la Manutenzione Informatica</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full" />
              </div>
            </MorphingSection>

            <div className="grid md:grid-cols-2 gap-6">
              {includedServices.map((service, i) => (
                <MorphingSection key={i} delay={i * 0.1}>
                  <div className="p-6 rounded-2xl glass-effect border border-white/5 hover:border-emerald-500/30 transition-all duration-300 group hover:bg-white/5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-1">{service.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </MorphingSection>
              ))}
            </div>
          </div>
        </section>

        {/* Zone copertura */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/10 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <MorphingSection>
              <div className="p-10 rounded-3xl glass-effect border border-emerald-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Contratti di manutenzione informatica a Roma Sud</h2>
                </div>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  Siamo il riferimento per i contratti di manutenzione informatica nel quadrante sud di Roma. Interveniamo on-site con tempi certi in tutte le principali zone:
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {coverageAreas.map((area, index) => (
                    <span key={index} className="px-4 py-2 rounded-full glass-effect border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm">
                  Per le zone non elencate offriamo assistenza da remoto in tutta Italia con canone mensile fisso.
                </p>
              </div>
            </MorphingSection>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} accentColor="emerald" gradientFrom="emerald-500" gradientTo="blue-500" />

        {/* CTA Section */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/20 to-black" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <MorphingSection>
              <div className="p-12 rounded-3xl glass-effect border border-emerald-500/20 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Richiedi il tuo contratto di manutenzione informatica a Roma
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Contattaci per una consulenza gratuita. Analizzeremo la tua infrastruttura e ti proporremo il contratto di manutenzione piu adatto alla tua azienda a Roma, EUR, Ostia o Fiumicino.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={scrollToContact} className="group premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold">
                    Richiedi Consulenza Gratuita
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
            <p className="text-xs text-gray-600">v2.1 - 25/05/2026</p>
          </div>
        </footer>

        <WhatsAppWidget />
      </div>
    </>
  );
}
