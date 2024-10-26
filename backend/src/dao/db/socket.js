const funcionSocket = (io) => {
    io.on('connection', (socket) => {
        console.log('User Connected')
    })
}

module.exports = funcionSocket