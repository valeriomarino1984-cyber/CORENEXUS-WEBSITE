import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Tag, Search, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 'impianti-allarme-villa-infernetto',
    title: 'Impianti di Allarme a Villa Infernetto e Dintorni: Guida alla Sicurezza della Tua Casa',
    excerpt: 'Villa Infernetto, Axa, Casal Palocco, Infernetto: zone residenziali esclusive che meritano la massima protezione. Scopri come scegliere l\'impianto di allarme perfetto per la tua villa.',
    content: '',
    category: 'Sicurezza Fisica',
    date: '20 Aprile 2026',
    readTime: '8 min',
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/720946/2026-04-20/m6vlvxaaafhq/blog-allarme-villa-infernetto.png',
    tags: ['Allarme', 'Antifurto', 'Villa Infernetto', 'Sicurezza Casa', 'Roma Sud']
  },
  {
    id: 'intelligenza-artificiale-azienda',
    title: 'Intelligenza Artificiale in Azienda: Come l\'AI Sta Trasformando il Business',
    excerpt: 'L\'intelligenza artificiale non è più fantascienza: è uno strumento concreto che sta rivoluzionando produttività, decisioni e competitività delle aziende. Scopri come integrarla nella tua impresa.',
    content: '',
    category: 'Intelligenza Artificiale',
    date: '5 Aprile 2026',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tags: ['AI', 'Machine Learning', 'Automazione', 'Business', 'Innovazione']
  },
  {
    id: 'chatbot-assistenti-virtuali-ai',
    title: 'Chatbot e Assistenti Virtuali: Come l\'AI Migliora il Servizio Clienti',
    excerpt: 'I chatbot basati su intelligenza artificiale stanno rivoluzionando il customer service. Scopri come implementarli per offrire assistenza 24/7 e ridurre i costi operativi.',
    content: '',
    category: 'Intelligenza Artificiale',
    date: '1 Aprile 2026',
    readTime: '8 min',
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/720946/2026-04-20/m6vge7iaafiq/blog-chatbot-ai.png',
    tags: ['Chatbot', 'AI', 'Customer Service', 'NLP', 'Automazione']
  },
  {
    id: 'migrazione-cloud-aziendale',
    title: 'Migrazione al Cloud: Guida Completa per le Aziende che Vogliono Innovare',
    excerpt: 'Migrare al cloud non è solo spostare dati: è trasformare il modo in cui la tua azienda lavora. Scopri strategie, vantaggi e rischi da evitare.',
    content: '',
    category: 'Cloud',
    date: '22 Marzo 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    tags: ['Cloud', 'Migrazione', 'AWS', 'Azure', 'Infrastruttura']
  },
  {
    id: 'gdpr-protezione-dati-aziende',
    title: 'GDPR e Protezione Dati: Cosa Devono Sapere le Aziende nel 2026',
    excerpt: 'Il GDPR non è solo burocrazia: è un\'opportunità per costruire fiducia con i clienti. Ecco come adeguarsi e proteggere i dati aziendali.',
    content: '',
    category: 'Compliance',
    date: '18 Marzo 2026',
    readTime: '7 min',
    image: 'https://mgx-backend-cdn.metadl.com/generate/images/720946/2026-04-20/m6vg2vyaafha/blog-gdpr-privacy.png',
    tags: ['GDPR', 'Privacy', 'Protezione Dati', 'Compliance']
  },
  {
    id: 'manutenzione-preventiva-it',
    title: 'Manutenzione Preventiva IT: Come Evitare Guasti e Ridurre i Costi',
    excerpt: 'Prevenire è meglio che curare, anche nell\'IT. Scopri come un piano di manutenzione preventiva può salvare la tua azienda da costosi fermi.',
    content: '',
    category: 'Manutenzione',
    date: '14 Marzo 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    tags: ['Manutenzione', 'Preventiva', 'Server', 'Monitoraggio']
  },
  {
    id: 'smart-working-vpn-aziendale',
    title: 'Smart Working e VPN Aziendale: Lavorare da Remoto in Sicurezza',
    excerpt: 'Lo smart working è qui per restare. Scopri come configurare una VPN aziendale sicura per proteggere i dati anche fuori dall\'ufficio.',
    content: '',
    category: 'Networking',
    date: '12 Marzo 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1585974738771-84483dd9f89f?w=800&q=80',
    tags: ['Smart Working', 'VPN', 'Sicurezza', 'Lavoro Remoto']
  },
  {
    id: 'disaster-recovery-piano-aziendale',
    title: 'Disaster Recovery: Come Creare un Piano che Funziona Davvero',
    excerpt: 'Un piano di disaster recovery ben progettato è la differenza tra un\'interruzione temporanea e una catastrofe aziendale. Ecco come crearlo.',
    content: '',
    category: 'Sicurezza',
    date: '11 Marzo 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    tags: ['Disaster Recovery', 'Business Continuity', 'Backup', 'RTO']
  },
  {
    id: 'backup-aziendali-strategie-2025',
    title: 'Backup Aziendali: Le Migliori Strategie per Proteggere i Tuoi Dati nel 2025',
    excerpt: 'Scopri le strategie più efficaci per proteggere i dati aziendali con soluzioni di backup moderne, dalla regola 3-2-1 al backup in cloud ibrido.',
    content: '',
    category: 'Sicurezza',
    date: '10 Marzo 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    tags: ['Backup', 'Cloud', 'Sicurezza Dati', 'Disaster Recovery']
  },
  {
    id: 'cybersecurity-pmi-guida',
    title: 'Cybersecurity per PMI: Guida Pratica alla Protezione della Tua Azienda',
    excerpt: 'Le PMI sono il bersaglio preferito dei cybercriminali. Ecco le misure essenziali per proteggere la tua azienda dagli attacchi informatici.',
    content: '',
    category: 'Cybersecurity',
    date: '5 Marzo 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    tags: ['Cybersecurity', 'PMI', 'Firewall', 'Phishing']
  },
  {
    id: 'rete-aziendale-performante',
    title: 'Come Progettare una Rete Aziendale Performante e Sicura',
    excerpt: 'Una rete ben progettata è la base di ogni infrastruttura IT. Scopri i principi fondamentali per creare una rete aziendale affidabile.',
    content: '',
    category: 'Networking',
    date: '28 Febbraio 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    tags: ['Networking', 'Switch', 'VLAN', 'Wi-Fi']
  },
  {
    id: 'proxmox-alternativa-vmware',
    title: 'Proxmox: l\'alternativa a VMware che le PMI italiane stanno scegliendo',
    excerpt: 'Dopo l\'acquisizione di VMware da parte di Broadcom, i costi delle licenze sono aumentati fino al 500%. Scopri perché migliaia di aziende stanno passando a Proxmox e quanto puoi risparmiare.',
    content: '',
    category: 'Infrastruttura',
    date: '25 Maggio 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    tags: ['Proxmox', 'VMware', 'Virtualizzazione', 'Risparmio', 'Open Source']
  },
  {
    id: 'virtualizzazione-server-vantaggi',
    title: 'Virtualizzazione dei Server: Vantaggi e Best Practice per le Aziende',
    excerpt: 'La virtualizzazione riduce i costi hardware e migliora la flessibilità IT. Scopri come implementarla nella tua azienda.',
    content: '',
    category: 'Infrastruttura',
    date: '20 Febbraio 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    tags: ['Virtualizzazione', 'Server', 'VMware', 'Proxmox']
  },
  {
    id: 'voip-freepbx-centralino',
    title: 'Centralino VoIP con FreePBX: Perché Conviene alle Aziende',
    excerpt: 'Riduci i costi telefonici fino al 60% con un centralino VoIP FreePBX. Scopri funzionalità, vantaggi e come implementarlo.',
    content: '',
    category: 'Comunicazioni',
    date: '15 Febbraio 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&q=80',
    tags: ['VoIP', 'FreePBX', 'Centralino', 'Telefonia']
  },
  {
    id: 'videosorveglianza-hikvision-guida',
    title: 'Videosorveglianza Hikvision: Guida Completa per Aziende e Negozi',
    excerpt: 'Hikvision è leader mondiale nella videosorveglianza. Scopri come scegliere il sistema giusto per la tua attività.',
    content: '',
    category: 'Sicurezza Fisica',
    date: '8 Febbraio 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
    tags: ['Videosorveglianza', 'Hikvision', 'CCTV', 'NVR']
  },
];

const categories = ['Tutti', 'Intelligenza Artificiale', 'Cloud', 'Compliance', 'Manutenzione', 'Sicurezza', 'Cybersecurity', 'Networking', 'Infrastruttura', 'Comunicazioni', 'Sicurezza Fisica'];

const categoryGradients: Record<string, string> = {
  'Intelligenza Artificiale': 'from-violet-500 to-fuchsia-500',
  'Cloud': 'from-sky-500 to-blue-500',
  'Compliance': 'from-yellow-500 to-amber-500',
  'Manutenzione': 'from-lime-500 to-green-500',
  'Sicurezza': 'from-emerald-500 to-teal-500',
  'Cybersecurity': 'from-red-500 to-rose-500',
  'Networking': 'from-blue-500 to-cyan-500',
  'Infrastruttura': 'from-purple-500 to-violet-500',
  'Comunicazioni': 'from-amber-500 to-orange-500',
  'Sicurezza Fisica': 'from-indigo-500 to-blue-500',
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tutti');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'Tutti' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <>
      <SEO
        title="Blog IT Roma | Articoli Cybersecurity, Reti, Cloud, AI - CoreNexus Technology Solution"
        description="Articoli e guide su cybersecurity, networking, cloud, intelligenza artificiale, GDPR e soluzioni IT per aziende a Roma, EUR, Ostia Lido, Fiumicino e Pomezia. Blog CoreNexus Technology Solution."
        keywords={[
          'blog IT Roma',
          'articoli cybersecurity Roma',
          'guide networking aziendale',
          'migrazione cloud Roma',
          'intelligenza artificiale azienda Roma',
          'GDPR protezione dati Roma',
          'smart working Roma',
          'VPN aziendale Roma',
          'blog tecnologia Roma EUR',
          'novità IT Ostia Fiumicino',
          'guide informatiche Roma Sud',
          'articoli sicurezza informatica Roma',
        ]}
        canonical="/blog"
      />

      <div className="min-h-screen bg-black">
        <Header />

        <section className="relative overflow-hidden pt-32 pb-16 px-6">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-black to-black" />
          <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-[10%] w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10 text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">Blog</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Approfondimenti, guide e novità dal mondo IT per aiutare la tua azienda a restare sicura, efficiente e competitiva.
            </p>
            <div className="max-w-xl mx-auto pt-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Cerca articoli..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl glass-effect border border-white/10 text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-all duration-300 text-sm"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                      : 'glass-effect text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">Nessun articolo trovato per la tua ricerca.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('Tutti'); }}
                  className="mt-4 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  Mostra tutti gli articoli
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className="group rounded-3xl glass-effect overflow-hidden hover:bg-white/10 transition-all duration-500 card-hover flex flex-col"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <span className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-semibold text-white bg-gradient-to-r ${categoryGradients[post.category] || 'from-blue-500 to-purple-500'}`}>
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="flex items-center gap-1 px-2 py-1 rounded-md text-xs text-gray-500 bg-white/5">
                            <Tag className="w-3 h-3" />{tag}
                          </span>
                        ))}
                      </div>
                      <Link to={`/blog/${post.id}`} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors duration-300 group/link">
                        Leggi l'articolo
                        <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="p-12 rounded-3xl glass-effect border border-blue-500/20 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Hai bisogno di supporto IT?</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">Il nostro team è pronto ad aiutarti con soluzioni personalizzate per la tua azienda.</p>
              <Button size="lg" onClick={scrollToContact} className="group premium-button text-white px-10 py-7 text-lg rounded-2xl font-semibold">
                Contattaci ora
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
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
            <p className="text-xs text-gray-600">v2.1 - 25/05/2026</p>
          </div>
        </footer>
      </div>
    </>
  );
}
