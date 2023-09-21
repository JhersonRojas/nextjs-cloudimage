
export function CONST_BASE_URL() {
  try {
    if (process.env.BASE_URL) {
      return process.env.BASE_URL.toString()
    }
    throw new Error("No se encontro la base de la url")
  } catch (error) {
    console.error(error)
  }
}
