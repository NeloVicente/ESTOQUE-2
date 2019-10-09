const mongoose = require('mongoose')
const EstoqueSchema = new mongoose.Schema({
  nomeProduto: String,
  quantidade: Number,
  valorUnitario: Number,
  valorTotal: Number,
  valorMedio: Number,
  precoVenda: Number,
}, {
  timestamps: true
})

module.exports = mongoose.model("Estoque", EstoqueSchema)

