<template>
  <div>
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
          >
            <el-form-item
              :label="item.params_name"
              v-for="(item, index) in paramsTag"
              :key="index"
            >
              <el-checkbox-group v-model="item.params_tag">
                <el-checkbox
                  :label="cb"
                  v-for="(cb, i) in item.params_tag"
                  :key="i"
                  border
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane
            label="商品属性"
            name="third"
            :disabled="this.value.length === 0 ? true : false"
          >
            <el-alert
              title="属性有多个请使用英文的逗号隔开,否则会出现错误"
              type="warning"
              show-icon
            >
            </el-alert>
            <el-form-item
              :label="item.attribute_name"
              v-for="(item, index) in attributeTag"
              :key="index"
            >
              <el-input v-model="item.attribute_tag"></el-input>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane
            label="商品图片"
            name="fourth"
            :disabled="this.value.length === 0 ? true : false"
          >
            <el-upload
              class="upload-demo"
              :action="uploadURL"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :headers="headerObj"
              name="uploads"
              list-type="picture"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-tab-pane>
          <el-tab-pane
            label="商品内容"
            name="fifth"
            :disabled="this.value.length === 0 ? true : false"
          >
            <div class="edit_container">
              <quill-editor
                v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @change="onEditorChange($event)"
              >
              </quill-editor>
            </div>
            <el-button type="primary" @click="addGoods()">添加商品</el-button>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </el-card>
    <el-dialog title="查看图片" :visible.sync="viewPicture">
      <img width="100%" :src="viewPictureUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

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
      options: [],
      paramsTag: [],
      attributeTag: [],
      fileList: [],
      // 上传图片的URL地址
      uploadURL: 'http://127.0.0.1:7000/api/private/v1/goods/goodsImg',
      headerObj: {
        Authorization: window.sessionStorage.getItem('token')
      },
      viewPicture: false,
      viewPictureUrl: '',
      // 富文本编辑器
      content: '<p>1</p>',
      // str: '',
      editorOption: {
        placeholder: '请在这里输入',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ['clean'],
            ['image', 'video']
          ]
        }
      }
    }
  },
  created() {
    this.getGoodsTag()
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
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
    async getSortParamsAttribute(id, pid) {
      const { data } = await this.$http.get(`goods/tag/${id}`, {
        params: { pid: pid }
      })
      console.log(data.GoodsDetailsTag)
      const { GoodsDetailsTag } = data
      this.paramsTag = GoodsDetailsTag[0].dynamic_parameter
      this.attributeTag = GoodsDetailsTag[0].static_properties
      console.log(this.paramsTag)
      console.log(this.attributeTag)
      // this.dynamicParameterData =
      //   GoodsDetailsTag[GoodsDetailsTag.length - 1].dynamic_parameter || []
      // this.staticPropertiesData =
      //   GoodsDetailsTag[GoodsDetailsTag.length - 1].static_properties || []
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
      this.getSortParamsAttribute(
        value[value.length - 1],
        value[value.length - 2]
      )
    },
    // 图片上传
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      // console.log('修改')
      // console.log(file)
      this.viewPicture = true
      this.viewPictureUrl = file.url
    },
    // 富文本编辑器
    onEditorReady(editor) {
      // 准备编辑器
      console.log(editor)
    },
    // 失去焦点事件
    onEditorBlur() {
      console.log('失去焦点')
    },
    // 获得焦点事件
    onEditorFocus() {
      console.log('获得焦点')
    },
    // 内容改变事件
    onEditorChange() {
      console.log('内容改变')
    },
    // 转码
    // escapeStringHTML(str) {
    //   str = str.replace(/&lt;/g, '<')
    //   str = str.replace(/&gt;/g, '>')
    //   return str
    // },
    addGoods() {
      console.log('添加商品')
    }
  },
  components: {
    'quill-editor': quillEditor
  }
  // mounted() {
  //   const content = '' // 请求后台返回的内容字符串
  //   this.str = this.escapeStringHTML(content)
  // }
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
.el-checkbox {
  margin-right: 0px;
}
// .edit_container {
//   height: 200px;
// }
.ql-container {
  height: 400px;
  margin-bottom: 30px;
}
</style>
