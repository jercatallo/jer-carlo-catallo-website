'use client';
import React, { ReactNode } from 'react';
import {motion} from 'framer-motion';
import { FramerMotionTypes } from '@/types';
import { useInView } from 'react-intersection-observer';
// import { FramerMotionConstants } from '@/constants';

type DivProps = {
    children: ReactNode;
    overrides?: string;
    framerMotionProps?: FramerMotionTypes.PropsType;
    id?: string;
};

export function Div({ children, overrides = '', framerMotionProps, id }: DivProps) {
    const commonStyles = 'font-body';
    const { ref, inView, entry } = useInView();

    const styleClasses = `${commonStyles} ${overrides}`;

    if (framerMotionProps) {
        return (
            <motion.div
            ref={ref}
            id={id}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            animate={inView ? 'animate' : 'initial'}
            transition={framerMotionProps.transition}
            // {...framerMotionProps.variants}
            variants={framerMotionProps.variants}
            className={styleClasses}>{children}</motion.div>
        );
    }
        return (
            <div id={id} className={styleClasses}>{children}</div>
        );

}
