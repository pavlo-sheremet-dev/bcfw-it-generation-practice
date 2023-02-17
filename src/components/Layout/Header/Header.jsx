import { useEffect, useState } from 'react';
import { useMedia } from 'context/MediaContext';
import { RxHamburgerMenu } from 'react-icons/rx';

import {
  ThemeSwitcher,
  Logo,
  IconButton,
  BackDrop,
  MobileMenu,
} from 'components';
import { HeaderContainer, HeaderStyled } from './Header.styled';

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { isMobile } = useMedia();

  useEffect(() => {
    if (!isMobile && showMobileMenu) {
      toggleMobileMenu();
    }
  }, [isMobile, showMobileMenu]);

  const toggleMobileMenu = () => setShowMobileMenu(p => !p);

  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <Logo />
          <ThemeSwitcher />
          {isMobile && (
            <IconButton
              onClick={toggleMobileMenu}
              icon={RxHamburgerMenu}
              addClass="burger-button"
            />
          )}
        </HeaderContainer>
      </HeaderStyled>
      {showMobileMenu && isMobile && (
        <BackDrop onClose={toggleMobileMenu}>
          <MobileMenu closeMenu={toggleMobileMenu} />
        </BackDrop>
      )}
    </>
  );
};
