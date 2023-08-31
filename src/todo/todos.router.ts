import { Router } from 'express';
import { TodoController } from './todo.controllers';

export class TodosRouter {
    router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', TodoController.getAll);
        this.router.post('/', TodoController.add);
        // Add more routes here if needed
    }
}