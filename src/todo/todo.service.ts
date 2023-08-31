import { Task, TodoModel } from "./todo.model"

export class TodoService {
    private todoModel: TodoModel

    constructor(todoModel: TodoModel) {
        this.todoModel = todoModel
    }

    async getAllTasks(): Promise<Task[]> {
        return this.todoModel.getAllTasks()
    }

    async addTask(newTask: Task): Promise<void> {
        return this.todoModel.addTask(newTask)
    }
}