'use client';
import React, { ReactNode } from 'react';
import {motion} from 'framer-motion';
import { FramerMotionTypes } from '@/types';
import { useInView } from 'react-intersection-observer';
// import { FramerMotionConstants } from '@/constants';

type SpanProps = {
    children: ReactNode;
    overrides?: string;
    framerMotionProps?: FramerMotionTypes.PropsType;
};

export function Span({ children, overrides = '', framerMotionProps }: SpanProps) {
    const commonStyles = 'font-body';
    const { ref, inView, entry } = useInView();

    const styleClasses = `${commonStyles} ${overrides}`;

    if (framerMotionProps) {
        return (    
            <motion.span 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            animate={inView ? 'animate' : 'initial'}
            transition={framerMotionProps.transition}
            // {...framerMotionProps.variants}
            variants={framerMotionProps.variants} 
            className={styleClasses}>{children}</motion.span>
        );
    }
        return (
            <span className={styleClasses}>{children}</span>
        );
    
}
