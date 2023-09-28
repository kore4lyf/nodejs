
const express = require('express')
const app = express() 
const tasks = require('./routes/tasks') 
const connectDB = require('./db/connect')
require('dotenv').config()

const port = process.env.PORT || 3000 

// middleware 
app.use(express.json())

// routes 
app.get('/', (req, res) => {
  res.status(200)
  res.send('<h1>Task Manager App</h1>')
})

app.use('/api/v1/tasks', tasks)

// router.get('/', getPeople)
// router.post('/', createperson)
// router.post('/postman'. createPerssonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deleteperson)

const start  = async () => {
  try {
    await connectDB(process.env.MONGO_URI) 
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } 
  catch(err) {
    console.log(err.message)
  }
} 

start() 