import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 py-6 px-6 sticky top-0 bg-black/80 backdrop-blur-xl z-50">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Torna al Sito
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Hero */}
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-6">
            <Cookie className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            Cookie Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Cosa sono i Cookie</h2>
          <p className="text-gray-300 leading-relaxed">
            I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet, smartphone) 
            quando visiti un sito web. I cookie permettono al sito di ricordare le tue azioni e preferenze 
            (come login, lingua, dimensione dei caratteri e altre impostazioni di visualizzazione) per un certo periodo di tempo, 
            così non devi reinserirle ogni volta che torni sul sito o navighi da una pagina all'altra.
          </p>
        </section>

        {/* Types of Cookies */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Tipologie di Cookie Utilizzati</h2>
          <p className="text-gray-300 leading-relaxed">
            Il sito <strong className="text-blue-400">corenexus.it</strong> utilizza le seguenti tipologie di cookie:
          </p>

          <div className="space-y-4">
            {/* Technical Cookies */}
            <div className="p-6 rounded-2xl glass-effect border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">1. Cookie Tecnici (Necessari)</h3>
              <p className="text-gray-300 mb-4">
                Questi cookie sono essenziali per il corretto funzionamento del sito e non possono essere disabilitati. 
                Vengono utilizzati per:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside mb-4">
                <li>Gestire la sessione di navigazione</li>
                <li>Memorizzare le preferenze sui cookie</li>
                <li>Autenticazione degli utenti registrati</li>
                <li>Garantire la sicurezza del sito</li>
              </ul>
              <div className="bg-white/5 p-4 rounded-xl">
                <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Cookie utilizzati:</strong></p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• <code className="text-blue-400">cookieConsent</code> - Memorizza le preferenze sui cookie (durata: 12 mesi)</li>
                  <li>• <code className="text-blue-400">sb-access-token</code> - Token di autenticazione Supabase (durata: sessione)</li>
                  <li>• <code className="text-blue-400">sb-refresh-token</code> - Token di refresh Supabase (durata: 30 giorni)</li>
                </ul>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="p-6 rounded-2xl glass-effect border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">2. Cookie Analitici</h3>
              <p className="text-gray-300 mb-4">
                Questi cookie ci aiutano a capire come i visitatori interagiscono con il sito, raccogliendo informazioni 
                in forma anonima. Utilizziamo queste informazioni per:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside mb-4">
                <li>Migliorare l'esperienza utente</li>
                <li>Comprendere quali pagine sono più visitate</li>
                <li>Ottimizzare i contenuti e la navigazione</li>
                <li>Identificare eventuali problemi tecnici</li>
              </ul>
              <div className="bg-white/5 p-4 rounded-xl">
                <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Servizi utilizzati:</strong></p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• <strong className="text-white">Google Analytics</strong> (se abilitato) - Analisi del traffico web</li>
                  <li>• Durata: fino a 24 mesi</li>
                  <li>• <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy di Google</a></li>
                </ul>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                ⚠️ <strong className="text-white">Nota:</strong> Questi cookie richiedono il tuo consenso esplicito e possono essere disabilitati tramite il banner cookie.
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="p-6 rounded-2xl glass-effect border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">3. Cookie di Marketing</h3>
              <p className="text-gray-300 mb-4">
                Attualmente, il sito <strong className="text-blue-400">corenexus.it</strong> non utilizza cookie di marketing o profilazione. 
                Nel caso in cui venissero implementati in futuro, ti verrà richiesto un consenso esplicito.
              </p>
            </div>
          </div>
        </section>

        {/* Third Party Cookies */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Cookie di Terze Parti</h2>
          <p className="text-gray-300 leading-relaxed">
            Il sito utilizza servizi di terze parti che potrebbero installare cookie sul tuo dispositivo:
          </p>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Supabase</h3>
              <p className="text-sm text-gray-400">
                Utilizzato per l'autenticazione degli utenti e la gestione del database. 
                <br />
                <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                  Privacy Policy di Supabase
                </a>
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Google Maps</h3>
              <p className="text-sm text-gray-400">
                Utilizzato per visualizzare la mappa delle zone di copertura. 
                <br />
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                  Privacy Policy di Google
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Cookie Duration */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Durata dei Cookie</h2>
          <p className="text-gray-300 leading-relaxed">
            I cookie possono essere:
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong className="text-white">Cookie di sessione:</strong> Vengono cancellati automaticamente alla chiusura del browser.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong className="text-white">Cookie persistenti:</strong> Rimangono memorizzati sul dispositivo per un periodo di tempo specifico (da pochi giorni a 12 mesi).</span>
            </li>
          </ul>
        </section>

        {/* Cookie Management */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Come Gestire i Cookie</h2>
          <p className="text-gray-300 leading-relaxed">
            Puoi gestire le tue preferenze sui cookie in diversi modi:
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl glass-effect border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">1. Tramite il Banner Cookie</h3>
              <p className="text-gray-300 mb-4">
                Al primo accesso al sito, ti verrà mostrato un banner che ti permette di:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Accettare tutti i cookie</li>
                <li>Accettare solo i cookie necessari</li>
                <li>Personalizzare le tue preferenze</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl glass-effect border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">2. Tramite le Impostazioni del Browser</h3>
              <p className="text-gray-300 mb-4">
                Puoi configurare il tuo browser per bloccare o eliminare i cookie. Ecco i link alle guide dei principali browser:
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  • <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                    Google Chrome
                  </a>
                </li>
                <li>
                  • <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  • <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                    Safari
                  </a>
                </li>
                <li>
                  • <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                    Microsoft Edge
                  </a>
                </li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                ⚠️ <strong className="text-white">Attenzione:</strong> Disabilitare i cookie tecnici potrebbe compromettere alcune funzionalità del sito.
              </p>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Aggiornamenti della Cookie Policy</h2>
          <p className="text-gray-300 leading-relaxed">
            La presente Cookie Policy può essere aggiornata periodicamente. Ti invitiamo a consultare regolarmente questa pagina 
            per essere informato sulle eventuali modifiche. La data di ultimo aggiornamento è indicata in alto.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Contatti</h2>
          <p className="text-gray-300 leading-relaxed">
            Per qualsiasi domanda relativa alla presente Cookie Policy, puoi contattarci all'indirizzo email{' '}
            <a href="mailto:privacy@corenexus.it" className="text-blue-400 hover:text-blue-300 underline">
              privacy@corenexus.it
            </a>
          </p>
        </section>

        {/* Back Button */}
        <div className="pt-8 text-center">
          <Link to="/">
            <Button className="premium-button text-white px-8 py-6 text-lg rounded-2xl font-semibold">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Torna alla Home
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 <a href="https://corenexus.it" className="text-blue-400 hover:text-blue-300">CoreNexus.it</a> - Tutti i diritti riservati
          </p>
        </div>
      </footer>
    </div>
  );
}