<!-- component script -->
<script>
// import the resources mixin.
import resources from './resources'

/**
 * Component script export.
 */
export default {
  // page name.
  name: 'sb-page-activity',

  // enable mixins.
  mixins: [ resources ]
  // watch: {
  //   month (e) {
  //     console.log(e)
  //   }
  // }
}
</script>

<!-- component template -->
<template lang="pug" src="./activity.pug"></template>
<style lang="stylus" src="./activity.styl"></style>
