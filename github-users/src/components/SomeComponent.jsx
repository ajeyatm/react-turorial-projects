import React, { useState, useMemo, useCallback, memo } from 'react'
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
  const person2 = useMemo(() => {
    //heavy computation
    //res { name: 'amit', age: 27 }
    console.log('usememolog')
    return { name: 'amit', age: 27 }
  }, [counter])

  const getName = useCallback(() => {
    //api call
    console.log('hi from getname usecallback')
    //change the value of state varibale
  }, [])

  useEffect(() => {
    getName()
  }, [])

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
//react components re-renders whenever there is change
//in its state varibales and props

//unwanted re-rendering due to change in the value of state varibales can be
//handled by useEffect, (useMemo/useCallback)

//unwanted re-rendering due to change in the value of props can be handled by memo and/or
//by enclosing useMemo/useCallback around the property value

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
