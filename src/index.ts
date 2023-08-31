import express from 'express'
import { TodosRouter } from './todo/todos.router'

const app = express()
const port = process.env.PORT ?? 3000
const todosRouterInstance = new TodosRouter()

app.disable('x-powered-by')
app.use(express.json())

//access the todoRouter.ts to use the comands get, post
app.use('/tasks', todosRouterInstance.router)

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:3000/tasks`)
})
