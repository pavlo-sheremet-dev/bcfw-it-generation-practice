import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 640px;

  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};

  margin-left: auto;
  margin-right: auto;
`;
