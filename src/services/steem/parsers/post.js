// imports.
import { get, attempt, find, filter, map } from 'lodash-es'
import { categories } from 'src/services/utopian/categories'
import { parseCurrencyString } from 'src/services/currencies/formatter'
import { formatReputation } from 'src/services/steem/account'
import moment from 'moment'

// post parser.
export const parsePost = (post) => {
  // parse metadata.
  post._meta = attempt(() => (JSON.parse(get(post, 'json_metadata'))), {})

  // parse tags.
  post._tags = attempt(() => get(post, '_meta.tags', []))

  // parse category.
  post._category = find(post._tags, (tag) => categories.indexOf(tag) !== -1)

  // parse a tag list on format object.
  post._tags_list = map(post._tags, tagString => ({ id: tagString, label: tagString }))

  // visible post tags.
  post._visible_tags = filter(post._tags_list, (tag) => {
    return (tag.label !== 'utopian-io') && (categories.indexOf(tag.label) === -1)
  })

  // pending payout.
  post._pending_payout_value = parseCurrencyString(get(post, 'pending_payout_value', '0'))

  // moment object for the time created (UTC).
  post._time_created = moment.utc(get(post, 'created', null))

  // diff string
  post._time_created_from_now = post._time_created.fromNow()

  // net votes, force integer.
  post._net_votes = parseInt(get(post, 'net_votes'))

  // normalize a reply key.
  post._net_replies = parseInt(get(post, 'children'))

  // avatar helper.
  post._author_avatar = 'https://img.blocker.press/a/' + get(post, 'author')

  // parsed author reputation.
  post._author_reputation = formatReputation(get(post, 'author_reputation'))

  // return the post.
  return post
}
