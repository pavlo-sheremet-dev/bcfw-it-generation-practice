import { useField } from 'formik';
import styled from '@emotion/styled';

export const TextField = ({ label, ...otherProps }) => {
  const [field, meta] = useField(otherProps);

  return (
    <>
      <InputLabel>
        <Label>{label}</Label>
        <Input {...field} {...otherProps} />
        {meta.touched && meta.error ? (
          <ErrorMessage className="error">{meta.error}</ErrorMessage>
        ) : null}
      </InputLabel>
    </>
  );
};

const InputLabel = styled.label`
  display: block;
  min-height: 100px;
  background-color: grey;
  margin-bottom: 20px;
`;

const Label = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fs.l};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Input = styled.input`
  height: ${({ theme }) => theme.spacing(8)};
  padding: 0 10px;
  border: none;

  &::placeholder {
    padding: 0;
  }
`;

const ErrorMessage = styled.div``;
