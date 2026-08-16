import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { LanguageProvider } from '@/lib/LanguageContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Osvaldo Ramos | Full Stack & Mobile Developer',
  description: 'Portafolio Profesional de Osvaldo Ashley Ramos Guzmán - Ingeniero en Desarrollo y Gestión de Software, especializado en Full Stack (React/Next.js/Node.js), Móvil (React Native/Expo) y QA Specialist (Postman).',
  keywords: ['Osvaldo Ramos', 'Full Stack Developer', 'Mobile Developer', 'React Native', 'Next.js', 'Node.js', 'QA Specialist', 'Postman', 'Aguascalientes'],
  authors: [{ name: 'Osvaldo Ashley Ramos Guzmán' }],
  openGraph: {
    title: 'Osvaldo Ramos | Full Stack & Mobile Developer',
    description: 'Ingeniero en Desarrollo y Gestión de Software especializado en desarrollo Full Stack, Móvil y Aseguramiento de Calidad (QA).',
    url: 'https://github.com/Osvaldorg',
    siteName: 'Osvaldo Ramos Portfolio',
    locale: 'es_MX',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <body className="bg-[#0d0d0d] text-[#f0f0ef] font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
