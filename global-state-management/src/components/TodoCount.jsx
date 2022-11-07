import React from 'react'
import useTodoStore from '../store'

const TodoCount = () => {
  const todoLength = useTodoStore((state) => state.todos.length)
  return <h3>Todos: {todoLength}</h3>
}

export default TodoCount
