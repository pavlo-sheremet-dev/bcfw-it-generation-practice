import { colorsKeys } from 'context/ThemeContext';
import { useLocalStorage } from './useLocalStorage';

export const useThemeSwitcher = () => {
  const [themeTitle, setThemeTitle] = useLocalStorage(
    'theme-title',
    colorsKeys.LIGHT,
  );

  const switchTheme = () => {
    setThemeTitle(prev =>
      prev === colorsKeys.LIGHT ? colorsKeys.DARK : colorsKeys.LIGHT,
    );
  };

  return [themeTitle, switchTheme];
};
