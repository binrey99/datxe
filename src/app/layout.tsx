import './styles/globals.css';
import { LanguageProvider } from './i18n/LanguageContext';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'VE Transport - Dịch vụ vận tải cho công ty',
  description: 'Giải pháp vận tải chuyên nghiệp cho công ty Trung Quốc & doanh nghiệp tại Hà Nam, Hà Nội',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
