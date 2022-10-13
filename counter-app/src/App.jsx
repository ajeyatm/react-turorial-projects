import { useState } from 'react'
import './App.css'

function App() {
  //hooks
  //***state variable***
  //useState is a hook, that is used to create a state variable
  //initial value has to be passes to the useState hook
  //useState returns array with two items in it

  /**
   * function useState(val){
   * let a=val
    function b(updatedval){
        //logic 
        a=updatedval
    }
    return [a,b]
  }*/

  const [counter, setCounter] = useState(0)
  //const [stateVariable, function to change the value of the state variable] = useState(init value)

  /* <div style="background-color: red">1</div> */

  //counter = 10 ==> setCounter(10)
  //counter = counter + 1 => setCounter(counter + 1)

  return (
    <div>
      <div
        // style={{
        //   backgroundColor: 'gray',
        // }}
        className='hhh'
      >
        {counter}
      </div>
      <button
        onClick={() => {
          //code to change the value of state variable
          //not possible= counter++, counter=counter+1
          setCounter(counter + 1)
          console.log(counter)
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          //code to change the value of state variable
          if (counter === 0) return
          setCounter(counter - 1)
          console.log(counter)
        }}
      >
        Decrement
      </button>
    </div>
  )
}

export default App
