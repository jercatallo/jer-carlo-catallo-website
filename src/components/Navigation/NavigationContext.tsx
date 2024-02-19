'use client';
import React, { ReactNode, createContext, useContext, useState } from 'react';

interface NavigationContextProps {
    showHamburgerMenu: boolean;
    setShowHamburgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
    scrollPosition: string;
    setScrollPosition: React.Dispatch<React.SetStateAction<string>>;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
};

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
    const [scrollPosition, setScrollPosition] = useState('hero');

    const values = {
        showHamburgerMenu,
        setShowHamburgerMenu,
        scrollPosition, 
        setScrollPosition,
    };
    return (
        <NavigationContext.Provider value={values}>
            {children}
        </NavigationContext.Provider>
    );
};
