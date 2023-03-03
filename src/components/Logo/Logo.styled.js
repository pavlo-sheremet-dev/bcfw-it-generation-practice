import styled from '@emotion/styled';
import { Link as L } from 'react-router-dom';

export const Link = styled(L)`
  display: block;
  font-weight: 500;
  font-size: ${props => props.theme.fs.xxl};
  margin-right: auto;
  padding-top: ${props => props.theme.spacing(5)};
  padding-bottom: ${props => props.theme.spacing(5)};
  padding-left: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(1)};

  transition: background-color 0.2s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.brandHover};
  }

  & span {
    color: ${({ theme }) => theme.colors.brand};
  }
`;
