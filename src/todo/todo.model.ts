import fs from 'fs'
import path from 'path'

const dbPath = path.join(__dirname, '..', 'db', 'tasks.json')

export interface Task {
    id: number
    title: string
    completed: boolean
}

export class TodoModel {
    private readonly dbPath: string

    constructor(dbPath: string) {
        this.dbPath = dbPath
    }

    async getAllTasks(): Promise<Task[]> {
        return JSON.parse(fs.readFileSync(this.dbPath, 'utf-8'))
    }

    async addTask(task: Task): Promise<void> {
        const tasks: Task[] = await this.getAllTasks()
        tasks.push(task)
        fs.writeFileSync(this.dbPath, JSON.stringify(tasks, null, 2))
    }
}