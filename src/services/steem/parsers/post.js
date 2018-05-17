// imports.
import { get, attempt, find } from 'lodash-es'
import { categories } from 'src/services/utopian/categories'

// post parser.
export const parsePost = (post) => {
  // parse metadata.
  post._meta = attempt(() => (JSON.parse(get(post, 'json_metadata'))), {})
  // parse tags.
  post._tags = attempt(() => get(post, '_meta.tags', []))
  // parse category.
  post._category = find(post._tags, (tag) => {
    return categories.indexOf(tag) !== -1
  })

  // return the post.
  return post
}
