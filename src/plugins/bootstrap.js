// main application bootstrap (before router init methods).
export default ({ app, router, Vue, store }) => {
  // dispatch common bootstrap action on store.
  store.dispatch('common/bootstrap')
}
