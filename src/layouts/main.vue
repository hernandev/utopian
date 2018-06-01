<!-- application layout -->

<!-- component script -->
<script>
// imports.
import ULayoutDrawer from 'src/layouts/parts/drawer/drawer'
import ULayoutToolbar from 'src/layouts/parts/toolbar/toolbar'
import { mapGetters, mapMutations } from 'vuex'

// main layout component.
export default {

  // component name.
  name: 'u-layout-main',

  // child components.
  components: {
    ULayoutDrawer,
    ULayoutToolbar
  },

  // component data.
  data () {
    return {
      // router transition speed.
      transitionDuration: {
        enter: 100,
        leave: 100
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
    ])

    // // drawer custom action.
    // controlDrawer () {
    //   return this.isMobile ? this.setDrawerOpen() : this.setDrawerCollapsed()
    // }
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
<template lang="pug">
// layout wrapper.
q-layout.u-layout.q-layout-wallet(view='lHh Lpr lFf')

  // layout main header.
  q-layout-header.layout-header(reveal)
    // toolbar (navbar).
    u-layout-toolbar

  // layout drawer menu.
  // u-layout-drawer

  // main content / router content.
  q-page-container.fit
    div.container.container-page
      // route change transition (animation).
      transition(:duration="{ enter: 100, leave: 100 }", enter-active-class="animated fadeIn", leave-active-class="animated fadeOut")
        // router view.
        router-view(:key="$route.path")

    // ajax magic loading bar.
    q-ajax-bar(color="primary", size="3px")

</template>

<!-- component style. -->
<style lang="stylus">
// default variable import.
@import "~variables"

// app wrapper.
.u-app#q-app



  // main layout custom style.

  // transition rule for layout pages.
div, main
  &.q-layout-page.u-page
    padding: 24px 24px
    transition: left 0.5s ease;

//.container.container-page
//  max-width 98%

</style>
