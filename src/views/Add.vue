<template>
  <div>
    <button @click="addSide">点击我添加侧边栏</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    async addSide() {
      const { data } = await this.$http.get('menus')
      console.log(data)
    }
  }
}
</script>

<style lang="less" scoped></style>
