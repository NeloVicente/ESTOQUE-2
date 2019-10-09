const mongoose = require('mongoose')
const ClienteSchema = new mongoose.Schema({
  nomeCliente: String,
  email: String,
}, {
  timestamps: true
})

module.exports = mongoose.model("Cliente", ClienteSchema)

