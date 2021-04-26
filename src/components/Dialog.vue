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
    <add-form ref="addForm" v-if="dialogContent === 'add'"></add-form>
    <edit-form
      ref="editForm"
      v-if="componentLoding && dialogContent === 'edit'"
    ></edit-form>
    <role-select ref="roleSelect" v-if="dialogContent === 'role'"></role-select>
    <role-tree
      v-if="componentLoding && dialogContent === 'roleTree'"
    ></role-tree>
    <role-edit v-if="dialogContent === 'roleEdit'"></role-edit>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleDetermine(dialogContent)"
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import AddForm from './user/AddUser'
import EditForm from './user/EditUser'
import AssignRoles from './user/AssignRoles'
import RoleTree from './power/RoleTree'
import RoleEdit from './power/RoleEdit'
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
    },
    rolePutId: {
      type: String
    },
    roleEditId: {
      type: String
    }
  },
  data() {
    return {
      componentLoding: true
    }
  },
  computed: {
    ...mapState(['userRoleId'])
  },
  methods: {
    childrenComponent() {
      this.componentLoding = true
    },
    handleClose(val) {
      console.log(this)
      this.componentLoding = false
      for (const key in this.$refs) {
        if (this.$refs[key]) {
          this.$refs[key].$refs.Form.resetFields()
        }
      }
      this.$emit('dialog-close', val)
    },

    /**
     * @method handleDetermine
     * @dese 判断发送请求时调用的方法
     * @param {String} change 用户列表调用的组件名称
     */
    handleDetermine(change) {
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
        case 'roleTree':
          this.roleTree()
          break
        case 'RoleEdit':
          this.RoleEdit()
          break
        default:
          this.$message.error('暂无此方法!')
      }
    },

    /**
     * @method userAdd
     * @dese 发起添加用户的接口请求
     */
    async userAdd() {
      const reqComponent = this.componentFor(this.$children, 1)
      const { data } = await this.$http.post('user', {
        addForm: reqComponent.Form
      })
      if (data.status !== 200) return this.$message.error('用户添加失败!')
      this.$message.success('用户添加成功!')
      this.handleClose('add')
      this.$refs.addForm.cleanForm()
    },
    componentFor(component, num) {
      if (num < 2) {
        num++
        return this.componentFor(component[component.length - 1].$children, num)
      }
      return component[component.length - 1]
    },

    /**
     * @method userEdit
     * @dese 发起修改用户的接口请求
     */
    async userEdit() {
      const reqComponent = this.componentFor(this.$children, 1)
      // console.log(reqComponent.Form)
      const { data } = await this.$http.put(`userEdit/${this.userId}`, {
        tel: reqComponent.Form.userTelephoneValue,
        useremail: reqComponent.Form.userEmailValue
      })
      if (data.status !== 200) return this.$message.error('用户修改失败!')
      this.$message.success('用户修改成功!')
      this.handleClose('edit')
    },

    /**
     * @method userRole
     * @dese 发起修改用户的接口请求
     */
    async userRole() {
      // console.log('*******')
      // console.log(this)
      const reqComponent = this.componentFor(this.$children, 1)
      // console.log(reqComponent.SelectRoleId)
      // console.log(this.SelectRoleId)
      if (reqComponent.SelectRoleId === '') {
        return this.$message.error('请选择需要分配的角色!')
      }
      const { data } = await this.$http.put(
        `userRole/${this.userRoleId}/userPosition`,
        {
          userRoleId: this.userRoleId,
          SelectRoleId: reqComponent.SelectRoleId
        }
      )
      console.log(data)
      if (data.status !== 200) return this.$message.error('用户角色修改失败!')
      this.$message.success('用户角色修改成功!')
      reqComponent.SelectRoleId = ''
      this.handleClose('edit')
    },
    async roleTree() {
      const data = await this.$http.put(`position/${this.rolePutId}`, {
        parame: this.$children[0].$children[2].$refs.tree.getCheckedKeys(false)
      })
      console.log(data)
      if (data.data.status !== 200) {
        return this.$message.error('角色权限修改失败!')
      }
      this.$message.success('角色权限修改成功!')
      this.handleClose('tree')
    },
    async RoleEdit() {
      console.log(this.roleEditId)
    }
  },
  components: {
    'add-form': AddForm,
    'edit-form': EditForm,
    'role-select': AssignRoles,
    'role-tree': RoleTree,
    'role-edit': RoleEdit
  }
}
</script>
