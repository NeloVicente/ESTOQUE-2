const mongoose = require('mongoose')
const ContasReceberSchema = new mongoose.Schema({
  idCliente: String,
  nomeCliente: String,
  numeroNF: String,
  valor: Number,
  dataVencimento: Date,
  dataPagamento: Date,
  diasAtraso: Number,
  valorJuros: Number,
  valorPago: Number
}, {
  timestamps: true
})

module.exports = mongoose.model("ContasReceber", ContasReceberSchema)

