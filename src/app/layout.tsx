import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Tatiana Walton | Sr. Software Engineer | Product Builder | DX & Tooling",
  description:
    "Sr. Software Engineer and Product Builder specializing in developer experience, tooling, CI/CD, and creative technology. Building products I actually love to use.",
  keywords: [
    "Software Engineer",
    "Product Builder",
    "Developer Experience",
    "CI/CD",
    "Testing",
    "React",
    "Vue.js",
    "TypeScript",
    "Creative Technology",
    "NYC",
  ],
  authors: [{ name: "Tatiana Walton" }],
  openGraph: {
    title: "Tatiana Walton | Sr. Software Engineer | Product Builder",
    description:
      "Building products I actually love to use, and making sure teams ship with speed and confidence.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tatiana Walton | Sr. Software Engineer",
    description:
      "Product Builder & DX Enthusiast. Building products I actually love to use.",
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
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-EPQY8TGLC0"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-EPQY8TGLC0');
</script>
        <SmoothScroll>
          <Navigation />
          <div className="noise-overlay" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
