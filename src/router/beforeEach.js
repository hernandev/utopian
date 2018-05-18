// imports.
import store from 'src/store'

// runs before each route change.
const beforeEach = async (to, from, next) => {
  // check for the store derivation key.
  await store.dispatch('prepareEncryption')
  const username = await store.dispatch('auth/loadUser').catch(() => null)
  console.log(username)

  // load the current accounts.
  // const accounts = await store.dispatch('accounts/loadAccounts')

  // setup routes can always be reached.
  // if (to.name === 'setup') {
  //   return next()
  // }

  // when there is an active derivation key and there's one active account, continue.
  // if (hasDerivationKey === true && accounts.length >= 1) {
  //   return next()
  // }
  return next()
  // redirect to setup otherwise.
  // return next({ name: 'setup' })
}

// default export.
export default beforeEach
