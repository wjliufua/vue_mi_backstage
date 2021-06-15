<template>
  <el-card class="box-card">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加商品</el-breadcrumb-item>
    </el-breadcrumb>
    <el-alert title="添加商品信息" type="info" center show-icon> </el-alert>
    <!-- 步骤条 -->
    <el-steps :active="active" finish-status="success" align-center>
      <el-step title="基本信息"></el-step>
      <el-step title="商品参数"></el-step>
      <el-step title="商品属性"></el-step>
      <el-step title="商品图片"></el-step>
      <el-step title="商品内容"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <el-form
      :model="Form"
      :rules="rules"
      ref="Form"
      label-width="100px"
      class="demo-ruleForm"
      label-position="top"
    >
      <!-- 选项卡 -->
      <el-tabs
        tab-position="left"
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane label="基本信息" name="first">
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="Form.name"></el-input>
          </el-form-item>
          <el-form-item label="商品价格" prop="price">
            <el-input v-model="Form.price"></el-input>
          </el-form-item>
          <el-form-item label="商品重量" prop="weight">
            <el-input v-model="Form.weight"></el-input>
          </el-form-item>
          <el-form-item label="商品数量" prop="number">
            <el-input v-model="Form.number"></el-input>
          </el-form-item>
          <el-form-item label="商品数量">
            <el-cascader
              v-model="value"
              :options="options"
              @change="handleChange"
            ></el-cascader>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane
          label="商品参数"
          name="second"
          :disabled="this.value.length === 0 ? true : false"
          >商品参数</el-tab-pane
        >
        <el-tab-pane
          label="商品属性"
          name="third"
          :disabled="this.value.length === 0 ? true : false"
          >商品属性</el-tab-pane
        >
        <el-tab-pane
          label="商品图片"
          name="fourth"
          :disabled="this.value.length === 0 ? true : false"
          >商品图片</el-tab-pane
        >
        <el-tab-pane
          label="商品内容"
          name="fifth"
          :disabled="this.value.length === 0 ? true : false"
          >商品内容</el-tab-pane
        >
      </el-tabs>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      activeName: 'first',
      Form: {
        name: '',
        price: 0,
        weight: 0,
        number: 0
      },
      rules: {
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        price: [{ required: true, message: '请输入商品价格', trigger: 'blur' }],
        weight: [
          { required: true, message: '请输入商品重量', trigger: 'blur' }
        ],
        number: [{ required: true, message: '请输入商品数量', trigger: 'blur' }]
      },
      value: [],
      options: []
    }
  },
  created() {
    this.getGoodsTag()
  },
  methods: {
    async getGoodsTag() {
      const { data } = await this.$http.get('goods/sort')
      console.log(data)
      const goodsSortList = []
      data.GoodsSortList.map(m => {
        goodsSortList.push({
          value: m._id,
          label: m.goods_sort_name,
          children: m.children.length === 0 ? [] : this.forGoodsSort(m.children)
        })
      })
      // console.log(goodsSortList)
      this.options = goodsSortList
    },
    forGoodsSort(goodsChildrenList) {
      const handlGoodsChildrenList = goodsChildrenList.map(m => {
        if (m.children && m.children.length !== 0) {
          // console.log(2333)
          return {
            value: m._id,
            label: m.goods_sort_name,
            children:
              m.children.length === 0 ? [] : this.forGoodsSort(m.children)
          }
        }
        return {
          value: m._id,
          label: m.goods_sort_name
        }
      })
      return handlGoodsChildrenList
    },
    handleClick(tab, event) {
      console.log(tab)
      // console.log('***')
      // console.log(event)
      this.active = tab.index - 0
    },
    next() {
      if (this.active++ > 2) this.active = 0
    },
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>

<style lang="less" scope>
// .el-tabs {
//   height: 500px;
// }
.el-steps {
  width: 1000px;
  margin: 30px 0;
  margin-left: 50px;
}
</style>
