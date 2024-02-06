'use client';

import React, { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FramerMotionTypes } from '@/types';
// import { FramerMotionConstants } from '@/constants';
import { useInView } from 'react-intersection-observer';
type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  type?: HeadingType;
  children: ReactNode;
  overrides?: string;
  framerMotionProps?: FramerMotionTypes.PropsType;
}

export function Heading({ type = 'h1', children, overrides = '', framerMotionProps }: HeadingProps) {
  const commonStyles = 'font-heading my-6 text-left font-bold';
  const { ref, inView } = useInView();

  const styleClasses = `${commonStyles} ${overrides}`;

  if (framerMotionProps) {
    const MotionHeading = motion[type];

    return ( <MotionHeading
        ref={ref}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={framerMotionProps.transition}
        animate={inView ? 'animate' : 'initial'}
        // {...framerMotionProps.variants}
        variants={framerMotionProps.variants}
        className={styleClasses}
      >
        {children}
      </MotionHeading>


    );
  }
    const HeadingElement = type;
    return <HeadingElement className={styleClasses}>{children}</HeadingElement>;

}
