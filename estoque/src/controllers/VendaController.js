const Venda = require('../models/Venda')

module.exports = {

  async index(req, res) {
    const venda = await Venda.find()
    return res.json(venda)
  },

  async show(req, res) {
    const { id } = req.params;
    const venda = await Venda.findById(id)
    return res.json(venda)

  },

  async store(req, res) {

  },

  async delete(req, res) {
    const { id } = req.params
    await Venda.findByIdAndDelete(id)
    return res.send('Venda excluída com sucesso')
  }
}