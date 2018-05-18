<!-- auth callback (oauth) -->

<!-- component script -->
<script>
// imports.
import { mapActions } from 'vuex'
import { get } from 'lodash-es'

// auth callback component.
export default {

  // component name,
  name: 'u-auth-callback',

  // component methods.
  methods: {

    // map auth store actions.
    ...mapActions('auth', [
      'loginWithCallback'
    ]),

    // parse oauth callback query.
    parseQuery () {
      return this.loginWithCallback(get(this.$route, 'query'))
    }
  },

  // mounted hook.
  mounted () {
    // call the parse query method upon render.
    return this.parseQuery()
      .then(() => {
        // after, redirect home after login.
        this.$router.push({ name: 'home' })
      })
  }
}
</script>

<!-- component template -->
<template lang="pug">
  div
</template>
