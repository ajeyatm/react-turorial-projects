import React, { useState, useRef } from 'react'
import './Todo.css'

let id = 0
const generateId = () => id++

const Todo = () => {
  const [todos, setTodos] = useState([])

  //ex todo1 { title :'mndd', isDone: false }
  //=> [{id: 333, title :'mndd', isDone: false }, {id:22323, title :'ssdd', isDone: false }, { title :'wwew', isDone: false }]

  const titleRef = useRef()

  const clearTitle = () => {
    titleRef.current.value = ''
  }

  return (
    <div>
      <h2>Todo</h2>
      <div className='input-section'>
        <input className='title' placeholder='Task' ref={titleRef} />
        {/* <input className='description' placeholder='Description' /> */}
        <button
          className='create'
          onClick={() => {
            const value = titleRef.current.value
            const _id = generateId()
            if (value?.length) {
              const todo = { id: _id, title: value, isDone: false }
              console.log(todo)
              clearTitle()
              setTodos([...todos, todo])
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
                  console.log(item)
                  // const { title } = item //=>{title: 'task 3', isDone: false}
                  const itemToBeMadeDone = item
                  const modifiedTodos = todos.map((ele, ind) => {
                    if (ele.id === itemToBeMadeDone.id)
                      return { ...ele, isDone: !ele.isDone }
                    return ele
                  })

                  setTodos(modifiedTodos)
                }}
              >
                Done?
              </button>
              <button
                onClick={() => {
                  console.log(item)
                  // const { title } = item //=>{title: 'task 3', isDone: false}
                  const itemToBeRemoved = item
                  const filteredTodos = todos.filter((ele, ind) => {
                    if (ele.id === itemToBeRemoved.id) return false
                    return true
                  })

                  setTodos(filteredTodos)
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
