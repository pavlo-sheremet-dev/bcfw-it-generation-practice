import * as Yup from 'yup';

export const config = [
  {
    label: 'First name',
    name: 'name',
    type: 'text',
    placeholder: 'Enter your name',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'text',
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
  name: '',
  email: '',
  password: '',
};

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'не менше 2-х символів')
    .max(20, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(7).max(20).required('Required'),
});
