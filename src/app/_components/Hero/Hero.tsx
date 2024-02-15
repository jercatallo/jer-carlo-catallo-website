import React from 'react';
import { Button, Heading, Paragraph, GithubIcon, LinkedInIcon, EmailIcon, ArrowDownIcon, Span } from '@/design-system';
import './Hero.css';
import Image from 'next/image';
import { fadeInUp } from '@/constants/FramerMotion/FramerMotion';

export const Hero = () => {

    return (
        <section id="hero" className="pt-16 lg:pt-0 snap-align-none lg:snap-center bg-cover h-full parallax-container overflow-hidden relative bg-center bg-no-repeat lg:h-screen flex items-center content-center">
            <div className='hero h-full w-full relative grid items-center'>
                <div className='mt-auto max-w-6xl grid justify-center mx-auto p-4' >
                    <div className=' animate-fade-in'>
                        <Heading framerMotionProps={{ variants: fadeInUp, transition: { duration: 0.5 } }} overrides='text-6xl' >
                            Jer Carlo Catallo
                        </Heading>
                        <Heading framerMotionProps={{ variants: fadeInUp, transition: { duration: 0.5, delay: 0.2 } }} type='h2' overrides='text-4xl mt-0 text-primary-color-2'>
                            Software Engineer
                        </Heading>
                        <Paragraph framerMotionProps={{ variants: fadeInUp, transition: { duration: 0.5, delay: 0.5 } }} overrides='max-w-3xl text-lg'>
                            Hey there! I&apos;m a devoted Software Engineer, crafting robust websites and apps. Dive into my digital world to explore the stories behind each line of code – tales of dedication and inventive solutions. Curious? Let&apos;s journey together!
                        </Paragraph>
                        <div className='flex gap-2 mt-5 flex-wrap'>
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
                            <Span framerMotionProps={{
                                variants: {
                                    animate: {
                                        x: 0, opacity: 1,
                                    },
                                    initial: {
                                        x: 100, opacity: 0,
                                    },
                                    exit: { opacity: 0, y: -20 },
                                },
                                transition: { duration: 1, delay: 1 },
                            }} overrides='text-lg py-1 lg:text-sm bordered border-main-light border-solid border-2 rounded px-2 flex items-center text-main-light border-main-light'> <Image className='' src={`${process.env.IMAGE_URL}/philippines-icon.jpg`} width={20} height={20} alt='Philippines Icon' /> +63 961 800 4628</Span>
                            
                        </div>
                    </div>
                </div>
            <ArrowDownIcon styleClasses='animate-bounce bouncing-div mx-auto mt-auto text-primary-color pb-1'></ArrowDownIcon>

            </div>
        </section>

    );
};
