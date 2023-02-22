import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { SearchFormStyled, FormBtn, InputSearch } from 'components';
import { BtnEdit } from './EditForm.styled';
import { editTodo, toggleEditTodo } from 'redux/todos/slice';

export const EditForm = ({ todo }) => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.search.value;
    dispatch(editTodo({ value, id: todo.id }));
    dispatch(toggleEditTodo());
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <RiSaveLine size="16px" />
      </FormBtn>
      <BtnEdit type="button" onClick={() => dispatch(toggleEditTodo())}>
        <MdOutlineCancel size="16px" />
      </BtnEdit>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        defaultValue={todo.description}
      />
    </SearchFormStyled>
  );
};
