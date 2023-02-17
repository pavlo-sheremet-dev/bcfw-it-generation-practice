import { MediaContext } from 'context/MediaContext';
import { useMediaQuery } from 'react-responsive';

export const Media = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <MediaContext.Provider value={{ isMobile, isTablet, isDesktop }}>
      {children}
    </MediaContext.Provider>
  );
};
