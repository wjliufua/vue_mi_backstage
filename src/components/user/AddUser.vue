<!--
 * @Author: your name
 * @Date: 2021-04-08 16:11:44
 * @LastEditTime: 2021-04-12 16:06:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_mi_backstage\src\components\AddUser.vue
-->
<template>
  <el-form label-width="100px" :rules="rules" :model="Form" ref="Form">
    <el-form-item label="用户名" prop="userNameValue">
      <el-input
        :value="Form.userNameValue"
        @input="handleInputValue($event, 'userNameValue')"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="userPasswordValue">
      <el-input
        show-password
        :value="Form.userPasswordValue"
        @input="handleInputValue($event, 'userPasswordValue')"
      ></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="userEmailValue">
      <el-input
        :value="Form.userEmailValue"
        @input="handleInputValue($event, 'userEmailValue')"
      ></el-input>
    </el-form-item>
    <el-form-item label="电话" prop="userTelephoneValue">
      <el-input
        :value="Form.userTelephoneValue"
        @input="handleInputValue($event, 'userTelephoneValue')"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    // 密码验证规则
    var checkPwd = (rule, value, cb) => {
      var regEmail = /^[A-Za-z0-9]{8,11}/
      if (regEmail.test(value)) return cb()
      cb(new Error('密码只能输入8-10位数字和字母'))
    }
    // 邮箱验证规则
    var checkEmail = (rule, value, cb) => {
      var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      if (regEmail.test(value)) return cb()
      cb(new Error('请输入合法的邮箱地址'))
    }
    // 手机号验证规则
    var checkTel = (rule, value, cb) => {
      var regTel = /^[0-9]{9,11}$/
      if (regTel.test(value)) return cb()
      cb(new Error('请输入合法的手机号'))
    }
    return {
      // 添加用户表单数据
      Form: {
        userNameValue: '',
        userPasswordValue: '',
        userEmailValue: '',
        userTelephoneValue: ''
      },
      rules: {
        // 用户名称验证
        userNameValue: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        // 用户密码验证
        userPasswordValue: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: checkPwd, trigger: 'blur' }
        ],
        // 用户邮箱验证
        userEmailValue: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ],
        // 用户电话验证
        userTelephoneValue: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { validator: checkTel, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    /**
     * @method handleInputValue
     * @desc 获取当前输入框输入内容
     * @param {String, Number} inputValue 当处于 用户名、邮箱、密码 输入框时，值为 { String } || 当处于 电话 输入框时，值为 { Number }
     * @param {String} addUserInput 当前处于哪个输入框中
     */
    handleInputValue(inputValue, addUserInput) {
      this.Form[addUserInput] = inputValue
    },

    /**
     * @method cleanForm
     * @desc 清除表单内容
     */
    cleanForm() {
      for (const key in this.Form) {
        this.Form[key] = ''
      }
    }
  }
}
</script>
