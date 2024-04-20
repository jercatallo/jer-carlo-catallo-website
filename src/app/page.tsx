import React from 'react';
import { About, Hero, Experience } from './_components';
import { Montserrat, Inter, Sora } from 'next/font/google';
import dynamic from 'next/dynamic';
const Navigation = dynamic(
  () => import('../components/Navigation/Navigation'),
  { ssr: false }
);
import './globals.css';
import { Footer, Loading } from '@/components';
import { Div } from '@/design-system/Div';
import { Projects } from './_components/Projects';
import '@fontsource/montserrat'; // Importing Montserrat font
import '@fontsource/inter'; // Importing Inter font
import '@fontsource/sora'; // Importing Sora font

const montserrat = Montserrat({
  subsets: ['latin'],
});

const inter = Inter({
  subsets: ['latin'],
});

const sora = Inter({
  subsets: ['latin'],
});


export default function Home() {
  return (
    <Div overrides={`relative ${montserrat.className} ${inter.className} ${sora.className}`}>
      <header className='relative'>
        <Navigation></Navigation>
      </header>
      <main>
        <Hero></Hero>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
      </main>
      <Loading></Loading>
    </Div>
  );
}
