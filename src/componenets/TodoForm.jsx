import { useState } from "react";

const TodoForm = ({todo, setTodo, setTodos, todos}) => {

  const hanldeSubmit = (event) => {
    event.preventDefault();
    todo.id = todos.length+1;
    setTodos([...todos, todo])
  }

  const changeTodo = (event) => {
    setTodo({
      ...todo,
      [event.target.id]: event.target.value
    })
  }

  return (
    <>
      <form onSubmit={hanldeSubmit}>
        Title <input id="title" type="text" placeholder="Write a new todo" onChange={changeTodo} /> <br></br>
        User Id <input id="userID" type="text" placeholder="Write a user ID" onChange={changeTodo} />
        <input type="submit" value="Add Todo" />
      </form>
    </>
  )
}

export default TodoForm;
