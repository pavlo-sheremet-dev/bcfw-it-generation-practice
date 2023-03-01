import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import { MdClose } from 'react-icons/md';
import { BackDrop, Container, IconButton, Navigation } from 'components';

import { MotionBox } from './MobileMenu.styled';
import { toggleMobileMenu } from 'redux/global/slice';

const rootMobileMenu = document.getElementById('root-mobile-menu');

export const MobileMenu = ({ isVisible }) => {
  const dispatch = useDispatch();
  return createPortal(
    <AnimatePresence>
      {isVisible ? (
        <>
          <BackDrop />
          <MotionBox
            key="mobileMenu"
            transition={{ duration: 0.2 }}
            initial={{ translateX: '102%' }}
            animate={{ translateX: 0 }}
            exit={{ translateX: '102%' }}
          >
            <Container>
              <IconButton
                onClick={() => dispatch(toggleMobileMenu())}
                icon={MdClose}
                addClass="close-button"
              />
              <Navigation />
            </Container>
          </MotionBox>
        </>
      ) : null}
    </AnimatePresence>,
    rootMobileMenu,
  );
};
