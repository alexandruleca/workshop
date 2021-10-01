<template>
  <div>
    <ul>
      <li v-for="(entry, index) in historyEntries" :key="index">
        <router-link :to="{name: 'WeatherHistoryDetail', params: {query: entry}}">{{entry}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "WeatherHistory",
  computed: {
    historyEntries() {
      return this.$store.state.searchHistory;
    }
  }
}
</script>

<style scoped>

</style>