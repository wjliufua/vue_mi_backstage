/*
 * @Author: your name
 * @Date: 2021-04-01 15:55:33
 * @LastEditTime: 2021-04-09 14:37:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_mi_backstage\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dialogShow: false,
    addForm: {
      userNameValue: '',
      userPwdValue: '',
      userEmailValue: ''
    }
  },
  mutations: {
    // 清除输入框内容
    inputClean(state) {
      state.addForm = {
        userNameValue: '',
        userPwdValue: '',
        userEmailValue: ''
      }
      // state.addForm = {
      //   userNameValue: '',
      //   userPwdValue: '',
      //   userEmailValue: ''
      // }
      // console.log(state.userNameValue)
    },
    // 设置 inputValue 值
    setInputValue(state, val) {
      // console.log(val)
      // val ? (state.addForm.userNameValue = val) : (state.addForm.userNameValue = '')
      // val ? (state.addForm = val) : (state.addForm = {
      //   userNameValue: '',
      //   userPwdValue: '',
      //   userEmailValue: ''
      // })
      switch (val.addUserInput) {
        case 'name':
          state.addForm.userNameValue = val.e
          break
        case 'pwd':
          state.addForm.userPwdValue = val.e
          break
        case 'email':
          state.addForm.userEmailValue = val.e
          break
        default:
          state.addForm = {
            userNameValue: '',
            userPwdValue: '',
            userEmailValue: ''
          }
      }
      console.log(val)
      // if (val) {
      //   state.inputValue = val
      // } else {
      //   state.inputValue = ''
      // }
    }
  },
  actions: {},
  modules: {}
})
