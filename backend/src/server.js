const express = require('express')
const routerProduct = require('./routes/product.routes.js')
const routerCart = require('./routes/cart.routes.js')
const app = express()
const PORT = 8080 || process.env.PORT
const Database = require('../src/dao/db/index.js')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/products', routerProduct)
app.use('/carts', routerCart)

app.listen(PORT, () => {
    console.log('Server run on port', PORT)
    Database.connect()
})