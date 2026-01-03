import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Numero WhatsApp (formato internazionale senza + e spazi)
  const whatsappNumber = '393913773304';
  
  // Messaggio predefinito
  const defaultMessage = 'Ciao! Ho bisogno di assistenza tecnica.';
  
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white rounded-lg shadow-2xl p-4 w-80 animate-in slide-in-from-bottom-5 duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Supporto WhatsApp</h3>
                  <p className="text-xs text-green-600">● Online</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">
              Hai bisogno di assistenza immediata? Contattaci su WhatsApp!
            </p>
            
            <Button
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Apri Chat WhatsApp
            </Button>
            
            <p className="text-xs text-gray-500 mt-2 text-center">
              Rispondiamo in pochi minuti
            </p>
          </div>
        )}
        
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          size="icon"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <MessageCircle className="h-6 w-6 text-white" />
          )}
        </Button>
      </div>
    </>
  );
}