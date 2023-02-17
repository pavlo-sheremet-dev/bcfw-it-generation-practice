import styled from '@emotion/styled';
import { Container } from 'components/_reusable/Container/Container.styled';

export const HeaderStyled = styled.header`
  grid-area: header;
  padding-top: ${props => props.theme.spacing(5)};
  padding-bottom: ${props => props.theme.spacing(5)};
  border-bottom: 1px solid ${props => props.theme.colors.text};
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;

  .burger-button {
    margin-left: 20px;
  }
`;
