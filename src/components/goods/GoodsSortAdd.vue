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
      <el-select v-model="Form.state" placeholder="该分类是否启用该分类">
        <el-option label="启用" value="启用"></el-option>
        <el-option label="禁用" value="禁用"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="父级分类">
      <el-tooltip
        class="item"
        effect="dark"
        content="不选择为添加一级权限"
        placement="right"
      >
        <el-cascader
          v-model="Form.value"
          :options="addGoodsSortList"
          :props="addGoodsSortListProps"
          @change="handleChange"
        ></el-cascader>
      </el-tooltip>
      <!-- <el-cascader
        v-model="Form.value"
        :options="addGoodsSortList"
        :props="addGoodsSortListProps"
        @change="handleChange"
      ></el-cascader> -->
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
        value: []
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
      //   console.log(this.goodsSortList)
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
      //   console.log(this.addGoodsSortList)
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
