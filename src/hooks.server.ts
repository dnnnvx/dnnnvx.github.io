export const handle = async ({ event, resolve }) => {
  event.locals.cache = {
    test: "hello",
  }
  return await resolve(event)
}

export const handleError = ({ event, error }) => {
  console.error(error)

  return {
    message: "everything is fine",
    code: "KINDA_FINE",
  }
}
