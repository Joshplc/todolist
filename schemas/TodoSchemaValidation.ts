import { object, string, number, boolean } from 'zod';

const TodoSchema = object({
  id: number().positive().int(),
  title: string({
    invalid_type_error: "Movie title must be a string",
    required_error: "Movie title is required",
  }),
  completed: boolean(),
}).strict()

export function validateToDo (todo: object): any {
  return TodoSchema.safeParse(todo);
}