<template>
  <div class="hm-header">
    <div class="left" @click="$router.back()">
      <span class="iconfont iconjiantou2"></span>
    </div>
    <div class="center">
      <slot></slot>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.hm-header {
  text-align: center;
  display: flex;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  .left,
  .right {
    width: 30px;
  }
  .center {
    font-size: 20px;
    flex: 1;
  }
}
</style>