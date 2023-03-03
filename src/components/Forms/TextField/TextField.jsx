import { useField } from 'formik';
import { ErrorMessage, Input, InputLabel, Label } from './TextField.styled';

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
