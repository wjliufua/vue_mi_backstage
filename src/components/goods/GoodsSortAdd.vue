<template>
  <el-form :model="Form" ref="Form" label-width="100px" class="demo-ruleForm">
    <el-form-item label="活动名称">
      <el-input v-model="Form.name"></el-input>
    </el-form-item>
    <el-form-item label="分类是否启用">
      <el-select v-model="Form.state" placeholder="请选择该分类是否启用">
        <el-option label="启用" value="0"></el-option>
        <el-option label="禁用" value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="父级分类">
      <el-cascader
        v-model="value"
        :options="addGoodsSortList"
        :props="addGoodsSortListProps"
        @change="handleChange"
      ></el-cascader>
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
        state: '',
        level: ''
      },
      value: [],
      addGoodsSortList: [],
      addGoodsSortListProps: {
        checkStrictly: true
      }
    }
  },
  created() {
    this.setGoodsSortList()
  },
  computed: {
    // 解构获取 vuex state 中定义的数据
    ...mapState(['goodsSortList'])
    // ...mapState(['inputValue'])
    // ...mapMutations(['goodsSortList'])
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
    /**
     * @method handleInputValue
     * @desc 获取当前输入框输入内容
     * @param {String, Number} inputValue 当处于 用户名、邮箱、密码 输入框时，值为 { String } || 当处于 电话 输入框时，值为 { Number }
     * @param {String} addUserInput 当前处于哪个输入框中
     */
    handtValue(inputValue, addUserInput) {
      console.log(132132)
    },

    setGoodsSortList() {
      console.log(this.goodsSortList)
      this.goodsSortList.map(item => {
        this.addGoodsSortList.push({
          value: item._id,
          label: item.goods_sort_name,
          children:
            item.children.length === 0
              ? undefined
              : this.handleGoodsSortList(item.children)
        })
      })
      console.log(this.addGoodsSortList)
    },
    handleGoodsSortList(goodsSortList) {
      const addGoodsSortListChildren = goodsSortList.map(item => {
        return {
          value: item._id,
          label: item.goods_sort_name
        }
      })
      // console.log(abclist)
      return addGoodsSortListChildren
    },
    /**
     * @method cleanForm
     * @desc 清除表单内容
     */
    cleanForm() {
      for (const key in this.Form) {
        this.Form[key] = ''
      }
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped></style>
