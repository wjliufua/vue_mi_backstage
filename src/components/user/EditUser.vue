<!--
 * @Author: your name
 * @Date: 2021-04-08 17:10:32
 * @LastEditTime: 2021-04-12 21:44:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_mi_backstage\src\components\user\EditUser.vue
-->
<template>
  <el-form
    :model="userEditForm"
    :rules="rules"
    ref="userEditForm"
    label-width="100px"
  >
    <el-form-item label="姓名" prop="name">
      <el-input v-model="userEditForm.name" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="userEditForm.email"
        @input="handleInputValue($event, 'email')"
      ></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="tel">
      <el-input
        v-model="userEditForm.tel"
        @input="handleInputValue($event, 'tel')"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex'

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
      userEditForm: {
        name: '',
        tel: '',
        email: ''
      },
      rules: {
        tel: [
          { required: true, message: '请输入电话', trigger: 'blur' },
          { validator: checkTel, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.userEditForm.name = this.editForm.userNameValue
    this.userEditForm.tel = this.editForm.userTelValue
    this.userEditForm.email = this.editForm.userEmailValue
  },
  computed: {
    ...mapState(['editForm']),
    valueLength() {
      return this.editForm.userEmailValue
    }
  },
  methods: {
    handleInputValue(e, editUserInput) {
      this.$forceUpdate()
      console.log(e)
      this.$store.commit('setInputValue', {
        e,
        input: editUserInput,
        use: 'editForm'
      })
      this.userEditForm.tel = this.editForm.userTelValue
      this.userEditForm.email = this.editForm.userEmailValue
    }
  },
  watch: {
    valueLength: function() {
      if (this.editForm.userNameValue.length === 0) {
        this.$refs.userEditForm.resetFields()
      }
    }
  }
}
</script>
