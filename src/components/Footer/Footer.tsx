import React from 'react';
import { Button, EmailIcon, GithubIcon, Heading, LinkedInIcon, PhoneIcon, Span } from '@/design-system';
import { fadeInUp } from '@/constants/FramerMotion/FramerMotion';
import { Div } from '@/design-system/Div';

export const Footer = () => {
    return (
        <footer className="col-start-1 col-end-4 py-6 pt-16 overflow-hidden relative bg-center bg-no-repeat grid gap-4 items-center content-center text-center">
            <Div overrides='relative grid items-start overflow-auto gap-6 max-w-6xl mx-auto p-4 pb-0 text-center' >
                <Div overrides='flex gap-2 mt-5 flex-wrap'>
                    <a href='https://github.com/jercatallo' target='_blank' className='animate-button-animations-1'>
                        <Button framerMotionProps={{
                            variants: fadeInUp,
                            transition: { duration: 1, delay: 0.5 },
                        }} type='primary' overrides='px-2  ' >
                            <GithubIcon styleClasses='text-2xl'></GithubIcon>
                        </Button>
                    </a>
                    <a href='https://www.linkedin.com/in/jercarlocatallo/' target='_blank' className='animate-button-animations-2'>
                        <Button framerMotionProps={{
                            variants: fadeInUp,
                            transition: { duration: 1, delay: 0.6 },
                        }} type='primary' overrides='px-2  ' >
                            <LinkedInIcon styleClasses='text-2xl'></LinkedInIcon>
                        </Button>
                    </a>
                    <a href='mailto:jer.catallo@gmail.com' target='_blank' className='animate-button-animations-3'>
                        <Button framerMotionProps={{
                            variants: fadeInUp,
                            transition: { duration: 1, delay: 0.7 },
                        }} type='primary' overrides='px-2'>
                            <EmailIcon styleClasses='text-2xl'></EmailIcon>
                        </Button>
                    </a>
                    <a href='tel:+639618004628' target='_blank' className='animate-button-animations-3'>
                        <Button framerMotionProps={{
                            variants: fadeInUp,
                            transition: { duration: 1, delay: 0.9 },
                        }} type='primary' overrides='px-2'>
                            <PhoneIcon styleClasses='text-2xl'></PhoneIcon>
                        </Button>
                    </a>
                </Div>
            </Div>
            <Heading overrides='text-center text-main-light text-sm' framerMotionProps={{ variants: fadeInUp, transition: { duration: 1, delay: 0 } }}>Please feel free to get in touch!</Heading>
            <Heading overrides='text-center font-light text-main-light pt-3 text-sm' framerMotionProps={{ variants: fadeInUp, transition: { duration: 1, delay: 0} }}>© 2024 All Rights Reserved | Jer Carlo Catallo</Heading>
        </footer>
    );
};

