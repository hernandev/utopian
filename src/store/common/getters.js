// imports.
import { get } from 'lodash-es'
import { Platform } from 'quasar'

// common store getters.

// mobile or not.
export const isMobile = () => get(Platform, 'is.mobile', false)
// desktop or not.
export const isDesktop = () => get(Platform, 'is.desktop', false)

// drawer open / close status.
export const drawerOpen = ({ drawerOpen }) => drawerOpen
// drawer collapse status.
export const drawerCollapsed = ({ drawerCollapsed }) => drawerCollapsed
