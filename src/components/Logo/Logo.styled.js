import styled from '@emotion/styled';
import { Link as L } from 'react-router-dom';

export const Link = styled(L)`
  font-weight: 500;
  font-size: 25px;
  margin-right: auto;

  & span {
    color: ${({ theme }) => theme.colors.brand};
  }
`;
