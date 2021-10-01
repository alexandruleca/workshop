<template>
  <div class="weather-info">
    <MoleculeSearchBar />
    <MoleculeWeatherDashboard />
  </div>
</template>

<script>
import MoleculeSearchBar from "../molecules/MoleculeSearchBar";
import MoleculeWeatherDashboard from "../molecules/MoleculeWeatherDashboard";
export default {
  name: "OrganismWeatherInfo",
  components: {MoleculeWeatherDashboard, MoleculeSearchBar}
}
</script>

<style lang="scss" scoped>
.weather-info {

}
</style>