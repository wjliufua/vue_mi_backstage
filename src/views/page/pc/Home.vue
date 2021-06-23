<template>
  <iframe
    src="http://localhost:8080/#/"
    height="100%"
    width="100%"
    seamless
    scrolling="yes"
    :frameborder="1"
    class="pcHomeIframe"
  ></iframe>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.pcHomeIframe {
  border: 1px solid #ccc;
}
</style>
