// imports.
import { api } from 'src/services/steem/client'
import { promisify } from 'src/services/common/promisify'
import { parsePost } from './parsers/post'
import { map, get } from 'lodash-es'

// retrieve a post content.
export const getContent = (author, permlink) => {
  const contentGetter = promisify(api.getContent)

  return contentGetter(author.replace('@', ''), permlink).then(parsePost)
}

// retrieve posts on generic method.
export const getBy = (method, query) => {
  const promiseGetter = promisify(method)

  return promiseGetter(query).then((posts) => map(posts, parsePost))
}

// load posts by created order.
export const byCreated = (query) => {
  return getBy(api.getDiscussionsByCreated, query)
}

// load posts by trending order.
export const byTrending = (query) => {
  return getBy(api.getDiscussionsByTrending, query)
}

// initial / buggy pagination.
export const byOrder = (order = 'trending', query, last = null) => {
  const getQuery = Object.assign({}, query)

  if (last) {
    getQuery['start_author'] = get(last, 'author')
    getQuery['start_permlink'] = get(last, 'permlink')
    getQuery['limit'] = get(query, 'limit', 10) + 1
  }

  const method = order === 'trending' ? byTrending : byCreated

  return method(getQuery).then(results => {
    if (last) {
      results.shift()
    }
    return results
  })
}

// default export.
export default {
  byCreated,
  byTrending,
  byOrder
}
