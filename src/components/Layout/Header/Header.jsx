import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useMedia } from 'context/MediaContext';

import { ThemeSwitcher, Logo, IconButton, MobileMenu } from 'components';
import { HeaderContainer, HeaderStyled } from './Header.styled';

import { selectShowMobileMenu } from 'redux/global/selectors';
import { toggleMobileMenu } from 'redux/global/slice';

export const Header = () => {
  const showMobileMenu = useSelector(selectShowMobileMenu);
  const dispatch = useDispatch();

  const { isMobile } = useMedia();

  useEffect(() => {
    if (!isMobile && showMobileMenu) {
      dispatch(toggleMobileMenu());
    }
  }, [dispatch, isMobile, showMobileMenu]);

  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <Logo />
          <ThemeSwitcher />
          {isMobile && (
            <IconButton icon={RxHamburgerMenu} addClass="burger-button" />
          )}
        </HeaderContainer>
      </HeaderStyled>
      {showMobileMenu && isMobile && <MobileMenu />}
    </>
  );
};
