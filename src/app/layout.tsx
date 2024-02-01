import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://jercarlocatallo.com'),
  title: 'Jer Carlo Catallo | Software Engineer',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'icon',sizes: '16x16', url: '/favicon-16x16.png' },
    { rel: 'icon', sizes: '32x32',url: '/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
  ],
  description: 'Jer Carlo Catallo official website',
  keywords: ["Jer Carlo Catallo", "Software Engineer", "Full-stack Developer", "Web Applications Enthusiast", "Web Development", "JavaScript", "TypeScript", "React", "Node.js", "MySQL", "AWS", "Docker", "CI/CD", "DevOps"],
  authors: [
    { name: "Jer Carlo Catallo", url: "jercarlocatallo.com" }
  ],
  openGraph: {
    title: 'Jer Carlo Catallo - Software Engineer | Full-stack Developer | Web Applications Enthusiast',
    description: 'Explore the digital world of Jer Carlo Catallo - Crafting robust websites and apps with dedication and inventive solutions.',
    url: 'jercarlocatallo.com'
  }
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
