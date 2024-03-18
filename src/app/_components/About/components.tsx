'use client';
import { Span } from '@/design-system';
import { Div } from '@/design-system/Div';
import { FramerMotionTypes } from '@/types';
import React, { ReactNode } from 'react';

type TechSkillProps = {
    children: ReactNode;
    framerMotionProps?: FramerMotionTypes.PropsType;
}
type InfoBoxProps = {
    data?: string;
    value?: string;
}
type InfoBoxContainerProps = {
    children: ReactNode;
    framerMotionProps?: FramerMotionTypes.PropsType;
}

export const TechSkill = ({ children, framerMotionProps }: TechSkillProps) => {
    return <Span framerMotionProps={framerMotionProps} overrides='text-main-light border-solid border rounded text-sm px-2 py-1 grid items-center'>{children}</Span>;
};


export const InfoBox = ({ data, value }: InfoBoxProps) => {
    return <Div overrides="info py-4 border-white border-2 text-center bg-background grid rounded items-center content-center">
        <Div overrides="info-value font-bold text-sm">{value}</Div>

        <Div overrides="info-data text-xs">{data}</Div>
    </Div>;
};

export const InfoBoxContainer = ({ children, framerMotionProps }: InfoBoxContainerProps) => {
    return <Div framerMotionProps={framerMotionProps} overrides="flex flex-wrap gap-2 mb-5 mt-5">
        {children}
    </Div>;
};
