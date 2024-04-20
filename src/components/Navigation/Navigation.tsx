/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useScreenSize } from '@/hooks';
import {motion} from 'framer-motion';
import { TailwindConstants } from '@/constants/Tailwind';
import { Logger } from '@/utils';
import { HamburgerMenu } from './components/HamburgerMenu';
import { NavigationProvider, useNavigation } from './NavigationContext';
import { Div } from '@/design-system/Div';
import './Navigation.css';
import { ThemeColors } from '@/constants/Tailwind/Tailwind';
import { fadeInUp } from '@/constants/FramerMotion/FramerMotion';

const NavigationComponent = () => {
  const { setShowHamburgerMenu, scrollPosition, setScrollPosition } = useNavigation();
  const screenSize = useScreenSize();
  const [isInHeroSection, setIsInHeroSection] = useState(true);


  useEffect(() => {
    const navigation = document.getElementById('navigation');
    if (typeof window !== 'undefined' && document.readyState === 'complete' && screenSize.width < TailwindConstants.ThemeScreens.lg) {
      if (navigation) {
        navigation.style.background = 'white';
      }
    }
  },[screenSize]);

  function handleScroll() {
    if (window.innerWidth >= TailwindConstants.ThemeScreens.lg) {

      Logger.info('window.innerWidth', window.innerWidth);

      const navigation = document.getElementById('navigation');
      const hero = document.querySelector('.hero');
      const about = document.querySelector('.about');
      const experience = document.querySelector('.experience');
      const projects = document.querySelector('.projects');

      if (hero && navigation) {
        if ((window.scrollY + hero.getBoundingClientRect().top) < 0 && screenSize.width >= TailwindConstants.ThemeScreens.lg) {
          navigation.style.boxShadow = '0 4px 8px -2px silver';
          navigation.style.background = ThemeColors['primary-color'];
          setIsInHeroSection(false);
        } else {
          navigation.style.background = 'white';
          navigation.style.boxShadow = 'none';
          setIsInHeroSection(true);
        }
      }

      if (projects) {
        if ((window.scrollY + projects.getBoundingClientRect().top) < 300) {
          setScrollPosition('projects');
          return;
        }
      }

      if (experience) {
        if ((window.scrollY + experience.getBoundingClientRect().top) < 300) {
          setScrollPosition('experience');
          return;
        }
      }

      if (about) {
        if ((window.scrollY + about.getBoundingClientRect().top) < 300) {
          setScrollPosition('about');
          return;
        }
      }

      if (hero) {
        if ((window.scrollY + hero.getBoundingClientRect().top) < 300) {
          setScrollPosition('hero');
        }
      }
    }
  }
  ``;

  useEffect(() => {
    Logger.info('screenSize', screenSize);
    Logger.info('window', window);
    Logger.info('document.readyState', document.readyState);

    function addScrollListener() {
      if (typeof window !== 'undefined' && document.readyState === 'complete') {
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
      document.removeEventListener('scroll', handleScroll);
      Logger.info('removeEventListener scroll');
    };
  }, [screenSize, scrollPosition]);

  const navigationTextColor = useMemo(() => {
    if (typeof window !== 'undefined' && document.readyState === 'complete' && screenSize.width < TailwindConstants.ThemeScreens.lg) {
      return 'text-main';
    }
    if(!isInHeroSection){
      return 'text-main-light';
    }

    return 'text-main';
  }, [isInHeroSection, screenSize]);

  const brandTextColor = useMemo(() => {
    if (typeof window !== 'undefined' && document.readyState === 'complete' && screenSize.width < TailwindConstants.ThemeScreens.lg) {
      return 'text-primary-color';
    }
    if(!isInHeroSection){
      return 'text-main-light';
    }
    
    return 'text-primary-color';
  }, [isInHeroSection, screenSize]);

  const onSectionClick = ({ elementClassName }: { elementClassName: string }) => {
    const element = document.querySelector(`.${elementClassName}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const checkIfInSection = useCallback(({ section }: { section: string }) => {
    if ((section === 'about' && scrollPosition === 'about') || (section === 'hero' && scrollPosition === 'hero') || (section === 'experience' && scrollPosition === 'experience') || (section === 'projects' && scrollPosition === 'projects')) {
      if(!isInHeroSection){
        return 'underline underline-offset-8 text-main-light';
      }
      return 'font-bold text-primary-color';
    }
  }, [scrollPosition,isInHeroSection]);

  return (
    <>
      <motion.nav initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            animate={'animate'}
            // {...framerMotionProps.variants}
            variants={fadeInUp} 
             id='navigation' style={{background: 'white'}} className={`duration-500 z-10 mb-12 border-gray-200 fixed left-0 right-0 top-0`}>
        <Div overrides='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a href='#' className='flex items-center space-x-3 rtl:space-x-reverse'>
            <span className={`font-heading ${navigationTextColor} self-center text-5xl whitespace-nowrap font-bold`}> jer  </span> <span className={`mx-5 font-heading ${brandTextColor} self-center text-5xl whitespace-nowrap font-bold`}>;</span>
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
                <a href='#' className={`block py-2 px-3 duration-500 ${navigationTextColor} ${checkIfInSection({ section: 'hero' })} bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 text-lg`} aria-current='page'>Home</a>
              </li>
              <li onClick={() => onSectionClick({ elementClassName: 'about' })}>
                <a href='#' className={`block py-2 px-3 duration-500 ${navigationTextColor} ${checkIfInSection({ section: 'about' })} rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 text-lg`}>About</a>
              </li>
              <li onClick={() => onSectionClick({ elementClassName: 'experience' })}>
                <a href='#' className={`block py-2 px-3 duration-500 ${navigationTextColor} ${checkIfInSection({ section: 'experience' })} rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 text-lg`}>Experience</a>
              </li>
              <li onClick={() => onSectionClick({ elementClassName: 'projects' })}>
                <a href='#' className={`block py-2 px-3 duration-500 ${navigationTextColor} ${checkIfInSection({ section: 'projects' })} rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 text-lg`}>Projects</a>
              </li>
              <li>
                <a target='_blank' href='https://drive.google.com/file/d/1evTroPQysDvLXgTliyGe-n3UbZR6IVzs/view?usp=sharing' className={`block py-2 px-3 duration-500 ${navigationTextColor} rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 text-lg`}>Resume</a>
              </li>
              <li>
                <a target='_blank' href='https://drive.google.com/file/d/1MiGGrTrHBLtBRhhuE1otrm23EaS5JUYM/view?usp=sharing' className={`block py-2 px-3 duration-500 ${navigationTextColor} rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 text-lg`}>CV</a>
              </li>

            </ul>
          </Div>
        </Div>
      </motion.nav>
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
