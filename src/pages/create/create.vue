<script>
// import marked from 'marked'
// import Renderer from 'marked-plaintext'
// import { getContent } from 'src/services/steem/posts'
// import moment from 'moment'
// import MarkdownImage from 'src/services/common/markdown-image'
import UPostPreview from 'src/components/post-preview/post-preview'
import { categories, categoryOptions } from 'src/services/utopian/categories'
import { map, debounce, get } from 'lodash-es'
import ULayoutPage from 'src/layouts/parts/page/page'
import { parseAsHtml } from 'src/services/steem/parsers/markdown'

export default {
  name: 'PageCreate',
  components: {
    UPostPreview,
    ULayoutPage
  },
  data () {
    return {
      screenWidth: (() => { return window.innerWidth })(),
      screenHeight: (() => { return window.innerHeight })(),
      body: '',
      preview: ''
    }
  },
  computed: {
    previewStyle () {
      if (!this.isMobile && this.screenWidth > 992) {
        return {
          // 'height': (this.screenHeight - 62 - 48) + 'px',
          // 'max-height': (this.screenHeight - 62 - 48) + 'px',
          'overflow-y': 'auto'
        }
      }

      return {}
    },
    editorStyle () {
      if (!this.isMobile && this.screenWidth > 992) {
        return {}
      }

      if (this.isMobile) {
        return {
          'height': (this.screenHeight - 62 - 48 - 30) + 'px',
          'max-height': (this.screenHeight - 62 - 48 - 30) + 'px',
          'overflow-y': 'auto'
        }
      }
    },
    isMobile () {
      return get(this.$q, 'platform.is.mobile', false)
    },
    categories () {
      return categories
    },
    categoryOptions () {
      return map(categoryOptions, (option) => {
        option.label = option.label.toUpperCase()
        return option
      })
    }
  },
  mounted () {
    window.addEventListener('resize', (e) => {
      this.screenWidth = window.innerWidth
      this.screenHeight = window.innerHeight
    })
    // const author = get(this.$route, 'params.author')
    // const permlink = get(this.$route, 'params.permlink')
    //
    // getContent(author, permlink).then((result) => {
    //   this.post = result
    // })
  },
  watch: {
    body () {
      this.updatePreview()
    }
  },
  methods: {
    updatePreview: debounce(function () {
      this.preview = parseAsHtml(this.body)
    })
  }
}
</script>

<style lang="stylus" src="./create.styl"></style>

<template lang="pug" src="./create.pug"></template>
