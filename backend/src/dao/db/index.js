const mongoose = require('mongoose');

module.exports = {
    connect: () => {
        return mongoose.connect('mongodb+srv://mendozalucas001:1234@clusterreactexpress.btvwxbb.mongodb.net/?retryWrites=true&w=majority&appName=ClusterReactExpress/ecommerce')
        .then(() => {
            console.log('Base de datos conectada');
        }).catch((error) => {
            console.log(error)
        })
    }
}