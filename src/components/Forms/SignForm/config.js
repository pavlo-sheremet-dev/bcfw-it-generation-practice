import * as Yup from 'yup';

export const config = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password',
  },
];

export const initialValues = {
  email: '',
  password: '',
};

export const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(7).max(20).required('Required'),
});
