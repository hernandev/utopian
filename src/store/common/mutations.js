// common store mutations.

// drawer open / closed mutation.
export const setDrawerOpen = (state, open = null) => {
  if (open === null) {
    state.drawerOpen = !state.drawerOpen
  } else {
    state.drawerOpen = open
  }
}

// drawer collapse mutation.
export const setDrawerCollapsed = (state, collapsed = null) => {
  if (collapsed === null) {
    state.drawerCollapsed = !state.drawerCollapsed
  } else {
    state.drawerCollapsed = collapsed
  }
}
