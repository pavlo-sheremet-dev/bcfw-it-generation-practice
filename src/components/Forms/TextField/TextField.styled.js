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

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.spacing(9)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};

  & svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    z-index: 2;
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
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: ${({ theme }) => theme.spacing(9)};
  padding: 0 10px;
  padding-left: 40px;

  border: none;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.text};

  &::placeholder {
    padding-left: 0;
  }
`;

export const ErrorMessage = styled.div`
  text-align: right;
  font-size: ${({ theme }) => theme.fs.s};
  color: ${({ theme }) => theme.colors.error};
`;
