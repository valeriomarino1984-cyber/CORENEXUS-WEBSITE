// Reusable Schema.org markup templates for SEO

// Aree servite standard per tutti i servizi
export const standardAreaServed = [
  { "@type": "City", "name": "Roma" },
  { "@type": "Place", "name": "Roma EUR" },
  { "@type": "Place", "name": "Ostia Lido" },
  { "@type": "Place", "name": "Fiumicino" },
  { "@type": "Place", "name": "Pomezia" },
  { "@type": "Place", "name": "Acilia" },
  { "@type": "Place", "name": "Casal Palocco" },
  { "@type": "Place", "name": "Roma Sud" },
  { "@type": "State", "name": "Lazio" }
];

// Link social e profili aziendali standard
export const standardSameAs = [
  "https://www.facebook.com/share/18iUMnHFg7/?mibextid=wwXIfr",
  "https://www.linkedin.com/company/corenexus",
  "https://www.google.com/maps/place/CoreNexus+Technology+Solution"
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CoreNexus Technology Solution",
  "image": "/images/photo1766412531.jpg",
  "description": "Assistenza informatica e supporto sistemistico professionale per aziende a Roma, EUR, Ostia Lido, Fiumicino, Pomezia e provincia",
  "url": "https://corenexus.it",
  "telephone": "+393534012055",
  "email": "info@corenexus.it",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Roma Sud",
    "addressLocality": "Roma",
    "addressRegion": "Lazio",
    "postalCode": "00100",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.7519,
    "longitude": 12.2853
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+393534012055",
      "contactType": "customer service",
      "email": "info@corenexus.it",
      "availableLanguage": ["Italian", "English"],
      "areaServed": "IT",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    {
      "@type": "ContactPoint",
      "telephone": "+393534012055",
      "contactType": "technical support",
      "email": "supporto@corenexus.it",
      "availableLanguage": ["Italian"],
      "areaServed": "IT"
    }
  ],
  "areaServed": standardAreaServed,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": standardSameAs
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "CoreNexus Technology Solution - Assistenza Informatica Aziendale",
  "description": "Servizi IT professionali per aziende a Roma, EUR, Ostia Lido, Fiumicino e Pomezia: consulenza sistemistica, gestione reti, sicurezza informatica, videosorveglianza e server enterprise",
  "provider": {
    "@type": "Organization",
    "name": "CoreNexus Technology Solution"
  },
  "areaServed": standardAreaServed,
  "serviceType": [
    "Assistenza Informatica",
    "Supporto Sistemistico",
    "Gestione Reti Aziendali",
    "Sicurezza Informatica",
    "Videosorveglianza",
    "Server Enterprise",
    "Centralini VoIP"
  ]
};

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contatti - CoreNexus Technology Solution",
  "description": "Contatta CoreNexus Technology Solution per assistenza informatica, supporto IT e consulenza tecnologica a Roma, EUR, Ostia Lido, Fiumicino e Pomezia.",
  "url": "https://corenexus.it/contatti",
  "mainEntity": {
    "@type": "Organization",
    "name": "CoreNexus Technology Solution",
    "url": "https://corenexus.it",
    "telephone": "+393534012055",
    "email": "info@corenexus.it",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Roma Sud",
      "addressLocality": "Roma",
      "addressRegion": "Lazio",
      "postalCode": "00100",
      "addressCountry": "IT"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+393534012055",
        "contactType": "customer service",
        "email": "info@corenexus.it",
        "availableLanguage": ["Italian", "English"],
        "contactOption": "TollFree",
        "areaServed": "IT"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+393534012055",
        "contactType": "technical support",
        "email": "supporto@corenexus.it",
        "availableLanguage": ["Italian"],
        "areaServed": "IT"
      }
    ],
    "sameAs": standardSameAs
  }
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://corenexus.it${item.url}`
  }))
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const serviceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "CoreNexus Technology Solution",
    "url": "https://corenexus.it"
  },
  "areaServed": standardAreaServed,
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://corenexus.it",
    "servicePhone": "+393534012055"
  }
});

/**
 * Schema LocalBusiness specifico per pagina servizio.
 * Aggiunge hasOfferCatalog con il servizio specifico e le aree servite.
 */
export const localBusinessServiceSchema = (
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string,
  serviceType: string
) => ({
  "@type": "LocalBusiness",
  "name": "CoreNexus Technology Solution",
  "image": "/images/photo1766412531.jpg",
  "url": "https://corenexus.it",
  "telephone": "+393534012055",
  "email": "info@corenexus.it",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Roma Sud",
    "addressLocality": "Roma",
    "addressRegion": "Lazio",
    "postalCode": "00100",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.7519,
    "longitude": 12.2853
  },
  "areaServed": standardAreaServed,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": serviceName,
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": serviceName,
          "description": serviceDescription,
          "url": `https://corenexus.it${serviceUrl}`,
          "serviceType": serviceType,
          "areaServed": standardAreaServed,
          "provider": {
            "@type": "Organization",
            "name": "CoreNexus Technology Solution"
          }
        }
      }
    ]
  },
  "sameAs": standardSameAs
});