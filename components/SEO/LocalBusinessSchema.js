const LocalBusinessSchema = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Ligitos Grožio Salonas",
    image: "https://www.ligitosgroziosalonas.lt/images/og-image.jpg",
    "@id": "",
    url: "https://www.ligitosgroziosalonas.lt",
    telephone: "+370 687 38081",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aukštaičių g. 85",
      addressLocality: "Panevėžys",
      postalCode: "36109",
      addressCountry: "LT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.747990,
      longitude: 24.363190,
    },
    openingHours: [
      "Mo-Fr 09:00-19:00",
      "Sa 10:00-16:00",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default LocalBusinessSchema;
