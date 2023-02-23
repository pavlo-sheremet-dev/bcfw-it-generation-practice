import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectEditingTodo, selectTodos } from 'redux/selectors';
import { addTodo } from 'redux/todos/slice';

export const Todos = () => {
  const todos = useSelector(selectTodos);
  const editingTodo = useSelector(selectEditingTodo);
  const dispatch = useDispatch();

  const addNewTodo = ({ value }) => {
    dispatch(addTodo({ value }));
  };

  return (
    <>
      {editingTodo ? (
        <EditForm todo={editingTodo} />
      ) : (
        <SearchForm onSubmit={addNewTodo} />
      )}
      {todos.length !== 0 ? (
        <Grid>
          {todos.map(({ id, value: todo }, idx) => (
            <GridItem key={id}>
              <Todo id={id} idx={idx} description={todo} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Text>There are no any todos</Text>
      )}
    </>
  );
};
