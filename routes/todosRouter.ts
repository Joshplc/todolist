import {Router} from 'express'
import { validateToDo } from '../schemas/TodoSchemaValidation'
import {Task, todoModel} from '../models/todoModel'

export const todosRouter = Router()


todosRouter.get('/', async (req, res) => {
    try {
        const tasks: Task[] = await todoModel.getAllTasks()
        res.json(tasks)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

todosRouter.post('/', async (req, res) => {
    const result = validateToDo(req.body)
    
    if (result.error) {
        return res.status(400).json({ error: JSON.parse(result.error.message )})
    }

    const newTask: Task = { id: Date.now(), ...req.body };

    try {
        await todoModel.addTask(newTask);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
})