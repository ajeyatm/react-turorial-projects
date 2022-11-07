const express = require('express')

const app = express()

const users = [
  {
    name: 'ajeya',
    age: 26,
  },
  {
    name: 'amit',
    age: 29,
  },
]

app.get('/', (req, res) => {
  res.send('HI')
})

app.get('/api/getName', (req, res) => {
  res.send('Ajeya')
})

app.get('/api/users', (req, res) => {
  res.send(users)
})

app.listen(8888, () => {
  console.log('Running')
})
//get(), post()
