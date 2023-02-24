import { ThemeProvider } from '@emotion/react';

import { ThemeContext } from 'context/ThemeContext';
import { useThemeSwitcher } from 'hooks/useThemeSwitcher';
import { useMedia } from 'context/MediaContext';

import { Footer, Header, Main, ParticleWave, SideBar } from 'components';
// import { Wrapper } from './Layout.styled';

import GlobalStyles from 'styles/GlobalStyles/GlobalStyles';

import { theme } from 'styles';
import { colors } from 'styles/colors';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const [themeTitle, switchTheme] = useThemeSwitcher();
  const { isMobile, isDesktop } = useMedia();

  const normalizedTheme = { ...theme, ...colors[themeTitle] };

  return (
    <ThemeContext.Provider value={{ themeTitle, switchTheme }}>
      <ThemeProvider theme={normalizedTheme}>
        <GlobalStyles theme={normalizedTheme} />
        {/* <Wrapper> */}
        {/* wrapper styles was replaced to globalStyles into the #root div */}
        <Header />
        {!isMobile && <SideBar />}

        <Main>
          <Outlet />
        </Main>

        <Footer />
        {/* </Wrapper> */}
        {(true || isDesktop) && <ParticleWave />}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
