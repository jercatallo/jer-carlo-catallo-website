import React from 'react';
import { Button, Heading, Paragraph, GithubIcon, LinkedInIcon, EmailIcon, ArrowDownIcon, Span, PhoneIcon, NPMIcon } from '@/design-system';
import './Hero.css';
import Image from 'next/image';
import { fadeInUp } from '@/constants/FramerMotion/FramerMotion';
import { Div } from '@/design-system/Div';

export const Hero = () => {

    return (
        <section className="pt-16 lg:pt-0 snap-align-none lg:snap-center bg-cover h-full overflow-hidden relative bg-center bg-no-repeat lg:h-screen flex items-center content-center">
            <Div overrides='hero h-full w-full relative grid items-center'>
                <Div overrides='mt-auto max-w-6xl grid justify-center mx-auto p-4' >
                    <Div overrides=' animate-fade-in'>
                        <Heading framerMotionProps={{ variants: fadeInUp, transition: { duration: 1, delay: 1 } }} overrides='text-5xl lg:text-7xl my-6' >
                            Jer Carlo Catallo
                        </Heading>
                        <Heading framerMotionProps={{ variants: fadeInUp, transition: { duration: 1, delay: 1.2 } }} type='h2' overrides='text-3xl my-6 mt-0 text-primary-color-2'>
                            Software Engineer
                        </Heading>
                        <Paragraph framerMotionProps={{ variants: fadeInUp, transition: { duration: 1, delay: 1.5 } }} overrides='max-w-3xl text-lg'>
                            Hey there! I&apos;m a devoted Software Engineer, crafting robust websites and apps. Dive into my digital world to explore the stories behind each line of code – tales of dedication and inventive solutions. Curious? Let&apos;s journey together!
                        </Paragraph>
                        <Div overrides='flex gap-2 mt-5 flex-wrap'>
                            <a href='https://www.linkedin.com/in/jercarlocatallo/' target='_blank' className='animate-button-animations-2'>
                                <Button framerMotionProps={{
                                    variants: fadeInUp,
                                    transition: { duration: 1, delay: 1.5 },
                                }} type='primary' overrides='px-2  ' >
                                    <LinkedInIcon styleClasses='text-2xl'></LinkedInIcon>
                                </Button>
                            </a>
                            <a href='https://github.com/jercatallo' target='_blank' className='animate-button-animations-1'>
                                <Button framerMotionProps={{
                                    variants: fadeInUp,
                                    transition: { duration: 1, delay: 1.7 },
                                }} type='primary' overrides='px-2  ' >
                                    <GithubIcon styleClasses='text-2xl'></GithubIcon>
                                </Button>
                            </a>

                            <a href='https://www.npmjs.com/~jer.catallo' target='_blank' className='animate-button-animations-3'>
                                <Button framerMotionProps={{
                                    variants: fadeInUp,
                                    transition: { duration: 1, delay: 1.9 },
                                }} type='primary' overrides='px-2'>
                                    <NPMIcon styleClasses='text-2xl'></NPMIcon>
                                </Button>
                            </a>
                            <a href='mailto:jer.catallo@gmail.com' target='_blank' className='animate-button-animations-3'>
                                <Button framerMotionProps={{
                                    variants: fadeInUp,
                                    transition: { duration: 1, delay: 2.1 },
                                }} type='primary' overrides='px-2'>
                                    <EmailIcon styleClasses='text-2xl'></EmailIcon>
                                </Button>
                            </a>
                            <a href='tel:+639618004628' target='_blank' className='animate-button-animations-3'>
                                <Button framerMotionProps={{
                                    variants: fadeInUp,
                                    transition: { duration: 1, delay: 2.3 },
                                }} type='primary' overrides='px-2'>
                                    <PhoneIcon styleClasses='text-2xl'></PhoneIcon>
                                </Button>
                            </a>

                        </Div>
                    </Div>
                </Div>
                <ArrowDownIcon styleClasses='animate-bounce bouncing-div mx-auto mt-auto text-primary-color pb-1'></ArrowDownIcon>

            </Div>
        </section>

    );
};
