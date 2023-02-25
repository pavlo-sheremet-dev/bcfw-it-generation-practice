import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';

import { useMedia } from 'context/MediaContext';

import { Footer, Header, Main, ParticleWave, SideBar } from 'components';
// import { Wrapper } from './Layout.styled';

import GlobalStyles from 'styles/GlobalStyles/GlobalStyles';

import { theme } from 'styles';
import { colors } from 'styles/colors';
import { Outlet } from 'react-router-dom';

import { selectThemeSwitcher } from 'redux/global/selectors';

export const Layout = () => {
  const { isMobile, isDesktop } = useMedia();
  const themeTitle = useSelector(selectThemeSwitcher);

  const normalizedTheme = { ...theme, ...colors[themeTitle] };

  return (
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
  );
};
