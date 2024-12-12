// import { json } from "@sveltejs/kit"

// export const GET = () => {
//   const number = Math.floor(Math.random() * 6) + 1
//   return json({ number })
// }

// export const POST = async ({ request, cookies }) => {
//   const { description } = await request.json()
//
//   const userid = cookies.get("userid")
//   const { id } = await database.createTodo({ userid, description })
//
//   return json({ id }, { status: 201 })
// }
