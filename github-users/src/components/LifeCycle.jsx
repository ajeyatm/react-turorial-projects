import React, { useState, useEffect } from 'react'

//birth-[growth-reproduction]-death
//mounting-updating-unmounting
const LifeCycle = () => {
  const [firstState, setFirstState] = useState(1)
  const [showComp1, setShowComp1] = useState(false)

  // debugger
  // console.log('Log before first useEffect')

  // useEffect(() => {
  //   // debugger
  //   console.log('Hi Iam From first useEffect')
  // }, [])

  // useEffect(() => {
  //   // debugger
  //   console.log(
  //     'Hi Iam From second useEffect, value of firstState==>',
  //     firstState
  //   )
  // }, [firstState])

  // debugger
  // console.log('Log before return JSX')
  // debugger

  return (
    <div>
      <h2>LifeCycle</h2>
      <h3>
        {firstState}{' '}
        <button
          onClick={() => {
            setFirstState(firstState + 1)
          }}
        >
          Increment
        </button>{' '}
      </h3>

      <div>
        <button
          onClick={() => {
            setShowComp1(!showComp1)
          }}
        >
          Show/Hide Comp1
        </button>
        {showComp1 ? <Comp1 /> : null}
      </div>
    </div>
  )
}

const Comp1 = () => {
  debugger
  console.log('Log before Comp1== first useEffect')

  useEffect(() => {
    debugger
    console.log('Hi Iam From  Comp1 == first useEffect')

    return () => {
      console.log("I'm dying", 'unmounting')
    }
  }, [])

  return <h2>Comp1</h2>
}

export default LifeCycle
