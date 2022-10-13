import { useEffect, useState } from 'react'

const Revisit = () => {
  const [name, setName] = useState('Ajeya')
  const [age, setAge] = useState(29)
  const [email, setEmail] = useState('')

  console.log('1=>', name)

  useEffect(() => {
    console.log('2=> iam from 1st useeffect')
  }, [age])

  useEffect(() => {
    console.log('3=> iam from 2nd useeffect')
  }, [name])

  useEffect(() => {
    console.log('4=> iam from 3nd useeffect')
  }, [name, age])

  //this will execute for all the renders
  useEffect(() => {})
  //.this will execute only once after the first render
  useEffect(() => {}, [])

  console.log('5==> hhii')

  return (
    <>
      <div>
        {name} - {age} - {email}
      </div>
      <button
        onClick={() => {
          setName('Amit') //name='amit'
        }}
      >
        Change Name
      </button>
      <button
        onClick={() => {
          setAge(age + 1)
        }}
      >
        Increase Age
      </button>
      <button
        onClick={() => {
          setEmail('ajeya@gmail.com')
        }}
      >
        Display Email
      </button>
    </>
  )
}

export default Revisit
