import { Metadata } from 'next';

import '@/app/ui/global.css';

import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: `TypeScript starter for Next.js`,
  description: `TypeScript starter for Next.js that includes all you need to build amazing apps`,
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
