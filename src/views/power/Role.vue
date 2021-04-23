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
              :class="['borderBottom', index === 0 ? 'borderTop' : '']"
            >
              <el-col :span="5">
                <el-tag closable @close="removePower(scope.row, item.id)">
                  {{ item.name }}
                </el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <el-col :span="19">
                <el-row
                  v-for="(item2, index2) in item.children"
                  :key="index2"
                  :class="[index2 === 0 ? '' : 'borderTop', 'tagCenter']"
                >
                  <el-col :span="6">
                    <el-tag
                      type="success"
                      closable
                      @close="removePower(scope.row, item2.id)"
                    >
                      {{ item2.name }}
                    </el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="18">
                    <el-tag
                      v-for="(item3, index3) in item2.children"
                      :key="index3"
                      type="warning"
                      closable
                      @close="removePower(scope.row, item3.id)"
                    >
                      {{ item3.name }}
                    </el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="角色名称" prop="name"> </el-table-column>
        <el-table-column label="角色描述" prop="describe"> </el-table-column>
        <el-table-column label="操作" align="center" width="300px">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini"
              >编辑</el-button
            >
            <el-button type="danger" icon="el-icon-delete" size="mini"
              >删除</el-button
            >
            <el-button
              type="warning"
              icon="el-icon-setting"
              size="mini"
              @click="showDialog('分配角色权限', 'roleTree', scope.row)"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <DiaLogComponent
      :dialogTitle="dialogTitle"
      :dialogShow="dialogShow"
      :dialogContent="dialogContent"
      :rolePutId="rolePutId"
      @dialog-close="dialogClose($event)"
    ></DiaLogComponent>
  </div>
</template>

<script>
// 引入封装的 dialog 组件
import DiaLogComponent from '../../components/Dialog'
// 引入 vuex 中的数据
import { mapState } from 'vuex'

export default {
  data() {
    return {
      positionList: [],
      expandList: [],
      dialogTitle: '',
      dialogContent: '',
      rolePutId: ''
    }
  },
  created() {
    this.getRoleList()
  },
  computed: {
    ...mapState(['dialogShow'])
  },
  methods: {
    async getRoleList() {
      const data = await this.$http.get('position')
      // console.log(data.data.positionList)
      this.positionList = data.data.positionList
      // const powerClone = data.data.positionList
      this.expandListHandle(data.data.positionList, data.data.positionList)
      data.data.positionList.map((m, index) => {
        this.positionList[index].expand = this.expandListHandle(
          m.menu_id,
          m.power_id
        )
      })
    },
    expandListHandle(menu, power) {
      const expandListClone = []
      menu.map(m => {
        if (m.level === 1) {
          expandListClone.push({
            route: m.route,
            id: m.id,
            proute: m.proute,
            name: m.name,
            children: []
          })
        }
        if (m.level === 2 && m.proute !== '/') {
          const children = power.filter(f => {
            return f.menu_id.route === m.route
          })
          expandListClone.map((x, index) => {
            if (x.route === m.proute) {
              expandListClone[index].children.push({
                route: m.route,
                id: m.id,
                proute: m.proute,
                name: m.name,
                children: children
              })
            }
          })
        }
      })
      return expandListClone
    },
    showDialog(title, component, data) {
      // this.$store.state.positionId = data
      console.log(data)
      if (data) {
        this.rolePutId = data._id
        this.$store.commit('getRoleTree', data.expand)
      }
      // console.log(data)
      this.$store.state.dialogShow = true
      this.dialogTitle = title
      this.dialogContent = component
    },
    dialogClose(val) {
      this.$store.state.dialogShow = false
      if (typeof val === 'string') {
        this.getRoleList()
      }
    },
    async removePower(expandData, dId) {
      console.log(expandData._id)
      console.log(dId)
      const deleteClick = await this.$confirm(
        '此操作将永久删除该文件, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).catch(err => err)
      if (deleteClick !== 'confirm') return this.$message.info('您取消了删除!')
      const data = await this.$http.delete(`position/${expandData._id}`, {
        params: {
          powerId: dId
        }
      })
      console.log(data)
    }
  },
  components: {
    DiaLogComponent
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

.el-tag {
  margin: 10px;
}
</style>
