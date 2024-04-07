/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ArrowDownIcon, Heading, Paragraph } from '@/design-system';
import './About.css';
import { InfoBox, InfoBoxContainer, TechSkill } from './components';
import { fadeInUp } from '@/constants/FramerMotion/FramerMotion';

import { Div } from '@/design-system/Div';
import { Skills } from './Constants';
export const About = () => {

    return (
        <section style={{
            background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url("${process.env.IMAGE_URL}/forest.jpg") center/cover no-repeat fixed`,
        }} className="snap-align-none lg:snap-center relative bg-center bg-no-repeat h-fit lg:5/6 grid items-center px-4">
            <Div overrides='about overflow-hidden max-w-7xl justify-center mx-auto p-1 relative grid items-center mt-auto' >
                <Div overrides='mt-12 grid py-24 lg:grid-cols-2 items-center'>
                    <Div>
                        <Heading framerMotionProps={{ variants: fadeInUp, transition: { duration: 1 } }} overrides='text-5xl lg:text-7xl mt-0 text-main-light mb-3'>
                            Hi there, I&apos;m Jer!
                        </Heading>
                        <Paragraph framerMotionProps={{ variants: fadeInUp, transition: { duration: 1, delay: 0.4 } }} overrides='leading-relaxed text-base lg:text-md max-w-2xl text-lg text-main-light mb-5'>  I&apos;m a passionate and philomath Software Engineer from the Philippines, currently working at meldCX as a Full-stack developer. I specialize in utilizing JavaScript ecosystem on building full-stack web applications, and also employing Cloud Computing Services and DevOps Practices to ensure efficient and scalable solutions.
                        </Paragraph>
                        <Paragraph framerMotionProps={{ variants: fadeInUp, transition: { duration: 1, delay: 0.6 } }} overrides='leading-relaxed text-base lg:text-md max-w-2xl text-lg text-main-light mb-5'>Beyond coding, I enjoy stargazing with my newtonian telescope, practicing boxing and taekwondo, exploring new music, cooking, engaging in creative activities, playing card and board games, and, of course, learning, learning, and learning again.
                        </Paragraph>

                        <Div overrides='flex gap-2 flex-wrap mt-5'>
                            {Skills.map((skill) => {
                                return (<TechSkill framerMotionProps={{ variants: fadeInUp, transition: { duration: 1, delay: 1 } }} key={skill}>{skill}</TechSkill>);
                            })}
                        </Div>

                        <InfoBoxContainer framerMotionProps={{ variants: fadeInUp, transition: { duration: 1, delay: 1.5 } }}>
                            <InfoBox data='Work Experience' value='4 Years' />
                            <InfoBox data='Degree' value='BSc CompSci' />
                            <InfoBox data='Field' value='Web Dev.' />
                        </InfoBoxContainer>

                    </Div>
                    <Div framerMotionProps={{ variants: fadeInUp, transition: { duration: 1, delay: 0 } }}>
                    {/* <Image alt="Jer Carlo Image" layout="responsive" className='rounded my-image rounded max-w-xs rotate-2 m-auto bordered py-4' width={3648} height={5472} src={`${process.env.IMAGE_URL}/full-body.jpg`}></Image> */}
                        <img className='project-image rounded max-w-xs rotate-2 m-auto bordered py-4 lg:py-0 w-4/5 md:w-72 lg:w-96 h-auto' src={`${process.env.IMAGE_URL}/full-body.jpg`} alt='My Image'></img>
                    </Div>
                </Div>

            </Div>
            <ArrowDownIcon styleClasses='animate-bounce bouncing-div mx-auto mt-auto text-main-light pb-1'></ArrowDownIcon>
        </section>
    );
};
