<template>
  <div class="input-wrap">
    <input
        v-bind:type="type"
        :placeholder="placeholder"
        v-model="value"
    />
  </div>
</template>

<script>
export default {
  name: "AtomTextField",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    type: {
      type: String,
      required: false,
      default: "text"
    },
    model: {
      type: String,
      required: false,
      default: "",
    },
    onChange: {
      type: Function,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      value: ""
    }
  },
  watch: {
    value(newValue, oldValue) {
      if (oldValue !== newValue) {
        this.$props.onChange(newValue);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input-wrap {
  display: inline-block;
}
</style>