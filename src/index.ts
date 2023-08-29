import express from 'express'
import { todosRouter } from '../routes/todosRouter'

const app = express()
const port = process.env.PORT ?? 3000

app.disable('x-powered-by')
app.use(express.json())

//access the todoRouter.ts to use the comands get, post
app.use('/tasks', todosRouter)

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:3000/tasks`)
})
