// library imports.
import { get } from 'lodash-es'
import moment from 'moment/moment'
// project imports.
import * as user from 'src/database/tables/user'

// auth store actions.

// load the stored user, if any.
export const loadUser = async ({ getters, commit }) => {
  // get the expiration date.
  const expiration = await user.find('expiration', null)
  const username = await user.find('username', null)
  const token = await user.find('token', null)

  // invalid data should not continue.
  if (!expiration || !username || !token) {
    return Promise.reject(new Error('Invalid stored data.'))
  }

  // commit the user information on store.
  commit('setExpiration', moment.utc(expiration))
  commit('setUsername', username)
  commit('setToken', token)

  // resolve the promise with the stored user name.
  return Promise.resolve(username)
}

// parse the oauth callback and do login the user.
export const loginWithCallback = async ({ state, commit, dispatch }, payload) => {
  // extract access token.
  const token = get(payload, 'access_token', null)
  // extract username.
  const username = get(payload, 'username', null)
  // get the expiration ttl (seconds).
  const ttl = get(payload, 'expires_in', null)

  // avoid proceeding if required values are not present.
  if (!token || !username || !ttl) {
    return Promise.reject(new Error('Invalid callback parameters.'))
  }

  // parse into a moment object.
  const expiration = moment.utc().add(ttl, 'seconds').toISOString()

  // encrypt the access token before storage.
  return dispatch('encrypt', token, { root: true }).then(encrypted => {
    // bulk save the values on database.
    return user.bulkSave([
      // username as plain text.
      { name: 'username', value: username },
      // expiration date as ISO string.
      { name: 'expiration', value: expiration },
      // encrypted access token.
      { name: 'token', value: encrypted }
    ])
  })
}

// user logout action.
export const logout = ({ commit }) => {
  // remove local database itens related to the user.
  return user.bulkRemove(['username', 'token', 'expiration'])
    // make sure to clear the store.
    .then((result) => { commit('clearUser'); return result })
    // resolve as true.
    .then(() => Promise.resolve(true))
}
