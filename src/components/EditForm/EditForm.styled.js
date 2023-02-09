import styled from '@emotion/styled';

export const BtnEdit = styled.button`
  width: 50px;
  height: 50px;

  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};

  position: absolute;
  top: 0;
  right: 40px;
`;
