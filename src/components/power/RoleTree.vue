<template>
  <el-tree
    :data="treeData"
    show-checkbox
    node-key="tid"
    ref="tree"
    default-expand-all
    :default-checked-keys="treeId"
    :props="defaultProps"
  >
  </el-tree>
  <!-- <div>
    <el-tree
      :data="treeData"
      show-checkbox
      node-key="id"
      ref="tree"
      default-expand-all
      :default-checked-keys="treeId"
      :props="defaultProps"
    >
    </el-tree>
    <button @click="abc()">123123</button>
  </div> -->
  <!-- <div>123</div> -->
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      treeData: [],
      treeId: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  created() {
    this.getRoleTree()
  },
  computed: {
    ...mapState(['roleTreeData'])
  },
  methods: {
    async getRoleTree() {
      const data = await this.$http.get('roleTree')
      this.treeData = data.data.tree
      console.log(data.data.tree)
      console.log(this.roleTreeData)
      this.handleTreeData(this.roleTreeData)
      console.log(this.treeId)
    },
    handleTreeData(data) {
      //   this.treeData = this.roleTreeData
      //   console.log(data)
      //   if (!data.children) return this.treeId.push(data.id)
      data.forEach(item => {
        // this.treeId.push(data.id)
        if (item.children) {
          return this.handleTreeData(item.children)
        }
        // console.log(item)
        this.treeId.push(item.tid)
      })
      //   console.log(this.treeId)
      //   console.log(data.id)
      //   this.treeId.push(data.id)
      //   if (data.children) {
      //     return this.handleTreeData(data.children)
      //   }
    },
    abc() {
      console.log(this.$refs.tree.getCheckedKeys())
    }
  },
  watch: {
    '$store.state.roleTreeData': async function() {
      //   console.log(1321321321)
      this.treeId = []
      console.log(this.$refs.tree.data)
      await this.$nextTick()
      //   this.$refs.tree.data = this.treeId
      //   this.handleTreeData(this.roleTreeData)
      //   console.log(this)
    }
  }
}
</script>

<style lang="less" scoped></style>
