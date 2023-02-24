import styled from '@emotion/styled';
import { NavLink as L } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;

  flex-direction: column;
  align-items: center;
`;

export const NavLink = styled(L)`
  &.active {
    color: ${({ theme }) => theme.colors.brand};
  }
`;
