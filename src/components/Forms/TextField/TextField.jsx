import { useField } from 'formik';

export const TextField = ({ label, ...otherProps }) => {
  const [field, meta] = useField(otherProps);

  return (
    <>
      <label
        style={{ display: 'block' }}
        htmlFor={otherProps.id || otherProps.name}
      >
        {label}
      </label>
      <input {...field} {...otherProps} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      <br />
      <br />
    </>
  );
};
