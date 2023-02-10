import { ThemeSwitcher } from 'components';
import { HeaderContainer } from './Header.styled';

export const Header = ({ switchTheme, themeTitle }) => {
  return (
    <header>
      <HeaderContainer>
        <span>LOGO</span>
        <ThemeSwitcher themeTitle={themeTitle} switchTheme={switchTheme} />
      </HeaderContainer>
    </header>
  );
};
