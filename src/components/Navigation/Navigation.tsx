/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './Navigation.css';
import { useScreenSize } from '@/hooks';
import { TailwindConstants } from '@/constants/Tailwind';

function Navigation() {
  const [scrollPosition, setScrollPosition] = useState('');
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const screenSize = useScreenSize();

  function handleScroll() {
    if (window.innerWidth >= TailwindConstants.ThemeScreens.md) {
      if (timerRef.current !== undefined && window.innerWidth >= TailwindConstants.ThemeScreens.md) {
        const navigation = document.getElementById('navigation');
        if (navigation) {
          navigation.style.opacity = '0';
        }

        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
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

        const hero = document.querySelector('.hero');
        const about = document.querySelector('.about');

        if (isElementInViewPort(hero)) {
          setScrollPosition('hero');
        } else if (isElementInViewPort(about)) {
          setScrollPosition('about');
        }

        const navigation = document.getElementById('navigation');

        if (navigation) {
          navigation.style.opacity = '1';
        }
      }, 300);
    }

  }

  useEffect(() => {
    const onScroll = () => handleScroll();

    if (typeof window !== 'undefined' && document.readyState === 'complete' && screenSize.width >= TailwindConstants.ThemeScreens.md) {
      document.addEventListener('scroll', onScroll, true);
    } else {
      document.removeEventListener('scroll', onScroll);
    }

    return () => {
      if (timerRef.current !== undefined) {
        clearTimeout(timerRef.current);
      }
      document.removeEventListener('scroll', onScroll);
    };
  }, [screenSize]);

  const navigationTextColor = useMemo(() => {
    if (screenSize.width >= TailwindConstants.ThemeScreens.md) {
      if (scrollPosition === 'about') {
        return 'text-light';
      }
      if (scrollPosition === 'hero') {
        return 'text-main';
      }
    } else {
      return 'text-main';
    }

  }, [scrollPosition, screenSize]);

  const brandTextColor = useMemo(() => {
    if (screenSize.width >= TailwindConstants.ThemeScreens.md) {
      if (scrollPosition === 'about') {
        return 'text-light';
      }
      if (scrollPosition === 'hero') {
        return 'text-primary-color';
      }
    } else {
      return 'text-primary-color';
    }
  }, [scrollPosition, screenSize]);

  return (
    <>
      <nav id="navigation" className="duration-500 z-10 mb-12 border-gray-200 fixed left-0 right-0 top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className={`font-heading ${navigationTextColor} self-center text-5xl whitespace-nowrap font-bold`}> jc  </span> <span className={`mx-5 font-heading  ${brandTextColor} self-center text-5xl whitespace-nowrap font-bold`}>;</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="#" className={`block py-2 px-3 duration-500 ${navigationTextColor} bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0`} aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className={`block py-2 px-3 duration-500 ${navigationTextColor} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}>About</a>
              </li>
              <li>
                <a href="#" className={`block py-2 px-3 duration-500 ${navigationTextColor} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}>Projects</a>
              </li>
              <li>
                <a href="#" className={`block py-2 px-3 duration-500 ${navigationTextColor} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}>Contact</a>
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
