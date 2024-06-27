const mongoose = require('mongoose')
const dot_env = require('dotenv')
dot_env.config()

const mongo_connection_key = process.env.MONGO_STING_CONNECTION

mongoose.conect(mongo_connection_key)

console.log(mongo_connection_key)

export const exercise = mongoose.model('exercise', {
  name: String,
  description: String,
})

const run = new exercise({name: 'Corrida', description: 'Corrida com as pernas'})
run.save().then(() => console.log('corrida salva'))