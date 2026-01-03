import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Cookie, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(necessaryOnly));
    setIsVisible(false);
  };

  const savePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(savedPreferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-4xl">
        <Card className="glass-effect border-white/20 bg-gray-900/95 backdrop-blur-xl shadow-2xl">
          <CardContent className="p-6 md:p-8">
            {!showSettings ? (
              // Main Cookie Banner
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Utilizziamo i Cookie
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      Utilizziamo cookie tecnici necessari per il funzionamento del sito e, previo tuo consenso, 
                      cookie analitici per migliorare la tua esperienza. Puoi accettare tutti i cookie, 
                      solo quelli necessari o personalizzare le tue preferenze.
                    </p>
                    <p className="text-xs text-gray-400">
                      Per maggiori informazioni, consulta la nostra{' '}
                      <Link to="/cookie-policy" className="text-blue-400 hover:text-blue-300 underline">
                        Cookie Policy
                      </Link>
                      {' '}e la{' '}
                      <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                  <button
                    onClick={acceptNecessary}
                    className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                    aria-label="Chiudi"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={acceptAll}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-6 rounded-xl transition-all duration-300"
                  >
                    Accetta Tutti
                  </Button>
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 font-semibold py-6 rounded-xl transition-all duration-300"
                  >
                    Solo Necessari
                  </button>
                  <Button
                    onClick={() => setShowSettings(true)}
                    variant="ghost"
                    className="flex-1 text-gray-300 hover:text-white hover:bg-white/5 font-semibold py-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Personalizza
                  </Button>
                </div>
              </div>
            ) : (
              // Cookie Settings
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Preferenze Cookie
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Torna indietro"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Necessary Cookies */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Cookie Necessari
                        </h4>
                        <p className="text-sm text-gray-400">
                          Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disabilitati.
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end px-1">
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Cookie Analitici
                        </h4>
                        <p className="text-sm text-gray-400">
                          Ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo informazioni in forma anonima.
                        </p>
                      </div>
                      <button
                        onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                        className="flex-shrink-0"
                      >
                        <div className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                          preferences.analytics ? 'bg-blue-600 justify-end' : 'bg-gray-600 justify-start'
                        } px-1`}>
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Cookie di Marketing
                        </h4>
                        <p className="text-sm text-gray-400">
                          Utilizzati per tracciare i visitatori sui siti web e mostrare annunci pertinenti e coinvolgenti.
                        </p>
                      </div>
                      <button
                        onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                        className="flex-shrink-0"
                      >
                        <div className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                          preferences.marketing ? 'bg-blue-600 justify-end' : 'bg-gray-600 justify-start'
                        } px-1`}>
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    onClick={savePreferences}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-6 rounded-xl transition-all duration-300"
                  >
                    Salva Preferenze
                  </Button>
                  <Button
                    onClick={() => setShowSettings(false)}
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10 font-semibold py-6 rounded-xl transition-all duration-300"
                  >
                    Annulla
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}