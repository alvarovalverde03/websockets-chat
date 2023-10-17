import express, { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 8000

app.get('/', (req: Request, res: Response) => {
  return res.send('Received a GET HTTP method')
})

app.get('/api/users', (req: Request, res: Response) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Pepe' },
  ]

  console.log('Returning users: ', users)

  return res.status(200).json({ users })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})