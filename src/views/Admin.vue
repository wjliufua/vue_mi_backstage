<template>
  <el-container class="index_container">
    <!-- 侧边栏 -->
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <div class="page_title">
        <img v-show="isCollapse" src="../assets/logo.png" alt="" />
        <span v-show="!isCollapse">MI后台管理</span>
      </div>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#162433"
        text-color="#fff"
        active-text-color="#409BFF"
        unique-opened
        router
        :collapse="isCollapse"
        :collapse-transition="false"
      >
        <template v-for="(first, i) in menulist">
          <!-- 多级级菜单 一级菜单 -->
          <el-submenu
            :index="first.path"
            v-if="first.children && first.children.length > 0"
            :key="i"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ first.name }}</span>
            </template>
            <template v-for="(secondly, i2) in first.children">
              <!-- 多级级菜单 二级菜单 -->
              <el-submenu
                :index="secondly.path"
                :key="i2"
                v-if="secondly.children && secondly.children.length > 0"
              >
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span slot="title">{{ secondly.name }}</span>
                </template>
                <template v-for="(third, i3) in secondly.children">
                  <el-submenu
                    :index="third.path"
                    :key="i3"
                    v-if="third.children && third.children.length > 0"
                  ></el-submenu>
                  <!-- 单级菜单 三级菜单 -->
                  <!-- <el-menu-item :index="third.path" :key="i3">
                    {{ third.name }}
                  </el-menu-item> -->
                  <el-menu-item :key="i3" :index="third.path" v-else>
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{ third.name }}</span>
                  </el-menu-item>
                </template>
              </el-submenu>
              <!-- 单级菜单 二级菜单 -->
              <el-menu-item :key="i2" :index="secondly.path" v-else>
                <i class="el-icon-menu"></i>
                <span slot="title">{{ secondly.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
          <!-- 单级菜单 -->
          <el-menu-item :index="first.path" v-else :key="i">
            <i class="el-icon-menu"></i>
            <span v-show="sideopen" slot="title">{{ first.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
      <!-- 头部 -->
      <el-header>
        <div class="side_show" @click="sideShow">
          <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
        </div>
        <div class="header_center">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="header_right">
          <el-dropdown placement="bottom">
            <span class="el-dropdown-link">
              12312332132123123<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item divided>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <!-- 主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      // 侧边栏菜单数据
      menulist: [],
      // 侧边栏是否展开
      isCollapse: false
    }
  },
  created() {
    //   this.activePath
    // console.log(window.location.hash)
    this.getMenuList()
  },
  methods: {
    // 获取所有的菜单
    async getMenuList() {
      const { data } = await this.$http.get('menu')
      // console.log(data)
      // console.log(typeof (data.status))
      const sideList = []
      let mIndex = 0
      data.menu.map(m => {
        if (m.proute === '/') {
          const sideItem = {
            name: m.name,
            path: m.route,
            level: m.level,
            children: []
          }
          sideList.push(sideItem)
          this.handleSide(data.menu, sideList, m.route, mIndex)
          mIndex++
        }
      })
      // console.log(sideList)
      this.menulist = sideList
      if (data.status !== 200) return this.$message.error(data.message)
      return this.$message.success(data.message)
    },
    handleSide(menus, sideList, route, mIndex) {
      // console.log(menus)
      // console.log(sideList)
      // console.log(route)
      // console.log(mIndex)
      menus.map(m => {
        if (m.proute === route) {
          const childrenItem = {
            name: m.name,
            path: m.route,
            level: m.level,
            children: []
          }
          if (m.level === 2) {
            sideList[mIndex].children.push(childrenItem)
            this.handleSide(
              menus,
              childrenItem,
              m.route,
              sideList[mIndex].children.length - 1
            )
          }
          if (m.level === 3) {
            // console.log(3)
            // sideList[mIndex].children.push(childrenItem)
            sideList.children.push(childrenItem)
            this.handleSide(menus, childrenItem, m.route)
          }
          // this.handleSide(menus, childrenItem, m.route, xindex)
        }
      })
    },
    // 控制侧边栏显示隐藏
    sideShow() {
      this.isCollapse = !this.isCollapse
    }
  },
  computed: {}
}
</script>

<style lang="less" scoped>
html,
body,
#app {
  font: 12px/1.5 Tahoma, Helvetica, Arial, '宋体', sans-serif !important;
}

// 容器
.index_container {
  height: 100%;
}

// 侧边栏
.el-aside {
  background-color: #162433;
  .el-menu {
    border-right: none;
    transition: all 1.5s;
  }
}

// 侧边栏标题
.page_title {
  color: #e0e0e0;
  height: 59px;
  font-weight: 600;
  line-height: 59px;
  background-color: #2d5b8c;

  img {
    width: 100%;
    padding: 0 15%;
    vertical-align: middle;
    box-sizing: border-box;
  }

  span {
    display: block;
    // padding: 1em 0;
    text-align: center;
  }
}

// 右侧部分
.el-container {
  .el-header {
    display: flex;
    padding-left: 0;
    color: #fff;
    background-color: #162433;
    .side_show {
      display: flex;
      width: 60px;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      transition: all 0.2s;
    }
    .side_show:hover {
      cursor: pointer;
      background-color: #162d45;
    }
    .header_center {
      flex: 1;
      display: flex;
      align-items: center;
      padding-left: 20px;
      // box-sizing: border-box;
      .el-input {
        width: 400px;
      }
    }
    .header_right {
      display: flex;
      width: 300px;
      justify-content: space-between;
      align-items: center;
      .el-dropdown {
        color: #fff;
      }
      .el-dropdown:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
