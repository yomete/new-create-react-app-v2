const express = require('express')
const app = express()

app.set('port', (5000))

app.get('/', (req, res) => {
    res.send('Welcome to Node + Express API')
})

const USERS = [
  {
    id: 0,
    name: 'Yomi Eluwande'
  },
  {
    id: 1,
    name: 'Nate Murray'
  },
  {
    id: 2,
    name: 'Sophia Shoemaker'
  }
]

app.get('/api/users', (req, res) => {
    res.send(USERS)
})

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'))
})