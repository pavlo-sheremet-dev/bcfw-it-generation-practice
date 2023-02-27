import styled from '@emotion/styled';

export const LayoutWrapper = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header header'
    'main main'
    'footer footer';

  @media screen and (min-width: 768px) {
    grid-template-areas:
      'header header'
      'sidebar main'
      'footer footer';
  }
`;
