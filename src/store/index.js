import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    }
  },
  mutations: {
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
  actions: {},
  modules: {}
})
