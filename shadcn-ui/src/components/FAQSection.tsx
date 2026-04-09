import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import MorphingSection from '@/components/MorphingSection';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  accentColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function FAQSection({
  faqs,
  accentColor = 'emerald',
  gradientFrom = 'emerald-500',
  gradientTo = 'teal-500',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      <div className="max-w-4xl mx-auto relative z-10">
        <MorphingSection>
          <div className="text-center space-y-6 mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-${accentColor}-400 text-sm font-semibold`}>
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Domande Frequenti
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} mx-auto rounded-full`} />
          </div>
        </MorphingSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <MorphingSection key={index} delay={index * 0.1}>
              <div
                className={`rounded-2xl glass-effect border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? `border-${accentColor}-500/30 shadow-lg shadow-${accentColor}-500/10`
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-semibold text-white pr-4 group-hover:text-emerald-400 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
                    <p className="text-gray-400 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </MorphingSection>
          ))}
        </div>
      </div>
    </section>
  );
}