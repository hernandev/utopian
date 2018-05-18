<!-- component script -->
<script>
// imports.
import { mapGetters, mapMutations, mapActions } from 'vuex'

// layout drawer component.
export default {

  // component name.
  name: 'u-layout-drawer',

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
      'check',
      'username'
    ]),

    // common store getters.
    ...mapGetters('common', [
      'drawerOpen',
      'drawerCollapsed',
      'isMobile',
      'isDesktop'
    ]),

    open: {
      get: function () {
        return this.drawerOpen
      },
      set: function (v) {
        return this.setDrawerOpen(v)
      }
    },

    // dynamic css classes for the drawer.
    drawerClasses () {
      if (this.isMobile) {
        return [ 'u-drawer' ]
      }
      // on case not mobile, return the collapsed class, if collapsed
      return this.drawerCollapsed ? [ 'u-drawer', 'collapsed' ] : [ 'u-drawer' ]
    }
  },

  // component methods.
  methods: {
    ...mapMutations('common', [
      'setDrawerCollapsed',
      'setDrawerOpen'
    ]),

    ...mapActions('auth', [
      'logout'
    ]),

    // toggle the collapse state.
    toggleCollapse () {
      this.setDrawerCollapsed()
    },

    // expand when the mouse enters the drawer
    mouseOver () {
      this.setDrawerCollapsed(false)
    },

    // retreat when the mouse leaves.
    mouseLeave () {
      this.setDrawerCollapsed(true)
    }
  }
}
</script>

<!-- component template. -->
<template src="./drawer.pug" lang="pug"></template>

<!-- component styles. -->
<style src="./drawer.styl" lang="stylus"></style>
