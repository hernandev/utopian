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

  // mounted hook.
  mounted () {
    // start SC2
    const api = SC2.Initialize({
      app: process.env.SC2_APP,
      callbackURL: process.env.SC2_CALLBACK,
      scope: ['vote', 'comment', 'comment_options', 'custom_json']
    })

    // assign the redirect URL.
    this.url = api.getLoginURL()

    // redirect to SteemConnect for login.
    window.location = this.url
  }
}
</script>

<!-- component style. -->
<style lang="styl"></style>

<!-- component template. -->
<template lang="pug">
  div
</template>
