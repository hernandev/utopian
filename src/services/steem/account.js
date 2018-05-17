// imports.
import { api, formatter } from 'src/services/steem/client'
import { promisify } from 'src/services/common/promisify'
import { get } from 'lodash-es'

// history loader.
export const getHistory = (username, start, limit) => {
  // promisify the account history loader.
  const promiseGetter = promisify(get(api, 'getAccountHistory'))

  // call the promise and return
  return promiseGetter(username, start, limit)
}

// format the reputation of a given account.
export const formatReputation = (reputationPoints) => {
  return formatter.reputation(reputationPoints)
}

// default export.
export default {
  getHistory,
  formatReputation
}
