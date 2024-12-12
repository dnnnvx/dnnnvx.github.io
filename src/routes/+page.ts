import { db } from "$lib"
import { fail } from "@sveltejs/kit"

export const load = () => {
  return {
    todos: db.all(),
  }
}

// export const actions = {
//   create: async ({ cookies, request }) => {
//     const data = await request.formData()
//     const text = data.get("text")?.toString()
//     const result = await db.add(text)
//     if (result.isErr()) {
//       return fail(422, { error: result.error, text })
//     }
//     return {
//       text: result.value,
//     }
//   },
//   delete: async ({ cookies, request }) => {
//     const data = await request.formData()
//     const i = +(data.get("i")?.toString() ?? -1)
//     if (i >= 0) db.delete(i)
//   },
// }
