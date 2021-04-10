<!--
 * @Author: your name
 * @Date: 2021-04-08 17:10:51
 * @LastEditTime: 2021-04-09 15:34:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_mi_backstage\src\components\Dialog.vue
-->
<template>
  <el-dialog
    :title="dialogTitle"
    :visible.sync="dialogShow"
    :before-close="handleClose"
  >
    <!-- <slot></slot> -->
    <add-from v-if="dialogContent === 'add'"></add-from>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import AddFrom from './user/AddUser'
import { mapState } from 'vuex'

export default {
  props: {
    dialogShow: {
      type: Boolean,
      default: true
    },
    dialogTitle: {
      type: String
    },
    dialogContent: {
      type: String
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['addForm'])
  },
  methods: {
    handleClose() {
      this.$emit('dialog-close')
    },
    async handleDetermine() {
    //   const { data } = await this.$http.get('user')
    //   console.log(data)
    }
  },
  components: {
    'add-from': AddFrom
  }
}
</script>
