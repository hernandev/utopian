<!-- application layout -->

<!-- component script -->
<script>
// imports.
import ULayoutNavigation from 'src/layouts/parts/navigation/navigation'
import ULayoutDrawer from 'src/layouts/parts/drawer/drawer'
import { mapGetters, mapMutations } from 'vuex'

// main layout component.
export default {

  // component name.
  name: 'u-layout-main',

  // child components.
  components: {
    ULayoutNavigation,
    ULayoutDrawer
  },

  // component data.
  data () {
    return {
      // router transition speed.
      transitionDuration: {
        enter: 400,
        leave: 200
      },

      // screen width detection.
      screenWidth: window.innerWidth,

      // enable a black button with a route.
      controls: null
    }
  },

  // computed properties.
  computed: {

    // map common getters.
    ...mapGetters('common', [
      'isMobile',
      'isDesktop',
      'drawerOpen',
      'drawerCollapsed'
    ])
  },

  // component methods.
  methods: {

    // map common mutations as local methods.
    ...mapMutations('common', [
      'setDrawerCollapsed',
      'setDrawerOpen'
    ]),

    // drawer custom action.
    controlDrawer () {
      return this.isMobile ? this.setDrawerOpen() : this.setDrawerCollapsed()
    }
  },

  // mounted hook.
  mounted () {
    // create a listener for screen resize.
    const resizeListener = () => {
      // assign the window width locally.
      this.screenWidth = window.innerWidth
    }

    // register the resize listener under the window resize event.
    window.addEventListener('resize', resizeListener)
  }
}
</script>

<!-- component template. -->
<template lang="pug" src="./main.pug"></template>

<!-- component style. -->
<style src="./main.styl" lang="stylus"></style>
