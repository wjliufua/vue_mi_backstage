<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类参数</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-alert
        title="注意：只允许为第三级分类设置相关参数！"
        type="warning"
        show-icon
        :closable="false"
      >
      </el-alert>
      <div class="goodsSortSelect">
        <div>请选择商品分类：</div>
        <el-cascader
          v-model="value"
          :options="options"
          @change="handleCascaderChange"
        ></el-cascader>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="动态参数" name="parameter">
          <el-button
            type="primary"
            size="mini"
            :disabled="isButton"
            @click="
              showDialog('修改动态参数名称', 'goodsParamsAdd', {
                add: 'dynamic_parameter'
              })
            "
            >添加参数</el-button
          >
          <el-table :data="dynamicParameterData" border style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="scope">
                <el-tag
                  :key="tag"
                  v-for="tag in scope.row.params_tag"
                  closable
                  :disable-transitions="false"
                  @close="handleClose(tag)"
                >
                  {{ tag }}
                </el-tag>
                <el-input
                  class="input-new-tag"
                  v-if="paramsTagInputVisible"
                  v-model="paramsTagInputValue"
                  ref="saveParamsTagInput"
                  size="small"
                  @keyup.enter.native="
                    paramsTagInput('dynamic_parameter', scope.row._id)
                  "
                >
                </el-input>
                <el-button
                  v-else
                  class="button-new-tag"
                  size="small"
                  @click="showParamsTagInput"
                  >+ 添加新参数标签</el-button
                >
              </template>
            </el-table-column>
            <el-table-column type="index" width="50"> </el-table-column>
            <el-table-column label="参数名称" prop="params_name">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  size="mini"
                  @click="
                    showDialog('修改动态参数名称', 'goodsParamsEdit', {
                      name: scope.row.params_name,
                      id: scope.row._id,
                      edit: 'dynamic_parameter'
                    })
                  "
                  >编辑</el-button
                >
                <el-button type="danger" icon="el-icon-delete" size="mini"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="静态属性" name="attribute">
          <el-button
            type="primary"
            size="mini"
            :disabled="isButton"
            @click="
              showDialog('修改动态参数名称', 'goodsParamsAdd', {
                add: 'static_properties'
              })
            "
            >添加属性</el-button
          >
          <el-table :data="staticPropertiesData" border style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="scope">
                <el-tag
                  :key="tag"
                  v-for="tag in scope.row.attribute_tag"
                  closable
                  :disable-transitions="false"
                  @close="handleClose(tag)"
                >
                  {{ tag }}
                </el-tag>
                <el-input
                  class="input-new-tag"
                  v-if="inputVisible"
                  v-model="inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm"
                >
                </el-input>
                <el-button
                  v-else
                  class="button-new-tag"
                  size="small"
                  @click="showInput"
                  >+ 添加新属性标签</el-button
                >
              </template>
            </el-table-column>
            <el-table-column type="index" width="50"> </el-table-column>
            <el-table-column label="属性名称" prop="attribute_name">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  size="mini"
                  @click="
                    showDialog('修改静态属性名称', 'goodsParamsEdit', {
                      name: scope.row.attribute_name,
                      id: scope.row._id,
                      edit: 'static_properties'
                    })
                  "
                  >编辑</el-button
                >
                <el-button type="danger" icon="el-icon-delete" size="mini"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
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
      // cascader 级联选择器
      value: [],
      options: [],
      // tabs 标签
      activeName: 'parameter',
      // 添加属性及参数按钮
      isButton: true,
      // table 表格
      dynamicParameterData: [],
      staticPropertiesData: [],
      // tag 标签
      // dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: '',
      // paramsTag 标签
      // dynamicTags: ['标签一', '标签二', '标签三'],
      paramsTagInputVisible: false,
      paramsTagInputValue: '',
      // dialog 标签
      dialogTitle: '',
      dialogContent: '',
      dialogShow: false
    }
  },
  created() {
    this.getGoodsTag()
  },
  computed: {
    // ...mapState(['goodsParamsEditData']),
    ...mapMutations(['setGoodsSortEditData'])
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
    showDialog(title, component, data) {
      console.log(this)
      if (data.edit) {
        console.log(data)
        this.$store.commit('setGoodsParamsEditData', data)
      }
      if (data.add) {
        this.$store.commit('setGoodsParamsAddData', {
          add: data.add,
          id: this.value[this.value.length - 1]
        })
      }
      this.$children[this.$children.length - 1].childrenComponent()
      this.dialogShow = true
      this.dialogTitle = title
      this.dialogContent = component
    },
    dialogClose(val) {
      console.log(val)
      this.dialogShow = false
      if (typeof val === 'string') {
        // this.getGoodsSortList()
        this.getSortParamsAttribute(
          this.value[this.value.length - 1],
          this.value[this.value.length - 2]
        )
      }
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
    // 获取商品参数
    async getSortParamsAttribute(id, pid) {
      const { data } = await this.$http.get(`goods/tag/${id}`, {
        params: { pid: pid }
      })
      console.log(data.GoodsDetailsTag)
      const { GoodsDetailsTag } = data
      this.staticPropertiesData =
        GoodsDetailsTag[GoodsDetailsTag.length - 1].static_properties.map(
          item => {
            return {
              attribute_name: item.attribute_name,
              attribute_tag: item.attribute_tag.split(','),
              _id: item._id
            }
          }
        ) || []
      // const dynamicParameter =
      //   data.GoodsDetailsTag[GoodsDetailsTag.length - 1].dynamic_parameter || []
      // const staticProperties =
      //   data.GoodsDetailsTag[GoodsDetailsTag.length - 1].static_properties || []
      this.dynamicParameterData =
        GoodsDetailsTag[GoodsDetailsTag.length - 1].dynamic_parameter || []
      // this.staticPropertiesData =
      //   GoodsDetailsTag[GoodsDetailsTag.length - 1].static_properties || []
    },
    // cascader 级联选择器
    handleCascaderChange(value) {
      console.log(value)
      this.isButton = false
      this.getSortParamsAttribute(
        value[value.length - 1],
        value[value.length - 2]
      )
    },
    // tabs 标签
    handleClick(tab, event) {
      console.log(tab, event)
    },
    // tag 标签
    handleClose(tag) {
      console.log('tag')
      console.log(tag)
      // this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },
    // tag 标签
    showInput() {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    // tag 标签
    async paramsTagInput(tagCategory, id) {
      // console.log(1)
      // console.log(this.paramsTagInputValue)
      console.log(id)
      const { data } = await this.$http.post(`goods/tag/${id}`, {
        tagName: this.paramsTagInputValue,
        addTag: tagCategory
      })
      console.log(data)
      if (data.status !== 200) return this.$message.error('添加商品参数失败!')
      this.$message.success('添加商品参数成功!')
      this.getSortParamsAttribute(
        this.value[this.value.length - 1],
        this.value[this.value.length - 2]
      )
      this.paramsTagInputVisible = false
      this.paramsTagInputValue = ''
    },
    showParamsTagInput() {
      this.paramsTagInputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveParamsTagInput.$refs.input.focus()
      })
    },
    // tag 标签
    handleInputConfirm() {
      // console.log(123)
      console.log(this.inputValue)
      //   let inputValue = this.inputValue
      //   if (inputValue) {
      //     this.dynamicTags.push(inputValue)
      //   }
      this.inputVisible = false
      this.inputValue = ''
    }
  },
  components: {
    DiaLogComponent
  }
}
</script>

<style lang="less" scoped>
.goodsSortSelect {
  display: flex;
  align-items: center;
  padding: 20px 0;
}

.el-tag,
.el-input,
.el-button {
  margin-left: 20px;
}

.el-input {
  width: 100px;
}

.el-table {
  margin-top: 20px;
}
</style>
