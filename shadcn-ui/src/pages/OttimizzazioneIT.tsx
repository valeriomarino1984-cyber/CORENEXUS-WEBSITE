import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowRight, Server, Mail, BarChart3, TrendingDown, CheckCircle, Euro } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: Server,
    title: 'Migrazione VMware → Proxmox',
    gradient: 'from-blue-500 to-indigo-600',
    description: 'Dopo l\'acquisizione di VMware da parte di Broadcom, i costi delle licenze sono aumentati fino al 500%. Proxmox VE è la soluzione open source enterprise-grade che ti permette di mantenere le stesse funzionalità a costo zero.',
    benefits: [
      'Risparmio medio di 15.000-30.000€/anno',
      'Migrazione senza downtime in 1-3 giorni',
      'Stesse funzionalità di VMware, zero licenze',
      'Alta disponibilità e cluster multi-nodo',
      'Backup automatici e snapshot istantanei',
    ],
    cta: 'Analisi gratuita della tua infrastruttura',
  },
  {
    icon: Server,
    title: 'Ottimizzazione e Consolidamento Server',
    gradient: 'from-purple-500 to-violet-600',
    description: 'La maggior parte delle aziende utilizza i propri server fisici al 15-20% della capacità. Attraverso la virtualizzazione e il consolidamento, riduciamo i costi hardware, energetici e di manutenzione.',
    benefits: [
      'Riduzione hardware fino al 60%',
      'Taglio dei consumi energetici',
      'Gestione centralizzata semplificata',
      'Scalabilità immediata senza nuovi acquisti',
      'Disaster recovery integrato',
    ],
    cta: 'Valuta il consolidamento della tua infrastruttura',
  },
  {
    icon: Mail,
    title: 'Migrazione Email Aziendale',
    gradient: 'from-emerald-500 to-teal-600',
    description: 'Exchange on-premise, provider costosi o soluzioni datate: migriamo la tua posta aziendale verso soluzioni moderne, sicure e con costi prevedibili. Zero perdita di dati, zero interruzioni.',
    benefits: [
      'Migrazione completa senza perdita email',
      'Continuità operativa garantita',
      'Archivio storico preservato',
      'Sicurezza e anti-spam avanzati',
      'Accesso da qualsiasi dispositivo',
    ],
    cta: 'Pianifica la tua migrazione email',
  },
  {
    icon: BarChart3,
    title: 'Audit dei Costi IT',
    gradient: 'from-amber-500 to-orange-600',
    description: 'Analizziamo tutta la tua infrastruttura IT per identificare sprechi, licenze inutilizzate, contratti ridondanti e opportunità di risparmio. In media troviamo il 30-40% di costi eliminabili.',
    benefits: [
      'Analisi completa di licenze e contratti',
      'Identificazione di sprechi e ridondanze',
      'Piano di risparmio dettagliato con ROI',
      'Prioritizzazione degli interventi',
      'Report esecutivo per il management',
    ],
    cta: 'Richiedi il tuo audit gratuito',
  },
];

const savings = [
  { label: 'Risparmio medio annuo', value: '€18.000', desc: 'per PMI con 5-15 server' },
  { label: 'Riduzione costi hardware', value: '60%', desc: 'con consolidamento e virtualizzazione' },
  { label: 'Tempo di migrazione', value: '1-3 gg', desc: 'senza interruzioni operative' },
  { label: 'ROI medio', value: '< 6 mesi', desc: 'sul totale degli interventi' },
];

export default function OttimizzazioneIT() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/#contact');
  };

  return (
    <>
      <SEO
        title="Ottimizzazione IT Roma | Migrazione VMware Proxmox, Risparmia sui Costi IT - CoreNexus"
        description="Ottimizzazione IT e migrazioni per PMI a Roma, EUR, Ostia, Fiumicino. Migrazione VMware verso Proxmox, consolidamento server, migrazione email aziendale, audit costi IT. Risparmia fino al 60% sui costi IT con CoreNexus Technology Solution."
        keywords={[
          'ottimizzazione IT Roma',
          'migrazione VMware Proxmox Roma',
          'risparmia costi IT Roma',
          'migrazioni IT Roma',
          'consolidamento server Roma',
          'audit costi IT Roma',
          'migrazione email aziendale Roma',
          'riduzione costi informatica Roma',
          'Proxmox installazione Roma',
          'ottimizzazione infrastruttura IT EUR',
          'migrazioni ottimizzazioni IT Ostia',
          'risparmio IT PMI Roma Sud',
        ]}
        canonical="/ottimizzazione-it"
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-24 px-6 premium-gradient">
          <div className="hero-ambient-1" />
          <div className="hero-ambient-2" />
          <div className="hero-ambient-3" />

          <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8 animate-hero-zoom">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-effect border border-emerald-500/30 text-emerald-400 text-sm font-semibold hero-stagger-1">
              <TrendingDown className="w-4 h-4" />
              Riduci i costi IT fino al 60%
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight hero-stagger-2">
              Ottimizzazione IT
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light hero-stagger-3">
              Migrazioni, consolidamenti e audit per ridurre i costi IT della tua azienda senza sacrificare affidabilità e performance.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center hero-stagger-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold"
              >
                Richiedi un\'analisi gratuita
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>

            <p className="text-sm text-gray-500 flex items-center justify-center gap-2 hero-stagger-4">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Sopralluogo e analisi sempre gratuiti, senza impegno
            </p>
          </div>
        </section>

        {/* Numeri */}
        <section className="py-16 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/10 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {savings.map((item, index) => (
                <div key={index} className="text-center p-6 rounded-2xl glass-effect reveal-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{item.value}</div>
                  <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                  <div className="text-gray-500 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servizi */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className="max-w-6xl mx-auto relative z-10 space-y-8">

            <div className="text-center space-y-4 mb-16 reveal-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-white">I nostri interventi</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Soluzioni concrete per ridurre i costi IT senza fermare la tua azienda
              </p>
            </div>

            {services.map((service, index) => (
              <div
                key={index}
                className={`p-8 md:p-10 rounded-3xl glass-effect border border-white/10 hover:border-white/20 transition-all duration-500 ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={scrollToContact}
                      className="group premium-button text-white px-8 py-4 rounded-xl font-semibold mt-2"
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA finale */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
          <div className="max-w-4xl mx-auto relative z-10 reveal-on-scroll">
            <div className="p-12 rounded-3xl glass-effect border border-blue-500/20 text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto shadow-lg">
                <Euro className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Scopri quanto puoi risparmiare
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Contattaci per un\'analisi gratuita della tua infrastruttura IT. In media identifichiamo il 30-40% di costi eliminabili senza impattare l\'operatività aziendale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="group premium-button text-white px-12 py-7 text-lg rounded-2xl font-semibold"
                >
                  Analisi gratuita
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/blog/proxmox-alternativa-vmware')}
                  className="group glass-effect border-white/20 text-white hover:bg-white/10 px-12 py-7 text-lg rounded-2xl font-semibold"
                >
                  Leggi l\'articolo su Proxmox
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <WhatsAppWidget />

        <footer className="bg-black border-t border-white/10 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <p className="text-gray-400 text-sm">
                © 2026 <a href="https://corenexus.it" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">CoreNexus Technology Solution</a> - Tutti i diritti riservati.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
