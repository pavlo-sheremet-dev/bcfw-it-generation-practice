import styled from '@emotion/styled';

export const StyledButton = styled.button`
  padding: 10px 10px;

  font-size: ${({ theme }) => theme.fs.l};
  background-color: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.2s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.brandButtonHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
