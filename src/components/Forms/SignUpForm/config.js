import * as Yup from 'yup';
import { BsAlarm, BsAlignEnd, BsAlignMiddle } from 'react-icons/bs';

export const config = [
  {
    label: 'First name',
    name: 'name',
    type: 'text',
    placeholder: 'Enter your name',
    icon: BsAlarm,
  },
  {
    label: 'Email',
    name: 'email',
    type: 'text',
    placeholder: 'Enter your email',
    icon: BsAlignEnd,
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password',
    icon: BsAlignMiddle,
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
