import { createContext, useContext } from 'react';

export const colorsKeys = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const ThemeContext = createContext({
  themeTitle: colorsKeys.LIGHT,
  switchTheme: () => {},
});

export const useTheme = () => {
  const { themeTitle, switchTheme } = useContext(ThemeContext);
  return { themeTitle, switchTheme };
};
