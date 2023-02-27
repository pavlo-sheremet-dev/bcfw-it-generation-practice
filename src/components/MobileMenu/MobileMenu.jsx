import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { BackDrop, Container, IconButton, Navigation } from 'components';

import { Box } from './MobileMenu.styled';
import { toggleMobileMenu } from 'redux/global/slice';

const rootMobileMenu = document.getElementById('root-mobile-menu');

export const MobileMenu = () => {
  const dispatch = useDispatch();
  return createPortal(
    <BackDrop>
      <Box>
        <Container>
          <IconButton
            onClick={() => dispatch(toggleMobileMenu())}
            icon={MdClose}
            addClass="close-button"
          />
          <Navigation />
        </Container>
      </Box>
    </BackDrop>,
    rootMobileMenu,
  );
};
