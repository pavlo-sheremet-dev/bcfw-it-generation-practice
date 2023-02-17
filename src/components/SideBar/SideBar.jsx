import { Container, Navigation } from 'components';
import { Aside } from './SideBar.styled';

export const SideBar = () => {
  return (
    <Aside>
      <Container>
        <Navigation />
      </Container>
    </Aside>
  );
};
