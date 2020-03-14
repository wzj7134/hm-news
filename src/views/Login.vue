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
    ></hm-input>
    <hm-input
      type="password"
      placeholder="密码"
      v-model="password"
      :rule="/^1\d{2,10}$/"
      massage="密码不正确"
    ></hm-input>
    <hm-bottom @click="login">登录</hm-bottom>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.axios({
        method: 'POST',
        url: '/login',
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        console.log(res.data)
        if (res.data.statusCode === 200) {
          this.$router.push('/user')
        } else {
          alert('用户名或者密码错误')
        }
      })
    }
  },
  data() {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style></style>
