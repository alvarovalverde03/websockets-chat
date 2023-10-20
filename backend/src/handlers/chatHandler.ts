const chatHandler = (io, socket) => {
    const sendMessage = (msg) => {
        io.sockets.emit('chat_message', msg)
    }

    socket.on('disconnect', () => {
        console.log('user disconnected: ', socket.id)
    })

    socket.on('chat:send', sendMessage)
}

export default chatHandler