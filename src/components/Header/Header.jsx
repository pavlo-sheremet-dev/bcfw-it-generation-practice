import { ThemeSwitcher, Logo, Navigation } from 'components';

import { HeaderContainer } from './Header.styled';

export const Header = ({ switchTheme, themeTitle }) => {
  return (
    <header style={{ gridArea: 'header' }}>
      <HeaderContainer>
        <Logo />
        <Navigation />
        <ThemeSwitcher themeTitle={themeTitle} switchTheme={switchTheme} />
      </HeaderContainer>
    </header>
  );
};
