import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Head from 'next/head';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://jercarlocatallo.com'),
  title: 'Jer Carlo Catallo | Software Engineer',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'icon',sizes: '16x16', url: '/favicon-16x16.png' },
    { rel: 'icon', sizes: '32x32',url: '/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    { rel: 'apple-touch-icon', sizes: '57x57', url: '/apple-touch-icon-57x57.png' },
    { rel: 'apple-touch-icon', sizes: '60x60', url: '/apple-touch-icon-60x60.png' },
    { rel: 'apple-touch-icon', sizes: '72x72', url: '/apple-touch-icon-72x72.png' },
    { rel: 'apple-touch-icon', sizes: '76x76', url: '/apple-touch-icon-76x76.png' },
    { rel: 'apple-touch-icon', sizes: '114x114', url: '/apple-touch-icon-114x114.png' },
    { rel: 'apple-touch-icon', sizes: '120x120', url: '/apple-touch-icon-120x120.png' },
    { rel: 'apple-touch-icon', sizes: '144x144', url: '/apple-touch-icon-144x144.png' },
    { rel: 'apple-touch-icon', sizes: '152x152', url: '/apple-touch-icon-152x152.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon-180x180.png' },
    { rel: 'shortcut icon', sizes: '12x12', url: '/launcher-icon-0-75x.png' },
    { rel: 'shortcut icon', sizes: '24x24', url: '/launcher-icon-1-5x.png' },
    { rel: 'shortcut icon', sizes: '16x16', url: '/launcher-icon-1x.png' },
    { rel: 'shortcut icon', sizes: '32x32', url: '/launcher-icon-2x.png' },
    { rel: 'shortcut icon', sizes: '48x48', url: '/launcher-icon-3x.png' },
    { rel: 'shortcut icon', sizes: '64x64', url: '/launcher-icon-4x.png' },
  ],
  description: 'Jer Carlo Catallo official website',
  keywords: ['Jer Carlo Catallo', 'Software Engineer', 'Full-stack Developer', 'Web Applications Enthusiast', 'Web Development', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'MySQL', 'AWS', 'Docker', 'CI/CD', 'DevOps'],
  authors: [
    { name: 'Jer Carlo Catallo', url: 'jercarlocatallo.com' },
  ],
  openGraph: {
    title: 'Jer Carlo Catallo - Software Engineer | Full-stack Developer | Web Applications Enthusiast',
    description: 'Explore the digital world of Jer Carlo Catallo - Crafting robust websites and apps with dedication and inventive solutions.',
    url: 'jercarlocatallo.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/android-chrome-512x512.png"></meta>
      </Head>
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  );
}
