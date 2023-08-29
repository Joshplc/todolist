import {Router} from 'express'
import fs from 'fs'
import path from 'path'
import { validateToDo } from '../schemas/TodoSchemaValidation'

const dbPath = path.join(__dirname, '..', 'src', 'db', 'tasks.json')

export const todosRouter = Router()

interface Task {
    id: number
    title: string
    completed: boolean
}

todosRouter.get('/', (req, res) => {
        const tasks: Task[] = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))
        res.json(tasks)
})

todosRouter.post('/',  (req, res) => {
    const tasks: Task[] = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))
    const newTask: Task = { id: Date.now(), ...req.body }
    const result = validateToDo(req.body)
    
    if (result.error) {
        return res.status(400).json({ error: JSON.parse(result.error.message )})
    }
    tasks.push(newTask)
    fs.writeFileSync(dbPath, JSON.stringify(tasks, null, 2))
    res.status(201).json(newTask)
})