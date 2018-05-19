// imports.
import { client } from './client'

// redirect to login page.
export const redirectToLogin = () => {
  // redirect to login (browser location change).
  window.location = client.getLoginURL()
}
