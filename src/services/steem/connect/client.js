// imports.
import sdk from 'sc2-sdk'
import { get } from 'lodash-es'
import router from 'src/router'

// generate the callback url from route and origin.
const getCallbackURL = () => {
  // generate the relative callback path.
  const callbackHref = router.resolve({ name: 'auth.callback' }).href
  // if on hash mode, an slack is needed to glue the origin and the path.
  const base = router.mode === 'hash' ? '/' : ''

  // return the callback url including the origin (full URL).
  return window.location.origin + base + callbackHref
}

// determine the client id.
export const clientId = get(process.env, 'SC2_APP', 'utopian.app')
// token scopes.
export const scopes = ['vote', 'comment', 'comment_options', 'custom_json']
// callback URL.
export const callbackURL = getCallbackURL()

// start a steem connect sdk client instance and export.
export const client = sdk.Initialize({
  app: clientId,
  callbackURL,
  scopes
})
