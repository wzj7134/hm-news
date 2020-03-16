<template>
  <div class="hm-navbar">
    <div class="left">{{ title }}</div>
    <div class="center">{{ content }}</div>
    <div class="right iconfont iconjiantou1"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: String
  }
}
</script>

<style lang="less" scoped>
.hm-navbar {
  height: 50px;
  display: flex;
  border-bottom: 1px solid #cccccc;
  line-height: 50px;
  margin-left: 20px;
  justify-content: space-between;
  font-size: 14px;
  .center {
    flex: 1;
    text-align: right;
    color: #999999;
  }
  .right {
    width: 30px;
    text-align: center;
    color: #999999;
  }
}
</style>
