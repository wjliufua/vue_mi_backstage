<template>
  <iframe
    id="pcHomeIframe"
    src="http://localhost:8080/#/"
    height="100%"
    width="100%"
    seamless
    scrolling="yes"
    :frameborder="1"
    class="pcHomeIframe"
    ref="pcHomeIframe"
  ></iframe>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    Iframe() {
      // console.log(window.heandleIsBackstage)
      // console.log(window.frames.pcHomeIframe.window)
      //   console.log(window.pcHomeIframe.contentWindow)
      //   console.log(this)
      const iframe = this.$refs.pcHomeIframe.contentWindow
      console.log(iframe)
      iframe.postMessage(
        {
          isBackstage: true
        },
        '*'
      )
    }
  },
  mounted() {
    this.Iframe()
  }
}
</script>

<style lang="less" scoped>
.pcHomeIframe {
  border: 1px solid #ccc;
}
</style>
