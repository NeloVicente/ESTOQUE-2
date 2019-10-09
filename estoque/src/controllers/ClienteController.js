const Cliente = require('../models/Cliente')

module.exports = {

  async index(req, res) {
    const cliente = await Cliente.find()
    return res.json(cliente)
  },

  async show(req, res) {
    const { id } = req.params;
    const cliente = await Cliente.findById(id)
    return res.json(cliente)

  },

  async store(req, res) {
    const { nomeCliente, email } = req.body

    const cliente = await Cliente.create({
      nomeCliente,
      email
    })

    return res.json(cliente)
  },

  async delete(req, res) {
    const { id } = req.params
    await Cliente.findByIdAndDelete(id)
    return res.send('Cliente excluído com sucesso')
  }
}