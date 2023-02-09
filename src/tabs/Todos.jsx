import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
    // isEditing: false,
    editingTodo: null,
  };
  addTodo = newTodo => {
    const todo = { ...newTodo, id: nanoid() };
    this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
  };
  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };
  editTodo = newTodo => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        return todo.id !== newTodo.id ? todo : newTodo;
      }),
    }));
    this.toggleEditForm();
  };

  toggleEditForm = (todo = null) => {
    this.setState({ editingTodo: todo ? todo : null });
    console.log('hello', todo);
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
            {todos.map((el, idx) => (
              <GridItem key={el.id}>
                <Todo
                  id={el.id}
                  idx={idx}
                  description={el.todo}
                  deleteTodo={this.deleteTodo}
                  openEditForm={this.toggleEditForm}
                />{' '}
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
