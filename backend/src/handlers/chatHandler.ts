import { addNewMessage } from '../services/chatService'

const chatHandler = (io, socket) => {
    const sendMessage = (msg) => {
        io.sockets.emit('chat_message', msg)
    }

    socket.on('message', (msg) => {
        const res = addNewMessage(msg)
        if (!res) {
            socket.emit('error', 'Error saving message')
            return
        }

        console.log('message: ', msg)

        io.sockets.emit('new_message', msg)
    })

    socket.on('chat:send', sendMessage)
}

export default chatHandler