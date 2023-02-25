import { useDispatch, useSelector } from 'react-redux';
import { BsSun, BsMoon } from 'react-icons/bs';

import { selectThemeSwitcher } from 'redux/global/selectors';

import { colorsKeys, switchTheme } from 'redux/global/slice';
import { ThemeButton } from './ThemeSwitcher.styled';

export const ThemeSwitcher = () => {
  const themeTitle = useSelector(selectThemeSwitcher);
  const dispatch = useDispatch();

  console.log('themeTitle', themeTitle);

  const handleClick = () => dispatch(switchTheme());

  return (
    <ThemeButton type="button" onClick={handleClick}>
      {themeTitle === colorsKeys.LIGHT ? (
        <BsSun size={30} />
      ) : (
        <BsMoon size={30} />
      )}
    </ThemeButton>
  );
};
