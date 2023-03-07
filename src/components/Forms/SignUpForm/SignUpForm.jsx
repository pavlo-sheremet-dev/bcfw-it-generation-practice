import { Formik } from 'formik';

import { config, initialValues, validationSchema } from './config';

import { Button, Form } from 'components';
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
        {config.map(({ name, label, type, placeholder, icon }) => (
          <TextField
            key={name}
            name={name}
            label={label}
            type={type}
            placeholder={placeholder}
            icon={icon}
          />
        ))}

        <Button label="Sign Up" type="submit" />
      </Form>
    </Formik>
  );
};
