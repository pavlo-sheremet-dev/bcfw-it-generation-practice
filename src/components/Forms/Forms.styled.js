import styled from '@emotion/styled';
import { Form as F } from 'formik';

export const Form = styled(F)`
  min-width: 280px;
  padding: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.form};
  border-radius: ${({ theme }) => theme.spacing(1)};
  text-align: center;
  /* margin: 0 auto; */
`;
