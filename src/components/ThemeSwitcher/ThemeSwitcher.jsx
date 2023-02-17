import { colorsKeys, useTheme } from 'context/ThemeContext';

import { BsSun, BsMoon } from 'react-icons/bs';
import { ThemeButton } from './ThemeSwitcher.styled';

export const ThemeSwitcher = () => {
  const { themeTitle, switchTheme } = useTheme();

  return (
    <ThemeButton type="button" onClick={switchTheme}>
      {themeTitle === colorsKeys.LIGHT ? (
        <BsSun size={30} />
      ) : (
        <BsMoon size={30} />
      )}
    </ThemeButton>
  );
};
