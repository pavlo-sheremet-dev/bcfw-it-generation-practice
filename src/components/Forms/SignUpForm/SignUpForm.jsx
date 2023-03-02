import { Formik, Form } from 'formik';

import { config, initialValues, validationSchema } from './config';

import { Button } from 'components';
import { TextField } from '../TextField/TextField';

export const SignUpForm = () => {
  const onSubmit = (values, actions) => {
    console.log(actions);
    alert(JSON.stringify(values, null, 2));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        {config.map(({ name, label, type, placeholder }) => (
          <TextField
            key={name}
            name={name}
            label={label}
            type={type}
            placeholder={placeholder}
          />
        ))}

        <Button label="Sign Up" type="submit" />
      </Form>
    </Formik>
  );
};
