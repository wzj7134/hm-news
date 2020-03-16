<template>
  <div class="register">
    <hm-header>注册</hm-header>
    <hm-logo></hm-logo>
    <hm-input
      type="text"
      placeholder="用户名/手机号码"
      v-model="username"
      :rule="/^1\d{3,10}$/"
      massage="用户名格式错误"
      ref="username"
    ></hm-input>
    <hm-input
      type="text"
      placeholder="昵称"
      v-model="nickname"
      :rule="/^[\u4e00-\u9fa5]{3,7}$/"
      massage="昵称必须3-7位"
      ref="nickname"
    ></hm-input>
    <hm-input
      type="text"
      placeholder="登录密码"
      v-model="password"
      :rule="/^1\d{2,10}$/"
      massage="密码格式错误"
      ref="password"
    ></hm-input>
    <hm-bottom @click="register">注册</hm-bottom>
    <div class="go-login">
      已有账号? 去<router-link to="/login">登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      nickname: '',
      password: ''
    }
  },
  methods: {
    register() {
      const status1 = this.$refs.username.validate(this.username)
      const status2 = this.$refs.nickname.validate(this.nickname)
      const status3 = this.$refs.password.validate(this.password)
      if (status1 && status2 && status3) {
        this.axios({
          method: 'POST',
          url: '/register',
          data: {
            username: this.username,
            nickname: this.nickname,
            password: this.password
          }
        }).then(res => {
          if (res.data.statusCode === 200) {
            this.$toast.success(res.data.message)
            this.$router.push({
              name: 'login',
              params: {
                username: this.username,
                password: this.password
              }
            })
          } else {
            this.$toast.fail(res.data.message)
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.go-login {
  text-align: right;
  font-size: 16px;
  a {
    color: red;
  }
}
</style>
