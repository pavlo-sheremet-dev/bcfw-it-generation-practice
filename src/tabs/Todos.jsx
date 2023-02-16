import { useEffect, useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

const initialTodos = [{ value: 'initialTodo', id: 'id-1' }];

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) ?? initialTodos
  );
  const [editingTodo, setEditingTodo] = useState(null);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = newTodo => {
    const todo = { ...newTodo, id: nanoid() };
    setTodos(prevTodos => [...prevTodos, todo]);
  };

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const editTodo = newTodo => {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        return todo.id !== newTodo.id ? todo : newTodo;
      })
    );
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
