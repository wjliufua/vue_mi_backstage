<template>
  <el-form ref="Form" :model="Form" label-width="120px">
    <el-form-item label="添加动态参数">
      <el-input v-model="Form.name"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      Form: {
        name: ''
      }
    }
  },
  created() {},
  computed: {},
  methods: {}
}
</script>

<style></style>
