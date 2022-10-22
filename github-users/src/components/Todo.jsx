import React, { useState, useRef } from 'react'
import './Todo.css'

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
            if (value?.length) {
              const todo = { title: value, isDone: false }
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
                    if (ele.title === itemToBeMadeDone.title)
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
                    if (ele.title === itemToBeRemoved.title) return false
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
