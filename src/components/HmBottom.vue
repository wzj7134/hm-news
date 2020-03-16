<template>
  <div class="hm-bottom" @click="clickfn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    clickfn() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
.hm-bottom {
  height: 50px;
  line-height: 50px;
  background-color: #cc3300;
  text-align: center;
  font-size: 20px;
  margin: 30px;
  border-radius: 50px;
  color: white;
}
</style>
