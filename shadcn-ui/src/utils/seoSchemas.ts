// Reusable Schema.org markup templates for SEO

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CoreNexus Technology Solution",
  "image": "/images/photo1766412531.jpg",
  "description": "Assistenza informatica e supporto sistemistico professionale per aziende a Roma Sud, Ostia, Fiumicino, EUR e provincia",
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
  "areaServed": [
    { "@type": "City", "name": "Roma" },
    { "@type": "Place", "name": "Ostia" },
    { "@type": "Place", "name": "Fiumicino" },
    { "@type": "Place", "name": "EUR" },
    { "@type": "Place", "name": "Acilia" },
    { "@type": "Place", "name": "Pomezia" },
    { "@type": "State", "name": "Lazio" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/corenexus",
    "https://www.linkedin.com/company/corenexus"
  ]
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "CoreNexus Technology Solution - Assistenza Informatica Aziendale",
  "description": "Servizi IT professionali per aziende a Roma: consulenza sistemistica, gestione reti, sicurezza informatica, videosorveglianza e server enterprise",
  "provider": {
    "@type": "Organization",
    "name": "CoreNexus Technology Solution"
  },
  "areaServed": {
    "@type": "State",
    "name": "Lazio"
  },
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
  "description": "Contatta CoreNexus Technology Solution per assistenza informatica, supporto IT e consulenza tecnologica a Roma.",
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
    ]
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
  "areaServed": {
    "@type": "State",
    "name": "Lazio"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://corenexus.it",
    "servicePhone": "+393534012055"
  }
});