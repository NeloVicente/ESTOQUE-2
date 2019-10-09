const Compra = require('../models/Compra')
const Estoque = require('../models/Estoque')

module.exports = {

  async index(req, res) {
    const compra = await Compra.find()
    return res.json(compra)
  },

  async show(req, res) {
    const { id } = req.params;
    const compra = await Compra.findById(id)
    return res.json(compra)

  },

  async store(req, res) {
    const { dataCompra, idProduto, quantidade, 
            valorUnitario } = req.body
    
    try {
      produtoEstoque = 
          await Estoque.findById(idProduto)
    } catch {
      return res
          .status(401)
          .json({ Error: 'Produto inexistente'})
    }

    if (!produtoEstoque) {
        return res
              .status(401)
              .json({ Error: 'Produto inexistente'})
    }

    // Valor total da compra
    const valorTotal = quantidade * valorUnitario
    // armazena nome do produto do estoque
    const nomeProduto = produtoEstoque.nomeProduto
    produtoEstoque.quantidade += quantidade
    produtoEstoque.valorMedio = (
      produtoEstoque.valorUnitario + valorUnitario)/2
    produtoEstoque.valorUnitario = valorUnitario
    produtoEstoque.valorTotal =
      produtoEstoque.quantidade * 
      produtoEstoque.valorUnitario
    produtoEstoque.precoVenda = 
      produtoEstoque.valorMedio * 1.3
    await produtoEstoque.save()
    const compra = await Compra.create({
      dataCompra,
      idProduto,
      nomeProduto,
      quantidade,
      valorUnitario,
      valorTotal
    })

    return res.json(compra)
  },

  async update(req, res) {
  },

  async delete(req, res) {
    const { id } = req.params
    await Compra.findByIdAndDelete(id)
    return res.send('Compra excluída com sucesso')
  }
}