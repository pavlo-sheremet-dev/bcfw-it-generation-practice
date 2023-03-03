import styled from '@emotion/styled';

export const ThemeButton = styled.button`
  margin-left: ${props => props.theme.spacing(4)};
  padding: ${props => props.theme.spacing(1)};

  transition: background-color 0.2s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.brandHover};
  }
`;
