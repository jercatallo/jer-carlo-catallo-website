"use client";
import React, { ReactNode } from 'react';
import {motion} from 'framer-motion';
import { FramerMotionTypes } from '@/types';
import { useInView } from 'react-intersection-observer';
// import { FramerMotionConstants } from '@/constants';

type DivProps = {
    children: ReactNode;
    overrides?: string;
    framerMotionProps?: FramerMotionTypes.PropsType;
};

export function Div({ children, overrides = '', framerMotionProps }: DivProps) {
    const commonStyles = 'font-body';
    const { ref, inView, entry } = useInView();

    const styleClasses = `${commonStyles} ${overrides}`;

    if (framerMotionProps) {
        return (    
            <motion.div 
            ref={ref}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            animate={inView ? "animate" : "initial"}
            transition={framerMotionProps.transition}
            // {...framerMotionProps.variants}
            variants={framerMotionProps.variants} 
            className={styleClasses}>{children}</motion.div>
        );
    }else{
        return (
            <div className={styleClasses}>{children}</div>
        );
    }
}
