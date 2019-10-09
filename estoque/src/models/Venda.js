const mongoose = require('mongoose')
const VendaSchema = new mongoose.Schema({
  dataVenda: Date,
  idProduto: String,
  nomeProduto: String,
  quantidade: Number,
  precoVenda: Number,
  valorTotal: Number,
}, {
  timestamps: true
})

module.exports = mongoose.model("Venda", VendaSchema)

