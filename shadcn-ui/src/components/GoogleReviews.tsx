import { Star, ExternalLink, Quote } from 'lucide-react';
import MorphingSection from './MorphingSection';

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

const reviews: Review[] = [
  {
    author: 'Marco R.',
    rating: 5,
    text: 'Servizio eccellente! Hanno risolto un problema critico al nostro server aziendale in meno di 2 ore. Professionali e competenti, li consiglio vivamente a tutte le aziende della zona EUR.',
    date: '2 settimane fa',
    avatar: 'MR',
  },
  {
    author: 'Laura B.',
    rating: 5,
    text: 'Ci affidiamo a CoreNexus da oltre un anno per la gestione della nostra rete aziendale a Ostia. Sempre disponibili, anche per emergenze fuori orario. Ottimo rapporto qualità-prezzo.',
    date: '1 mese fa',
    avatar: 'LB',
  },
  {
    author: 'Giuseppe T.',
    rating: 5,
    text: 'Installazione sistema di videosorveglianza impeccabile. Hanno curato ogni dettaglio, dalla progettazione al collaudo. Il supporto post-installazione è stato altrettanto professionale.',
    date: '1 mese fa',
    avatar: 'GT',
  },
  {
    author: 'Francesca D.',
    rating: 5,
    text: 'Dopo aver provato diversi tecnici, finalmente abbiamo trovato CoreNexus. Assistenza remota velocissima e quando serve vengono in sede a Fiumicino in tempi record. Super consigliati!',
    date: '2 mesi fa',
    avatar: 'FD',
  },
  {
    author: 'Andrea M.',
    rating: 4,
    text: 'Ottima consulenza per la migrazione dei nostri sistemi in cloud. Il team è preparato e ha saputo guidarci passo passo in tutto il processo. Molto soddisfatti del risultato.',
    date: '3 mesi fa',
    avatar: 'AM',
  },
  {
    author: 'Stefania C.',
    rating: 5,
    text: 'Centralino VoIP installato nel nostro studio a Pomezia. Funziona perfettamente e ci ha fatto risparmiare molto rispetto alla soluzione precedente. Assistenza sempre puntuale.',
    date: '3 mesi fa',
    avatar: 'SC',
  },
];

const GOOGLE_BUSINESS_URL = 'https://www.google.com/maps/place/CoreNexus+Technology+Solution';
const AVERAGE_RATING = 4.9;
const TOTAL_REVIEWS = reviews.length;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? 'text-amber-400 fill-amber-400'
              : star - 0.5 <= rating
              ? 'text-amber-400 fill-amber-400/50'
              : 'text-gray-600'
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <MorphingSection delay={index * 0.1}>
      <div className="p-6 rounded-2xl glass-effect border border-white/5 hover:border-amber-500/20 transition-all duration-300 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-bold">{review.avatar}</span>
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-white font-semibold text-sm truncate">{review.author}</h4>
            <div className="flex items-center gap-2 mt-0.5">
              <StarRating rating={review.rating} />
              <span className="text-gray-500 text-xs">{review.date}</span>
            </div>
          </div>
          {/* Google icon */}
          <svg className="w-5 h-5 shrink-0 opacity-40" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
        </div>

        {/* Quote */}
        <div className="relative flex-1">
          <Quote className="w-4 h-4 text-amber-500/20 absolute -top-1 -left-1" />
          <p className="text-gray-300 text-sm leading-relaxed pl-4">{review.text}</p>
        </div>
      </div>
    </MorphingSection>
  );
}

export default function GoogleReviews() {
  return (
    <section className="py-16 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/5 to-black" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <MorphingSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-amber-500/20 mb-6">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-amber-400 text-sm font-medium">Recensioni Google</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cosa Dicono i Nostri Clienti
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              La soddisfazione dei nostri clienti è la nostra priorità. Ecco alcune delle recensioni lasciate sul nostro profilo Google Business.
            </p>

            {/* Aggregate Rating */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-white">{AVERAGE_RATING}</span>
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= Math.floor(AVERAGE_RATING)
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-amber-400 fill-amber-400/50'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-xs mt-0.5">
                    Basato su {TOTAL_REVIEWS} recensioni
                  </span>
                </div>
              </div>
            </div>
          </div>
        </MorphingSection>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>

        {/* CTA Buttons */}
        <MorphingSection>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
            >
              <Star className="w-5 h-5 fill-white" />
              Lascia una Recensione
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-300 font-medium hover:border-amber-500/30 hover:text-white transition-all duration-300"
            >
              Vedi Tutte le Recensioni su Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </MorphingSection>
      </div>
    </section>
  );
}