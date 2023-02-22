import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectEditingTodo, selectTodos } from 'redux/selectors';

export const Todos = () => {
  const todos = useSelector(selectTodos);
  const editingTodo = useSelector(selectEditingTodo);

  return (
    <>
      {editingTodo ? <EditForm todo={editingTodo} /> : <SearchForm />}
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
