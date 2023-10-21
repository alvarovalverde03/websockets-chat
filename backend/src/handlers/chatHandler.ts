const chatHandler = (io, socket) => {
    const sendMessage = (msg) => {
        io.sockets.emit('chat_message', msg)
    }

    socket.on('message', (msg) => {
        socket.emit('message', msg)
    })

    socket.on('chat:send', sendMessage)
}

export default chatHandler