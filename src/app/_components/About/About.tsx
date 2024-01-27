/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ArrowDownIcon, Button, Heading, Paragraph } from '@/design-system';
import './About.css';
import Image from 'next/image';
import { InfoBox, InfoBoxContainer, TechSkill } from './components';
import { fadeInUp } from '@/constants/FramerMotion/FramerMotion';
import { AboutConstants } from '@/constants';
import { Div } from '@/design-system/Div';

export const About = () => {

    return (
        <div style={{background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url("${process.env.IMAGE_URL}/forest.jpg") center/cover no-repeat fixed`}} className="snap-align-none md:snap-center relative bg-center bg-no-repeat h-fit md:h-screen grid items-center">
            <div className='about overflow-hidden max-w-6xl justify-center mx-auto p-1 relative grid items-center' >
                <section className='mt-12 grid p-4 py-8 md:py-4 md:grid-cols-2 items-center'>
                    <div>
                        <Heading framerMotionProps={{ variants: fadeInUp, transition: { duration: 0.5 } }} overrides='text-3xl mt-0 text-light mb-3'>
                            Hi there, I&apos;m Jer!
                        </Heading>
                        <Paragraph framerMotionProps={{ variants: fadeInUp, transition: { duration: 0.5, delay: 0.4 } }} overrides='text-base max-w-3xl text-light mb-5'>  I&apos;m a passionate and philomath Software Engineer from the Philippines, currently working at meldCX as a Full-stack developer. I specialize in utilizing JavaScript ecosystem on building full-stack web applications, and also employing Cloud Computing Services and DevOps Practices to ensure efficient and scalable solutions.
                        </Paragraph>
                        <Paragraph framerMotionProps={{ variants: fadeInUp, transition: { duration: 0.5, delay: 0.6 } }} overrides='text-base max-w-3xl text-light mb-5'>  Beyond coding, I enjoy stargazing with my newtonian telescope, practicing boxing and taekwondo, exploring new music, savoring delicious food, and, of course, learning, learning, and learning again.



                        </Paragraph>


                        <div className='flex gap-2 flex-wrap mt-5'>
                            {AboutConstants.Skills.map((skill) => {
                                return (<TechSkill framerMotionProps={{ variants: fadeInUp, transition: { duration: 0.5, delay: 1 } }} key={skill}>{skill}</TechSkill>);
                            })}
                        </div>

                        <InfoBoxContainer framerMotionProps={{ variants: fadeInUp, transition: { duration: 0.5, delay: 1.5 } }}>
                            <InfoBox data='Work Experience' value='3.5 Years' />
                            <InfoBox data='Degree' value='BSc CompSci' />
                            <InfoBox data='Field' value='Web Dev.' />
                            {/* <Button type='primary' overrides='px-2 text-xs'>
                                Learn more!
                            </Button> */}

                        </InfoBoxContainer>

                    </div>
                    <Div framerMotionProps={{ variants: fadeInUp, transition: { duration: 0.5, delay: 0 } }}>
                        <img className='my-image rounded max-w-xs rotate-2 m-auto bordered py-4 md:py-0 w-full h-auto' src={`${process.env.IMAGE_URL}/full-body.jpg`} alt='My Image'></img>
                    </Div>
                </section>
               
            </div>
            <ArrowDownIcon styleClasses='animate-bounce bouncing-div mx-auto mt-auto text-light pb-1'></ArrowDownIcon>
        </div>
    );
};
