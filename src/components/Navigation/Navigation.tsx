/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './Navigation.css';
import { useScreenSize } from '@/hooks';
import { TailwindConstants } from '@/constants/Tailwind';
import { Logger } from '@/utils';

function Navigation() {
  const [scrollPosition, setScrollPosition] = useState('hero');
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const screenSize = useScreenSize();

  const isElementInViewPort = (element: Element | null) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  function handleScroll() {
    if (window.innerWidth >= TailwindConstants.ThemeScreens.lg) {
      if (process.env.ENVIRONMENT === 'development') {
        Logger.info("timerRef.current !== undefined && window.innerWidth >= TailwindConstants.ThemeScreens.lg", timerRef.current !== undefined && window.innerWidth >= TailwindConstants.ThemeScreens.lg);
        Logger.info("timerRef.current !== undefined", timerRef.current !== undefined);
        Logger.info("window.innerWidth", window.innerWidth);
      }

      if (timerRef.current !== undefined && window.innerWidth >= TailwindConstants.ThemeScreens.lg) {
        const navigation = document.getElementById('navigation');
        if (navigation) {
          navigation.style.opacity = '0';
        }

        clearTimeout(timerRef.current);
      }


      timerRef.current = setTimeout(() => {
        const hero = document.querySelector('.hero');
        const about = document.querySelector('.about');

        if (isElementInViewPort(hero)) {
          setScrollPosition('hero');
        } else if (isElementInViewPort(about)) {
          setScrollPosition('about');
        }

        const navigation = document.getElementById('navigation');

        if (process.env.ENVIRONMENT === 'development') {
          Logger.info("hero", hero);
          Logger.info("about", about);
          Logger.info("navigation", navigation);
          Logger.info("isElementInViewPort(hero):", isElementInViewPort(hero));
          Logger.info("isElementInViewPort(about)", isElementInViewPort(about));
        }

        if (navigation) {
          navigation.style.opacity = '1';
        }
      }, 300);
    }

  }

  useEffect(() => {
    if (process.env.ENVIRONMENT === 'development') {
      Logger.info("screenSize", screenSize);
    }

    if (typeof window !== 'undefined' && document.readyState === 'complete' && screenSize.width >= TailwindConstants.ThemeScreens.lg) {
      document.addEventListener('scroll', handleScroll, true);
      if (process.env.ENVIRONMENT === 'development') {
        Logger.info("addEventListener scroll");
      }
    } else {
      document.removeEventListener('scroll', handleScroll);
      if (process.env.ENVIRONMENT === 'development') {
        Logger.info("removeEventListener scroll");
      }
    }

    return () => {
      if (timerRef.current !== undefined) {
        clearTimeout(timerRef.current);
      }
  
      if (process.env.ENVIRONMENT === 'development') {
        Logger.info("removeEventListener scroll");
      }

      document.removeEventListener('scroll', handleScroll);
    };
  }, [screenSize]);

  const navigationTextColor = useMemo(() => {
    let text = '';
    if (screenSize.width >= TailwindConstants.ThemeScreens.lg) {
      if (scrollPosition === 'about') {
        text = 'text-light';
      }
      if (scrollPosition === 'hero') {
        text = 'text-main';
      }
    } else {
      text = 'text-main';
    }

    if (process.env.ENVIRONMENT === 'development') {
      Logger.info("navigationTextColor text", text);
    }

    return text;
  }, [scrollPosition, screenSize]);


  const brandTextColor = useMemo(() => {
    let text = '';
    if (screenSize.width >= TailwindConstants.ThemeScreens.lg) {
      if (scrollPosition === 'about') {
        text = 'text-light';
      }
      if (scrollPosition === 'hero') {
        text = 'text-primary-color';
      }
    } else {
      text = 'text-primary-color';
    }

    if (process.env.ENVIRONMENT === 'development') {
      Logger.info("brandTextColor text", text);
    }

    return text;
  }, [scrollPosition, screenSize]);

  return (
    <>
      <nav id="navigation" className="duration-500 z-10 mb-12 border-gray-200 fixed left-0 right-0 top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className={`font-heading ${navigationTextColor} self-center text-5xl whitespace-nowrap font-bold`}> jc  </span> <span className={`mx-5 font-heading  ${brandTextColor} self-center text-5xl whitespace-nowrap font-bold`}>;</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white">
              <li onClick={() => {
                const element = document.getElementById("hero");
                element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
              }}>
                <a href="#" className={`block py-2 px-3 duration-500 ${navigationTextColor} bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0`} aria-current="page">Home</a>
              </li>
              <li onClick={() => {
                const element = document.getElementById("about");
                element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
              }}>
                <a href="#" className={`block py-2 px-3 duration-500 ${navigationTextColor} rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0`}>About</a>
              </li>
              <li>
                <a target='_blank' href="https://drive.google.com/file/d/1evTroPQysDvLXgTliyGe-n3UbZR6IVzs/view?usp=sharing" className={`block py-2 px-3 duration-500 ${navigationTextColor} rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0`}>Resume</a>
              </li>
              <li>
                <a target='_blank' href="https://drive.google.com/file/d/1MiGGrTrHBLtBRhhuE1otrm23EaS5JUYM/view?usp=sharing" className={`block py-2 px-3 duration-500 ${navigationTextColor} rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0`}>CV</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav>

      </nav>
    </>

  );
}

export default Navigation;
