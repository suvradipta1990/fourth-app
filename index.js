const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/Students', db.Students)
app.get('/Students/:id', db.getStudentById)
app.post('/Students', db.createStudent)
app.put('/Students/:id', db.updateStudent)
app.delete('/Students/:id', db.deleteStudent)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})