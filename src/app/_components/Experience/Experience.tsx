import React from 'react';
import { Heading, Paragraph, GithubIcon, LinkedInIcon, EmailIcon, ArrowDownIcon, Span, CircleIcon, CheckIcon } from '@/design-system';
import './Experience.css';
import { Education, WorkExperience } from './Constants';
import { Footer } from '@/components';
import { Div } from '@/design-system/Div';
import { fadeInUp } from '@/constants/FramerMotion/FramerMotion';

export const Experience = () => {

    return (
        <section className="experience pt-8 lg:pt-20 snap-align-none lg:snap-center bg-cover overflow-hidden relative bg-center bg-no-repeat h-fit flex items-center content-center">
            <Div id="experience-container" overrides='h-full w-full relative grid items-start overflow-auto lg:grid-cols-2 gap-6 max-w-6xl mx-auto p-4 pb-0'>
                <Div overrides='col-start-1 col-end-4 lg:col-start-1 lg:col-end-1'>
                    <Heading framerMotionProps={{ variants: fadeInUp, transition: { duration: 1 , delay: 0.1} }} overrides='text-5xl lg:text-7xl mb-6 mt-6' >Education</Heading>
                    {Education && Education.map((education, index) => {

                        return (<Div framerMotionProps={{ variants: fadeInUp, transition: { duration: 1, delay: index * 0.10 } }} key={`${education}-${index}`} overrides='border border-solid p-4 rounded-md mb-4 border-primary-color'>
                            <Heading overrides='text-primary-color text-lg my-0'>{education.program}</Heading>
                            <Heading overrides='text-lg my-0 '>{education.school}</Heading>
                            <Paragraph overrides='text-xs lg:text-sm font-bold'>{education.level}</Paragraph>
                            <Paragraph overrides='text-xs lg:text-sm mb-4'>{education.location}</Paragraph>

                            {education.points?.map((point, index) => {

                                return (<li className='list-none mb-2 text-xs lg:text-sm' key={`${point}-${index}`}><CheckIcon styleClasses='text-primary-color mr-2'></CheckIcon> {point}</li>);
                            })}

                        </Div>);
                    })}

                </Div>
                <Div overrides='col-start-1 col-end-4 lg:col-start-2 lg:col-end-2'>
                    <Heading framerMotionProps={{ variants: fadeInUp, transition: { duration: 1, delay: 0.1} }} overrides='text-5xl lg:text-7xl mb-6 mt-6'>Experience</Heading>
                    {WorkExperience && WorkExperience.map((experience, index) => {

                        return (<Div framerMotionProps={{ variants: fadeInUp, transition: { duration: 1, delay: index * 0.10} }} key={`${experience}-${index}`} overrides='border border-solid p-4 rounded-md mb-4 border-accent'>
                            <Heading overrides='text-primary-color text-lg my-0'>{experience.company}</Heading>
                            <Paragraph overrides='text-xs lg:text-sm mb-4'>{experience.description}</Paragraph>

                            {experience.positions?.map((position, index) => {

                                return (<Div key={`${position}-${index}`}>
                                    <Heading overrides='text-lg my-0 mt-1'>{position.title}</Heading>
                                    <Paragraph overrides='text-xs lg:text-sm '>{position.year}</Paragraph>
                                    <Paragraph overrides='text-xs lg:text-sm mb-4'>{position.location}</Paragraph>
                                    <ul className='mb-6'>
                                        {position.points?.map((point, index) => {
                                            return (<li className='list-none mb-2 text-xs lg:text-sm' key={`${point}-${index}`}><CircleIcon styleClasses='text-primary-color text-xs mr-2'></CircleIcon> {point}</li>);
                                        })}
                                    </ul>

                                </Div>);
                            })}
                        </Div>);
                    })}
                </Div>
                {/* <Footer></Footer> */}
                <ArrowDownIcon styleClasses='animate-bounce bouncing-div mx-auto mt-auto text-primary-color pb-1 col-start-1 col-end-4'></ArrowDownIcon>
            </Div>
        </section>

    );
};
