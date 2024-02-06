import { motion } from "framer-motion";
import { ExitIcon } from '@/design-system';
import React from 'react';
import { useNavigation } from '../../NavigationContext';

export const HamburgerMenu = () => {
    const { showHamburgerMenu, setShowHamburgerMenu } = useNavigation();
    return (
        <motion.nav
            initial="closed"
            variants={{
                open: { x: 0 },
                closed: { x: "100%" },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            animate={showHamburgerMenu ? 'open' : 'closed'}
            className='h-full w-screen lg:hidden sm:w-96 z-30 bg-light duration-500 border-gray-200 fixed right-0 top-0'>
            <div className="p-4">
                <div className="flex flex-wrap items-center justify-between">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className={`font-heading text-main self-center text-5xl whitespace-nowrap font-bold`}> jc  </span> <span className={`mx-5 font-heading text-primary-color self-center text-5xl whitespace-nowrap font-bold`}>;</span>
                    </a>
                    <button onClick={() => setShowHamburgerMenu(false)}>
                        <ExitIcon styleClasses='text-2xl' />
                    </button>
                </div>
                <ul className='font-medium grid py-4 lg:p-0 mt-4rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white'>
              <li onClick={() => {
                const element = document.getElementById('hero');
                setShowHamburgerMenu(false);
                element?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
              }}>
                <a href='#' className={`block py-2 duration-500 text-main bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0`} aria-current='page'>Home</a>
              </li>
              <li onClick={() => {
                const element = document.getElementById('about');
                setShowHamburgerMenu(false);
                element?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
              }}>
                <a href='#' className={`block py-2 duration-500 text-main rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0`}>About</a>
              </li>
              <li>
                <a target='_blank' href='https://drive.google.com/file/d/1evTroPQysDvLXgTliyGe-n3UbZR6IVzs/view?usp=sharing' className={`block py-2 duration-500 text-main rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0`}>Resume</a>
              </li>
              <li>
                <a target='_blank' href='https://drive.google.com/file/d/1MiGGrTrHBLtBRhhuE1otrm23EaS5JUYM/view?usp=sharing' className={`block py-2 duration-500 text-main rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0`}>CV</a>
              </li>
            </ul>
            </div>
        </motion.nav>
    );
};

