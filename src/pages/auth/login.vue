<!-- login component. -->

<script>
// imports.
import SC2 from 'sc2-sdk'

// component export.
export default {
  // component name.
  name: 'u-auth-login',

  // data.
  data () {
    return {
      url: null
    }
  },

  methods: {
    callbackURL () {
      const callbackHref = this.$router.resolve({ name: 'auth.callback' }).href
      const base = this.$router.mode === 'hash' ? '/' : ''

      return window.location.origin + base + callbackHref
    }
  },

  // mounted hook.
  mounted () {
    // start SC2
    const api = SC2.Initialize({
      app: process.env.SC2_APP,
      callbackURL: this.callbackURL(),
      scope: ['vote', 'comment', 'comment_options', 'custom_json']
    })

    window.location = api.getLoginURL()
    // window.location = this.url
  }
}
</script>

<!-- component style. -->
<style lang="styl"></style>

<!-- component template. -->
<template lang="pug">
  div
</template>
