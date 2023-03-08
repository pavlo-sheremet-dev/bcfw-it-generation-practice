import * as yup from 'yup';
import Datetime from 'react-datetime';
import { Button } from 'components';
import { Formik, Form, useField } from 'formik';

const categories = [
  {
    id: 'c9d9e447-1b83-4238-8712-edc77b18b739',
    name: 'Main expenses',
    type: 'EXPENSE',
  },
  {
    id: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
    name: 'Products',
    type: 'EXPENSE',
  },
  { id: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386', name: 'Car', type: 'EXPENSE' },
  {
    id: 'bbdd58b8-e804-4ab9-bf4f-695da5ef64f4',
    name: 'Self care',
    type: 'EXPENSE',
  },
  {
    id: '76cc875a-3b43-4eae-8fdb-f76633821a34',
    name: 'Child care',
    type: 'EXPENSE',
  },
  {
    id: '128673b5-2f9a-46ae-a428-ec48cf1effa1',
    name: 'Household products',
    type: 'EXPENSE',
  },
  {
    id: '1272fcc4-d59f-462d-ad33-a85a075e5581',
    name: 'Education',
    type: 'EXPENSE',
  },
  {
    id: 'c143130f-7d1e-4011-90a4-54766d4e308e',
    name: 'Leisure',
    type: 'EXPENSE',
  },
  {
    id: '719626f1-9d23-4e99-84f5-289024e437a8',
    name: 'Other expenses',
    type: 'EXPENSE',
  },
  {
    id: '3acd0ecd-5295-4d54-8e7c-d3908f4d0402',
    name: 'Entertainment',
    type: 'EXPENSE',
  },
  {
    id: '063f1132-ba5d-42b4-951d-44011ca46262',
    name: 'Income',
    type: 'INCOME',
  },
];

const TYPE = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
};

const validationSchema = yup
  .object({
    type: yup.bool().required(),
    categoryId: yup.string(),
    incomeId: yup.string(),
    amount: yup.number().min(1).required(),
    transactionDate: yup.string(),
    comment: yup.string(),
  })
  .required();

export const TransactionFormFormik = () => {
  const handleSubmit = (
    { type, categoryId, incomeId, amount, transactionDate, comment },
    actions,
  ) => {
    const formData = {
      type: type ? TYPE.EXPENSE : TYPE.INCOME,
      categoryId: type ? categoryId : incomeId,
      amount: type && !!amount ? -1 * amount : amount,
      transactionDate: transactionDate,
      comment,
    };
    console.log('formData', formData);
  };

  const expenseOptions = categories.filter(({ type }) => type === TYPE.EXPENSE);
  const incomeId = categories.find(({ type }) => type === TYPE.INCOME).id;

  return (
    <Formik
      initialValues={{
        type: true,
        categoryId: expenseOptions[0].id,
        amount: 10,
        incomeId: incomeId,
        transactionDate: new Date().toISOString(),
        comment: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => {
        return (
          <Form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              zIndex: 1,
            }}
          >
            <Checkbox name={'type'} />

            {values.type ? (
              <Select name="categoryId">
                {expenseOptions.map(({ id, name }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
              </Select>
            ) : (
              <input type={'hidden'} name={'incomeId'} />
            )}

            <InputField name={'amount'} type={'number'} />

            <DateInput name="transactionDate" />

            <label>
              <input type="text" />
            </label>

            <Button type="submit" label={'Add'} />
          </Form>
        );
      }}
    </Formik>
  );
};

const Checkbox = ({ children, ...props }) => {
  const [field] = useField({ ...props, type: 'checkbox' });

  return (
    <div>
      <label>
        <input type="checkbox" {...field} {...props} />
        <span>{field.value ? TYPE.EXPENSE : TYPE.INCOME}</span>
      </label>
    </div>
  );
};

const Select = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <label>
      {label}
      <select {...field} {...props} />
    </label>
  );
};

export const InputField = ({ label, ...otherProps }) => {
  const [field] = useField(otherProps);
  return (
    <label>
      {label}
      <input {...field} {...otherProps} />
    </label>
  );
};

export const DateInput = ({ label, ...otherProps }) => {
  const [field] = useField(otherProps);

  const { name, onChange, value } = field;

  return (
    <label>
      {label}
      <Datetime
        timeFormat={false}
        value={new Date(value)}
        dateFormat={'DD/MM/YYYY'}
        onChange={moment => {
          onChange({
            target: {
              name,
              value: moment.toISOString(),
            },
          });
        }}
      />
    </label>
  );
};
