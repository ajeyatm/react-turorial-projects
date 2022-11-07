import React, { useRef } from 'react'
import useTodoStore from '../store'
import './Todo.css'

const Todo = () => {
  // const todos = useTodoStore( (state)=> state.todos)
  // const addTodo = useTodoStore( (state)=> state.addTodo)
  // const deleteTodo = useTodoStore( (state)=> state.deleteTodo)
  // const isDone = useTodoStore( (state)=> state.isDone)

  const { todos, addTodo, deleteTodo, isDone } = useTodoStore() //destructuring

  const titleRef = useRef()

  const clearTitle = () => {
    titleRef.current.value = ''
  }

  return (
    <div>
      <hr />

      <div className='input-section'>
        <input className='title' placeholder='Task' ref={titleRef} />
        {/* <input className='description' placeholder='Description' /> */}
        <button
          className='create'
          onClick={() => {
            const value = titleRef.current.value

            if (value?.length) {
              addTodo(value)
              clearTitle()
            }
          }}
        >
          Create
        </button>
        <button className='clear' onClick={clearTitle}>
          Clear
        </button>
      </div>
      <hr />
      <div className='task-list'>
        <ul>
          {todos.map((item, ind) => (
            <li key={ind}>
              <span
                style={{
                  textDecoration: item.isDone ? 'line-through' : 'none',
                  backgroundColor: item.isDone ? 'green' : 'inherit',
                }}
              >
                {item.title}
              </span>

              <button
                onClick={() => {
                  isDone(item.id)
                }}
              >
                Done?
              </button>
              <button
                onClick={() => {
                  deleteTodo(item.id)
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todo
