import { createContext, useContext } from 'react';

export const MediaContext = createContext({
  isMobile: true,
  isTablet: false,
  isDesktop: false,
});

export const useMedia = () => {
  const { isMobile, isTablet, isDesktop } = useContext(MediaContext);
  return { isMobile, isTablet, isDesktop };
};
