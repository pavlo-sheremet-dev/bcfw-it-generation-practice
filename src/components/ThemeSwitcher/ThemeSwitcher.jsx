import { BsSun, BsMoon } from 'react-icons/bs';

export const ThemeSwitcher = ({ switchTheme, themeTitle }) => {
  return (
    <div>
      <button type="button" onClick={switchTheme}>
        {themeTitle === 'light' ? <BsSun size={30} /> : <BsMoon size={30} />}
      </button>
    </div>
  );
};
