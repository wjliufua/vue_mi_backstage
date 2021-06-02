<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-row style="margin-bottom: 30px;">
        <el-col :span="24">
          <el-button
            type="primary"
            @click="showDialog('添加商品分类', 'goodsSortAdd')"
            >添加分类</el-button
          ></el-col
        >
      </el-row>
      <tree-table
        :data="catelist"
        :columns="columns"
        :selection-type="false"
        :expand-type="false"
        show-index
        index-text="#"
        border
        :show-row-hover="false"
      >
        <!-- 是否启用模板 -->
        <template slot="isOk" slot-scope="scope">
          <i
            v-if="scope.row.goods_sort_state === '启用'"
            class="el-icon-success"
            style="color: lightgreen;"
          ></i>
          <i v-else class="el-icon-error" style="color: red;"></i>
        </template>
        <template slot="level" slot-scope="scope">
          <el-tag v-if="scope.row.goods_sort_level === 1" size="mini"
            >一级</el-tag
          >
          <el-tag
            v-if="scope.row.goods_sort_level === 2"
            type="success"
            size="mini"
            >二级</el-tag
          >
          <el-tag
            v-if="scope.row.goods_sort_level === 3"
            type="warning"
            size="mini"
            >三级</el-tag
          >
        </template>
        <template slot="opt" slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="mini"
            @click="handlGoodsSort('修改商品分类', 'goodsSortEdit', scope.row)"
            >修改</el-button
          >
          <el-button type="danger" icon="el-icon-delete" size="mini"
            >删除</el-button
          >
        </template>
      </tree-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageState.pagenum"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageState.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        style="margin-top: 30px;"
      >
      </el-pagination>
    </el-card>
    <!-- 使用 dialog 组件 -->
    <DiaLogComponent
      :dialogTitle="dialogTitle"
      :dialogShow="dialogShow"
      :dialogContent="dialogContent"
      @dialog-close="dialogClose($event)"
    ></DiaLogComponent>
  </div>
</template>

<script>
// 引入 vuex 中的数据
import { mapMutations } from 'vuex'
// 引入封装的 dialog 组件
import DiaLogComponent from '../../components/Dialog'

export default {
  data() {
    return {
      catelist: [],
      columns: [
        {
          label: '分类名称',
          prop: 'goods_sort_name'
        },
        {
          label: '是否启用',
          prop: 'goods_sort_state',
          type: 'template',
          template: 'isOk'
        },
        {
          label: '分类级别',
          prop: 'goods_sort_level',
          type: 'template',
          template: 'level'
        },
        {
          label: '操作',
          type: 'template',
          template: 'opt'
        }
      ],
      dialogTitle: '',
      dialogContent: '',
      dialogShow: false,
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
    this.getGoodsSortList()
  },
  computed: {
    // 解构获取 vuex state 中定义的数据
    // ...mapState(['GoodsSortList'])
    // ...mapState(['inputValue'])
    ...mapMutations(['setGoodsSortList', 'setGoodsSortEdit'])
  },
  methods: {
    async getGoodsSortList() {
      const { data } = await this.$http.get('goods/sort', {
        params: this.pageState
      })
      console.log(data)
      this.total = data.total
      const GoodsSortList = data.GoodsSortList
      this.catelist = GoodsSortList
      this.$store.commit('setGoodsSortList', GoodsSortList)
      if (data.status !== 200) {
        return this.$message.error('商品分类信息获取失败!')
      }
      return this.$message.success('商品分类信息获取成功!')
    },
    showDialog(title, component) {
      console.log(this)
      this.$children[this.$children.length - 1].childrenComponent()
      this.dialogShow = true
      this.dialogTitle = title
      this.dialogContent = component
    },
    handlGoodsSort(dialogTitle, dialogContent, data) {
      console.log(data)
      this.$store.commit('setGoodsSortEdit', data)
      this.showDialog(dialogTitle, dialogContent)
    },
    handleSizeChange(newSize) {
      this.pageState.pageSize = newSize
      this.getGoodsSortList()
    },
    handleCurrentChange(newPage) {
      this.pageState.pageNum = newPage
      this.getGoodsSortList()
    },
    dialogClose(val) {
      console.log(val)
      this.dialogShow = false
      if (typeof val === 'string') {
        this.getGoodsSortList()
      }
    }
  },
  components: {
    // 挂载 dialog 组件
    DiaLogComponent
  },
  mounted() {
    // this.getGoodsSortList()
  }
}
</script>

<style lang="less" scoped></style>
