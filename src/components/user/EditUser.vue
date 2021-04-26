<!--
 * @Author: your name
 * @Date: 2021-04-08 17:10:32
 * @LastEditTime: 2021-04-12 21:44:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_mi_backstage\src\components\user\EditUser.vue
-->
<template>
  <el-form :model="Form" :rules="rules" ref="Form" label-width="100px">
    <el-form-item label="姓名">
      <el-input v-model="Form.userName" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="userEmailValue">
      <el-input
        v-model="Form.userEmailValue"
        @input="handleInputValue($event, 'userEmailValue')"
      ></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="userTelephoneValue">
      <el-input
        v-model="Form.userTelephoneValue"
        @input="handleInputValue($event, 'userTelephoneValue')"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
// import { mapState, mapGetters } from 'vuex'
import { mapState } from 'vuex'
// var jwt = require('jsonwebtoken')

export default {
  data() {
    var checkEmail = (rule, value, cb) => {
      var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      if (regEmail.test(value)) return cb()
      cb(new Error('请输入合法的邮箱地址'))
    }
    var checkTel = (rule, value, cb) => {
      var regTel = /^[0-9]{9,11}$/
      if (regTel.test(value)) return cb()
      cb(new Error('请输入合法的手机号'))
    }
    return {
      Form: {
        userName: '',
        userTelephoneValue: '',
        userEmailValue: ''
      },
      rules: {
        userTelephoneValue: [
          { required: true, message: '请输入电话', trigger: 'blur' },
          { validator: checkTel, trigger: 'blur' }
        ],
        userEmailValue: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    // this.Form.name = this.editForm.userNameValue
    // this.Form.tel = this.editForm.userTelValue
    // this.Form.email = this.editForm.userEmailValue
    this.getUserInfo()
  },
  computed: {
    ...mapState(['userRoleId', 'thisComponent']),
    // ...mapGetter(['getComponent']),
    valueLength() {
      return this.editForm.userEmailValue
    }
  },
  methods: {
    async getUserInfo() {
      //   const userPower = jwt.verify(
      //     window.sessionStorage.getItem('token'),
      //     'abc',
      //     (err, decode) => {
      //       if (err) return false
      //       return decode
      //     }
      //   )
      //   console.log(userPower)
      // if (userPower) {
      //   // console.log(233)
      //   const userEditFlag = userPower.powername.some(item => {
      //     return item === '用户查询'
      //   })
      //   console.log(userEditFlag)
      //   if (!userEditFlag) return this.$message.error('抱歉,您暂无该权限!')
      // }
      // const Initiator = window.sessionStorage.
      const data = await this.$http.get(`userEdit/${this.userRoleId}`)
      // const data = await this.$http.get('userinfo')
      // console.log(data.data.userEditInfo[0])
      const userEditInfo = data.data.userEditInfo
      this.Form.userName = userEditInfo[userEditInfo.length - 1].username
      this.Form.userTelephoneValue = userEditInfo[userEditInfo.length - 1].tel
      this.Form.userEmailValue = userEditInfo[userEditInfo.length - 1].useremail
    },
    handleInputValue(e, editUserInput) {
      this.Form[editUserInput] = e
      // this.$forceUpdate()
      // console.log(e)
      // this.$store.commit('setInputValue', {
      //   e,
      //   input: editUserInput,
      //   use: 'editForm'
      // })
      // this.Form.userTelephoneValue = this.editForm.userTelephoneValue
      // this.Form.userEmailValue = this.editForm.userEmailValue
    }
  }
}
</script>
