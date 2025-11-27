import "./globals.css";

export const metadata = {
  title: "Ligitos Grožio Salonas | Kirpimas, Dažymas, Grožio Paslaugos Panevėžyje",
  description:
    "Profesionalus kirpimas, dažymas, manikiūras, pedikiūras ir grožio procedūros Panevėžyje. Patyrę meistrai, jauki aplinka ir kokybiškos paslaugos.",
  keywords: [
    "kirpimas Panevėžyje",
    "grožio salonas Panevėžyje",
    "dažymas Panevėžys",
    "manikiūras Panevėžys",
    "pedikiūras Panevėžys",
    "grožio specialistai Panevėžys"
  ],
  authors: [{ name: "Ligitos Grožio Salonas" }],
  openGraph: {
    title: "Ligitos Grožio Salonas",
    description:
      "Aukštos kokybės grožio paslaugos Panevėžyje: kirpimas, dažymas, manikiūras, pedikiūras.",
    url: "https://www.ligitosgroziosalonas.lt",
    siteName: "Ligitos Grožio Salonas",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "lt_LT",
    type: "website",
  },
};


const RootLayout = ({ children }) => {
  return (
    <html lang="lt">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
