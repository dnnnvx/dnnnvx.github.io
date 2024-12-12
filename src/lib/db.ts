import { err, ok } from "neverthrow"

const slowdown = async (n = 1000) =>
  await new Promise((fulfil) => setTimeout(fulfil, n))

export const db = {
  todos: ["sleep", "eat"],
  all: () => structuredClone(db.todos),
  add: async (text: string | undefined) => {
    await slowdown()
    if (!text || text === "") {
      return err({ message: "todo must have a text" })
    }
    if (db.todos.find((t) => t === text)) {
      return err({ message: "todos must be unique" })
    }
    db.todos.push(text)
    return ok(text)
  },
  delete: async (i: number) => {
    await slowdown()
    db.todos.splice(i, 1)
  },
}
