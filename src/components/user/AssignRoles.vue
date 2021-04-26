<template>
  <el-form ref="Form" :model="Form" label-width="120px">
    <el-form-item label="当前用户">
      <el-input v-model="Form.name" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="当前用户角色">
      <el-input v-model="Form.userRole" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="分配新角色">
      <el-select
        v-model="SelectRoleId"
        placeholder="请选择要分配的角色"
      >
        <el-option
          v-for="(item, index) in Form.allRole"
          :key="index"
          :label="item.name"
          :value="item._id"
        ></el-option>
        <!-- <el-option label="区域二" value="beijing"></el-option> -->
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      Form: { name: '', userRole: '', allRole: [] },
      SelectRoleId: ''
    }
  },
  created() {
    this.getUserInfo()
  },
  computed: {
    ...mapState(['editForm', 'userRoleId', 'thisComponent'])
  },
  methods: {
    async getUserInfo() {
      // console.log(this.userRoleId)
      const userData = await this.$http.get(`userRole/${this.userRoleId}`)
      const role = await this.$http.get('userRole')
      // console.log(role)
      // const userRoleInfo = data.data.userRoleInfo
      const userInfo = userData.data.userRoleInfo[0]
      this.Form.name = userInfo.username
      this.Form.userRole = userInfo.position_id.name
      this.Form.allRole = role.data.role
    }
  },
  watch: {
    thisComponent: function() {
      // console.log(54455454)
      if (this.thisComponent === 'role') {
        // console.log(123132132)
        this.getUserInfo()
      }
    },
    'Form.name': function() {
      this.SelectRoleId = ''
    }
  }
}
</script>

<style lang="less" scoped></style>
