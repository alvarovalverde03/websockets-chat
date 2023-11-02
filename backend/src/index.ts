import express from 'express'
import { Server } from 'socket.io'
import cors from 'cors'

import usersRoutes from './routes/users.routes'
import messagesRoutes from './routes/messages.routes'
import chatsRoutes from './routes/chats.routes'

const app = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(cors())

/* ROUTES */
app.use('/api/users', usersRoutes)
app.use('/api/messages', messagesRoutes)
app.use('/api/chats', chatsRoutes)

const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})

// Socket.io
const io = new Server(server, {
  cors:{
    origin: '*'
  },
  connectionStateRecovery: {
    // the backup duration of the sessions and the packets
    maxDisconnectionDuration: 2 * 60 * 1000
  },
  'transports': ['websocket', 'polling']
})

import chatHandler from './handlers/chatHandler'

const onConection = (socket: any) => {
  // console.log('a user connected: ', socket.id)

  // HANDLERS
  chatHandler(io, socket)

  socket.on('disconnect', () => {
    // console.log('user disconnected: ', socket.id)
  })
}

io.on('connection', onConection)
