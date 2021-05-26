import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户信息
    userinfo: {
      username: '',
      tel: '',
      useremail: '',
      powername: [],
      powerurl: [],
      isLogin: false
    },
    // 当前调用组件
    thisComponent: '',
    // 用户角色id
    userRoleId: '',
    // 用户列表分配角色 选择菜单
    SelectRoleId: '',
    roleTreeData: [],
    positionId: '',
    roleTreePut: '',
    // 商品分类数据
    goodsSortList: [],
    // 控制 dialog 组件是否显示
    // dialogShow: false,
    AssginRoles: []
  },
  mutations: {
    setGoodsSortList(state, goodsSortList) {
      state.goodsSortList = goodsSortList
    },
    getUserInfo(state, userinfo) {
      var key
      for (key in userinfo) {
        state.userinfo[key] = userinfo[key]
      }
    },
    handelSelectRoleId(state, SelectRoleId) {
      state.SelectRoleId = SelectRoleId
    },
    handelPositionId(state, positionId) {
      state.positionId = positionId
    },
    // 存储当前调用组件
    useComponent(state, component) {
      state.thisComponent = component
    },
    userInfoRoute(state) {
      return state.userinfo
    },
    // 获取用户角色 id
    getUserRoleId(state, id) {
      state.userRoleId = id
    },
    // 获取角色 树状权力数据
    getRoleTree(state, data) {
      state.roleTreeData = data
    }
  },
  getters: {
    routerUserInfo: state => {
      return state.userinfo
    },
    getComponent: state => {
      return state.thisComponent
    }
  },
  actions: {},
  modules: {}
})
