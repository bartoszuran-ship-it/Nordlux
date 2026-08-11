import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import ScrollProgress from '@/components/ScrollProgress';
import TopBar from '@/components/TopBar';
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
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: FIRMENNAME,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${FIRMENNAME} — Dachbeschichtung, Dach- und Fassadenreinigung` }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
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
        <ScrollProgress />
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
