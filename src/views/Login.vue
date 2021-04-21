<template>
  <div class="login_container">
    <div class="login_box">
      <div class="head_portrait">
        <div class="head_portrait_box">
          <img src="../assets/logo.png" alt="" />
        </div>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
        <el-form-item prop="name">
          <el-input
            prefix-icon="el-icon-user-solid"
            placeholder="请输入用户名"
            type="text"
            v-model="ruleForm.name"
            autofocus
          ></el-input>
        </el-form-item>
        <el-form-item prop="tel">
          <el-input
            prefix-icon="iconfont icon-dianhua"
            v-model.number="ruleForm.tel"
            placeholder="请输入电话号码"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            prefix-icon="iconfont icon-mima"
            type="password"
            v-model="ruleForm.password"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item class="postButton">
          <el-button type="primary" @click="LoginForm()">登录</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- <div>
      <el-input
        placeholder="请输入用户名"
        prefix-icon="el-icon-user-solid"
        v-model="input2"
        autofocus
      >
      </el-input>
      <el-input
        placeholder="请输入手机号"
        prefix-icon="el-icon-phone"
        v-model="input2"
        type="number"
      >
      </el-input>
      <el-input
        placeholder="请输入密码"
        prefix-icon="el-icon-search"
        onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
        v-model="input2"
        show-password
      >
      </el-input>
    </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    var checkPwd = (rule, value, cb) => {
      var regEmail = /^[A-Za-z0-9]{8,11}/
      if (regEmail.test(value)) return cb()
      cb(new Error('密码为8-10位数字和字母'))
    }
    var checkTel = (rule, value, cb) => {
      var regTel = /^[0-9]{9,11}$/
      if (regTel.test(value)) return cb()
      cb(new Error('请输入正确的手机号码'))
    }
    return {
      ruleForm: {
        name: '',
        tel: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { validator: checkTel, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: checkPwd, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapState(['userinfo'])
  },
  methods: {
    resetForm() {
      this.$refs.ruleForm.resetFields()
    },
    async LoginForm() {
      const { data } = await this.$http.get('login', { params: this.ruleForm })
      console.log(data)
      if (data.status !== 200) {
        return this.$message.error('用户登录信息输入有误!')
      }
      window.sessionStorage.setItem('token', data.token)
      this.$store.commit('getUserInfo', data.userinfo)
      window.sessionStorage.setItem(
        'powername',
        JSON.stringify(data.userinfo.powername)
      )
      console.log(this.userinfo)
      window.location.href = '#/user/list'
      //   console.log(this.$refs.ruleForm.validate())
      //   console.log(this.ruleForm.name)
      //   console.log(this.ruleForm.tel)
      //   console.log(this.ruleForm.password)
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: #073763;
}

.login_box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 460px;
  height: 360px;
  padding: 0 30px;
  background-color: #fff;
}

.head_portrait {
  position: relative;
  height: 100px;
  .head_portrait_box {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    img {
      width: 100%;
      border-radius: 50%;
      background-color: #f7f7f7;
    }
  }
}

/deep/ .el-input__prefix {
  width: 25px !important;
  height: 40px;
  & > i {
    font-size: 14px;
  }
}

.postButton {
  display: flex;
  justify-content: center;
}
</style>
