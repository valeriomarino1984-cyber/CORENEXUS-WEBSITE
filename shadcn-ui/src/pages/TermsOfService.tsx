import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TermsOfService() {
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
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            Termini e Condizioni
          </h1>
          <p className="text-gray-400 text-lg">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">1. Introduzione</h2>
          <p className="text-gray-300 leading-relaxed">
            I presenti Termini e Condizioni regolano l'utilizzo del sito web <strong className="text-blue-400">corenexus.it</strong> (di seguito "Sito") 
            e dei servizi di assistenza informatica offerti da CoreNexus (di seguito "Fornitore" o "noi").
          </p>
          <p className="text-gray-300 leading-relaxed">
            Utilizzando il Sito e i nostri servizi, accetti integralmente i presenti Termini e Condizioni. 
            Se non accetti questi termini, ti preghiamo di non utilizzare il Sito.
          </p>
        </section>

        {/* Services */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">2. Servizi Offerti</h2>
          <p className="text-gray-300 leading-relaxed">
            CoreNexus offre i seguenti servizi professionali:
          </p>
          <ul className="space-y-2 text-gray-300 list-disc list-inside">
            <li>Assistenza informatica aziendale</li>
            <li>Supporto sistemistico e gestione server</li>
            <li>Gestione e configurazione di reti aziendali</li>
            <li>Installazione e manutenzione di sistemi di videosorveglianza Hikvision</li>
            <li>Consulenza su sicurezza informatica</li>
            <li>Sviluppo e gestione di siti web aziendali</li>
            <li>Supporto tecnico remoto e on-site</li>
          </ul>
        </section>

        {/* Registration */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">3. Registrazione e Account Utente</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">3.1 Creazione Account</h3>
              <p className="text-gray-300">
                Per accedere ad alcuni servizi, è necessario creare un account fornendo informazioni accurate e complete. 
                Sei responsabile della riservatezza delle tue credenziali di accesso.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">3.2 Responsabilità dell'Utente</h3>
              <p className="text-gray-300">
                L'utente è responsabile di tutte le attività svolte tramite il proprio account e si impegna a notificare 
                immediatamente qualsiasi uso non autorizzato.
              </p>
            </div>
          </div>
        </section>

        {/* Usage Rules */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">4. Regole di Utilizzo</h2>
          <p className="text-gray-300 leading-relaxed">
            Utilizzando il Sito e i nostri servizi, ti impegni a:
          </p>
          <ul className="space-y-2 text-gray-300 list-disc list-inside">
            <li>Non violare leggi o regolamenti applicabili</li>
            <li>Non utilizzare il Sito per scopi illeciti o non autorizzati</li>
            <li>Non trasmettere virus, malware o codice dannoso</li>
            <li>Non interferire con il funzionamento del Sito o dei server</li>
            <li>Non tentare di accedere a dati o sistemi non autorizzati</li>
            <li>Fornire informazioni veritiere e aggiornate</li>
          </ul>
        </section>

        {/* Pricing */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">5. Prezzi e Pagamenti</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">5.1 Tariffe</h3>
              <p className="text-gray-300">
                I prezzi dei servizi sono indicati sul Sito e possono essere soggetti a modifiche. 
                Le tariffe applicabili sono quelle in vigore al momento dell'ordine.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">5.2 Modalità di Pagamento</h3>
              <p className="text-gray-300">
                I pagamenti possono essere effettuati tramite bonifico bancario, carta di credito o altri metodi concordati. 
                Le fatture verranno emesse secondo la normativa fiscale italiana.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">5.3 Ritardi nei Pagamenti</h3>
              <p className="text-gray-300">
                In caso di ritardo nei pagamenti, ci riserviamo il diritto di sospendere i servizi fino al saldo del debito. 
                Potranno essere applicati interessi di mora secondo la normativa vigente.
              </p>
            </div>
          </div>
        </section>

        {/* Service Level */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">6. Livelli di Servizio</h2>
          <p className="text-gray-300 leading-relaxed">
            Ci impegniamo a fornire servizi di alta qualità, tuttavia:
          </p>
          <ul className="space-y-2 text-gray-300 list-disc list-inside">
            <li>I tempi di intervento variano in base al pacchetto di assistenza sottoscritto</li>
            <li>Non garantiamo la disponibilità ininterrotta dei servizi (es. manutenzione programmata)</li>
            <li>Gli SLA (Service Level Agreement) specifici sono definiti nei contratti individuali</li>
          </ul>
        </section>

        {/* Liability */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">7. Limitazione di Responsabilità</h2>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Nei limiti consentiti dalla legge:
            </p>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Non siamo responsabili per danni indiretti, incidentali o consequenziali</li>
              <li>La nostra responsabilità è limitata all'importo pagato per il servizio specifico</li>
              <li>Non garantiamo risultati specifici derivanti dall'uso dei nostri servizi</li>
              <li>Non siamo responsabili per interruzioni causate da eventi di forza maggiore</li>
            </ul>
            <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 mt-4">
              <p className="text-yellow-400 text-sm">
                ⚠️ <strong>Importante:</strong> Questa limitazione non si applica in caso di dolo o colpa grave da parte nostra.
              </p>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">8. Proprietà Intellettuale</h2>
          <p className="text-gray-300 leading-relaxed">
            Tutti i contenuti del Sito (testi, immagini, loghi, software) sono di proprietà di CoreNexus o dei rispettivi titolari 
            e sono protetti dalle leggi sul diritto d'autore. È vietata la riproduzione, distribuzione o modifica senza autorizzazione scritta.
          </p>
        </section>

        {/* Data Protection */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">9. Protezione dei Dati</h2>
          <p className="text-gray-300 leading-relaxed">
            Il trattamento dei dati personali è regolato dalla nostra{' '}
            <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
              Privacy Policy
            </Link>
            , che costituisce parte integrante dei presenti Termini e Condizioni.
          </p>
        </section>

        {/* Termination */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">10. Risoluzione del Contratto</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">10.1 Risoluzione da parte dell'Utente</h3>
              <p className="text-gray-300">
                Puoi recedere dal contratto in qualsiasi momento con preavviso scritto di 30 giorni, 
                salvo diversi accordi contrattuali specifici.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">10.2 Risoluzione da parte del Fornitore</h3>
              <p className="text-gray-300">
                Ci riserviamo il diritto di risolvere il contratto in caso di:
              </p>
              <ul className="space-y-1 text-gray-300 list-disc list-inside mt-2">
                <li>Violazione dei presenti Termini e Condizioni</li>
                <li>Mancato pagamento delle fatture</li>
                <li>Uso improprio o fraudolento dei servizi</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Changes */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">11. Modifiche ai Termini</h2>
          <p className="text-gray-300 leading-relaxed">
            Ci riserviamo il diritto di modificare i presenti Termini e Condizioni in qualsiasi momento. 
            Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento. 
            L'uso continuato del Sito dopo le modifiche costituisce accettazione dei nuovi termini.
          </p>
        </section>

        {/* Applicable Law */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">12. Legge Applicabile e Foro Competente</h2>
          <p className="text-gray-300 leading-relaxed">
            I presenti Termini e Condizioni sono regolati dalla legge italiana. 
            Per qualsiasi controversia è competente il Foro di [Inserire città], salvo diversi accordi tra le parti.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">13. Contatti</h2>
          <p className="text-gray-300 leading-relaxed">
            Per qualsiasi domanda relativa ai presenti Termini e Condizioni, puoi contattarci:
          </p>
          <div className="p-6 rounded-2xl glass-effect border border-white/10 space-y-2">
            <p className="text-gray-300">
              <strong className="text-white">Email:</strong>{' '}
              <a href="mailto:info@corenexus.it" className="text-blue-400 hover:text-blue-300">
                info@corenexus.it
              </a>
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Telefono:</strong> [Inserire numero di telefono]
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Indirizzo:</strong> [Inserire indirizzo completo]
            </p>
          </div>
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