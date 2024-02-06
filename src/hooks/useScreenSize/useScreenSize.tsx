import { useState, useEffect } from 'react';

export interface ScreenSize {
  width: number;
  height: number;
  screenWidth: number;
  screenHeight: number;
  devicePixelRatio: number;
}

const getWindowSize = (): ScreenSize => ({
  width: window?.innerWidth || 0,
  height:  window?.innerHeight || 0,
  screenWidth: window?.screen?.width || 0,
  screenHeight:  window?.screen?.height || 0,
  devicePixelRatio : window?.devicePixelRatio || 0,
});

export const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(getWindowSize);

  const handleResize = () => {
    setScreenSize(getWindowSize);
  };

  useEffect(() => {
    // Check if window is defined before accessing properties
    if (typeof window !== 'undefined') {
      setScreenSize(getWindowSize);

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); // Empty dependency array to run the effect only once on mount

  return screenSize;
};
