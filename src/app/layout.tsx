import type { Metadata } from 'next';
import { Agdasima, Arima, Josefin_Sans } from 'next/font/google';
import './globals.scss';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['600'],
});

const arima = Arima({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Clean Sofa',
  description: 'Хімчистка меблів',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className} ${arima.className}`}>
        {children}
      </body>
    </html>
  );
}
