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
    <!-- <slot></slot> -->
    <add-from v-if="dialogContent === 'add'"></add-from>
    <edit-from v-if="dialogContent === 'edit'"></edit-from>
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
    ...mapState(['addForm', 'editForm'])
  },
  methods: {
    handleClose(val) {
      this.$emit('dialog-close', val)
    },
    handleDetermine(change) {
      console.log(change)
      switch (change) {
        case 'add':
          this.addUser()
          break
        case 'edit':
          this.editUser()
          break
        default:
          this.$message.error('暂无此方法!')
      }
      //   const { data } = await this.$http.get('change')
      //   console.log(data)
    },
    async addUser() {
      const { data } = await this.$http.post('user', {
        username: this.addForm.userNameValue,
        userpwd: this.addForm.userPwdValue,
        tel: this.addForm.userTelValue,
        useremail: this.addForm.userEmailValue
      })
      //   this.$emit('refresh')
      if (data.status !== 200) return this.$message.error('用户添加失败!')
      this.$message.success('用户添加成功!')
      this.handleClose('edit')
      this.$store.commit('inputClean')
    },
    async editUser() {
      const { data } = await this.$http.put(`userEdit/${this.userId}`, {
        tel: this.editForm.userTelValue,
        useremail: this.editForm.userEmailValue
      })
      if (data.status !== 200) return this.$message.error('用户修改失败!')
      this.$message.success('用户修改成功!')
      this.handleClose('edit')
      this.$store.commit('inputClean')
    }
  },
  components: {
    'add-from': AddFrom,
    'edit-from': EditFrom
  }
}
</script>
