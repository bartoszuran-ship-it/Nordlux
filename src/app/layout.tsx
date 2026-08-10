import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import { localBusinessSchema } from '@/lib/schema';
import { FIRMENNAME, SITE_URL } from '@/config/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${FIRMENNAME} | Dachbeschichtung & Reinigung`,
    template: `%s | ${FIRMENNAME}`,
  },
  description:
    'Dachbeschichtung, Dachreinigung, Fassadenreinigung und Solarreinigung vom Fachbetrieb — kostenlose Besichtigung, Festpreisgarantie, versichert und zertifiziert.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: FIRMENNAME,
    images: [{ url: '/images/hero-dach.webp', width: 1920, height: 1080, alt: 'Renoviertes Dach von Nordlux Dach & Fassade' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
