<template>
  <div class="hm-input">
    <input
      :type="type"
      style="outline:none"
      :placeholder="placeholder"
      :value="value"
      @input="inputfn"
      :class="{ success: status === 'success', error: status === 'error' }"
    />
    <div class="tips" v-show="status === 'error'">{{ massage }}</div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入....'
    },
    value: String,
    rule: RegExp,
    massage: String
  },
  data() {
    return {
      status: ''
    }
  },
  methods: {
    inputfn(e) {
      let value = e.target.value
      this.$emit('input', value, this.status)
      this.validate(value)
    },
    validate(value) {
      if (this.rule) {
        if (this.rule.test(value)) {
          this.status = 'success'
          return true
        } else {
          this.status = 'error'
          return false
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.hm-input {
  height: 60px;
  margin: 10px 30px;
  input {
    background-color: rgba(242, 242, 242, 1);
    width: 100%;
    border: none;
    border-bottom: 1px solid;
    font-size: 18px;
    height: 50px;
    line-height: 50px;
    &.success {
      border-color: green;
    }
    &.error {
      border-color: red;
    }
  }
  .tips {
    color: red;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
  }
}
</style>
