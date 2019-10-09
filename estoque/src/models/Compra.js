const mongoose = require('mongoose')
const CompraSchema = new mongoose.Schema({
  dataCompra: Date,
  idProduto: String,
  nomeProduto: String,
  quantidade: Number,
  valorUnitario: Number,
  valorTotal: Number,
}, {
  timestamps: true
})

module.exports = mongoose.model("Compra", CompraSchema)

