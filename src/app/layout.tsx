import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Badger Book Club',
  description: 'A modern, elegant editorial website for a university book club',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
