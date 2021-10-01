<template>
  <div class="button-wrap">
    <button @click="onSubmit">{{label}}</button>
  </div>
</template>

<script>
export default {
  name: "AtomButton",
  props: {
    label: {
      type: String,
      required: false,
      default: "Submit",
    },
    onSubmit: {
      type: Function,
      required: false,
      default: function () {},
    }
  },
}
</script>

<style lang="scss" scoped>
.button-wrap {
  display: inline-block;
}
</style>