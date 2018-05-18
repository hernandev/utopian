<script>
export default {
  name: 'box-page-activity-async-image',
  data () {
    return {
      source: null
    }
  },
  props: {
    url: {
      type: String,
      default: null
    }
  },
  // methods: {
  //   fetchImage () {
  //     function arrayBufferToBase64 (buffer) {
  //       let binary = ''
  //       let bytes = [].slice.call(new Uint8Array(buffer))
  //
  //       bytes.forEach((b) => { binary += String.fromCharCode(b) })
  //
  //       return window.btoa(binary)
  //     }
  //     if (typeof this.url === 'string' && this.url.length > 0) {
  //       let request = new Request(this.url || '')
  //       fetch(request, {
  //         method: 'GET',
  //         headers: new Headers({}),
  //         // mode: 'cors',
  //         cache: 'default'
  //       }).then((response) => {
  //         response.arrayBuffer().then((buffer) => {
  //           let base64Flag = 'data:image/jpeg;base64,'
  //           let imageStr = arrayBufferToBase64(buffer)
  //
  //           this.source = base64Flag + imageStr
  //         })
  //       })
  //     }
  //
  //     // console.log(this.url)
  //     // this.$http.get(this.url, { responseType: 'arraybuffer' }).then((response) => console.log(response)).catch((response) => console.log(response))
  //   }
  // },
  mounted () {
    // this.fetchImage()
  },
  watch: {
    // url () {
    //   // console.log(this.url)
    // }
  }
}
</script>

<template lang="pug">
  img(:src="url")
</template>
