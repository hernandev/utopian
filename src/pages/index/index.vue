<script>
import marked from 'marked'
import Renderer from 'marked-plaintext'
import { byOrder } from 'src/services/steem/posts'
import moment from 'moment'
import MarkdownImage from 'src/services/common/markdown-image'
import UPostPreview from 'src/components/post-preview/post-preview'
import ULayoutPage from 'src/layouts/parts/page/page'
import { categories, categoryOptions } from 'src/services/utopian/categories'
import { map, each, get, last, filter, attempt, debounce } from 'lodash-es'

export default {
  name: 'PageIndex',
  components: {
    UPostPreview,
    ULayoutPage
  },
  data () {
    return {
      order: 'trending',
      loading: false,
      category: 'development',
      posts: [],
      search: ''
    }
  },
  filters: {
    timeAgo (isoDateString) {
      return moment.utc(isoDateString).fromNow()
    },
    firstImage (markdownBody) {
      const first = MarkdownImage.first(markdownBody)

      if (first === null) {
        return false
      }
      console.log(first)
      return first
    }
  },
  methods: {
    makePlain (value) {
      const renderer = new Renderer()
      return marked(value, { renderer })
    },
    loadInitial () {
      this.loading = true
      return this.loadPosts().then((result) => {
        this.loading = false
        return result
      })
    },
    loadPostsScroll: debounce(function (index, done) {
      return this.loadPosts(done)
    }, 3000),
    loadPosts (done) {
      const order = get(this.$route, 'meta.order', 'trending')
      const tag = get(this.$route, 'params.category', 'utopian-io')
      console.log('last', get(last(this.posts), 'permlink', null))
      return byOrder(order, { tag, limit: 80 }, last(this.posts))
        .then((result) => {
          each(result, (post) => {
            this.posts.push(post)
          })
          return result
        })
        .then((result) => {
          console.log(result.length)
          if (result.length < 80) {
            attempt(done)
            this.$refs.infiniteScroll.stop()
          } else {
            attempt(done)
          }
          return result
        })
    }
  },
  computed: {
    categories () {
      return categories
    },
    categoryOptions () {
      return map(categoryOptions, (option) => {
        option.label = option.label.toUpperCase()
        return option
      })
    },
    currentCategory () {
      return get(this.$route, 'params.category', null)
    },
    visiblePosts () {
      return filter(this.posts, (post) => ((post['parent_permlink'] === 'utopian-io')))
    }
  },
  mounted () {
    console.log(this.$store.getters)
    // console.log(this.$route)
    this.loadInitial()
    return true
  },
  watch: {
    currentCategory () {
      this.loadInitial()
    }
  }
}
</script>

<style lang="stylus" src="./index.styl"></style>

<template lang="pug" src="./index.pug"></template>
