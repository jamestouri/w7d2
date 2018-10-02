import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  render() {
    return (
      <div>
        <h3>Todo List goes here!</h3>
          {this.props.todos.map((el) => <TodoListItem todo = {el}/>)}
          <TodoForm receiveTodo= {this.props.receiveTodo}/>
      </div>
    );
  }
}

export default TodoList;
