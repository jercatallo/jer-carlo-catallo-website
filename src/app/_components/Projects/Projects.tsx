'use client';
import React from 'react';
import { AWSIcon, CSSIcon, DockerIcon, GithubActionsIcon, HTMLIcon, Heading, IconType, JavaScriptIcon, JestIcon, LetsEncryptIcon, NPMIcon, NextJSIcon, NginxIcon, Paragraph, ReactIcon, RenderIcon, RollupIcon, SassIcon, SnykIcon, TailwindIcon, TypeScriptIcon, UbuntuIcon, ViteIcon, WebpackIcon } from '@/design-system';
import './Projects.css';
import { ProjectsList } from './Constants';
import { Footer } from '@/components';
import { Div } from '@/design-system/Div';
import { fadeInUp } from '@/constants/FramerMotion/FramerMotion';
import Image from 'next/image';
import { ViewButton } from './components';

export const Projects = () => {
    const iconClasses = 'text-main-light text-3xl';

    const TechStacksMapping: Record<string, React.ComponentElement<IconType, any>> = {
        'React': <ReactIcon styleClasses={iconClasses} />,
        'HTML': <HTMLIcon styleClasses={iconClasses} />,
        'CSS': <CSSIcon styleClasses={iconClasses} />,
        'JavaScript': <JavaScriptIcon styleClasses={iconClasses} />,
        'TypeScript': <TypeScriptIcon styleClasses={iconClasses} />,
        'Next.js': <NextJSIcon styleClasses={iconClasses} />,
        'AWS': <AWSIcon styleClasses={iconClasses} />,
        'Nginx': <NginxIcon styleClasses={iconClasses} />,
        'Github Actions': <GithubActionsIcon styleClasses={iconClasses} />,
        'Docker': <DockerIcon styleClasses={iconClasses} />,
        'Snyk': <SnykIcon styleClasses={iconClasses} />,
        'Ubuntu': <UbuntuIcon styleClasses={iconClasses} />,
        'Tailwind': <TailwindIcon styleClasses={iconClasses} />,
        "Let's Encrypt": <LetsEncryptIcon styleClasses={iconClasses} />,
        "Sass": <SassIcon styleClasses={iconClasses} />,
        "Webpack": <WebpackIcon styleClasses={iconClasses} />,
        "Render": <RenderIcon styleClasses={iconClasses} />,
        "Vite": <ViteIcon styleClasses={iconClasses} />,
        "Rollup": <RollupIcon styleClasses={iconClasses} />,
        "npm": <NPMIcon styleClasses={iconClasses} />,
        "Jest": <JestIcon styleClasses={iconClasses} />,
    };

    return (
        <section className="projects py-24 lg:py-20 snap-align-none lg:snap-center bg-cover parallax-container overflow-hidden relative bg-center bg-no-repeat h-fit flex items-center content-center">
            <Div overrides='projects-container h-full w-full relative items-start overflow-auto lg:grid-cols-2 gap-6 mx-auto p-4'>
                <Heading framerMotionProps={{ variants: fadeInUp, transition: { duration: 1, delay: 0.1 } }} overrides='mb-14 text-5xl lg:text-7xl mb-6 mt-6 text-main-light' >Featured Projects</Heading>

                <Div overrides='flex flex-wrap gap-16 justify-center'>
                    {ProjectsList && ProjectsList.map((project, index) => {

                        return (<Div framerMotionProps={{ variants: fadeInUp, transition: { duration: 1, delay: index * 0.10 } }} key={`${project.title}-${index}`} overrides='h-full  border-solid rounded-md border-primary-color w-full lg:w-4/12 xl:w-3/12'>

                            {/* <Image alt="project-url" layout="responsive" className='rounded' width={5118} height={2494} src={project.image}></Image> */}
                            <img className='project-image rounded rotate-2 m-auto bordered w-4/5 py-12 h-auto' src={project.image} alt={`${project.title}`}></img>
                            <Div overrides='p-4'>
                                <Heading overrides='text-2xl my-0 text-main-light'>{project.title}</Heading>
                                <Paragraph overrides='text-md my-0 text-main-light'>{project.description}</Paragraph>
                                <Div overrides='flex py-4 gap-3 flex-wrap'>
                                    {project.techstacks.map((tech) => {
                                        if(TechStacksMapping[tech]){
                                            return <span key={tech}>{TechStacksMapping[tech]}</span>;
                                        }
                                    })}

                                </Div>

                                {project.repositoryUrl ? <ViewButton url={project.repositoryUrl} overrides="mr-4">View Code</ViewButton> : null}
                                {project.siteUrl ? <ViewButton url={project.siteUrl} type="primary-2">Live Site</ViewButton> : null}
                            </Div>
                        </Div>);
                    })}

                </Div>
                <Footer></Footer>
            </Div>
        </section>

    );
};
