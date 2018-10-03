import React from 'react';
import uniqueId from '../../util/todo_api_util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
   e.preventDefault();
   const todo = Object.assign({}, this.state, { id: uniqueId() });
   this.props.receiveTodo(todo);
   this.setState({
     title: "",
     body: ""
   }); // re
  }

  render() {
    return (
      <div>
        <form className="todoForm" onSubmit={this.handleSubmit}>
          <label>Title:
              <input
                onChange={this.update('title')}
                type="text">

              </input>
            </label>
          <label>Body:
              <textarea onChange={this.update('body')}>
              </textarea>
            </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
