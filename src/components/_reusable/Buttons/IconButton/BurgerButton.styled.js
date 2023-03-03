import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;

  transition: background-color 0.2s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.brandHover};
  }
`;
