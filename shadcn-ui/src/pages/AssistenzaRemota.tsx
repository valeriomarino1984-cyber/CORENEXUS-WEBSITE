import Header from '@/components/Header';
import { breadcrumbSchema, localBusinessServiceSchema } from '@/utils/seoSchemas';
import SEO from '@/components/SEO';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { Button } from '@/components/ui/button';
import { Monitor, Download, ExternalLink, Shield, Zap, ArrowLeft, CheckCircle, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AssistenzaRemota() {
  const navigate = useNavigate();

  const remotaBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Assistenza Remota', url: '/assistenza-remota' },
  ]);

  const remotaSchema = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessServiceSchema(
        "Assistenza Remota Roma EUR Ostia Fiumicino",
        "Assistenza remota rapida e sicura per aziende a Roma, EUR, Ostia Lido, Fiumicino e Pomezia. Supporto tecnico immediato con UltraViewer, risoluzione problemi senza spostamenti.",
        "/assistenza-remota",
        "Assistenza Remota"
      ),
      remotaBreadcrumb,
    ]
  };

  return (
    <>
      <SEO
        title="Assistenza Remota Roma EUR Ostia Fiumicino | Supporto Tecnico Online - CoreNexus"
        description="Assistenza remota rapida e sicura per aziende e privati a Roma, EUR, Ostia Lido, Fiumicino e Pomezia. Supporto tecnico immediato con UltraViewer, risoluzione problemi informatici senza spostamenti."
        keywords={[
          'assistenza remota Roma',
          'supporto tecnico remoto Roma EUR',
          'teleassistenza informatica Roma',
          'assistenza remota Ostia Lido',
          'assistenza remota Fiumicino',
          'supporto remoto aziendale Roma',
          'assistenza PC remota Pomezia',
          'UltraViewer assistenza',
          'supporto tecnico online Roma',
          'assistenza informatica da remoto Roma Sud',
        ]}
        canonical="/assistenza-remota"
        schema={remotaSchema}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Banner */}
        className="relative overflow-hidden pt-32 pb-20 px-6 premium-gradient"
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/30 via-black to-black" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center space-y-8 animate-fade-in-up">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/30">
                <Monitor className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
                Assistenza Remota
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                Ricevi supporto tecnico immediato direttamente sul tuo computer, senza attese e senza spostamenti.
              </p>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Utilizziamo <strong className="text-white">UltraViewer</strong>, un software gratuito e sicuro per il controllo remoto del desktop.
              </p>
            </div>
          </div>
        </section>

        {/* Come Funziona */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Come funziona</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Scarica',
                  description: 'Scarica e installa UltraViewer dal link qui sotto. È gratuito e leggero.',
                  gradient: 'from-cyan-500 to-blue-500',
                },
                {
                  step: '2',
                  title: 'Avvia',
                  description: 'Apri il programma sul tuo PC. Si avvierà automaticamente con un ID e una password.',
                  gradient: 'from-blue-500 to-indigo-500',
                },
                {
                  step: '3',
                  title: 'Comunica',
                  description: 'Comunicaci il tuo ID e la password temporanea via telefono o email.',
                  gradient: 'from-indigo-500 to-purple-500',
                },
                {
                  step: '4',
                  title: 'Collegamento',
                  description: 'Il nostro tecnico si collegherà in pochi secondi e risolverà il problema.',
                  gradient: 'from-purple-500 to-pink-500',
                },
              ].map((item, index) => (
                <article
                  key={index}
                  className="p-8 rounded-3xl glass-effect hover:bg-white/10 transition-all duration-500 card-hover group text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Vantaggi */}
        <section className="py-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Perché scegliere l'assistenza remota</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Zap,
                  title: 'Intervento immediato',
                  description: 'Nessuna attesa per appuntamenti o uscite. Il tecnico si collega in pochi minuti.',
                  gradient: 'from-yellow-500 to-orange-500',
                },
                {
                  icon: Shield,
                  title: 'Connessione sicura',
                  description: 'UltraViewer utilizza crittografia avanzata per proteggere la tua sessione remota.',
                  gradient: 'from-green-500 to-emerald-500',
                },
                {
                  icon: Download,
                  title: 'Software gratuito',
                  description: 'UltraViewer è completamente gratuito per uso personale e commerciale.',
                  gradient: 'from-cyan-500 to-blue-500',
                },
                {
                  icon: Monitor,
                  title: 'Nessuno spostamento',
                  description: 'Risolvi i problemi comodamente dal tuo ufficio o da casa, senza interruzioni.',
                  gradient: 'from-purple-500 to-pink-500',
                },
                {
                  icon: Headphones,
                  title: 'Supporto guidato',
                  description: 'Il nostro tecnico ti guida passo passo durante l\'intervento, spiegando ogni operazione.',
                  gradient: 'from-blue-500 to-indigo-500',
                },
                {
                  icon: CheckCircle,
                  title: 'Compatibilità Windows',
                  description: 'Funziona su tutte le versioni di Windows, da Windows 7 a Windows 11.',
                  gradient: 'from-teal-500 to-cyan-500',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 p-6 rounded-2xl glass-effect hover:bg-white/10 transition-all duration-500 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black" />
          <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="p-12 rounded-3xl glass-effect border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-500 text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-8 mx-auto shadow-lg shadow-cyan-500/30">
                <Download className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Scarica UltraViewer
              </h2>

              <p className="text-lg text-gray-300 mb-4 max-w-xl mx-auto">
                Scarica il software gratuito, avvialo e contattaci per ricevere assistenza immediata.
              </p>

              <p className="text-sm text-gray-500 mb-8">
                Compatibile con Windows 7, 8, 10, 11 • Nessuna registrazione richiesta • 100% gratuito
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.ultraviewer.net/en/download.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    type="button"
                    size="lg"
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-10 py-7 text-lg rounded-2xl font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 group"
                  >
                    <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                    Scarica UltraViewer Gratis
                    <ExternalLink className="ml-2 w-4 h-4 opacity-70" />
                  </Button>
                </a>

                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/#contact')}
                  className="glass-effect border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-10 py-7 text-lg rounded-2xl font-semibold"
                >
                  Contattaci per assistenza
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="glass-effect border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-8 py-6 rounded-xl text-sm font-semibold"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Torna alla Home
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <p className="text-gray-400 text-sm">
                © 2026 <a href="https://corenexus.it" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">CoreNexus Technology Solution</a> - Tutti i diritti riservati.
              </p>
            </div>
            <p className="text-xs text-gray-600">v2.0 - 25/03/2026</p>
          </div>
        </footer>

        <WhatsAppWidget />
      </div>
    </>
  );
}
