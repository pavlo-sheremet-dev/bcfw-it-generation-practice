import styled from '@emotion/styled';

export const InputLabel = styled.label`
  display: block;
  width: 100%;
  min-height: 85px;
  /* background-color: grey; */
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  &:last-of-type {
    margin-bottom: ${({ theme }) => theme.spacing(5)};
  }
`;

export const Label = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fs.l};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  position: relative;
  z-index: 1;
  height: ${({ theme }) => theme.spacing(9)};
  padding: 0 10px;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  border: none;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.text};

  &::placeholder {
    padding: 0;
  }
`;

export const ErrorMessage = styled.div`
  text-align: right;
  font-size: ${({ theme }) => theme.fs.s};
  color: ${({ theme }) => theme.colors.error};
`;
