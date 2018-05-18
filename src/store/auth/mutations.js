// auth store mutations.

// stored user username.
export const setUsername = (state, username) => {
  state.username = username
}

// stored user token expiration.
export const setExpiration = (state, expiration) => {
  state.expiration = expiration
}

// stored user access token.
export const setToken = (state, token) => {
  state.token = token
}

// clear the store user immediately.
export const clearUser = (state) => {
  state.username = null
  state.expiration = null
  state.token = null
}
