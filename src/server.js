const express = require('express')
const mongoose = require('mongoose')

const dot_env = require('dotenv')
dot_env.config()

const mongo_connection_key = process.env.MONGO_STRING_CONNECTION

mongoose.connect(mongo_connection_key)

const exercise = mongoose.model('exercise', {
  name: String,
  description: String,
})

const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req,res) => {
  res.send('Strax')
})

app.listen(port, () => {
  console.log(`App rodando`)
})

app.post('/', async (req,res) => {
  const run = new exercise({
    name: req.body.name,
    description: req.body.description
  })

  await run.save()
  res.send(run)
})