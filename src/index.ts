import express from 'express'
import { TodosRouter } from './todo/todos.router'
import {TodoController} from './todo/todo.controllers'
import {TodoService} from './todo/todo.service'
import {TodoModel} from './todo/todo.model'
import path from 'path'

const app = express();
const port = process.env.PORT ?? 3000

const dbPath = path.join(__dirname, 'db', 'tasks.json')
const todoModel = new TodoModel(dbPath)
const todoService = new TodoService(todoModel)
const todoController = new TodoController(todoService)
const todosRouterInstance = new TodosRouter(todoController)


app.disable('x-powered-by')
app.use(express.json())

//access the todoRouter.ts to use the comands get, post
app.use('/tasks', todosRouterInstance.router)

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:3000/tasks`)
})
