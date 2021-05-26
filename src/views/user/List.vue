<!--
 * @Author: your name
 * @Date: 2021-04-07 11:40:02
 * @LastEditTime: 2021-04-14 11:00:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_mi_backstage\src\views\user\List.vue
-->
<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 搜索添加 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button
            type="primary"
            @click="showDialog('添加用户', 'add')"
            v-if="showAddButton()"
            >添加用户</el-button
          >
        </el-col>
      </el-row>
      <!-- 表格 -->
      <el-table :data="userList" border stripe style="width: 100%">
        <el-table-column
          type="index"
          label="索引"
          width="50px"
          align="center"
        ></el-table-column>
        <el-table-column prop="useremail" label="头像" align="center">
        </el-table-column>
        <el-table-column prop="useremail" label="邮箱" align="center">
        </el-table-column>
        <el-table-column prop="username" label="用户名" align="center">
        </el-table-column>
        <el-table-column prop="tel" label="电话" align="center">
        </el-table-column>
        <!-- <el-table-column label="角色" align="center">
          <template slot-scope="scope">
            <span v-for="(item, index) in scope.row.position_id" :key="index">{{
              item.name
            }}</span>
          </template>
        </el-table-column> -->
        <el-table-column prop="position_id.name" label="角色" align="center">
        </el-table-column>
        <el-table-column prop="branch_id.name" label="部门" align="center">
        </el-table-column>
        <el-table-column label="状态" align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.state"
              active-text="启用"
              inactive-text="禁用"
              @change="userEditState(scope.row)"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
          width="220px"
          align="center"
        >
          <template slot-scope="scope">
            <!-- 修改用户 -->
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="showDialog('修改用户', 'edit', scope.row, true)"
            ></el-button>
            <!-- 删除用户 -->
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
            ></el-button>
            <!-- 分配角色 -->
            <el-tooltip
              class="item"
              effect="dark"
              content="分配角色"
              placement="top"
            >
              <el-button
                type="warning"
                icon="el-icon-setting"
                size="mini"
                @click="showDialog('分配角色', 'role', scope.row)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageState.pagenum"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <!-- 使用 dialog 组件 -->
    <DiaLogComponent
      :dialogTitle="dialogTitle"
      :dialogShow="dialogShow"
      :dialogContent="dialogContent"
      :userId="userId"
      @dialog-close="dialogClose($event)"
      @refresh="getUserList"
    ></DiaLogComponent>
  </div>
</template>

<script>
// 引入封装的 dialog 组件
import DiaLogComponent from '../../components/Dialog'
// 引入 vuex 中的数据
import { mapState } from 'vuex'
// import { mapState, mapMutations } from 'vuex'
var jwt = require('jsonwebtoken')

export default {
  data() {
    return {
      // 弹窗标题
      dialogTitle: '',
      // 弹窗标题
      dialogContent: '',
      // 用户列表数据
      userList: [],
      // 是否显示添加用户按钮
      addButtonFlag: false,
      // 要修改的用户 id
      userId: '',
      dialogShow: false,
      // 用户数据总条数
      total: 0,
      // 页面状态
      pageState: {
        // 当前第几页
        pageNum: 1,
        // 当前一页显示多少条数据
        pageSize: 5
      }
    }
  },
  created() {
    // 获取用户数据
    this.getUserList()
  },
  computed: {
    // 解构获取 vuex state 中定义的数据
    ...mapState(['userinfo'])
    // ...mapState(['inputValue'])
    // ...mapMutations(['inputClean'])
  },
  methods: {
    /**
     * @method getUserList
     * @desc 获取用户列表信息
     */
    async getUserList() {
      // 发送获取用户列表数据的请求
      const { data } = await this.$http.get('user', { params: this.pageState })
      this.userList = data.userlist
      this.total = data.total
    },

    /**
     * @method showDialog
     * @desc 显示对话框
     * @param {String} title 对话框标题
     * @param {String} component 对话框需要调用的组件
     * @param {Object} data 该用户的数据
     * @param {Boolean} userEdit 判断该操作是否为用户信息编辑操作 --> undefined && false : 否 | true : 是
     */
    showDialog(title, component, data, userEdit) {
      // console.log(this)
      this.$children[this.$children.length - 1].childrenComponent()
      // 调用 vuex 中的 inputClean 方法
      // this.$store.commit('inputClean')
      if (data) {
        // 调用 vuex 中 getUserId 方法
        // {String} data._id 需要修改的用户的 id
        this.$store.commit('getUserRoleId', data._id)
      }
      // 调用 vuex 中的 useComponent 方法
      // {String} component
      this.$store.commit('useComponent', component)
      // 判断是否为 修改用户 操作 并且需要 data 值不为空
      // if (!userEdit && data) {
      //   this.$store.state.AssginRoles = data
      // }
      // 如果函数为 用户修改 操作
      if (userEdit) {
        // 获取 sessionStorage 中存储的 权力 名称
        // const powerArr = JSON.parse(window.sessionStorage.getItem('powername'))
        // console.log(powerArr)
        jwt.decode('token')
        const tokenFlag = jwt.verify(
          window.sessionStorage.getItem('token'),
          'abc',
          (err, decode) => {
            if (err) return this.$message.error('token报错')
            return decode
            // console.log(decode)
          }
        )
        console.log(tokenFlag)
        // 循环遍历获取的 权力 数组
        const powerFlag = tokenFlag.powername.some(item => {
          return item === '用户修改'
        })
        // 判断该数组中是否含有 修改用户 的权力
        if (!powerFlag) return this.$message.error('抱歉，您没有该权限!')
        // console.log(data)
        this.userId = data._id
        // this.$store.commit('setEditForm', data)
        // this.$store.state.editForm.userNameValue = data.username
        // this.$store.state.editForm.userTelValue = data.tel
        // this.$store.state.editForm.userEmailValue = data.useremail
      }
      this.dialogShow = true
      this.dialogTitle = title
      this.dialogContent = component
    },

    /**
     * @method dialogClose
     * @desc 关闭对话框
     */
    dialogClose(val) {
      this.dialogShow = false
      // this.$children[this.$children.length - 1].$refs = {}
      console.log(this.$children[this.$children.length - 1].$refs)
      // this.$store.commit('inputClean')
      // console.log(handleComponent)
      this.$store.commit('useComponent', '')
      this.$store.commit('handelSelectRoleId', '')
      // console.log(val)
      // console.log(handleComponent)
      // const valFlag = typeof val
      if (typeof val === 'string') {
        // console.log(456789)
        this.getUserList()
      }
    },
    /**
     * @method showAddButton
     * @dese 是否显示添加用户按钮
     * @return {Boolean}
     */
    showAddButton() {
      const powerArr = JSON.parse(window.sessionStorage.getItem('powername'))
      const powerFlag = powerArr.some(item => {
        return item === '用户添加'
      })
      return powerFlag
    },
    handleSizeChange(newSize) {
      this.pageState.pageSize = newSize
      this.getUserList()
    },
    handleCurrentChange(newPage) {
      this.pageState.pageNum = newPage
      this.getUserList()
    },
    async userEditState(userInfo) {
      //   console.log(userInfo.state)
      //   userInfo.state = !userInfo.state
      //   console.log(userInfo.state)
      const { data } = await this.$http.put(
        `userEdit/${userInfo._id}/state/${userInfo.state}`
      )
      //   console.log(data)
      if (data.status !== 200) return this.$message.error('更新用户状态失败!')
      this.$message.success('更新用户状态成功!')
      this.getUserList()
    }
  },
  components: {
    // 挂载 dialog 组件
    DiaLogComponent
  }
}
</script>

<style lang="less" scoped>
.el-table {
  margin: 20px 0;
}
</style>
