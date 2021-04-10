<!--
 * @Author: your name
 * @Date: 2021-04-08 16:11:44
 * @LastEditTime: 2021-04-09 14:36:25
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
        @change="handleFrom"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        show-password
        :value="ruleForm.password"
        @input="handleInputValue($event, 'pwd')"
        @change="handleFrom"
      ></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
        :value="ruleForm.email"
        @input="handleInputValue($event, 'email')"
        @change="handleFrom"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
  data() {
    var checkPwd = (rule, value, cb) => {
      var regEmail = /^[A-Za-z0-9]{8,11}/
      if (regEmail.test(value)) return cb()
      cb(new Error('只能输入数字或字母'))
    }
    var checkEmail = (rule, value, cb) => {
      var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      if (regEmail.test(value)) return cb()
      cb(new Error('请输入合法的邮箱地址'))
    }
    return {
      // 添加用户表单数据
      ruleForm: {
        name: '',
        password: '',
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
        ]
      }
    }
  },
  computed: {
    ...mapState(['addForm']),
    // ...mapState(['inputValue']),
    // ...mapMutations(['inputClean', 'setInputValue']),
    valueLength() {
      return this.addForm.userNameValue
      // if (this.inputValue.length === 0) {
      //   return this.inputValue
      // } else {
      //   return this.inputValue
      // }
    }
  },
  methods: {
    handleInputValue(e, addUserInput) {
      this.$forceUpdate()
      // switch (addUserInput) {
      //   case 'name':
      //     this.$store.commit('setInputValue', { e, addUserInput })
      //     break
      //   case 'pwd':
      //     this.$store.commit('setInputValue', { e, addUserInput })
      //     break
      //   case 'email':
      //     this.$store.commit('setInputValue', { e, addUserInput })
      //     break
      // }
      console.log(e)
      this.$store.commit('setInputValue', { e, addUserInput })
      this.ruleForm.name = this.addForm.userNameValue
      this.ruleForm.password = this.addForm.userPwdValue
      this.ruleForm.email = this.addForm.userEmailValue
    },
    handleFrom() {
      // this.showMessage = true
      // 检查一下menuFrom是不是和表单的ref一致
      // this.$refs.ruleForm.validate(valid => {
      //   if (valid) {
      //     // 验证成功
      //     console.log('成功')
      //   } else {
      //     // 验证失败
      //     console.log('失败')
      //   }
      // })
    }
  },
  watch: {
    valueLength: function() {
      // this.ruleForm.name = ''
      // console.log(this.ruleForm.name)
      if (this.addForm.userNameValue.length === 0) {
        // this.ruleForm.name = ''
        // this.showMessage = false
        this.$refs.ruleForm.resetFields()
      }
    }
  }
}
</script>
