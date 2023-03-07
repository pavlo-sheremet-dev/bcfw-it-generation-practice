import { useField } from 'formik';
import {
  ErrorMessage,
  Input,
  InputBox,
  InputLabel,
  Label,
} from './TextField.styled';

export const TextField = ({ label, icon: Icon, ...otherProps }) => {
  const [field, meta] = useField(otherProps);

  return (
    <>
      <InputLabel>
        <Label>{label}</Label>
        <InputBox>
          <Input {...field} {...otherProps} />
          <Icon />
        </InputBox>
        {meta.touched && meta.error ? (
          <ErrorMessage className="error">{meta.error}</ErrorMessage>
        ) : null}
      </InputLabel>
    </>
  );
};
