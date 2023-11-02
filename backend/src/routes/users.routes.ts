import { Router } from 'express'
import { getUsers, getUserById, createUser } from "../services/user.service"

const router = Router()

router.get('/', async (req, res) => { 
    const users = await getUsers()
  
    return res.status(200).json({ users })
})

router.get('/:id', async (req, res) => { 
    const user = await getUserById(req.params.id)

    if (!user) return res.status(404).json({ message: 'User not found' })
  
    return res.status(200).json({ user })
})

router.post('/', async (req, res) => {
    const { username } = req.body

    const user = await createUser({ username })

    if (!user) return res.status(400).json({ message: 'Bad request' })

    return res.status(201).json({ user })
})

export default router