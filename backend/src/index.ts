import express, { Request, Response } from 'express'
import { Server } from 'socket.io'

const app = express()
const port = process.env.PORT || 8000

app.use(express.json())

const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})

app.get('/api/users', (req: Request, res: Response) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Pepe' },
  ]

  return res.status(200).json({ users })
})


import { DBmessages } from './db'

app.get('/api/messages', (req: Request, res: Response) => {
  const messages = DBmessages

  return res.status(200).json({ messages })
})

// Socket.io
const io = new Server(server, {
  cors:{
    origin: '*',
    methods: ['GET', 'POST']
  },
  connectionStateRecovery: {
    // the backup duration of the sessions and the packets
    maxDisconnectionDuration: 2 * 60 * 1000
  }
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
