'use client';
import React, { ReactNode } from 'react';
import {motion} from 'framer-motion';
import { FramerMotionTypes } from '@/types';
import { useInView } from 'react-intersection-observer';
// import { FramerMotionConstants } from '@/constants';

type ParagraphProps = {
    children: ReactNode;
    overrides?: string;
    framerMotionProps?: FramerMotionTypes.PropsType;
};

export function Paragraph({ children, overrides = '', framerMotionProps }: ParagraphProps) {

    const commonStyles = 'font-body';
    const { ref, inView, entry } = useInView();
    const styleClasses = `${commonStyles} ${overrides}`;
    if (framerMotionProps) {
        return (    
            <motion.p 
            ref={ref}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={framerMotionProps.transition}
            animate={inView ? 'animate' : 'initial'}
            // {...framerMotionProps.variants}
            variants={framerMotionProps.variants} 
            className={styleClasses}>{children}</motion.p>
        );
    }
        return (
            <p className={styleClasses}>{children}</p>
        );
    
}
