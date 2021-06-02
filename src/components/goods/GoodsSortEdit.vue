<template>
  <el-form
    :model="Form"
    :rules="rules"
    ref="Form"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="活动名称" prop="name">
      <el-input v-model="Form.name"></el-input>
    </el-form-item>
    <el-form-item label="分类是否启用" prop="state">
      <el-select
        v-model="Form.state"
        placeholder="请选择该分类是否启用"
        @change="handleSelectData"
      >
        <el-option label="启用" value="启用"></el-option>
        <el-option label="禁用" value="禁用"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
// 引入 vuex 中的数据
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      Form: {
        id: '',
        name: '',
        state: '',
        level: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入商品分类名称', trigger: 'blur' }
        ],
        state: [
          {
            required: true,
            message: '请选择商品分类是否启用',
            trigger: 'change'
          }
        ]
      }
    }
  },
  created() {
    this.FormDataSet()
  },
  computed: {
    // 解构获取 vuex state 中定义的数据
    ...mapState(['goodsSortEditData']),
    // ...mapState(['inputValue'])
    ...mapMutations(['goodsSortList'])
  },
  methods: {
    FormDataSet() {
      this.Form.id = this.goodsSortEditData.id
      this.Form.name = this.goodsSortEditData.goods_sort_name
      this.Form.level = this.goodsSortEditData.goods_sort_level
      //   this.Form.state =
      //     this.goodsSortEditData.goods_sort_state === 0 ? '启用' : '禁用'
      this.Form.state = this.goodsSortEditData.goods_sort_state
      //   console.log(this.Form.state)
    },
    handleSelectData(val) {
      //   console.log(val)
      this.Form.state = val
      //   console.log(this.Form.state)
      this.$emit('handleGoodsSortEditData', val)
      //   console.log(this)
      //   this.$store.commit('abc', this.Form)
    }
  }
}
</script>

<style lang="less" scoped></style>
