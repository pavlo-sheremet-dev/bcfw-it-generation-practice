export const SignInForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <InputField name={'email'} type={'email'} minLength={3} required />
      <InputField
        name={'password'}
        type={'password'}
        minLength={7}
        maxLength={20}
        required
      />
      <button type="submit">LOGIN</button>
    </form>
  );
};

export const InputField = ({
  name,
  title = '',
  type = 'text',
  ...restProps
}) => {
  return (
    <label>
      {title ?? name}
      <input type={type} name={name} {...restProps} />
    </label>
  );
};
