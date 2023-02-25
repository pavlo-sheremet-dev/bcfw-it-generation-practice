import styled from '@emotion/styled';

import { Link as L } from 'react-router-dom';

export const Box = styled.div`
  background-color: transparent;
  transition: background-color 150ms linear;
  border-left: 1px solid ${({ theme }) => theme.colors.brand};

  &:hover {
    background-color: ${({ theme }) => theme.colors.brandHover};
  }
`;

export const Link = styled(L)`
  display: grid;
  grid-template-columns: 0.78fr 0.2fr;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
`;

export const PostDate = styled.p`
  text-align: end;
`;
