const ContasReceber = require('../models/ContasReceber')

module.exports = {

  async index(req, res) {
    const contasReceber = await ContasReceber.find()
    return res.json(contasReceber)
  },

  async show(req, res) {
    const { id } = req.params;
    const contasReceber = await ContasReceber.findById(id)
    return res.json(contasReceber)

  },

  async store(req, res) {
  },

  async delete(req, res) {
    const { id } = req.params
    await ContasReceber.findByIdAndDelete(id)
    return res.send('Contas a receber excluída com sucesso')
  }
}