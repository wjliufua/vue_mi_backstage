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
import { mapState } from 'vuex'

export default {
  data() {
    return {
      Form: {
        roleName: '',
        roleDescribe: ''
      }
    }
  },
  created() {
    this.getRoleInfo()
  },
  computed: {
    ...mapState(['positionId'])
  },
  methods: {
    async getRoleInfo() {
      const data = await this.$http.get(`position/${this.positionId}`)
      console.log(data.data.positionInfo)
      const positionInfo = data.data.positionInfo[0]
      this.Form.roleName = positionInfo.name
      this.Form.roleDescribe = positionInfo.describe
    }
  }
}
</script>

<style lang="less" scoped></style>
