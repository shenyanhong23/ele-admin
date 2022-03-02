<template>
  <div class="login">
    <div class="top">
      <img
        src="../assets/images/weining.png"
        alt=""
      >
    </div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="用户名"
        prop="name"
      >
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button
      @click="login"
      class="button"
    >登录</el-button>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      const { name, password } = this.ruleForm
      if (name === 'shen' && password === '123') {
        this.$router.push('/home')
        sessionStorage.setItem('username',name)
      } else {
        alert('用户名或密码错误等！')
      }
      // this.$http
      //   .post('/login')
      //   .then(res => {
      //     console.log(res);
      //     let { code, msg } = res.data;
      //     if (code == '200') {
      //       sessionStorage.setItem('username', name);
      //       this.$router.push('/home');
      //     } else {
      //       alert(msg);
      //     }
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  .top {
    width: 100%;
    height: 160px;
    background-color: #333f51;
    img {
      width: 238px;
      height: 169px;
      margin-left: -762px;
      margin-top: 32px;
    }
  }
  .bottom {
    width: 100%;
    background-color: #333f51;
    height: 220px;
    margin-top: 16px;
  }
  .demo-ruleForm {
    margin-top: 20px;
    margin-left: 666px;
    width: 400px;
    height: 100px;
  }
  el-input {
    width: 400px;
  }
  .button {
    margin-top: 16px;
    margin-left: -198px;
    width: 70px;
    height: 38px;
    font-size: 15px;
  }
}
</style>
