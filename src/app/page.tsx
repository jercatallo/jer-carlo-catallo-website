import React from 'react';
import { About, Hero } from './_components';
import { Montserrat, Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
const Navigation = dynamic(
  () => import('../components/Navigation/Navigation'),
  { ssr: false }
);
import './globals.css';


const montserrat = Montserrat({
  subsets: ['latin'],
});

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`relative ${montserrat.className} ${inter.className}`}>
      <header className='relative'>
        <Navigation></Navigation>
      </header>
      <main>
        <Hero></Hero>
        <About></About>
      </main>
      <footer></footer>
    </div>
  );
}
