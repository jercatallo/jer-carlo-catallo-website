import React from 'react';
import { Heading, Paragraph, GithubIcon, LinkedInIcon, EmailIcon, ArrowDownIcon, Span, CircleIcon, CheckIcon } from '@/design-system';
import './Projects.css';
import { ProjectsList } from './Constants';
import { Footer } from '@/components';
import { Div } from '@/design-system/Div';
import { fadeInUp } from '@/constants/FramerMotion/FramerMotion';

export const Projects = () => {

    return (
        <section className="projects pt-24 lg:pt-20 snap-align-none lg:snap-center bg-cover parallax-container overflow-hidden relative bg-center bg-no-repeat h-fit flex items-center content-center">
            <Div id="projects-container" overrides='h-full w-full relative items-start overflow-auto lg:grid-cols-2 gap-6 max-w-7xl mx-auto p-4'>
            <Heading framerMotionProps={{ variants: fadeInUp, transition: { duration: 1 , delay: 0.1} }} overrides='text-6xl lg:text-7xl mb-6 mt-6 text-main-light' >Projects</Heading>

                <Div overrides='flex flex-wrap gap-2 justify-center'>
                    {ProjectsList && ProjectsList.map((project, index) => {

                        return (<Div framerMotionProps={{ variants: fadeInUp, transition: { duration: 1, delay: index * 0.10 } }} key={`${project}-${index}`} overrides='border border-solid p-4 rounded-md mb-4 border-primary-color w-2/5'>
                            <Heading overrides='text-xl my-0 text-main-light'>{project.program}</Heading>
                            <Heading overrides='text-xl my-0 text-main-light'>{project.school}</Heading>
                            <Paragraph overrides='text-sm font-bold text-main-light'>{project.level}</Paragraph>
                            <Paragraph overrides='text-sm mb-4 text-main-light'>{project.location}</Paragraph>

                            {project.points?.map((point, index) => {

                                return (<li className='list-none mb-2 text-sm  text-main-light' key={`${point}-${index}`}><CheckIcon styleClasses='text-primary-color mr-2'></CheckIcon> {point}</li>);
                            })}

                        </Div>);
                    })}

                </Div>
                <Footer></Footer>
            </Div>
        </section>

    );
};
