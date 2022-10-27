import React, { useRef, useReducer } from 'react'
import './Todo.css'

let id = 0
const generateId = () => id++

const INIT_STATE = []

//{type:'create', value:'dad'}
//{type: 'delete', value: 222}
//{type: 'isDone', value: e22}
//{type: 'clear'}
//{type: 'dhdh'}
const todoActionFunction = (state, action) => {
  //if(action.type === 'change_channel'){....}
  //if(action.type === 'increase_vol'){....}

  if (action.type === 'create') {
    const _id = generateId()
    const todo = { id: _id, title: action.value, isDone: false }

    return [...state, todo]
  } else if (action.type === 'delete') {
    const filteredTodos = state.filter((ele, ind) => {
      if (ele.id === action.value) return false
      return true
    })

    return filteredTodos
  } else if (action.type === 'isDone') {
    const modifiedTodos = state.map((ele, ind) => {
      if (ele.id === action.value) return { ...ele, isDone: !ele.isDone }
      return ele
    })

    return modifiedTodos
  } else {
    return state
  }

  //   switch (action.type) {
  //     case 'create':
  //       const _id = generateId()

  //       const todo = { id: _id, title: action.value, isDone: false }
  //       return [...state, todo]
  //       break
  //     case 'delete':
  //       const filteredTodos = state.filter((ele, ind) => {
  //         if (ele.id === action.value) return false
  //         return true
  //       })

  //       return filteredTodos
  //       break
  //     case 'isDone':
  //       const modifiedTodos = state.map((ele, ind) => {
  //         if (ele.id === action.value) return { ...ele, isDone: !ele.isDone }
  //         return ele
  //       })

  //       return modifiedTodos
  //       break
  //     default:
  //       break
  //   }
}

const Todo = () => {
  const [todos, todoDispatch] = useReducer(todoActionFunction, INIT_STATE)

  //INIT_STATE =  channel that u see when u turn on the tv
  //todos = current channel that u are watching
  //todoDispatch =  remote through which u can enter channel number that u like
  //todoActionFunction =  setup box, that receives signal from remote and changes the channel

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
              todoDispatch({ type: 'create', value: value })
              clearTitle()
            }

            //todoDispatch( {type: 'change_channel', value: 20} )
            //todoDispatch( {type: 'increase_vol', value: 6} )
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
                  todoDispatch({ type: 'isDone', value: itemToBeMadeDone.id })
                }}
              >
                Done?
              </button>
              <button
                onClick={() => {
                  console.log(item)
                  // const { title } = item //=>{title: 'task 3', isDone: false}
                  const itemToBeRemoved = item
                  todoDispatch({ type: 'delete', value: itemToBeRemoved.id })
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
