import { Container, IconButton, Navigation } from 'components';
import { MdClose } from 'react-icons/md';

import { Box } from './MobileMenu.styled';

export const MobileMenu = ({ closeMenu }) => {
  return (
    <Box>
      <Container>
        <IconButton
          onClick={closeMenu}
          icon={MdClose}
          addClass="close-button"
        />
        <Navigation />
      </Container>
    </Box>
  );
};
