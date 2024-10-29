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
const initializePassport = require('../src/config/passport.js')
const passport = require('passport');

//socket
const { Server } = require('socket.io')
const http = require('http')
const funcionSocket = require('../src/dao/db/socket.js')

const server = http.createServer(app);
const io = new Server(server);

funcionSocket(io);

initializePassport()
app.use(passport.initialize())
app.use(passport.session())

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

app.use(express.static(__dirname+'/public'))
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

module.exports = {app, server, io}