// shp_v100_001@mail.com
// shp_v100_002@mail.com
// shp_v100_003@mail.com
// shp_v100_004@mail.com

import { InputField } from '../SignInForm/SignInForm';

// min 7

export const SignUpForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <InputField name={'name'} minLength={3} maxLength={20} required />
      <InputField name={'email'} type={'email'} minLength={3} required />
      <InputField
        name={'password'}
        type={'password'}
        minLength={7}
        maxLength={20}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};
