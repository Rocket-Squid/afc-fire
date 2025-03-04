// Default SEO configuration
export const defaultSEO = {
  titleTemplate: "%s | AFC Fire - Fire Safety Specialists",
  defaultTitle: "AFC Fire - Fire Safety Specialists",
  description:
    "AFC Fire provides professional fire safety services including fire risk assessments, fire safety training, and fire safety equipment maintenance.",
  canonical: "https://afcfire.co.uk",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://afcfire.co.uk",
    siteName: "AFC Fire",
    images: [
      {
        url: "/assets/img/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "AFC Fire Logo",
      },
    ],
  },
  twitter: {
    handle: "@afcfire",
    site: "@afcfire",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/assets/favicon/favicon.ico",
    },
  ],
};

// Helper function to generate page-specific SEO
export const getPageSEO = (pageSEO) => {
  return {
    ...defaultSEO,
    ...pageSEO,
  };
};
