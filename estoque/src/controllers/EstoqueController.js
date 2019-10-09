const Estoque = require('../models/Estoque')

module.exports = {

  async index(req, res) {
    const estoque = await Estoque.find()
    return res.json(estoque)
  },

  async show(req, res) {
    const { id } = req.params;
    const estoque = await Estoque.findById(id)
    return res.json(estoque)

  },

  async store(req, res) {
    const { nomeProduto, quantidade, 
      valorUnitario } = req.body;
    const precoVenda = valorUnitario * 1.30;
    const valorTotal = quantidade * valorUnitario;
    const valorMedio = valorUnitario;
    const estoque = await Estoque.create({
      nomeProduto,
      quantidade,
      valorUnitario,
      valorTotal,
      valorMedio,
      precoVenda
    })

    return res.json(estoque)
    
  },

  async delete(req, res) {
    const { id } = req.params
    await Estoque.findByIdAndDelete(id)
    return res.send('Produto excluído com sucesso')
  }
}