import { BsSun, BsMoon } from 'react-icons/bs';
import { ThemeButton } from './ThemeSwitcher.styled';

export const ThemeSwitcher = ({ switchTheme, themeTitle }) => {
  return (
    <ThemeButton type="button" onClick={switchTheme}>
      {themeTitle === 'light' ? <BsSun size={30} /> : <BsMoon size={30} />}
    </ThemeButton>
  );
};
