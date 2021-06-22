<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="7">
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="goGoodsAddpage">添加商品</el-button>
        </el-col>
      </el-row>
      <el-table :data="goodsListData" border stripe style="width: 100%">
        <el-table-column
          type="index"
          width="50px"
          align="center"
        ></el-table-column>
        <el-table-column prop="goodsName" label="商品名称"> </el-table-column>
        <el-table-column
          prop="goodsPrice"
          label="商品价格(元)"
          width="140"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="goodsWeight"
          label="商品重量(g)"
          width="140"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="goodsNumber"
          label="商品数量(个)"
          width="140"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="goodsCreateDate"
          label="商品创建时间"
          width="160"
          align="center"
        >
        </el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template>
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-edit"
            ></el-button>
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageState.pagenum"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="1"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsListData: [],
      input3: '',
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
    this.getGoodsList()
  },
  methods: {
    async getGoodsList() {
      const { data } = await this.$http.get('goods', {
        parmas: {}
      })
      console.log(data)
      if (data.status !== 200) return this.$message.error('获取商品列表失败!')
      this.$message.success('获取商品列表成功!')
      this.goodsListData = data.goodsList
    },
    handleSizeChange(newSize) {
      this.pageState.pageSize = newSize
      this.getUserList()
    },
    handleCurrentChange(newPage) {
      this.pageState.pageNum = newPage
      this.getUserList()
    },
    goGoodsAddpage() {
      this.$router.push('/goods/add')
    }
  }
}
</script>

<style lang="less" scoped>
.input-with-select {
  // width: 500px;
  margin-bottom: 30px;
}
.el-pagination {
  margin-top: 30px;
}
</style>
