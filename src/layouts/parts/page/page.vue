<!-- custom page wrapper for the application. -->

<!-- component script -->
<script>
// imports.
import { mapGetters, mapMutations } from 'vuex'

// component export.
export default {

  // component name.
  name: 'u-layout-page',

  // component data.
  data () {
    return {}
  },

  // props.
  props: {
    // enable / disable meta bar.
    meta: {
      type: Boolean,
      default: true
    }
  },

  // computed properties.
  computed: {

    // map common getters.
    ...mapGetters('common', [
      'drawerOpen',
      'drawerCollapsed',
      'isMobile',
      'isDesktop'
    ]),

    // open / close drawer v-model bypass.
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
<template src="./page.pug" lang="pug"></template>

<!-- component styles. -->
<style src="./page.styl" lang="stylus"></style>
