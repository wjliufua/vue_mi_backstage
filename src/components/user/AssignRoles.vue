<template>
  <el-form ref="AssignRolesForm" :model="AssignRolesForm" label-width="120px">
    <el-form-item label="当前用户">
      <el-input v-model="AssignRolesForm.name" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="当前用户角色">
      <el-input v-model="AssignRolesForm.userRole" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="分配新角色">
      <el-select
        v-model="SelectRoleId"
        placeholder="请选择要分配的角色"
        @change="roleSelectChange(SelectRoleId)"
      >
        <el-option
          v-for="(item, index) in AssignRolesForm.allRole"
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
      AssignRolesForm: { name: '', userRole: '', allRole: [] },
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
      const userInfo = await this.$http.get(`userRole/${this.userRoleId}`)
      const role = await this.$http.get('userRole')
      // console.log(role)
      // const userRoleInfo = data.data.userRoleInfo
      this.AssignRolesForm.name = userInfo.data.userRoleInfo[0].username
      this.AssignRolesForm.userRole =
        userInfo.data.userRoleInfo[0].position_id.name
      this.AssignRolesForm.allRole = role.data.role
    },
    roleSelectChange(SelectRoleId) {
      console.log(SelectRoleId)
      this.$store.commit('handelSelectRoleId', SelectRoleId)
      // this.$emit('role-change', val)
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
    'AssignRolesForm.name': function() {
      this.SelectRoleId = ''
    }
  }
}
</script>

<style lang="less" scoped></style>
