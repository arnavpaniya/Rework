import type { Metadata } from "next";
import localFont from "next/font/local";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const metropolis = localFont({
  src: [
    { path: "../public/font/Metropolis/Metropolis-Thin.otf", weight: "100", style: "normal" },
    { path: "../public/font/Metropolis/Metropolis-ExtraLight.otf", weight: "200", style: "normal" },
    { path: "../public/font/Metropolis/Metropolis-Light.otf", weight: "300", style: "normal" },
    { path: "../public/font/Metropolis/Metropolis-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/font/Metropolis/Metropolis-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/font/Metropolis/Metropolis-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/font/Metropolis/Metropolis-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/font/Metropolis/Metropolis-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../public/font/Metropolis/Metropolis-Black.otf", weight: "900", style: "normal" },
    { path: "../public/font/Metropolis/Metropolis-ThinItalic.otf", weight: "100", style: "italic" },
    { path: "../public/font/Metropolis/Metropolis-ExtraLightItalic.otf", weight: "200", style: "italic" },
    { path: "../public/font/Metropolis/Metropolis-LightItalic.otf", weight: "300", style: "italic" },
    { path: "../public/font/Metropolis/Metropolis-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "../public/font/Metropolis/Metropolis-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "../public/font/Metropolis/Metropolis-SemiBoldItalic.otf", weight: "600", style: "italic" },
    { path: "../public/font/Metropolis/Metropolis-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../public/font/Metropolis/Metropolis-ExtraBoldItalic.otf", weight: "800", style: "italic" },
    { path: "../public/font/Metropolis/Metropolis-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ReWorks | Digital Marketing Agency in Mumbai & Dubai & India UAE",
  description:
    "ReWorks is a digital marketing agency in Mumbai & Dubai offering branding, social media, video, and digital development for FMCG, entertainment, and hospitality brands. Let's build something.",
};

import { Footer } from "@/components/Footer";
import { GamifiedPreloader } from "@/components/GamifiedPreloader";
import { LeadPopup } from "@/components/LeadPopup";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${metropolis.variable} ${syne.variable} font-sans min-h-full antialiased`}
    >
      <head>
        {/* FAQ Page JSON-LD Schema (Change 10) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What does a digital marketing agency in Mumbai and Dubai do?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "They handle branding, social media, video production, and digital development, helping brands build presence and convert audiences across India and the UAE.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "How is ReWorks different from other agencies in India and the UAE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ReWorks combines Gen Z cultural instinct with AI-powered creative systems. We move faster, think sharper, and operate across Mumbai & Dubai. One team, two markets.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Which industries does ReWorks work with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We specialise in entertainment, FMCG, and hospitality, three of India and the UAE's most competitive brand categories.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Do you work with brands outside Mumbai and Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. While we're rooted in Mumbai and Dubai, we work with brands across India, the UAE, and internationally.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "How does the brand rework process work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We run a 4-step process: Audit → Rework → Build → Launch. No 10-week discovery phases. We move at the speed your brand actually needs.",
                  },
                },
              ],
            }),
          }}
        />

        {/* LocalBusiness JSON-LD Schema (Change 11) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MarketingAgency",
              "name": "ReWorks Agency",
              "url": "https://rework-delta-umber.vercel.app",
              "logo": "https://rework-delta-umber.vercel.app/logo-black.png",
              "description":
                "A Gen Z-led digital marketing agency in Mumbai & Dubai offering branding, social media, video, and digital development for FMCG, entertainment, and hospitality brands.",
              "email": "reworks.agency@gmail.com",
              "foundingDate": "2019",
              "numberOfEmployees": "38",
              "areaServed": ["Mumbai", "Dubai", "India", "UAE"],
              "serviceType": [
                "Branding & Design",
                "Social Media Marketing",
                "Video & Animation",
                "Digital Development",
              ],
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Dubai",
                  "addressRegion": "Business Bay",
                  "addressCountry": "AE",
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Mumbai",
                  "addressRegion": "Bandra West",
                  "postalCode": "400050",
                  "addressCountry": "IN",
                },
              ],
              "sameAs": [
                "https://www.instagram.com/reworks.agency",
                "https://www.linkedin.com/company/reworks-marketing-agency/",
                "https://x.com/ReWorksAgency",
                "https://www.facebook.com/profile.php?id=100090152066732&ref=1"
              ],
            }),
          }}
        />
      </head>
      <body className="relative min-h-full flex flex-col">
        <SmoothScrollProvider>
          <GamifiedPreloader />
          <LeadPopup />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
