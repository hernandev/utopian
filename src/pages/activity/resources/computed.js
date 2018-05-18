import { date } from 'quasar'
import { each, range, orderBy } from 'lodash-es'

export default {
  sortedHistory () {
    return orderBy(this.history, ['id'], ['desc'])
  },
  dateOptions () {
    const months = []
    const now = date.startOfDate(new Date(), 'month')
    each(range(0, 12), (sub) => {
      // date.subtract()
      const subtracted = date.subtractFromDate(now, { month: sub })
      months.push({ label: date.formatDate(subtracted, 'YYYY-MMMM'), value: date.formatDate(subtracted, 'YYYY-MM') })
    })
    return months
  }
}
