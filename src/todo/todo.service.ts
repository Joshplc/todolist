import { Task, TodoModel } from "./todo.model";

export class TodoService {
    static async getAllTasks(): Promise<Task[]> {
        return TodoModel.getAllTasks();
    }

    static async addTask(newTask: Task): Promise<void> {
        return TodoModel.addTask(newTask);
    }
}