<!--
 * @Author: your name
 * @Date: 2021-04-08 16:11:44
 * @LastEditTime: 2021-04-12 16:06:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_mi_backstage\src\components\AddUser.vue
-->
<template>
  <el-form label-width="100px" :rules="rules" :model="ruleForm" ref="ruleForm">
    <el-form-item label="用户名" prop="name">
      <el-input
        :value="ruleForm.name"
        @input="handleInputValue($event, 'name')"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        show-password
        :value="ruleForm.password"
        @input="handleInputValue($event, 'pwd')"
      ></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
        :value="ruleForm.email"
        @input="handleInputValue($event, 'email')"
      ></el-input>
    </el-form-item>
    <el-form-item label="电话" prop="email">
      <el-input
        :value="ruleForm.tel"
        @input="handleInputValue($event, 'tel')"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    var checkPwd = (rule, value, cb) => {
      var regEmail = /^[A-Za-z0-9]{8,11}/
      if (regEmail.test(value)) return cb()
      cb(new Error('密码只能输入8-10位数字和字母'))
    }
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
      // 添加用户表单数据
      ruleForm: {
        name: '',
        password: '',
        tel: '',
        email: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: checkPwd, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { validator: checkTel, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapState(['addForm']),
    valueLength() {
      return this.addForm.userNameValue
    }
  },
  methods: {
    handleInputValue(e, addUserInput) {
      this.$forceUpdate()
      console.log(e)
      this.$store.commit('setInputValue', {
        e,
        input: addUserInput,
        use: 'addForm'
      })
      this.ruleForm.name = this.addForm.userNameValue
      this.ruleForm.password = this.addForm.userPwdValue
      this.ruleForm.tel = this.addForm.userTelValue
      this.ruleForm.email = this.addForm.userEmailValue
    }
  },
  watch: {
    valueLength: function() {
      if (this.addForm.userNameValue.length === 0) {
        this.$refs.ruleForm.resetFields()
      }
    }
  }
}
</script>
