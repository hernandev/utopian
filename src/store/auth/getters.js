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

// token expired.
export const tokenExpired = ({ expiration }) => expiration ? expiration.isBefore(moment.utc()) : true

// empty user fields.
export const hasEmptyFields = ({ username, expiration, token }) => (isEmpty(username) || isEmpty(expiration) || isEmpty(token))

// check user session is valid.
export const check = (state) => (!hasEmptyFields(state) && !tokenExpired(state))

// guest (inverse of check).
export const guest = (state) => !check(state)
