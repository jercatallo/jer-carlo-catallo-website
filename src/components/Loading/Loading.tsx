'use client';
import { ThemeColors } from '@/constants/Tailwind/Tailwind';
import React, { useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
// import siteIcon from '../android-chrome-512x512.png'; // Assuming the image is static
// import RiseLoader from 'react-spinners/RiseLoader';

export const Loading: React.FC = () => {

  useEffect(() => {
    const loadingEl: HTMLInputElement = document.querySelector('.loading') as HTMLInputElement;
    if(loadingEl){
      setTimeout(() => {
        loadingEl.style.opacity = '0';

      }, 1000);
      setTimeout(() => {
        loadingEl.style.display = 'none';

      }, 1500);

    }
  },[]);

  return (
    <article className='loading z-50 min-h-screen h-full fixed transition duration-1000 top-0 left-0 grid items-center justify-center' style={{ minWidth: '100vw', background: 'rgba(255,255,255,0.9)' }}>
      <div>
        {/* <img src={siteIcon} className='w-12 block m-auto mb-5' alt="dashboard demo app" /> */}
        <BounceLoader color={ThemeColors['primary-color']} />
      </div>
    </article>
  );
};
