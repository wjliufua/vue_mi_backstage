<template>
  <el-form ref="Form" :model="Form" label-width="80px">
    <el-form-item label="活动名称">
      <el-input v-model="Form.name"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
// 引入 vuex 中的数据
import { mapState } from 'vuex'

export default {
  data() {
    return {
      Form: {
        name: '',
        id: ''
      }
    }
  },
  created() {
    this.setGoodsParamsEditForm()
  },
  computed: {
    ...mapState(['goodsParamsEditData'])
    // ...mapMutations(['setGoodsSortEditData'])
  },
  methods: {
    setGoodsParamsEditForm() {
      console.log(this.goodsParamsEditData)
      this.Form.name = this.goodsParamsEditData.name
      this.Form.id = this.goodsParamsEditData.id
      this.Form.edit = this.goodsParamsEditData.edit
    }
  }
}
</script>

<style lang="less" scoped></style>
