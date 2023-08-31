import { Task, TodoModel } from "./todo.model"
import { Request, Response } from 'express'
import { validateToDo } from './Todo.validations'

export class TodoController {
    static async getAll(req: Request, res: Response) {
        try {
            const tasks: Task[] = await TodoModel.getAllTasks()
            res.json(tasks)
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' })
        }
    }
    
    static async add (req: Request, res: Response) {
        const result = validateToDo(req.body)
        
        if (result.error) {
            return res.status(400).json({ error: JSON.parse(result.error.message )})
        }
    
        const newTask: Task = { id: Date.now(), ...req.body }
    
        try {
            await TodoModel.addTask(newTask)
            res.status(201).json(newTask)
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' })
        }
    }
}