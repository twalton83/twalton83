import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SmoothScroll from "@/components/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tatianacodes.com"),
  title: "Tatiana Walton | FiveM Developer & NYC Software Engineer | Consulting",
  description:
    "FiveM Developer and NYC Software Engineer offering custom FiveM server development, scripting, and software consulting in New York City. Specializing in game development, AI integration, and scalable solutions.",
  keywords: [
    "FiveM Developer",
    "FiveM Scripter",
    "FiveM Server Development",
    "NYC Software Engineer",
    "New York Software Engineer",
    "NYC Software Consulting",
    "New York Software Consulting",
    "NYC Developer",
    "Freelance Developer NYC",
    "Software Engineer",
    "Product Builder",
    "Developer Experience",
    "React",
    "TypeScript",
    "AI Integration",
  ],
  authors: [{ name: "Tatiana Walton" }],
  openGraph: {
    title: "Tatiana Walton | FiveM Developer & NYC Software Engineer",
    description:
      "FiveM Developer and Software Engineer in NYC. Custom FiveM server development, scripting, and software consulting services.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tatiana Walton | FiveM Developer & NYC Software Engineer",
    description:
      "FiveM Developer and Software Engineer in NYC. Custom server development, scripting, and consulting.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${syne.variable}`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EPQY8TGLC0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              'analytics_storage': 'granted'
            });
            gtag('config', 'G-EPQY8TGLC0');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <SmoothScroll>
          <Navigation />
          <div className="noise-overlay" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
