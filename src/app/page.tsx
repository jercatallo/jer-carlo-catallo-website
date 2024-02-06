import React from 'react';
import { About, Hero } from './_components';
import { Navigation } from '@/components';
import './globals.css';
 import { Montserrat, Inter } from 'next/font/google';

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
