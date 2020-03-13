<template>
  <div class="HmHeader">
    <div class="left" @click="$router.back()">
      <span class="iconfont iconjiantou2"></span>
    </div>
    <div class="center"><slot></slot></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.HmHeader {
  display: flex;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  padding: 0 10px;
  text-align: center;
  font-size: 20px;
  .left,
  .right {
    width: 30px;
    font-size: 20px;
  }
  .center {
    flex: 1;
    font-weight: 700;
    font-size: 20px;
  }
}
</style>
