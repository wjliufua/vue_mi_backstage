<!--
 * @Author: your name
 * @Date: 2021-04-12 22:13:04
 * @LastEditTime: 2021-04-13 20:08:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_mi_backstage\src\views\power\Role.vue
-->
<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-row>
        <el-col :span="24">
          <el-button type="primary">添加角色</el-button>
        </el-col>
      </el-row>
      <!-- 表格 -->
      <el-table :data="positionList" style="width: 100%" border script>
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row
              v-for="(item, index) in scope.row.expand"
              :key="index"
              :class="[
                'borderBottom',
                index === 0 ? 'borderTop' : '',
                'tagCenter'
              ]"
            >
              <el-col :span="5">
                <el-tag closable>
                  {{ item.name }}
                </el-tag>
              </el-col>
              <el-col :span="19">
                <el-row
                  v-for="(item2, index2) in item.children"
                  :key="index2"
                  :class="[index2 === 0 ? '' : 'borderTop', 'tagCenter']"
                >
                  <el-col :span="6">
                    <el-tag type="success" closable>
                      {{ item2.name }}
                    </el-tag>
                  </el-col>
                  <el-col :span="18">
                    <el-tag
                      v-for="(item3, index3) in item2.children"
                      :key="index3"
                      type="warning"
                      closable
                      class="treeTag"
                    >
                      {{ item3.power_name }}
                    </el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
          <!-- <template slot-scope="props">
            <el-row>
              <el-col :span="5"></el-col>
              <el-col :span="19">
                <el-row>
                  <el-col :span="6"></el-col>
                  <el-col :span="18"></el-col>
                </el-row>
              </el-col>
            </el-row>
          </template> -->
        </el-table-column>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="角色名称" prop="name"> </el-table-column>
        <el-table-column label="角色描述" prop="describe"> </el-table-column>
        <el-table-column label="操作" align="center" width="300px">
          <el-button type="primary" icon="el-icon-edit" size="mini"
            >编辑</el-button
          >
          <el-button type="danger" icon="el-icon-delete" size="mini"
            >删除</el-button
          >
          <el-button type="warning" icon="el-icon-setting" size="mini"
            >分配权限</el-button
          >
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      positionList: [],
      expandList: []
    }
  },
  created() {
    this.getRoleList()
  },
  computed: {},
  methods: {
    async getRoleList() {
      const data = await this.$http.get('position')
      console.log(data.data.positionList)
      this.positionList = data.data.positionList
      this.expandListHandle(data.data.positionList, data.data.positionList)
      // const expandListClone = []
      data.data.positionList.map((m, index) => {
        this.positionList[index].expand = this.expandListHandle(
          m.menu_id,
          m.power_id
        )
        // this.expandListHandle(m.menu_id, m.power_id, expandListClone)
      })
      console.log(this.positionList)
      // console.log(expandListClone)
      // this.expandList = expandListClone
    },
    expandListHandle(menu, power) {
      const expandListClone = []
      menu.map(m => {
        if (m.level === 1) {
          expandListClone.push({
            route: m.route,
            proute: m.proute,
            name: m.name,
            children: []
          })
        }
        if (m.level === 2 && m.proute !== '/') {
          const children = power.filter(f => {
            return f.menu_id.route === m.route
            // if (f.menu_id.route === m.route) {
            //   console.log(f.power_name)
            //   return { power_name: f.power_name, power_id: f._id }
            // }
          })
          // console.log(children)
          expandListClone.map((x, index) => {
            if (x.route === m.proute) {
              expandListClone[index].children.push({
                route: m.route,
                proute: m.proute,
                name: m.name,
                children: children
              })
            }
          })
          // expandListClone[expandListClone.length - 1].children.push({
          //   route: m.route,
          //   proute: m.proute,
          //   name: m.name,
          //   children: children
          // })
        }
      })
      return expandListClone
      // console.log(expandListClone)
    }
  }
}
</script>

<style lang="less" scoped>
.el-table {
  margin-top: 20px;
}

.borderBottom {
  border-bottom: 1px solid #ccc;
}

.borderTop {
  border-top: 1px solid #ccc;
}

.tagCenter {
  display: flex;
  align-items: center;
}

.treeTag {
  margin: 10px;
}
</style>
