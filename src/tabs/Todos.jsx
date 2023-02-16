import { useState } from 'react';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

import { useArrayHandler } from 'hooks/useArrayHandler';

const initialTodos = [{ value: 'initialTodo', id: 'id-1' }];

export const Todos = () => {
  const {
    array: todos,
    addNewObject: addTodo,
    deleteObject: deleteTodo,
    editObject,
  } = useArrayHandler('todos', initialTodos);

  const [editingTodo, setEditingTodo] = useState(null);

  const editTodo = newTodo => {
    editObject(newTodo);
    toggleEditForm();
  };

  const toggleEditForm = (todo = null) => {
    setEditingTodo(todo ? todo : null);
  };

  return (
    <>
      {editingTodo ? (
        <EditForm
          closeEditForm={toggleEditForm}
          todo={editingTodo}
          editTodo={editTodo}
        />
      ) : (
        <SearchForm onSubmit={addTodo} />
      )}
      {todos.length !== 0 ? (
        <Grid>
          {todos.map(({ id, value: todo }, idx) => (
            <GridItem key={id}>
              <Todo
                id={id}
                idx={idx}
                description={todo}
                deleteTodo={deleteTodo}
                openEditForm={toggleEditForm}
              />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Text>There are no any todos</Text>
      )}
    </>
  );
};
