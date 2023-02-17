import styled from '@emotion/styled';
import { Container } from 'components/Container/Container.styled';

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding-top: ${props => props.theme.spacing(5)};
  padding-bottom: ${props => props.theme.spacing(5)};
  border-bottom: 2px solid ${props => props.theme.colors.text};
`;
