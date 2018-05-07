// imports.
import axios from 'axios'

// export plugin.
export default ({ Vue }) => {
  // define axios as a component property.
  Vue.prototype.$axios = axios
}
