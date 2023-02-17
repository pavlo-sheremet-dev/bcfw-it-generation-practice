import { Container } from 'components';
import { FooterStyled } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled style={{ gridArea: 'footer', padding: '20px 0' }}>
      <Container>
        <small>© 2023 BCFW</small>
      </Container>
    </FooterStyled>
  );
};
