const mongoose = require('mongoose');

module.exports = {
    connect: () => {
        return mongoose.connect('mongodb+srv://LucasM:123@expressreact.2ynydqy.mongodb.net/ecommerce')
        .then(() => {
            console.log('Base de datos conectada');
        }).catch((error) => {
            console.log(error)
        })
    }
}