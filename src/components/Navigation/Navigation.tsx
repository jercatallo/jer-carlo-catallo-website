/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useScreenSize } from '@/hooks';
import { TailwindConstants } from '@/constants/Tailwind';
import { Logger } from '@/utils';
import { HamburgerMenu } from './components/HamburgerMenu';
import { NavigationProvider, useNavigation } from './NavigationContext';
import { Div } from '@/design-system/Div';

const NavigationComponent = () => {
  const { showHamburgerMenu, setShowHamburgerMenu, scrollPosition, setScrollPosition } = useNavigation();

  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const screenSize = useScreenSize();
  const maxRatio = 1.25;
  const minRatio = 1;

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

      Logger.info('timerRef.current !== undefined && window.innerWidth >= TailwindConstants.ThemeScreens.lg', timerRef.current !== undefined && window.innerWidth >= TailwindConstants.ThemeScreens.lg);
      Logger.info('timerRef.current !== undefined', timerRef.current !== undefined);
      Logger.info('window.innerWidth', window.innerWidth);

      // if(localStorage.getItem('scrollPosition') !== 'experience'){
      if (timerRef.current !== undefined && window.innerWidth >= TailwindConstants.ThemeScreens.lg) {
        const navigation = document.getElementById('navigation');
        if (navigation) {
          navigation.style.opacity = '0';
        }

        clearTimeout(timerRef.current);
      }
      // }

      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        const hero = document.querySelector('.hero');
        const about = document.querySelector('.about');
        const experience = document.querySelector('.experience');

        if (isElementInViewPort(hero)) {
          setScrollPosition('hero');
          localStorage.setItem('scrollPosition', 'hero');
        } else if (isElementInViewPort(about)) {
          setScrollPosition('about');
          localStorage.setItem('scrollPosition', 'hero');
        } else if (isElementInViewPort(experience)) {
          setScrollPosition('experience');
          localStorage.setItem('scrollPosition', 'experience');
        }

        const navigation = document.getElementById('navigation');

        Logger.info('hero', hero);
        Logger.info('about', about);
        Logger.info('experience', experience);
        Logger.info('navigation', navigation);
        Logger.info('isElementInViewPort(hero):', isElementInViewPort(hero));
        Logger.info('isElementInViewPort(about)', isElementInViewPort(about));
        Logger.info('isElementInViewPort(experience)', isElementInViewPort(experience));

        if (navigation) {
          navigation.style.opacity = '1';
        }
      }, 300);
    }
  }
  ``;


  useEffect(() => {
    if (scrollPosition !== 'experience' && typeof window !== 'undefined' && document.readyState === 'complete' && screenSize.width >= TailwindConstants.ThemeScreens.lg) {
      const experienceContainer = document.getElementById('experience-container');
      if (experienceContainer) {
        experienceContainer.scrollTop = 0;
      }
    }

  }, [scrollPosition]);

  useEffect(() => {
    Logger.info('screenSize', screenSize);
    Logger.info('window', window);
    Logger.info('document.readyState', document.readyState);

    function addScrollListener() {
      if (typeof window !== 'undefined' && document.readyState === 'complete') {
        if (timerRef.current !== undefined) {
          clearTimeout(timerRef.current);
        }
        document.removeEventListener('scroll', handleScroll);
        document.addEventListener('scroll', handleScroll, true);
        Logger.info('addEventListener scroll');
      } else {
        // If window is still undefined, retry after a delay
        setTimeout(addScrollListener, 1000);
      }
    };

    if (typeof window !== 'undefined' && document.readyState === 'complete' && screenSize.width >= TailwindConstants.ThemeScreens.lg) {
      addScrollListener();
    } else {
      setTimeout(addScrollListener, 1000);
    }

    return () => {
      if (timerRef.current !== undefined) {
        clearTimeout(timerRef.current);
      }

      document.removeEventListener('scroll', handleScroll);
      Logger.info('removeEventListener scroll');
    };
  }, [screenSize, scrollPosition]);

  const navigationTextColor = useMemo(() => {
    let text = '';
    if (screenSize.width >= TailwindConstants.ThemeScreens.lg) {
      if (['about'].includes(scrollPosition)) {
        text = 'text-light';
      }
      if (['experience', 'hero'].includes(scrollPosition)) {
        text = 'text-main';
      }
    } else {
      text = 'text-main';
    }
    const isRatioNotSupported = screenSize.devicePixelRatio >= maxRatio || screenSize.devicePixelRatio < minRatio;

    if (isRatioNotSupported) {
      text = 'text-main';
    }
    Logger.info('navigationTextColor text', text);

    return text;
  }, [scrollPosition, screenSize]);

  const brandTextColor = useMemo(() => {
    let text = '';
    if (screenSize.width >= TailwindConstants.ThemeScreens.lg) {
      if (['about'].includes(scrollPosition)) {
        text = 'text-light';
      }

      if (['experience', 'hero'].includes(scrollPosition)) {
        text = 'text-primary-color';
      }
    } else {
      text = 'text-primary-color';
    }

    const isRatioNotSupported = screenSize.devicePixelRatio >= maxRatio || screenSize.devicePixelRatio < minRatio;

    if (isRatioNotSupported) {
      text = 'text-primary-color';
    }

    return text;
  }, [scrollPosition, screenSize]);

  const navigationBackground = useMemo(() => {
    let text = 'none';

    const isRatioNotSupported = screenSize.devicePixelRatio >= maxRatio || screenSize.devicePixelRatio < minRatio;
    const isBGWhite = screenSize.width <= TailwindConstants.ThemeScreens.lg || isRatioNotSupported;
    if (isBGWhite) {
      text = 'white';
    }

    return text;
  }, [screenSize, scrollPosition]);

  const onSectionClick = ({ elementClassName }: { elementClassName: string }) => {
    const element = document.getElementById(elementClassName);
    element?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  };

  return (
    <>
      <nav id='navigation' style={{ background: navigationBackground }} className={`bg-${navigationBackground} duration-500 z-10 mb-12 border-gray-200 fixed left-0 right-0 top-0`}>
        <Div overrides='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a href='#' className='flex items-center space-x-3 rtl:space-x-reverse'>
            <span className={`font-heading ${navigationTextColor} self-center text-5xl whitespace-nowrap font-bold`}> jc  </span> <span className={`mx-5 font-heading  ${brandTextColor} self-center text-5xl whitespace-nowrap font-bold`}>;</span>
          </a>
          <button data-collapse-toggle='navbar-default' type='button' onClick={() => {
            setShowHamburgerMenu(prevShowHamburgerMenu => !prevShowHamburgerMenu);
          }} className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200' aria-controls='navbar-default' aria-expanded='false'>
            <span className='sr-only'>Open main menu</span>
            <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
            </svg>
          </button>
          <Div overrides='hidden w-full lg:block lg:w-auto'>
            <ul className='font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white'>
              <li onClick={() => onSectionClick({ elementClassName: 'hero' })}>
                <a href='#' className={`block py-2 px-3 duration-500 ${navigationTextColor} bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0`} aria-current='page'>Home</a>
              </li>
              <li onClick={() => onSectionClick({ elementClassName: 'about' })}>
                <a href='#' className={`block py-2 px-3 duration-500 ${navigationTextColor} rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0`}>About</a>
              </li>
              <li onClick={() => onSectionClick({ elementClassName: 'experience' })}>
                <a href='#' className={`block py-2 px-3 duration-500 ${navigationTextColor} rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0`}>Experience</a>
              </li>
              <li>
                <a target='_blank' href='https://drive.google.com/file/d/1evTroPQysDvLXgTliyGe-n3UbZR6IVzs/view?usp=sharing' className={`block py-2 px-3 duration-500 ${navigationTextColor} rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0`}>Resume</a>
              </li>
              <li>
                <a target='_blank' href='https://drive.google.com/file/d/1MiGGrTrHBLtBRhhuE1otrm23EaS5JUYM/view?usp=sharing' className={`block py-2 px-3 duration-500 ${navigationTextColor} rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0`}>CV</a>
              </li>

            </ul>
          </Div>
        </Div>
      </nav>
      <HamburgerMenu></HamburgerMenu>
    </>

  );
};

export const Navigation = () => {
  return (
    <NavigationProvider>
      <NavigationComponent></NavigationComponent>
    </NavigationProvider>
  );
};

export default Navigation;
