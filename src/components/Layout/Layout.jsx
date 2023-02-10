import { ThemeProvider } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles/GlobalStyles';

export const Layout = ({ theme = {}, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      {children}
    </ThemeProvider>
  );
};
