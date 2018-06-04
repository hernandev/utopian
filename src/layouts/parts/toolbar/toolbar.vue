<!-- component script -->
<script>
// imports.
import { mapGetters, mapActions } from 'vuex'

// layout toolbar component.
export default {

  // component name.
  name: 'u-layout-toolbar',

  // component data.
  data () {
    return {
      overlay: null
    }
  },

  // computed properties.
  computed: {

    // auth store getters.
    ...mapGetters('auth', [
      'guest',
      'username'
    ]),

    // common store getters.
    ...mapGetters('common', [
      'isMobile',
      'isDesktop'
    ]),

    // avatar image URL.
    avatar () {
      return this.guest ? null : ('https://img.blocker.press/a/' + this.username)
    },

    createLabel () {
      return this.isDesktop ? 'Contribution' : ''
    }
  },

  // component methods.
  methods: {

    ...mapActions('auth', [
      'logout'
    ]),

    // redirect to create route.
    redirectToCreate () {
      return this.$router.push({ name: 'create' })
    },

    // redirect to login route.
    redirectToLogin () {
      return this.$router.push({ name: 'auth.login' })
    }
  }
}
</script>

<!-- component template. -->
<template src="./toolbar.pug" lang="pug"></template>

<!-- component styles. -->
<style src="./toolbar.styl" lang="stylus"></style>
