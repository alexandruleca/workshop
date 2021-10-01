<template>
  <pre>{{detail}}</pre>
</template>

<script>
export default {
  name: "WeatherHistoryDetail",
  computed: {
    detail() {
      return this.$route.params.query;
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>