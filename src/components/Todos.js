import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        // console.log(project)
        return (
          < TodoItem key={todo.title} todo={todo} />
        )
      });
    }
    console.log(this.props)
    return (
      <div className="Todo">
      <br />
      <h3>To Do list:</h3>
       {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
    todos:PropTypes.array
}

export default Todos;
