import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Space from './components/space/Space';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Space Game',
  description: 'A space game that is super duper awesome!!!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Space>{children}</Space>
      </body>
    </html>
  );
}
