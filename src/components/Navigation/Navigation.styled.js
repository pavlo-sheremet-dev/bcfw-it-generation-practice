import styled from '@emotion/styled';

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
