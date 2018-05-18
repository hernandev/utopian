// imports.
import { isEmpty } from 'lodash-es'
import moment from 'moment'

// auth store getters.

// username getter.
export const username = ({ username }) => username

// token expiration getter.
export const expiration = ({ expiration }) => expiration

// access token getter.
export const token = ({ token }) => token

// check user session is valid.
export const check = ({ username, expiration, token }) => {
  // check user data empty.
  const hasEmptyFields = (isEmpty(username) || isEmpty(expiration) || isEmpty(token))

  // return false for empty fields.
  if (hasEmptyFields) {
    return false
  }

  // token expiration check.
  const tokenExpired = expiration.isBefore(moment.utc())

  // token is not expired and all fields are present.
  return (!hasEmptyFields && !tokenExpired)
}
