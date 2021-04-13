<!--
 * @Author: your name
 * @Date: 2021-04-07 11:40:02
 * @LastEditTime: 2021-04-12 21:58:47
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
          <el-button type="primary" @click="showDialog('添加用户', 'add')"
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
        <el-table-column prop="role" label="角色" align="center">
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
              @click="showDialog('修改用户', 'edit', scope.row)"
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
    <DiaLogComponent
      :dialogTitle="dialogTitle"
      :dialogShow="dialogShow"
      :dialogContent="dialogContent"
      :userId="userId"
      @dialog-close="dialogClose($event)"
      @refresh="getUserList"
    ></DiaLogComponent>
    <!-- <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogShow"
      width="30%"
      :before-close="handleClose"
    >
      <span>{{ dialogContent }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogShow = false">取 消</el-button>
        <el-button type="primary" @click="dialogShow = false">确 定</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>

<script>
import DiaLogComponent from '../../components/Dialog'
import { mapState } from 'vuex'
// import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      // 弹窗标题
      dialogTitle: '',
      // 弹窗标题
      dialogContent: '',
      // 用户列表数据
      userList: [],
      userId: '',
      total: 0,
      pageState: {
        pageNum: 1,
        pageSize: 5
      }
    }
  },
  created() {
    this.getUserList()
  },
  computed: {
    ...mapState(['addForm', 'editForm', 'dialogShow'])
    // ...mapState(['inputValue']),
    // ...mapMutations(['inputClean'])
  },
  methods: {
    /**
     * @method getUserList
     * @desc 获取用户列表信息
     */
    async getUserList() {
      //   console.log(444)
      const { data } = await this.$http.get('user', { params: this.pageState })
      this.userList = data.userlist
      this.total = data.total
      console.log(data.userlist)
    },

    /**
     * @method showDialog
     * @desc 显示对话框
     * @param {String} title 对话框标题
     * @param {String} component 对话框需要调用的组件
     * @param {Object} data 该用户的数据
     */
    showDialog(title, component, data) {
      this.$store.state.dialogShow = true
      this.dialogTitle = title
      this.dialogContent = component
      if (data) {
        console.log(data)
        this.userId = data._id
        this.$store.state.editForm.userNameValue = data.username
        this.$store.state.editForm.userTelValue = data.tel
        this.$store.state.editForm.userEmailValue = data.useremail
      }
    },

    /**
     * @method dialogClose
     * @desc 关闭对话框
     */
    dialogClose(val) {
      this.$store.state.dialogShow = false
      this.$store.commit('inputClean')
      if (val) {
        this.getUserList()
      }
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
    DiaLogComponent
  }
}
</script>

<style lang="less" scoped>
.el-table {
  margin: 20px 0;
}
</style>
