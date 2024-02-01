import React from 'react';
import { About, Hero } from './_components';
import dynamic from 'next/dynamic';
const Navigation = dynamic(
  () => import('../components/Navigation/Navigation'),
  { ssr: false }
);

export default function Home() {

  return (
    <div className='relative'>
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
