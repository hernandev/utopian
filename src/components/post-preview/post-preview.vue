<script>
// imports.
import { parseAsPlainText } from 'src/services/steem/parsers/markdown'

// post preview component.
export default {
  // component name.
  name: 'u-post-preview',

  // component props.
  props: {
    // post to display.
    post: {
      type: Object,
      default: null
    },
    // show except.
    showExcept: {
      type: Boolean,
      default: true
    }
  },

  // component data.
  data () {
    return {}
  },

  // computed properties.
  computed: {
    // generates an except to be shown on the preview.
    except () {
      return parseAsPlainText(this.post.body)
    }
  }
}
</script>

<!-- component style. -->
<style lang="stylus" src="./post-preview.styl"></style>

<!-- component template. -->
<template lang="pug" src="./post-preview.pug"></template>
