import React, { useEffect, useState } from 'react'

export default function TodoList({todos, setTodos}) {

  useEffect(
    () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((respopnse) => respopnse.json())
        .then((data) => {
          setTodos(data)
          console.log(data)
        });
    }, []
  )

  return (
    <>
      {todos.map((todo) =>
        <div key={todo.id}>
          {todo.id && <h2>id: {todo.id}, Todo: {todo.title}</h2>}
        </div>
      )}
    </>
  )
}

