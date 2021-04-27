<template>
  <el-table :data="tableData" border stripe style="width: 100%">
    <el-table-column prop="name" label="权限名称"> </el-table-column>
    <el-table-column prop="name" label="路径">
      <template slot-scope="scope">
        <div v-if="scope.row.menu_id">{{ scope.row.menu_id.route }}</div>
        <div v-else>{{ scope.row.route }}</div>
      </template>
    </el-table-column>
    <el-table-column prop="level" label="权限等级">
      <template slot-scope="scope">
        <el-tag v-if="scope.row.level === 1">一级</el-tag>
        <el-tag type="success" v-else-if="scope.row.level === 2">二级</el-tag>
        <el-tag type="warning" v-else>三级</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.getPowerList()
  },
  methods: {
    async getPowerList() {
      const data = await this.$http.get('power')
      //   console.log(data)
      this.tableData = data.data.powerList
    }
  }
}
</script>

<style lang="less" scoped></style>
