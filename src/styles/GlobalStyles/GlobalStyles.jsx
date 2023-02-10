import { Global } from '@emotion/react';
import { globalStyles } from './styles';

const GlobalStyles = ({ theme }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Global
        styles={{
          body: {
            backgroundColor: theme.colors.mainBackground,
            color: theme.colors.text,
          },
        }}
      />
    </>
  );
};

export default GlobalStyles;
