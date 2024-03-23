'use client';
import { FramerMotionTypes } from '@/types';
import React, { ReactNode, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { FramerMotionConstants } from '@/constants';

type ButtonProps = {
  children: ReactNode;
  type?: 'primary' | 'primary-2' | string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  buttonType?: 'button' | 'submit' | 'reset';
  overrides?: string;
  framerMotionProps?: FramerMotionTypes.PropsType;
};

export const Button = ({
  children,
  type = 'primary',
  onClick,
  buttonType = 'button',
  overrides = '',
  framerMotionProps,
}: ButtonProps) => {
  const { ref, inView, entry } = useInView();
  const buttonStyles: Record<string, string> = {
    'primary': 'bordered border-solid border-2 border-primary-color bg-primary-color py-1 py-2 px-2 hover:bg-primary-color-2',
    'primary-2': 'bordered border-solid border-2 border-primary-color py-1 py-2 px-2 hover:bg-primary-color-2',
  };

  const commonStyles = 'inline w-fit rounded text-on-primary';

  const styleClasses = `${commonStyles} ${buttonStyles[type]} ${overrides}`;


  if (framerMotionProps) {
    return (
      <motion.button
      initial='initial'
      whileInView='animate'
        animate={inView ? 'animate' : 'initial'}
        viewport={{ once: true }}
        transition={framerMotionProps.transition}
        // {...framerMotionProps.variants}
        variants={framerMotionProps.variants}
        type={buttonType}
        className={styleClasses}
        // onClick={onClick}
      >
        {children}
      </motion.button>
    );
  }
    return (
      <button
        type={buttonType}
        className={styleClasses}
        onClick={onClick}
      >
        {children}
      </button>
    );


};
