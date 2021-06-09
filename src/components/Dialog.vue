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
    <!-- {{ componentLoding }} -->
    <!-- 添加用户表单 -->
    <add-form
      ref="addForm"
      v-if="componentLoding && dialogContent === 'add'"
    ></add-form>
    <!-- 修改用户表单 -->
    <edit-form
      ref="editForm"
      v-if="componentLoding && dialogContent === 'edit'"
    ></edit-form>
    <!-- 分配用户角色表单 -->
    <role-select
      ref="roleSelect"
      v-if="componentLoding && dialogContent === 'role'"
    ></role-select>
    <!-- 角色权限分配树 -->
    <role-tree
      v-if="componentLoding && dialogContent === 'roleTree'"
    ></role-tree>
    <!-- 角色添加 -->
    <role-add v-if="componentLoding && dialogContent === 'roleAdd'"></role-add>
    <!-- 角色信息修改表单 -->
    <role-edit
      v-if="componentLoding && dialogContent === 'roleEdit'"
    ></role-edit>
    <!-- 商品分类添加表单 -->
    <goods-sort-add
      v-if="componentLoding && dialogContent === 'goodsSortAdd'"
    ></goods-sort-add>
    <!-- 商品分类修改表单 -->
    <goods-sort-edit
      @handleGoodsSortEditData="setGoodsSortEditData($event)"
      v-if="componentLoding && dialogContent === 'goodsSortEdit'"
    ></goods-sort-edit>
    <!-- 商品参数修改表单 -->
    <goods-params-edit
      v-if="componentLoding && dialogContent === 'goodsParamsEdit'"
    ></goods-params-edit>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleDetermine(dialogContent)"
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
/** ********* 用户管理部分模块 ********* **/
// 添加用户表单
import AddForm from './user/AddUser'
// 修改用户表单
import EditForm from './user/EditUser'
// 分配用户角色表单
import AssignRoles from './user/AssignRoles'
/** ********************************** **/

/** ********* 权限管理部分模块 ********* **/
import RoleTree from './power/RoleTree'
import RoleAdd from './power/RoleAdd'
import RoleEdit from './power/RoleEdit'
/** ********************************** **/

/** ********* 商品管理部分模块 ********* **/
import GoodsSortAdd from './goods/GoodsSortAdd'
import GoodsSortEdit from './goods/GoodsSortEdit'
import ParamsEdit from './goods/ParamsEdit'
/** ********************************** **/

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
      componentLoding: true,
      goodsSortReqInfo: {},
      goodsSortEditState: 0
    }
  },
  computed: {
    ...mapState(['userRoleId', 'positionId', 'goodsSortEditData'])
  },
  methods: {
    childrenComponent() {
      console.log(true)
      this.componentLoding = true
    },

    // ***********************************************************************************************************************************
    handleClose(val) {
      // console.log(this)
      console.log(this)
      console.log('dialog组件关闭')
      this.componentLoding = false
      for (const key in this.$refs) {
        if (this.$refs[key]) {
          this.$refs[key].$refs.Form.resetFields()
        }
      }
      this.$emit('dialog-close', val)
    },

    /*************************************************************************************************************************************
     *
     * @method handleDetermine
     * @dese 判断发送请求时调用的方法
     * @param {String} change 用户列表调用的组件名称
     *
     *************************************************************************************************************************************/
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
        case 'roleTree':
          this.roleTree()
          break
        case 'roleEdit':
          this.roleEdit()
          break
        case 'roleAdd':
          this.roleAdd()
          break
        case 'goodsSortAdd':
          this.goodsSortAdd()
          break
        case 'goodsSortEdit':
          this.goodsSortEdit()
          break
        case 'goodsParamsEdit':
          this.goodsParamsEdit()
          break
        default:
          this.$message.error('暂无此方法!')
      }
    },

    /*************************************************************************************************************************************
     *
     * @method userAdd
     * @dese 发起添加用户的接口请求
     *
     *************************************************************************************************************************************/
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

    // ***********************************************************************************************************************************
    componentFor(component, num) {
      if (num < 2) {
        num++
        return this.componentFor(component[component.length - 1].$children, num)
      }
      return component[component.length - 1]
    },

    /*************************************************************************************************************************************
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

    // ***********************************************************************************************************************************
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
    // ***********************************************************************************************************************************
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
    // ***********************************************************************************************************************************
    async roleEdit() {
      // console.log(this)
      const reqComponent = this.componentFor(this.$children, 1)
      console.log(reqComponent)
      const data = await this.$http.put(
        `position/Edit/${this.positionId}`,
        reqComponent.Form
      )
      // console.log(data)
      if (data.data.status !== 200) {
        return this.$message.error('角色修改失败!')
      }
      this.$message.success('角色修改成功!')
      this.handleClose('roleEdit')
    },
    async roleAdd() {
      const reqComponent = this.componentFor(this.$children, 1)
      // console.log(reqComponent)
      const data = await this.$http.post('position', reqComponent.Form)
      console.log(data)
      if (data.data.status !== 200) {
        return this.$message.error('角色添加失败!')
      }
      this.$message.success('角色添加成功!')
      this.handleClose('roleEdit')
    },
    async goodsSortAdd() {
      // console.log(this)
      // const reqComponent = this.componentFor(this.$children, 1)
      // const reqInfo = reqComponent.Form
      const reqInfo = this.componentFor(this.$children, 1).Form
      console.log(reqInfo)
      if (reqInfo.name === '' || reqInfo.state === '') {
        return this.$message.error('请输入完整的商品分类信息!')
      }
      const { data } = await this.$http.post('goods/sort', {
        parame: reqInfo
      })
      console.log(data)
      if (data.status !== 200) return this.$message.error('添加商品分类失败!')
      this.$message.success('添加商品分类成功!')
      this.handleClose('addGoodsSort')
    },
    setGoodsSortEditData(goodsSortEditState) {
      // console.log(goodsSortEditState)
      // this.goodsSortReqInfo = this.componentFor(this.$children, 1).Form
      // this.goodsSortReqInfo.state = goodsSortEditState
      this.goodsSortEditState = goodsSortEditState
    },
    async goodsSortEdit() {
      console.log(this)
      // console.log(this.goodsSortEditData)
      const reqInfo = this.componentFor(this.$children, 1).Form
      console.log(reqInfo)
      console.log(this.goodsSortEditData)
      reqInfo.state = this.goodsSortEditState
      if (
        reqInfo.name === this.goodsSortEditData.goods_sort_name &&
        reqInfo.state === this.goodsSortEditData.goods_sort_state
      ) {
        console.log(this)
        return this.$message.error('请勿提交尚未修改的数据')
      }
      // console.log(reqInfo.state)
      // reqInfo.state = reqInfo.state === '0' ? 0 : 1
      // reqInfo.state =
      //   reqInfo.state === '启用' ? 0 : 1
      // console.log(goodsSortReqInfo.state)
      // console.log(this)
      // console.log(reqInfo)
      const { data } = await this.$http.put('goods/sort', {
        parame: reqInfo
      })
      console.log(data)
      this.handleClose('goodsSortEdit')
    },
    goodsParamsEdit() {
      const reqInfo = this.componentFor(this.$children, 1).Form
      console.log(reqInfo)
    }
  },
  components: {
    'add-form': AddForm,
    'edit-form': EditForm,
    'role-select': AssignRoles,
    'role-tree': RoleTree,
    'role-add': RoleAdd,
    'role-edit': RoleEdit,
    'goods-sort-add': GoodsSortAdd,
    'goods-sort-edit': GoodsSortEdit,
    'goods-params-edit': ParamsEdit
  }
}
</script>
