<template>
  <div id="app">
    <div>
      <router-link :to="{name: 'WeatherHistory'}">History</router-link>
      <router-link :to="{name: 'Weather'}">Weather</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import "style/common";
#app {

}
</style>
