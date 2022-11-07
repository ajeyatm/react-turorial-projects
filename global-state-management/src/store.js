import create from 'zustand'

//store name - name it just like how hooks are named
const useTodoStore = create(
  //callback function returning an object
  (set) => ({
    counter: 0,
    todos: [],
    addTodo: (newTodoTitle) => {
      set((currState) => ({
        ...currState,
        counter: currState.counter + 1,
        todos: [
          { id: currState.counter + 1, title: newTodoTitle, isDone: false },
          ...currState.todos,
        ],
      }))
    },
    deleteTodo: (id) => {
      set((currState) => ({
        ...currState,
        todos: currState.todos.filter((item) => item.id !== id),
      }))
    },
    isDone: (id) => {
      set((currState) => ({
        ...currState,
        todos: currState.todos.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              isDone: !item.isDone,
            }
          }
          return item
        }),
      }))
    },
  })
)

// const [counter, setCounter] = useState(0)
// const [showComp, setShowComp] = useState(false)

// setCounter(counter+1)
// setCounter( (ccccccc)=> ccccccc+1 )

// setShowComp( (sadsdsd)=> !sadsdsd)

export default useTodoStore
