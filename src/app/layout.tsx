import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://restorasibumi.org";
const GA_MEASUREMENT_ID = "G-5QRDG8ZXJ0";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Restorasi Bumi | Membangun Masa Depan yang Lebih Hijau",
    template: "%s | Restorasi Bumi",
  },
  description: "Yayasan Restorasi Bumi berdedikasi untuk pemulihan ekosistem, pemberdayaan masyarakat, dan pembangunan masa depan yang berkelanjutan melalui program ReGen Earth, ReGen Humanity, dan ReGen Future.",
  keywords: ["Restorasi Bumi", "Yayasan Lingkungan", "Konservasi Alam", "ReGen Earth", "ReGen Humanity", "ReGen Future", "Donasi Lingkungan", "Pemberdayaan Masyarakat", "Indonesia Hijau"],
  authors: [{ name: "Restorasi Bumi Team" }],
  creator: "Restorasi Bumi",
  publisher: "Yayasan Restorasi Bumi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Restorasi Bumi | Membangun Masa Depan yang Lebih Hijau",
    description: "Bergabunglah bersama kami dalam misi memulihkan bumi dan memberdayakan manusia.",
    url: SITE_URL,
    siteName: "Restorasi Bumi",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "Restorasi Bumi - ReGen Series",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Restorasi Bumi",
    description: "Membangun Masa Depan yang Lebih Hijau melalui ReGen Earth, Humanity, dan Future.",
    images: ["/logo.png"],
  },
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
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.png",
  },
};

import { LanguageProvider } from "../context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "Restorasi Bumi",
              "url": SITE_URL,
              "logo": `${SITE_URL}/logo.png`,
              "sameAs": [
                "https://www.instagram.com/restorasibumi",
                "https://www.linkedin.com/company/restorasibumi"
              ],
              "description": "Yayasan Restorasi Bumi berdedikasi untuk pemulihan ekosistem, pemberdayaan masyarakat, dan pembangunan masa depan yang berkelanjutan."
            }),
          }}
        />
      </body>
    </html>
  );
}
