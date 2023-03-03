import styled from '@emotion/styled';

export const Button = styled.button`
  color: ${({ theme, isActive }) => isActive && theme.colors.brand};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fs.l};
  padding-top: ${props => props.theme.spacing(4)};
  padding-bottom: ${props => props.theme.spacing(4)};
  padding-left: ${props => props.theme.spacing(2)};
  padding-right: ${props => props.theme.spacing(2)};
  transition: background-color 0.2s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.brandHover};
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Separator = styled.div`
  width: 1px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.brand};
`;
