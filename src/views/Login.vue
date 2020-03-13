<template>
  <div class="Login">
    <hm-header v-slot>登录</hm-header>
    <hm-logo></hm-logo>
    <div class="username">
      <input type="text" placeholder="用户名/手机号" />
    </div>
    <div class="password">
      <input type="text" placeholder="密码" />
    </div>
    <hm-footer>登录</hm-footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.Login {
  background-color: rgba(242, 242, 242, 1);
  height: 100%;
  .username,
  .password {
    display: flex;
    input {
      background-color: rgba(242, 242, 242, 1);
      border: none;
      border-bottom: 1px solid #ccc;
      flex: 1;
      margin: 0 20px;
      padding: 20px 0 10px;
      font-size: 20px;
    }
  }
}
</style>
