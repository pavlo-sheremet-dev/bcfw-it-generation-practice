import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
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

  render() {
    const { todos } = this.state;
    return (
      <>
        <SearchForm getTodo={this.addTodo} />
        {todos.length !== 0 ? (
          <Grid>
            <GridItem>
              {todos.map((el, idx) => (
                <Todo
                  key={el.id}
                  id={el.id}
                  idx={idx}
                  description={el.todo}
                  deleteTodo={this.deleteTodo}
                />
              ))}
            </GridItem>
          </Grid>
        ) : (
          <Text>There are no any todos</Text>
        )}
      </>
    );
  }
}
