import {Router} from 'express'
 
import { todoController } from '../controllers/todoControllers'

export const todosRouter = Router()


todosRouter.get('/', todoController.getAll)
todosRouter.post('/', todoController.add)