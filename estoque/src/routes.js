const { Router } = require('express')
const EstoqueController = 
    require('./controllers/EstoqueController')

const CompraController = 
    require('./controllers/CompraController')

const VendaController = 
    require('./controllers/VendaController')

const ClienteController = 
    require('./controllers/ClienteController')

const ContasReceberController = 
    require('./controllers/ContasReceberController')    

const routes = new Router();

routes.get('/estoque', EstoqueController.index)
routes.get('/estoque/:id', EstoqueController.show)
routes.post('/estoque', EstoqueController.store)
routes.delete('/estoque/:id', EstoqueController.delete)

routes.get('/compra', CompraController.index)
routes.get('/compra/:id', CompraController.show)
routes.post('/compra', CompraController.store)
routes.delete('/compra/:id', CompraController.delete)

routes.get('/venda', VendaController.index)
routes.get('/venda/:id', VendaController.show)
routes.post('/venda', VendaController.store)
routes.delete('/venda/:id', VendaController.delete)

routes.get('/cliente', ClienteController.index)
routes.get('/cliente/:id', ClienteController.show)
routes.post('/cliente', ClienteController.store)
routes.delete('/cliente/:id', ClienteController.delete)

routes.get('/contasreceber', ContasReceberController.index)
routes.get('/contasreceber/:id', ContasReceberController.show)
routes.post('/contasreceber', ContasReceberController.store)
routes.delete('/contasreceber/:id', ContasReceberController.delete)

module.exports = routes