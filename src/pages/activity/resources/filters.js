// imports.
import moment from 'moment'
/**
 * Activity resources mixins filters.
 */
export default {
  timeAgo (v) {
    return moment(v + '.000Z').calendar()
  }
}
