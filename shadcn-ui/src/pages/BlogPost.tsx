import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, Share2 } from 'lucide-react';

interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  sections: { heading: string; content: string }[];
}

const blogPostsData: Record<string, BlogPostData> = {
  'backup-aziendali-strategie-2025': {
    id: 'backup-aziendali-strategie-2025',
    title: 'Backup Aziendali: Le Migliori Strategie per Proteggere i Tuoi Dati nel 2025',
    excerpt: 'Scopri le strategie più efficaci per proteggere i dati aziendali con soluzioni di backup moderne.',
    category: 'Sicurezza',
    date: '10 Marzo 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    tags: ['Backup', 'Cloud', 'Sicurezza Dati', 'Disaster Recovery'],
    sections: [
      {
        heading: 'Perché il backup è fondamentale',
        content: 'Ogni giorno le aziende generano enormi quantità di dati critici. Un guasto hardware, un attacco ransomware o un semplice errore umano possono causare la perdita irreversibile di informazioni vitali. Il backup non è un\'opzione, è una necessità strategica per la continuità operativa.'
      },
      {
        heading: 'La regola 3-2-1',
        content: 'La regola d\'oro del backup prevede: 3 copie dei dati, su 2 supporti diversi, con 1 copia off-site. Questa strategia garantisce che, anche in caso di disastro fisico (incendio, allagamento), i dati rimangano accessibili da una posizione remota. È il punto di partenza per qualsiasi piano di protezione dati serio.'
      },
      {
        heading: 'Backup in cloud ibrido',
        content: 'La soluzione più moderna combina backup locale (NAS, server dedicato) con backup in cloud. Il backup locale garantisce velocità di ripristino, mentre il cloud offre protezione geografica. Soluzioni come Veeam, Acronis e Synology Active Backup permettono di automatizzare l\'intero processo con crittografia end-to-end.'
      },
      {
        heading: 'Test di ripristino: il passaggio dimenticato',
        content: 'Un backup non testato è un backup inutile. Consigliamo di eseguire test di ripristino almeno ogni trimestre per verificare l\'integrità dei dati e la velocità di recovery. Il tempo di ripristino (RTO) e il punto di ripristino (RPO) devono essere definiti in base alle esigenze aziendali.'
      },
      {
        heading: 'Come possiamo aiutarti',
        content: 'CoreNexus Technology Solution progetta e implementa soluzioni di backup personalizzate per PMI e aziende a Roma. Dalla consulenza iniziale alla configurazione, dal monitoraggio continuo ai test periodici, garantiamo che i tuoi dati siano sempre protetti e recuperabili.'
      }
    ]
  },
  'cybersecurity-pmi-guida': {
    id: 'cybersecurity-pmi-guida',
    title: 'Cybersecurity per PMI: Guida Pratica alla Protezione della Tua Azienda',
    excerpt: 'Le PMI sono il bersaglio preferito dei cybercriminali. Ecco le misure essenziali per proteggere la tua azienda.',
    category: 'Cybersecurity',
    date: '5 Marzo 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    tags: ['Cybersecurity', 'PMI', 'Firewall', 'Phishing'],
    sections: [
      {
        heading: 'Le PMI nel mirino degli hacker',
        content: 'Il 43% degli attacchi informatici colpisce le piccole e medie imprese. Spesso le PMI non dispongono di risorse dedicate alla sicurezza IT, rendendole bersagli facili. Un singolo attacco ransomware può costare decine di migliaia di euro tra riscatto, fermo operativo e danni reputazionali.'
      },
      {
        heading: 'Le 5 misure essenziali',
        content: '1. Firewall di nuova generazione (NGFW) per filtrare il traffico di rete. 2. Antivirus endpoint con protezione comportamentale. 3. Autenticazione a due fattori (2FA) su tutti gli account critici. 4. Aggiornamenti regolari di sistemi operativi e software. 5. Formazione del personale sul riconoscimento delle email di phishing.'
      },
      {
        heading: 'Il phishing: la minaccia numero uno',
        content: 'Il 91% degli attacchi inizia con un\'email di phishing. Formare i dipendenti a riconoscere email sospette è la difesa più efficace e meno costosa. Simulazioni periodiche di phishing aiutano a mantenere alta l\'attenzione e a misurare il livello di consapevolezza aziendale.'
      },
      {
        heading: 'Monitoraggio e risposta agli incidenti',
        content: 'Un sistema di monitoraggio 24/7 permette di rilevare attività sospette in tempo reale. Avere un piano di risposta agli incidenti (Incident Response Plan) documentato e testato riduce drasticamente i tempi di reazione e i danni in caso di violazione.'
      },
      {
        heading: 'La nostra soluzione',
        content: 'CoreNexus offre pacchetti di cybersecurity su misura per PMI: audit di sicurezza, implementazione firewall, configurazione endpoint protection, formazione del personale e monitoraggio continuo. Proteggiamo la tua azienda 24/7.'
      }
    ]
  },
  'rete-aziendale-performante': {
    id: 'rete-aziendale-performante',
    title: 'Come Progettare una Rete Aziendale Performante e Sicura',
    excerpt: 'Una rete ben progettata è la base di ogni infrastruttura IT.',
    category: 'Networking',
    date: '28 Febbraio 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    tags: ['Networking', 'Switch', 'VLAN', 'Wi-Fi'],
    sections: [
      {
        heading: 'L\'importanza di una rete ben progettata',
        content: 'La rete è il sistema nervoso dell\'azienda. Una rete lenta, instabile o mal configurata impatta direttamente sulla produttività. Investire nella progettazione corretta della rete significa ridurre i tempi di inattività e migliorare le prestazioni di tutti i servizi aziendali.'
      },
      {
        heading: 'Segmentazione con VLAN',
        content: 'Le VLAN (Virtual LAN) permettono di separare logicamente il traffico di rete: dati aziendali, telefonia VoIP, videosorveglianza e ospiti su reti diverse. Questo migliora sia le prestazioni che la sicurezza, limitando la propagazione di eventuali minacce.'
      },
      {
        heading: 'Switch managed e PoE',
        content: 'Gli switch managed offrono controllo granulare sul traffico di rete, QoS per prioritizzare applicazioni critiche e monitoraggio avanzato. La tecnologia PoE (Power over Ethernet) semplifica l\'installazione di access point Wi-Fi, telecamere IP e telefoni VoIP alimentandoli direttamente dal cavo di rete.'
      },
      {
        heading: 'Wi-Fi enterprise',
        content: 'Un sistema Wi-Fi enterprise con access point gestiti centralmente garantisce copertura uniforme, roaming seamless e sicurezza WPA3. Soluzioni come UniFi di Ubiquiti offrono un eccellente rapporto qualità-prezzo per le PMI.'
      },
      {
        heading: 'Affidati a noi',
        content: 'CoreNexus progetta e implementa reti aziendali complete: cablaggio strutturato, switch managed, Wi-Fi enterprise e firewall. Ogni progetto include documentazione tecnica dettagliata e supporto post-installazione.'
      }
    ]
  },
  'virtualizzazione-server-vantaggi': {
    id: 'virtualizzazione-server-vantaggi',
    title: 'Virtualizzazione dei Server: Vantaggi e Best Practice per le Aziende',
    excerpt: 'La virtualizzazione riduce i costi hardware e migliora la flessibilità IT.',
    category: 'Infrastruttura',
    date: '20 Febbraio 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    tags: ['Virtualizzazione', 'Server', 'VMware', 'Proxmox'],
    sections: [
      {
        heading: 'Cos\'è la virtualizzazione',
        content: 'La virtualizzazione permette di eseguire più sistemi operativi e applicazioni su un singolo server fisico, creando macchine virtuali (VM) indipendenti. Questo ottimizza l\'utilizzo delle risorse hardware, che tipicamente nelle aziende è sfruttato solo al 15-20%.'
      },
      {
        heading: 'Vantaggi principali',
        content: 'Riduzione dei costi hardware fino al 50%, consolidamento dei server, backup e snapshot istantanei, migrazione live delle VM senza downtime, disaster recovery semplificato e riduzione dei consumi energetici. La virtualizzazione è il primo passo verso un\'infrastruttura IT moderna.'
      },
      {
        heading: 'Proxmox vs VMware',
        content: 'Proxmox VE è una piattaforma open-source che offre virtualizzazione KVM e container LXC con un\'interfaccia web intuitiva. VMware vSphere è lo standard enterprise con funzionalità avanzate. Per le PMI, Proxmox rappresenta spesso la scelta migliore per il rapporto costo-funzionalità.'
      },
      {
        heading: 'La nostra esperienza',
        content: 'CoreNexus implementa soluzioni di virtualizzazione su misura: dalla scelta dell\'hardware alla configurazione dell\'hypervisor, dalla migrazione dei servizi esistenti al monitoraggio continuo delle performance.'
      }
    ]
  },
  'voip-freepbx-centralino': {
    id: 'voip-freepbx-centralino',
    title: 'Centralino VoIP con FreePBX: Perché Conviene alle Aziende',
    excerpt: 'Riduci i costi telefonici fino al 60% con un centralino VoIP FreePBX.',
    category: 'Comunicazioni',
    date: '15 Febbraio 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&q=80',
    tags: ['VoIP', 'FreePBX', 'Centralino', 'Telefonia'],
    sections: [
      {
        heading: 'Addio alle linee tradizionali',
        content: 'La telefonia tradizionale (ISDN, analogica) è ormai obsoleta e costosa. Il VoIP (Voice over IP) utilizza la connessione internet per le chiamate, riducendo drasticamente i costi e offrendo funzionalità avanzate impossibili con i sistemi tradizionali.'
      },
      {
        heading: 'FreePBX: il centralino open-source',
        content: 'FreePBX è la piattaforma open-source più diffusa al mondo per la gestione dei centralini VoIP. Offre IVR (risponditore automatico), code di chiamata, registrazione chiamate, conferenze, fax-to-email e integrazione con CRM. Il tutto senza costi di licenza.'
      },
      {
        heading: 'Risparmio concreto',
        content: 'Un\'azienda con 20 interni può risparmiare fino al 60% sui costi telefonici passando al VoIP. Le chiamate tra sedi sono gratuite, le tariffe nazionali e internazionali sono significativamente inferiori e la manutenzione è ridotta al minimo.'
      },
      {
        heading: 'Implementazione CoreNexus',
        content: 'Progettiamo e installiamo centralini VoIP FreePBX chiavi in mano: analisi delle esigenze, configurazione del server, setup dei trunk SIP, programmazione IVR e formazione del personale. Supporto tecnico incluso.'
      }
    ]
  },
  'videosorveglianza-hikvision-guida': {
    id: 'videosorveglianza-hikvision-guida',
    title: 'Videosorveglianza Hikvision: Guida Completa per Aziende e Negozi',
    excerpt: 'Hikvision è leader mondiale nella videosorveglianza. Scopri come scegliere il sistema giusto.',
    category: 'Sicurezza Fisica',
    date: '8 Febbraio 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
    tags: ['Videosorveglianza', 'Hikvision', 'CCTV', 'NVR'],
    sections: [
      {
        heading: 'Perché Hikvision',
        content: 'Hikvision è il leader mondiale nella videosorveglianza con oltre il 25% di quota di mercato globale. I suoi prodotti offrono qualità d\'immagine eccellente, intelligenza artificiale integrata (rilevamento persone, veicoli, intrusione) e un rapporto qualità-prezzo imbattibile.'
      },
      {
        heading: 'Telecamere IP vs analogiche',
        content: 'Le telecamere IP offrono risoluzioni fino a 4K, alimentazione PoE, analisi video intelligente e accesso remoto da smartphone. Le telecamere analogiche HD-TVI sono ancora valide per installazioni semplici dove si vuole riutilizzare il cablaggio coassiale esistente.'
      },
      {
        heading: 'NVR e storage',
        content: 'Il Network Video Recorder (NVR) è il cuore del sistema. Hikvision offre NVR da 4 a 64 canali con supporto per hard disk fino a 10TB. La scelta dipende dal numero di telecamere, dalla risoluzione e dai giorni di registrazione richiesti.'
      },
      {
        heading: 'Installazione professionale',
        content: 'CoreNexus è installatore certificato Hikvision. Progettiamo sistemi di videosorveglianza su misura: sopralluogo, progettazione, installazione, configurazione dell\'accesso remoto e manutenzione periodica. Conformità GDPR garantita.'
      }
    ]
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="pt-32 pb-24 px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Articolo non trovato</h1>
          <p className="text-gray-400 mb-8">L'articolo che cerchi non esiste o è stato rimosso.</p>
          <Link to="/blog">
            <Button className="premium-button text-white px-8 py-6 rounded-2xl font-semibold">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Torna al Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const postIds = Object.keys(blogPostsData);
  const currentIndex = postIds.indexOf(post.id);
  const prevPost = currentIndex > 0 ? blogPostsData[postIds[currentIndex - 1]] : null;
  const nextPost = currentIndex < postIds.length - 1 ? blogPostsData[postIds[currentIndex + 1]] : null;

  const categoryGradient: Record<string, string> = {
    'Sicurezza': 'from-emerald-500 to-teal-500',
    'Cybersecurity': 'from-red-500 to-rose-500',
    'Networking': 'from-blue-500 to-cyan-500',
    'Infrastruttura': 'from-purple-500 to-violet-500',
    'Comunicazioni': 'from-amber-500 to-orange-500',
    'Sicurezza Fisica': 'from-indigo-500 to-blue-500',
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <>
      <SEO
        title={`${post.title} | Blog CoreNexus`}
        description={post.excerpt}
        keywords={post.tags}
        canonical={`/blog/${post.id}`}
      />

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Image */}
        <section className="relative pt-24">
          <div className="h-[40vh] md:h-[50vh] relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          </div>
        </section>

        {/* Article Content */}
        <section className="px-6 -mt-32 relative z-10 pb-24">
          <article className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna al Blog
            </Link>

            {/* Category badge */}
            <span
              className={`inline-block px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r ${
                categoryGradient[post.category] || 'from-blue-500 to-purple-500'
              } mb-4`}
            >
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-white/10">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} di lettura
              </span>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors ml-auto"
              >
                <Share2 className="w-4 h-4" />
                Condividi
              </button>
            </div>

            {/* Excerpt */}
            <p className="text-xl text-gray-300 leading-relaxed mb-12 font-light">
              {post.excerpt}
            </p>

            {/* Sections */}
            <div className="space-y-10">
              {post.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold text-white mb-4">{section.heading}</h2>
                  <p className="text-gray-400 leading-relaxed text-lg">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-gray-400 bg-white/5 border border-white/10"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 grid md:grid-cols-2 gap-4">
              {prevPost && (
                <Link
                  to={`/blog/${prevPost.id}`}
                  className="p-6 rounded-2xl glass-effect hover:bg-white/10 transition-all duration-300 group"
                >
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Articolo precedente</span>
                  <p className="text-white font-semibold mt-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {prevPost.title}
                  </p>
                </Link>
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.id}`}
                  className="p-6 rounded-2xl glass-effect hover:bg-white/10 transition-all duration-300 group text-right md:col-start-2"
                >
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Articolo successivo</span>
                  <p className="text-white font-semibold mt-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {nextPost.title}
                  </p>
                </Link>
              )}
            </div>

            {/* CTA */}
            <div className="mt-16 p-10 rounded-3xl glass-effect border border-blue-500/20 text-center space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Hai bisogno di assistenza su questo argomento?
              </h3>
              <p className="text-gray-400">
                Il nostro team è pronto ad aiutarti con soluzioni personalizzate.
              </p>
              <Button
                size="lg"
                onClick={() => { window.location.href = '/#contact'; }}
                className="group premium-button text-white px-10 py-6 text-lg rounded-2xl font-semibold"
              >
                Contattaci ora
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>
          </article>
        </section>

        <WhatsAppWidget />

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <p className="text-gray-400 text-sm">
                © 2025{' '}
                <a href="https://corenexus.it" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">
                  CoreNexus Technology Solution
                </a>{' '}
                - Tutti i diritti riservati.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}