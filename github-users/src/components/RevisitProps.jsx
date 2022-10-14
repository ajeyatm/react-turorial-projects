import React from 'react'

const SomeChild = (props) => {
  console.log(props.city, props.hobbies, props.indian)
  //react will handle numbers, strings easily
  //react doesn't disaply the boolens , because of that it has to be used in condition
  //react has difficulties in rendering/displying arrays & objects
  //if arrays contain primitive types , then it wl be rendered
  return (
    <>
      <div>SomeChild</div>
      <div>{props.city}</div>
      <h3>{`Lucky Number ${props.luckyNumber}`}</h3>
      <div>Hobbies - {props.hobbies}</div>
      <div>
        Address, DoorNumber - {props.address.doorNumber} street -
        {props.address.street}
      </div>
      <div>{JSON.stringify(props.address)}</div>
      <div>{JSON.stringify(props.hobbies)}</div>
      <div>Indian? {props.indian ? 'yes' : 'No'}</div>
    </>
  )
}

const UserAddress = (props) => {
  console.log(props.response)
  return (
    <>
      {props.response.map((item) => (
        <div>
          <h5>Name: {item.name}</h5>
          <div>Address</div>
          {/* <div>Door Number : {item.doorNumber ? item.doorNumber : '-'}</div> */}
          {item.doorNumber ? <div>Door Number : {item.doorNumber}</div> : null}
          <div>Street: {item.street}</div>
        </div>
      ))}
    </>
  )
}

const RevisitProps = () => {
  const response = [
    {
      name: 'ajeya',
      doorNumber: 8,
      street: '4th avenue',
      indian: true,
    },
    {
      name: 'amit',
      street: '7th main',
      indian: false,
    },
  ]
  return (
    <>
      <div>RevisitProps</div>
      {/* <SomeChild
        luckyNumber={8}
        city={'goa'}
        address={{ doorNumber: 8, street: '4th avenue' }}
        hobbies={['tt', 'basket ball', true, 2]}
        indian
      /> */}
      <UserAddress response={response} />
    </>
  )
}

export default RevisitProps
