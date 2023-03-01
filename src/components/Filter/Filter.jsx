import { useDispatch, useSelector } from 'react-redux';
import { handleFilter } from 'redux/contacts/slice';
import { selectFilter } from 'redux/contacts/selectors';
import { Input } from '../Input/Input';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(handleFilter(event.target.value));
  };

  return (
    <div>
      <p style={{ fontSize: '32px' }}>Find contact by name</p>
      <Input type="text" name="filter" value={filter} onChange={handleChange} />
    </div>
  );
};
