'use client';
import { Button, Span } from '@/design-system';
import { Div } from '@/design-system/Div';
import { FramerMotionTypes } from '@/types';
import React, { ReactNode } from 'react';


export const ViewButton = ({url, children,overrides, type}: {url: string, children: ReactNode, overrides?:string, type?: string}) => {
    const onViewCodeClick = (url: string) => {
        window.open(url, '_blank');
    };

    return <Button onClick={() => onViewCodeClick(url)} overrides={overrides} type={type}>{children}</Button>;
};

