import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import { DEFAULT_SITE_METADATA } from '@/lib/seo';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#142B50',
};

export const metadata = {
  metadataBase: new URL(DEFAULT_SITE_METADATA.siteUrl),
  title: {
    default: DEFAULT_SITE_METADATA.title,
    template: '%s | Horizon Tourism & Visas Co.',
  },
  description: DEFAULT_SITE_METADATA.description,
  keywords: DEFAULT_SITE_METADATA.keywords,
  authors: [{ name: DEFAULT_SITE_METADATA.author }],
  creator: DEFAULT_SITE_METADATA.author,
  publisher: DEFAULT_SITE_METADATA.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: DEFAULT_SITE_METADATA.siteUrl,
    siteName: 'Horizon Tourism & Visas Co.',
    title: DEFAULT_SITE_METADATA.title,
    description: DEFAULT_SITE_METADATA.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-brand-dark antialiased selection:bg-brand-yellow selection:text-brand-dark">
        <Header />
        <main className="flex-grow pb-16 lg:pb-0">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileBottomNav />
      </body>
    </html>
  );
}
