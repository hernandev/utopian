import moment from 'moment'

export default function () {
  return {
    loading: true,
    history: [],
    done: false,
    limit: 100,
    last: -1,
    month: moment().toISOString()
  }
}
