import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
    editingTodo: null,
  };

  addTodo = newTodo => {
    const todo = { ...newTodo, id: nanoid() };
    this.setState(({ todos }) => ({ todos: [...todos, todo] }));
  };

  deleteTodo = id => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== id),
    }));
  };

  editTodo = newTodo => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo => {
        return todo.id !== newTodo.id ? todo : newTodo;
      }),
    }));
    this.toggleEditForm();
  };

  toggleEditForm = (todo = null) => {
    this.setState({ editingTodo: todo ? todo : null });
  };

  render() {
    const { todos, editingTodo } = this.state;
    return (
      <>
        {editingTodo ? (
          <EditForm
            closeEditForm={this.toggleEditForm}
            todo={editingTodo}
            editTodo={this.editTodo}
          />
        ) : (
          <SearchForm getTodo={this.addTodo} />
        )}
        {todos.length !== 0 ? (
          <Grid>
            {todos.map(({ id, todo }, idx) => (
              <GridItem key={id}>
                <Todo
                  id={id}
                  idx={idx}
                  description={todo}
                  deleteTodo={this.deleteTodo}
                  openEditForm={this.toggleEditForm}
                />
              </GridItem>
            ))}
          </Grid>
        ) : (
          <Text>There are no any todos</Text>
        )}
      </>
    );
  }
}
