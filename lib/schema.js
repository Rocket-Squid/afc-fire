// JSON-LD structured data for better SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AFC Fire",
  url: "https://afcfire.co.uk",
  logo: "https://afcfire.co.uk/assets/img/logo/logo.png",
  description:
    "AFC Fire provides professional fire safety services including fire risk assessments, fire safety training, and fire safety equipment maintenance.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "226 Mulgrave Road Sutton",
    addressLocality: "GreaterLondon",
    postalCode: "SM2 6LY",
    addressCountry: "GB",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+442031434754",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.facebook.com/afcfire", // Replace with actual social media URLs
    "https://twitter.com/afcfire",
    "https://www.linkedin.com/company/afc-fire",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AFC Fire",
  image: "https://afcfire.co.uk/assets/img/logo/logo.png",
  url: "https://afcfire.co.uk",
  telephone: "+442031434754",
  address: {
    "@type": "PostalAddress",
    streetAddress: "226 Mulgrave Road Sutton",
    addressLocality: "GreaterLondon",
    postalCode: "SM2 6LY",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.35592597227173,
    longitude: -0.21123481756718515,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "££",
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Fire Risk Assessment",
  provider: {
    "@type": "Organization",
    name: "AFC Fire",
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  description:
    "Professional fire risk assessment services to ensure your business is compliant with fire safety regulations.",
  // offers: {
  //   "@type": "Offer",
  //   availability: "https://schema.org/InStock",
  //   price: "299.00", // Replace with actual price if applicable
  //   priceCurrency: "GBP",
  // },
};

// Helper function to generate page-specific schema
export const getPageSchema = (page) => {
  switch (page) {
    case "home":
      return [organizationSchema, localBusinessSchema];
    case "about":
      return [organizationSchema];
    case "services":
      return [organizationSchema, serviceSchema];
    case "fire-risk-assessment":
      return [
        organizationSchema,
        {
          ...serviceSchema,
          name: "Fire Risk Assessment",
          description:
            "Professional fire risk assessment services from AFC Fire. Our qualified assessors help you meet legal requirements and keep your premises safe from fire hazards.",
        },
      ];
    case "team":
      return [organizationSchema];
    case "contact":
      return [organizationSchema, localBusinessSchema];
    default:
      return [organizationSchema];
  }
};
