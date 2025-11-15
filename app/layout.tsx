import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { Inter, Roboto } from "next/font/google";
import { theme } from "../theme";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  metadataBase: new URL("https://teamnorth.ru"),
  title: {
    default: "Team North",
    template: "%s | Team North",
  },
  description:
    "Team North (Тим Норт) - профессиональная киберспортивная команда. Билет в компет. Присоединяйся к команде, которая уже 7 лет воспитывает таланты со всего мира.",
  keywords: [
    "тим норт",
    "team north",
    "тим норт сквад",
    "team north squad",
    "киберспорт",
    "компьютерные игры",
    "команда",
    "gaming team",
    "esports",
  ],
  authors: [{ name: "Team North" }],
  creator: "Team North",
  publisher: "Team North",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://teamnorth.ru",
    siteName: "Team North",
    title: "Team North - Тим Норт | Официальный сайт команды",
    description:
      "Team North (Тим Норт) - профессиональная киберспортивная команда. Билет в компет. Присоединяйся к команде, которая уже 7 лет воспитывает таланты со всего мира.",
    images: [
      {
        url: "https://teamnorth.ru/img/roster.png",
        width: 1200,
        height: 630,
        alt: "Team North Roster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team North - Тим Норт",
    description:
      "Team North (Тим Норт) - профессиональная киберспортивная команда. Билет в компет.",
    images: ["https://teamnorth.ru/img/roster.png"],
  },
  alternates: {
    canonical: "https://teamnorth.ru",
  },
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html
      lang="ru"
      {...mantineHtmlProps}
      className={`${inter.variable} ${roboto.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://discord.com" />
        <link rel="preconnect" href="https://steamcommunity.com" />
        <link rel="preconnect" href="https://youtube.com" />
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/N.svg" />
        <link rel="canonical" href="https://teamnorth.ru" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta name="geo.region" content="RU" />
        <meta name="geo.placename" content="Russia" />
        <meta
          name="google-site-verification"
          content="X6MRnsuEE_u1F8YvdtHfSFUVTl7G9qHw4q33rWLnMJk"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Team North",
              alternateName: "Тим Норт",
              url: "https://teamnorth.ru",
              logo: "https://teamnorth.ru/N.svg",
              description:
                "Team North (Тим Норт) - профессиональная киберспортивная команда. Билет в компет.",
              sameAs: [
                "https://discord.gg/cREDhsymBE",
                "https://steamcommunity.com/sharedfiles/filedetails/?id=3359758575",
                "https://youtube.com/watch?v=PU8o9R-Vrfc",
              ],
              foundingDate: "2018",
              slogan: "Билет в компет",
            }),
          }}
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
