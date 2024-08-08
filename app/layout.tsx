import './globals.css';
import { Inter as FontSans } from 'next/font/google';
import { type Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import { cn } from '@/lib/utils';
import { dark } from '@clerk/themes';
import Provider from './provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'LiveDocs',
  description: 'Your go-to collaborative editor',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: '#3371FF', fontSize: '16px' },
      }}
      // afterSignOutUrl={'/sign-in'}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            'min-h-screen  font-sans antialiased',
            fontSans.variable
          )}
        >
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
