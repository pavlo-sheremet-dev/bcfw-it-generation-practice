import styled from '@emotion/styled';

export const Aside = styled.aside`
  grid-area: 'sidebar';
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};

  /* & ul {
    flex-direction: column;
    align-items: flex-start;
  } */
`;
