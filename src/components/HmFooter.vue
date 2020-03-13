<template>
  <div class="hm-footer">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.hm-footer {
  height: 50px;
  margin: 30px 20px 30px 20px;
  line-height: 50px;
  background-color: #cc3300;
  color: #ffffff;
  text-align: center;
  border-radius: 50px;
  font-size: 20px;
}
</style>
