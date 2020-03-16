<template>
  <div class="hm-login">
    <hm-header>登录</hm-header>
    <hm-logo></hm-logo>
    <hm-input
      type="text"
      placeholder="用户名/手机号码"
      v-model="username"
      :rule="/^1\d{3,10}$/"
      massage="用户名格式不正确"
      ref="username"
    ></hm-input>
    <hm-input
      type="password"
      placeholder="密码"
      v-model="password"
      :rule="/^1\d{2,10}$/"
      massage="密码不正确"
      ref="password"
    ></hm-input>
    <hm-bottom @click="login">登录</hm-bottom>
    <div class="go-register">
      没有账号去 <router-link to="/register">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login(username, password) {
      console.log()
      const rusult = this.$refs.username.validate(this.username)
      const rusult1 = this.$refs.password.validate(this.password)
      if (!rusult || !rusult1) {
        return
      }
      this.axios({
        method: 'POST',
        url: '/login',
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        if (res.data.statusCode === 200) {
          this.$toast.success('登录成功')
          this.$router.push('/user')
        } else {
          this.$toast.fail('用户名或者密码错误')
        }
      })
    }
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  created() {
    console.log(this.$route)
    this.username = this.$route.params.username
    this.password = this.$route.params.password
  }
}
</script>

<style lang="less" scoped>
.go-register {
  font-size: 16px;
  text-align: right;
  padding: 20px;
  a {
    color: red;
  }
}
</style>
