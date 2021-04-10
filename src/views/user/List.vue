<!--
 * @Author: your name
 * @Date: 2021-04-07 11:40:02
 * @LastEditTime: 2021-04-10 17:27:05
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
          <el-button type="primary" @click="showdialogShow('添加用户', 'add')"
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
        <el-table-column prop="useremail" label="头像" align="center"> </el-table-column>
        <el-table-column prop="useremail" label="邮箱" align="center"> </el-table-column>
        <el-table-column prop="username" label="用户名" align="center"> </el-table-column>
        <el-table-column prop="userpwd" label="电话" align="center"> </el-table-column>
        <el-table-column prop="userpwd" label="角色" align="center"> </el-table-column>
        <el-table-column prop="userpwd" label="状态" align="center"> </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
          width="220px"
          align="center"
        >
          <template>
            <!-- 修改用户 -->
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
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
      @dialog-close="dialogClose"
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
    ...mapState(['addForm', 'dialogShow'])
    // ...mapState(['inputValue']),
    // ...mapMutations(['inputClean'])
  },
  methods: {
    showdialogShow(title, component) {
      this.$store.state.dialogShow = true
      this.dialogTitle = title
      this.dialogContent = component
    },
    dialogClose() {
      this.$store.state.dialogShow = false
      this.$store.commit('inputClean')
    },
    async getUserList() {
      const { data } = await this.$http.get('user', { params: this.pageState })
      this.userList = data.userlist
      this.total = data.total
      console.log(data.userlist)
    },
    handleSizeChange(newSize) {
      this.pageState.pageSize = newSize
      this.getUserList()
    },
    handleCurrentChange(newPage) {
      this.pageState.pageNum = newPage
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
