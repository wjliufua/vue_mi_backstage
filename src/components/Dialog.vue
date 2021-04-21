<!--
 * @Author: your name
 * @Date: 2021-04-08 17:10:51
 * @LastEditTime: 2021-04-12 17:33:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_mi_backstage\src\components\Dialog.vue
-->
<template>
  <el-dialog
    :title="dialogTitle"
    :visible.sync="dialogShow"
    :before-close="handleClose"
  >
    <add-from v-if="dialogContent === 'add'"></add-from>
    <edit-from v-if="dialogContent === 'edit'"></edit-from>
    <role-tree v-if="dialogContent === 'role'"></role-tree>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleDetermine(dialogContent)"
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import AddFrom from './user/AddUser'
import EditFrom from './user/EditUser'
import AssignRoles from './user/AssignRoles'
import { mapState } from 'vuex'

export default {
  props: {
    dialogShow: {
      type: Boolean,
      default: true
    },
    dialogTitle: {
      type: String
    },
    dialogContent: {
      type: String
    },
    userId: {
      type: String
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['addForm', 'editForm', 'userRoleId', 'SelectRoleId'])
  },
  methods: {
    handleClose(val) {
      // console.log(val)
      this.$emit('dialog-close', val)
    },

    /**
     * @method handleDetermine
     * @dese 判断发送请求时调用的方法
     * @param {String} change 用户列表调用的组件名称
     */
    handleDetermine(change) {
      console.log(change)
      switch (change) {
        case 'add':
          this.userAdd()
          break
        case 'edit':
          this.userEdit()
          break
        case 'role':
          this.userRole()
          break
        default:
          this.$message.error('暂无此方法!')
      }
      //   const { data } = await this.$http.get('change')
      //   console.log(data)
    },

    /**
     * @method userAdd
     * @dese 发起添加用户的接口请求
     */
    async userAdd() {
      const { data } = await this.$http.post('user', {
        username: this.addForm.userNameValue,
        userpwd: this.addForm.userPwdValue,
        tel: this.addForm.userTelValue,
        useremail: this.addForm.userEmailValue
      })
      //   this.$emit('refresh')
      if (data.status !== 200) return this.$message.error('用户添加失败!')
      this.$message.success('用户添加成功!')
      this.handleClose('add')
      this.$store.commit('inputClean')
    },

    /**
     * @method userEdit
     * @dese 发起修改用户的接口请求
     */
    async userEdit() {
      const { data } = await this.$http.put(`userEdit/${this.userId}`, {
        tel: this.editForm.userTelValue,
        useremail: this.editForm.userEmailValue
      })
      if (data.status !== 200) return this.$message.error('用户修改失败!')
      this.$message.success('用户修改成功!')
      this.handleClose('edit')
      this.$store.commit('inputClean')
    },

    /**
     * @method userRole
     * @dese 发起修改用户的接口请求
     */
    async userRole() {
      console.log('*******')
      console.log(this.userRoleId)
      console.log(this.SelectRoleId)
      if (this.SelectRoleId === '') {
        return this.$message.error('请选择需要分配的角色!')
      }
      // console.log(this.$refs.addFormRef.validate)
      const { data } = await this.$http.put(
        `userRole/${this.userRoleId}/userPosition`,
        {
          userRoleId: this.userRoleId,
          SelectRoleId: this.SelectRoleId
        }
      )
      console.log(data)
      if (data.status !== 200) return this.$message.error('用户角色修改失败!')
      this.$message.success('用户角色修改成功!')
      this.handleClose('edit')
      // this.$store.commit('inputClean')
      // console.log(123)
    }
  },
  components: {
    'add-from': AddFrom,
    'edit-from': EditFrom,
    'role-tree': AssignRoles
  }
}
</script>
