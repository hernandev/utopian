<script>
import { getContent } from 'src/services/steem/posts'
import ULayoutPage from 'src/layouts/parts/page/page'
import UPostPreview from 'src/components/post-preview/post-preview'
import UPostAuthor from 'src/components/posts/author/author'
import { get } from 'lodash-es'
import { parseAsHtml, parseAsPlainText } from 'src/services/steem/parsers/markdown'

export default {
  name: 'PagePost',
  components: {
    UPostPreview,
    ULayoutPage,
    UPostAuthor
  },
  data () {
    return {
      post: null
    }
  },
  methods: {
    makePlain (value) {
      return parseAsPlainText(value)
    }
  },
  computed: {
    postBody () {
      return parseAsHtml(get(this.post, 'body'))
    }
  },
  mounted () {
    const author = get(this.$route, 'params.author')
    const permlink = get(this.$route, 'params.permlink')

    getContent(author, permlink).then((result) => {
      this.post = result
    })
  }
}
</script>

<style lang="stylus" src="./post.styl"></style>

<template lang="pug" src="./post.pug"></template>
