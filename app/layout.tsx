import "@mantine/core/styles.css";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { Inter } from "next/font/google";
import { theme } from "../theme";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://teamnorth.ru"),
  title: {
    default: "Team North",
    template: "%s | Team North",
  },
  description:
    "Team North - это твой билет в компет. Присоединяйся к команде, которая уже 7 лет воспитывает таланты со всего мира.",
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
    "сквад",
    "squad",
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
    title: "Team North | Билет в компет",
    description:
      "Team North - это твой билет в компет. Присоединяйся к команде, которая уже 7 лет воспитывает таланты со всего мира.",
    images: [
      {
        url: "https://teamnorth.ru/img/roster.png?v=3",
        width: 1200,
        height: 630,
        alt: "Team North Roster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team North | Билет в компет",
    description:
      "Team North - это твой билет в компет. Присоединяйся к команде, которая уже 7 лет воспитывает таланты со всего мира.",
    images: ["https://teamnorth.ru/img/roster.png?v=3"],
  },
  alternates: {
    canonical: "https://teamnorth.ru",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" {...mantineHtmlProps} className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://discord.com" />
        <link rel="preconnect" href="https://steamcommunity.com" />
        <link rel="preconnect" href="https://youtube.com" />
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/N.svg" />
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
        <meta name="yandex-verification" content="ee468cc4d25c0b20" />
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
                "Team North - это твой билет в компет. Присоединяйся к команде, которая уже 7 лет воспитывает таланты со всего мира.",
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
