import styled from '@emotion/styled';

export const FooterStyled = styled.footer`
  grid-area: footer;
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.text};
`;
