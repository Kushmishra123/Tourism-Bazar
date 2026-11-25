export const DEFAULT_SITE_METADATA = {
  title: "Horizon Tourism & Visas Co. | Premium Travel, Visas & Documentation",
  description: "Your trusted international travel partner for Void Tickets, Tourist & Business Visas for 35 countries, Holiday Packages, OK to Board & Travel Documentation.",
  siteUrl: "https://horizontourism.com",
  author: "Horizon Tourism & Visas Co.",
  keywords: [
    "Void Ticket for Visa",
    "Dummy Ticket for Visa",
    "Flight Itinerary for Embassy",
    "Tourist Visa Assistance",
    "Business Visa",
    "Holiday Packages",
    "Umrah Packages",
    "OK to Board assistance",
    "POE Emigration",
    "Travel Documentation Services"
  ],
};

export function buildMetadata({ title, description, path = "", image }) {
  const finalTitle = title 
    ? `${title} | Horizon Tourism & Visas Co.` 
    : DEFAULT_SITE_METADATA.title;
  
  const finalDescription = description || DEFAULT_SITE_METADATA.description;
  const canonicalUrl = `${DEFAULT_SITE_METADATA.siteUrl}${path}`;
  const ogImage = image || "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop";

  return {
    title: finalTitle,
    description: finalDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: canonicalUrl,
      siteName: "Horizon Tourism & Visas Co.",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
