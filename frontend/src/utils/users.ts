import { getApiUrl } from "./config"

const API_PATH = getApiUrl()

/**
 * This function creates a new user by making a POST request to the '/users' endpoint.
 * 
 * @param {string} username - The username of the user to be created.
 * @returns {Promise} A Promise that resolves to the response of the fetch request, parsed as JSON.
 * @throws Will log any errors that occur during the fetch request to the console.
 */
export const createUser = async (username: string) => {
  try {
    const res = await fetch(`${API_PATH}/users`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username })
    })

    if (!res.ok) {
      console.log('HTTP-Error: ' + res.status)
      return null
    }

    return await res.json()
  } catch (e) {
    console.log(e)
  }
}

export const getUserById = async (id: number) => {
  try {
      const res = await fetch(`${API_PATH}/users/${id}`, {
          method: 'GET',
          headers: {'Content-Type': 'application/json'}
      })

      if (!res.ok) {
        console.log('HTTP-Error: ' + res.status)
        return null
      }
  
      return await res.json()
  } catch (e) {
      console.log(e)
  }
}