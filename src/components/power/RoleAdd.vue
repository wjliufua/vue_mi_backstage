<template>
  <el-form ref="Form" :model="Form" label-width="100px">
    <el-form-item label="角色名称">
      <el-input v-model="Form.roleName"></el-input>
    </el-form-item>
    <el-form-item label="角色描述">
      <el-input v-model="Form.roleDescribe"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      Form: {
        roleName: '',
        roleDescribe: ''
      }
    }
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped></style>
