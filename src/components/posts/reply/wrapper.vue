<script>
// post author component (wrapper).
export default {
  // component name.
  name: 'u-post-reply-wrapper',

  // component props.
  props: {
    reply: {
      type: Object,
      default: null
    }
  }

}
</script>

<!-- component template. -->
<template lang="pug">
  u-post-reply(:reply="reply")
</template>
