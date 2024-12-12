export const handle = async ({ event, resolve }) => {
  event.locals.answer = 42
  return await resolve(event)
}

export const handleError = ({ event, error }) => {
  console.error(error.stack)

  return {
    message: "everything is fine",
    code: "KINDA_FINE",
  }
}
