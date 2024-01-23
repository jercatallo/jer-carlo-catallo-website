import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jercarlocatallo.com'),
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
    { name: "Jer Carlo Catallo", url: "www.jercarlocatallo.com" }
  ],
  openGraph: {
    title: 'Jer Carlo Catallo - Software Engineer | Full-stack Developer | Web Applications Enthusiast',
    description: 'Explore the digital world of Jer Carlo Catallo - Crafting robust websites and apps with dedication and inventive solutions.',
    images: '/android-chrome-512x512.png',
    url: 'www.jercarlocatallo.com'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
