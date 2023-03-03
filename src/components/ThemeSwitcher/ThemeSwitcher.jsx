import { useDispatch, useSelector } from 'react-redux';
import { BsSun, BsMoon } from 'react-icons/bs';

import { selectThemeSwitcher } from 'redux/global/selectors';

import { colorsKeys, switchTheme } from 'redux/global/slice';
import { ThemeButton } from './ThemeSwitcher.styled';

export const ThemeSwitcher = () => {
  const themeTitle = useSelector(selectThemeSwitcher);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(switchTheme());

  return (
    <ThemeButton type="button" onClick={handleClick}>
      {themeTitle === colorsKeys.LIGHT ? (
        <BsSun size={25} />
      ) : (
        <BsMoon size={25} />
      )}
    </ThemeButton>
  );
};
