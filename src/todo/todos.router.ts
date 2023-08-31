import { Router } from 'express'
import { TodoController } from './todo.controllers'

export class TodosRouter {
    router = Router()

    constructor(todoController: TodoController) {
        this.initializeRoutes(todoController)
    }

    private initializeRoutes(todoController: TodoController) {
        this.router.get('/', todoController.getAll)
        this.router.post('/', todoController.add)
    }
}