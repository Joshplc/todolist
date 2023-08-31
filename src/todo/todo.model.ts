import fs from 'fs'
import path from 'path'

const dbPath = path.join(__dirname, '..', 'src', 'db', 'tasks.json')

export interface Task {
    id: number
    title: string
    completed: boolean
}

export class TodoModel {
    static async getAllTasks(): Promise<Task[]> {
        return JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    }

    static async addTask(task: Task): Promise<void> {
        const tasks: Task[] = await TodoModel.getAllTasks()
        tasks.push(task)
        fs.writeFileSync(dbPath, JSON.stringify(tasks, null, 2))
    }
}