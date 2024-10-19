const express = require('express');
const routerProduct = require('./routes/product.routes.js');
const routerCart = require('./routes/cart.routes.js');
const routerUser = require('./routes/user.routes.js');
const app = express();
const PORT = /* process.env.PORT ||  */8080;
const Database = require('../src/dao/db/index.js');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(session({
    store:MongoStore.create({
        mongoUrl: 'mongodb+srv://LucasM:123@expressreact.2ynydqy.mongodb.net/sessions'
    }),
    secret: 'sessionSecret',
    resave: true,
    saveUninitialized: true
}))

app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/products', routerProduct);
app.use('/carts', routerCart);
app.use('/users', routerUser);

app.listen(PORT, () => {
    console.log('Server run on port', PORT)
    Database.connect()
})