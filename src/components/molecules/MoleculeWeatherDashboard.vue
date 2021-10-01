<template>
  <div class="weather-dashboard">
    <pre>{{weatherData}}</pre>
  </div>
</template>

<script>
export default {
  name: "MoleculeWeatherDashboard",
  computed: {
    weatherData() {
      return this.$store.state.weatherData;
    },
  }
}
</script>

<style lang="scss" scoped>
.weather-dashboard {

}
</style>