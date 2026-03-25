import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicy() {
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
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Introduzione</h2>
          <p className="text-gray-300 leading-relaxed">
            La presente Privacy Policy descrive le modalità di raccolta, utilizzo e protezione dei dati personali 
            degli utenti che visitano il sito web <strong className="text-blue-400">corenexus.it</strong> (di seguito "Sito") 
            e utilizzano i servizi di assistenza informatica offerti da CoreNexus (di seguito "Titolare del trattamento").
          </p>
          <p className="text-gray-300 leading-relaxed">
            Il Titolare si impegna a rispettare il Regolamento Generale sulla Protezione dei Dati (GDPR - Regolamento UE 2016/679) 
            e la normativa italiana in materia di protezione dei dati personali.
          </p>
        </section>

        {/* Data Controller */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">1. Titolare del Trattamento</h2>
          <div className="p-6 rounded-2xl glass-effect border border-white/10 space-y-3">
            <p className="text-gray-300">
              <strong className="text-white">Ragione Sociale:</strong> CoreNexus
            </p>
            <p className="text-gray-300 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <strong className="text-white">Sede:</strong> [Inserire indirizzo completo]
            </p>
            <p className="text-gray-300 flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <strong className="text-white">Email:</strong> <a href="mailto:privacy@corenexus.it" className="text-blue-400 hover:text-blue-300">privacy@corenexus.it</a>
            </p>
            <p className="text-gray-300 flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <strong className="text-white">Telefono:</strong> [Inserire numero di telefono]
            </p>
          </div>
        </section>

        {/* Data Collected */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">2. Dati Raccolti</h2>
          <p className="text-gray-300 leading-relaxed">
            Il Titolare raccoglie e tratta le seguenti categorie di dati personali:
          </p>
          
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">2.1 Dati forniti volontariamente</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono</li>
                <li>Nome dell'azienda</li>
                <li>Messaggi inviati tramite il modulo di contatto</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">2.2 Dati raccolti automaticamente</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Indirizzo IP</li>
                <li>Tipo di browser e dispositivo</li>
                <li>Pagine visitate e durata della visita</li>
                <li>Cookie tecnici e di analisi (vedi Cookie Policy)</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">2.3 Dati degli utenti registrati</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Credenziali di accesso (email e password criptata)</li>
                <li>Storico dei ticket di assistenza</li>
                <li>Dati di fatturazione (se applicabile)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Purpose of Processing */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">3. Finalità del Trattamento</h2>
          <p className="text-gray-300 leading-relaxed">
            I dati personali vengono trattati per le seguenti finalità:
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">a)</span>
              <span><strong className="text-white">Erogazione dei servizi:</strong> Gestione delle richieste di assistenza, supporto tecnico e servizi sistemistici.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">b)</span>
              <span><strong className="text-white">Comunicazioni:</strong> Risposta alle richieste di contatto e invio di comunicazioni relative ai servizi.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">c)</span>
              <span><strong className="text-white">Miglioramento del sito:</strong> Analisi delle visite per ottimizzare l'esperienza utente.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">d)</span>
              <span><strong className="text-white">Obblighi legali:</strong> Adempimento di obblighi contrattuali, fiscali e normativi.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">e)</span>
              <span><strong className="text-white">Marketing (con consenso):</strong> Invio di newsletter e comunicazioni promozionali sui nostri servizi.</span>
            </li>
          </ul>
        </section>

        {/* Legal Basis */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">4. Base Giuridica del Trattamento</h2>
          <p className="text-gray-300 leading-relaxed">
            Il trattamento dei dati personali si basa su:
          </p>
          <ul className="space-y-2 text-gray-300 list-disc list-inside">
            <li><strong className="text-white">Consenso dell'interessato</strong> (art. 6, par. 1, lett. a GDPR)</li>
            <li><strong className="text-white">Esecuzione di un contratto</strong> o misure precontrattuali (art. 6, par. 1, lett. b GDPR)</li>
            <li><strong className="text-white">Adempimento di obblighi legali</strong> (art. 6, par. 1, lett. c GDPR)</li>
            <li><strong className="text-white">Legittimo interesse</strong> del Titolare (art. 6, par. 1, lett. f GDPR)</li>
          </ul>
        </section>

        {/* Data Retention */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">5. Conservazione dei Dati</h2>
          <p className="text-gray-300 leading-relaxed">
            I dati personali vengono conservati per il tempo strettamente necessario al conseguimento delle finalità per cui sono stati raccolti:
          </p>
          <ul className="space-y-2 text-gray-300 list-disc list-inside">
            <li><strong className="text-white">Dati di contatto:</strong> fino alla risoluzione della richiesta o per 24 mesi dall'ultimo contatto</li>
            <li><strong className="text-white">Dati contrattuali:</strong> per tutta la durata del contratto e per 10 anni successivi (obblighi fiscali)</li>
            <li><strong className="text-white">Dati di navigazione:</strong> massimo 12 mesi</li>
            <li><strong className="text-white">Consenso marketing:</strong> fino a revoca del consenso</li>
          </ul>
        </section>

        {/* Data Sharing */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">6. Comunicazione e Diffusione dei Dati</h2>
          <p className="text-gray-300 leading-relaxed">
            I dati personali possono essere comunicati a:
          </p>
          <ul className="space-y-2 text-gray-300 list-disc list-inside">
            <li><strong className="text-white">Fornitori di servizi tecnici:</strong> Supabase (database e autenticazione), hosting provider</li>
            <li><strong className="text-white">Consulenti e professionisti:</strong> commercialisti, avvocati (solo se necessario)</li>
            <li><strong className="text-white">Autorità competenti:</strong> in caso di obblighi di legge</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            I dati <strong className="text-white">non vengono diffusi</strong> a terzi non autorizzati né ceduti a fini commerciali.
          </p>
        </section>

        {/* User Rights */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">7. Diritti dell'Interessato</h2>
          <p className="text-gray-300 leading-relaxed">
            In qualità di interessato, hai il diritto di:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Accesso', desc: 'Ottenere conferma dell\'esistenza dei tuoi dati e riceverne copia' },
              { title: 'Rettifica', desc: 'Correggere dati inesatti o incompleti' },
              { title: 'Cancellazione', desc: 'Richiedere la cancellazione dei dati (diritto all\'oblio)' },
              { title: 'Limitazione', desc: 'Limitare il trattamento in determinate circostanze' },
              { title: 'Portabilità', desc: 'Ricevere i dati in formato strutturato e trasferirli' },
              { title: 'Opposizione', desc: 'Opporti al trattamento per motivi legittimi' },
              { title: 'Revoca consenso', desc: 'Revocare il consenso in qualsiasi momento' },
              { title: 'Reclamo', desc: 'Presentare reclamo al Garante per la Protezione dei Dati Personali' },
            ].map((right, index) => (
              <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">{right.title}</h3>
                <p className="text-sm text-gray-400">{right.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 leading-relaxed mt-6">
            Per esercitare i tuoi diritti, contattaci all'indirizzo email{' '}
            <a href="mailto:privacy@corenexus.it" className="text-blue-400 hover:text-blue-300 underline">
              privacy@corenexus.it
            </a>
          </p>
        </section>

        {/* Security */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">8. Sicurezza dei Dati</h2>
          <p className="text-gray-300 leading-relaxed">
            Il Titolare adotta misure tecniche e organizzative adeguate per garantire la sicurezza dei dati personali, tra cui:
          </p>
          <ul className="space-y-2 text-gray-300 list-disc list-inside">
            <li>Crittografia dei dati sensibili (password, comunicazioni)</li>
            <li>Accesso ai dati limitato al personale autorizzato</li>
            <li>Backup regolari e sistemi di disaster recovery</li>
            <li>Monitoraggio continuo per prevenire accessi non autorizzati</li>
            <li>Utilizzo di protocolli HTTPS per la trasmissione sicura dei dati</li>
          </ul>
        </section>

        {/* Updates */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">9. Modifiche alla Privacy Policy</h2>
          <p className="text-gray-300 leading-relaxed">
            Il Titolare si riserva il diritto di modificare la presente Privacy Policy in qualsiasi momento. 
            Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. 
            Ti invitiamo a consultare regolarmente questa pagina per essere informato sulle eventuali modifiche.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-white">10. Contatti</h2>
          <p className="text-gray-300 leading-relaxed">
            Per qualsiasi domanda o richiesta relativa alla presente Privacy Policy o al trattamento dei tuoi dati personali, 
            puoi contattarci ai seguenti recapiti:
          </p>
          <div className="p-6 rounded-2xl glass-effect border border-white/10 space-y-3">
            <p className="text-gray-300 flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <strong className="text-white">Email:</strong>{' '}
              <a href="mailto:privacy@corenexus.it" className="text-blue-400 hover:text-blue-300">
                privacy@corenexus.it
              </a>
            </p>
            <p className="text-gray-300 flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <strong className="text-white">Telefono:</strong> [Inserire numero di telefono]
            </p>
            <p className="text-gray-300 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
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
            © 2026 <a href="https://corenexus.it" className="text-blue-400 hover:text-blue-300">CoreNexus.it</a> - Tutti i diritti riservati
          </p>
        </div>
      </footer>
    </div>
  );
}