import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Beauty and Beast Fitness Gym | 5.0 ★ Rated Gym in Madurai Main',
  description: 'Beauty and Beast Fitness Gym in Keelaveethi, Madurai Main. 5.0 ★ rated fitness club offering personal training, custom workout plans, nutrition & diet management. Call 084280 90900 today!',
  keywords: [
    'Beauty and Beast Fitness Gym',
    'Gym in Madurai',
    'Gym near Keelaveli veethi',
    'Madurai Fitness Center',
    'Best Gym Madurai 625001',
    'Personal Training Madurai',
    'Fat Loss Diet Plan Madurai',
    'Weight Training Keelaveethi'
  ],
  authors: [{ name: 'Beauty and Beast Fitness Gym' }],
  openGraph: {
    title: 'Beauty and Beast Fitness Gym | 5.0 ★ Rated Gym in Madurai Main',
    description: 'Transform your body with high-performance equipment, expert trainers, and customized nutrition at Beauty and Beast Fitness Gym, Madurai.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Beauty and Beast Fitness Gym',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark-950 text-gray-100 antialiased selection:bg-beast-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
