import { Controller, useForm } from 'react-hook-form';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components';

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

export const TransactionForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
    watch,
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      type: true,
      amount: 10,
      transactionDate: formatDateToISO(new Date()),
    },
  });

  const type = watch('type');

  const onSubmit = ({
    type,
    categoryId,
    incomeId,
    amount,
    transactionDate,
    comment,
  }) => {
    const formData = {
      type: type ? TYPE.EXPENSE : TYPE.INCOME,
      categoryId: type ? categoryId : incomeId,
      amount: type && !!amount ? -1 * amount : amount,
      transactionDate: transactionDate,
      comment,
    };
    console.log(formData);
    reset();
  };

  const expenseOptions = categories.filter(({ type }) => type === TYPE.EXPENSE);
  const incomeId = categories.find(({ type }) => type === TYPE.INCOME).id;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 20, zIndex: 1 }}
    >
      <label>
        <input type="checkbox" {...register('type')} />
        <span>{type ? TYPE.EXPENSE : TYPE.INCOME}</span>
      </label>

      {type ? (
        <label>
          <select {...register('categoryId')}>
            {expenseOptions.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </label>
      ) : (
        <input type={'hidden'} {...register('incomeId')} value={incomeId} />
      )}

      <label>
        <input type="number" {...register('amount')} />
      </label>
      <Controller
        name="transactionDate"
        control={control}
        required
        render={({ field }) => {
          const { onChange, name, value } = field;
          return (
            <Datetime
              value={new Date(value)}
              viewMode="time"
              initialValue={Date.now()}
              dateFormat={true}
              timeFormat={false}
              onChange={moment => {
                onChange({
                  target: {
                    name,
                    value: moment.toISOString(),
                  },
                });
              }}
            />
          );
        }}
      />

      <label>
        <input type="text" {...register('comment')} />
      </label>

      <Button type="submit" label={'Add'} />
    </form>
  );
};

const formatDateToISO = date => {
  const year = date.getUTCFullYear();
  const month = ('0' + (date.getUTCMonth() + 1)).slice(-2);
  const day = ('0' + date.getUTCDate()).slice(-2);
  const hours = ('0' + date.getUTCHours()).slice(-2);
  const minutes = ('0' + date.getUTCMinutes()).slice(-2);
  const seconds = ('0' + date.getUTCSeconds()).slice(-2);
  const milliseconds = ('00' + date.getUTCMilliseconds()).slice(-3);

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
};
