import styled from 'styled-components';
export const Box = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (min-width: 320px) {
    max-width: 320px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 32px;
    max-width: 768px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;
