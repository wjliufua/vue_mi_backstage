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
            v-if="scope.row.goods_sort_state === 0"
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
        <template slot="opt">
          <el-button type="primary" icon="el-icon-edit" size="mini"
            >修改</el-button
          >
          <el-button type="danger" icon="el-icon-delete" size="mini"
            >删除</el-button
          >
        </template>
      </tree-table>
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
      dialogShow: false,
      dialogContent: ''
    }
  },
  created() {
    this.getGoodsSortList()
  },
  computed: {
    // 解构获取 vuex state 中定义的数据
    // ...mapState(['GoodsSortList'])
    // ...mapState(['inputValue'])
    ...mapMutations(['setGoodsSortList'])
  },
  methods: {
    async getGoodsSortList() {
      const data = await this.$http.get('goods/sort')
      console.log(data)
      const GoodsSortList = data.data.GoodsSortList
      this.catelist = GoodsSortList
      this.$store.commit('setGoodsSortList', GoodsSortList)
    },
    showDialog(title, component) {
      console.log(this)
      this.$children[this.$children.length - 1].childrenComponent()
      this.dialogShow = true
      this.dialogTitle = title
      this.dialogContent = component
    },
    dialogClose(val) {
      console.log(val)
      this.dialogShow = false
    }
  },
  components: {
    // 挂载 dialog 组件
    DiaLogComponent
  }
}
</script>

<style lang="less" scoped></style>
