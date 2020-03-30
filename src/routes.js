const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.listing)
routes.get('/products/:id', ProductController.especificListing)

routes.post('/products', ProductController.create)

routes.put('/products/:id', ProductController.update)

routes.delete('/products/:id', ProductController.delete)


module.exports = routes