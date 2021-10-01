<template>
  <div class="search-bar">
    <form action="javascript:void(0);">
      <AtomTextField placeholder="Search..." :on-change="handleInput" />
      <AtomButton label="go!" :on-submit="doSearch" />
    </form>
  </div>
</template>

<script>
import AtomTextField from "../atoms/AtomTextField";
import AtomButton from "../atoms/AtomButton";
export default {
  name: "MoleculeSearchBar",
  components: {AtomButton, AtomTextField},
  data() {
    return {
      searchValue: "",
      response: ""
    }
  },
  methods: {
    doSearch() {
      this.$store.dispatch('getWeatherData', this.searchValue);
    },
    handleInput(value) {
      this.searchValue = value;
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar {

}
</style>