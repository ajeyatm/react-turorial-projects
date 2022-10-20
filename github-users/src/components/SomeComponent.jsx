import React, { useState, memo, useMemo, useCallback } from 'react'
import { useEffect } from 'react'

//refrence
const arr = [1, 3, 4]

const SomeComponent = () => {
  const [person, setPerson] = useState({
    name: 'ajeya',
    age: 28,
  })
  const [counter, setCounter] = useState(0)

  //useCallback=> memorises the function

  //useMemo=> memorises the value
  const person2 = useMemo(() => ({ name: 'amit', age: 27 }), [])

  //useEffect( ()=>{}, [] )

  return (
    <div>
      SomeComponent
      <div>Counter: {counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        Increment
      </button>
      <Person
        age={person.age} //number
        name={person.name} //string
        person2={person2} //object
      />
    </div>
  )
}

//memoization
//memo=> memorises the component
const Person = memo((props) => {
  //memory extesive operation
  let m = 0
  for (let i = 0; i < 1000000003; i++) {
    m = i
  }
  m >= 1000000000 &&
    console.log('hi Person', props.age, props.name, props.person2)
  return <h2>Person</h2>
})

export default SomeComponent
