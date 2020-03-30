const mongoose = require('mongoose')
const Product = require('../models/Product')

module.exports = {
    async listing(req, res) {
        const { page = 1 } = req.query
        const products = await Product.paginate({}, { page, limit: 5 })

        return res.json(products)
    },

    async especificListing(req, res) {
        const product = await Product.findById(req.params.id)

        return res.json(product)
    },

    async create(req, res) {
        const product = await Product.create(req.body)

        return res.json(product)
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(product)
    },

    async delete(req, res) {
        await Product.findByIdAndDelete(req.params.id)

        res.send()
    },
}