import styled from '@emotion/styled';

export const Link = styled.a`
  font-weight: 500;
  font-size: 25px;
  margin-right: auto;

  & span {
    color: ${({ theme }) => theme.colors.brand};
  }
`;
