import { ThemeProvider } from '@emotion/react';

import { ThemeContext } from 'context/ThemeContext';
import { useThemeSwitcher } from 'hooks/useThemeSwitcher';
import { useMedia } from 'context/MediaContext';

import { Footer, Header, Main, SideBar } from 'components';
// import { Wrapper } from './Layout.styled';

import GlobalStyles from 'styles/GlobalStyles/GlobalStyles';

import { theme } from 'styles';
import { colors } from 'styles/colors';

export const Layout = ({ children }) => {
  const [themeTitle, switchTheme] = useThemeSwitcher();
  const { isMobile } = useMedia();

  const normalizedTheme = { ...theme, ...colors[themeTitle] };

  return (
    <ThemeContext.Provider value={{ themeTitle, switchTheme }}>
      <ThemeProvider theme={normalizedTheme}>
        <GlobalStyles theme={normalizedTheme} />
        {/* <Wrapper> */}
        {/* wrapper styles was replaced to globalStyles into the #root div */}
        <Header />
        {!isMobile && <SideBar />}

        <Main>{children}</Main>

        <Footer />
        {/* </Wrapper> */}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
