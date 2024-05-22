<template>
  <div id="app">
    I am the appvue
    <CitiesTrain />
  </div>
</template>

<script>
import CitiesTrain from "./components/CitiesTrain.vue";

export default {
  name: "App",
  components: {
    CitiesTrain,
  },
};
</script>

<style lang="scss"></style>
