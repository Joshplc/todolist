import { TodoService } from './todo.service'
import { Request, Response } from 'express'
import { validateToDo } from './todo.validations'
import { Task} from "./todo.model"

export class TodoController {
    private todoService: TodoService

    constructor(todoService: TodoService) {
        this.todoService = todoService
    }

    async getAll(req: Request, res: Response) {
        try {
            const tasks: Task[] = await this.todoService.getAllTasks()
            res.json(tasks)
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' })
        }
    }

    async add(req: Request, res: Response) {
        const result = validateToDo(req.body)

        if (result.error) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const newTask: Task = { id: Date.now(), ...req.body }

        try {
            await this.todoService.addTask(newTask)
            res.status(201).json(newTask)
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' })
        }
    }
}