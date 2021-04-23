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
    // 控制 dialog 组件是否显示
    dialogShow: false,
    addForm: {
      userNameValue: '',
      userPwdValue: '',
      userTelValue: '',
      userEmailValue: ''
    },
    editForm: {
      userNameValue: '',
      userTelValue: '',
      userEmailValue: ''
    },
    AssginRoles: []
  },
  mutations: {
    getUserInfo(state, userinfo) {
      var key
      for (key in userinfo) {
        state.userinfo[key] = userinfo[key]
      }
    },
    handelSelectRoleId(state, SelectRoleId) {
      state.SelectRoleId = SelectRoleId
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
    },
    // 清除输入框内容
    inputClean(state) {
      state.addForm.userNameValue = ''
      state.addForm.userPwdValue = ''
      state.addForm.userTelValue = ''
      state.addForm.userEmailValue = ''
      state.editForm.userNameValue = ''
      state.editForm.userTelValue = ''
      state.editForm.userEmailValue = ''
    },
    // 设置 inputValue 值
    setInputValue(state, val) {
      console.log(val)
      if (val.use === 'addForm') {
        switch (val.input) {
          case 'name':
            state.addForm.userNameValue = val.e
            break
          case 'pwd':
            state.addForm.userPwdValue = val.e
            break
          case 'tel':
            state.addForm.userTelValue = val.e
            break
          case 'email':
            state.addForm.userEmailValue = val.e
            break
          default:
            state.addForm.userNameValue = ''
            state.addForm.userPwdValue = ''
            state.addForm.userTelValue = ''
            state.addForm.userEmailValue = ''
        }
      } else {
        switch (val.input) {
          case 'tel':
            state.editForm.userTelValue = val.e
            break
          case 'email':
            state.editForm.userEmailValue = val.e
            break
          default:
            state.editForm.userNameValue = ''
            state.editForm.userTelValue = ''
            state.editForm.userEmailValue = ''
        }
      }
      // console.log(val)
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
