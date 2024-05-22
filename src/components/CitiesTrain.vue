<template>
  <div>
    <div>hello cities</div>
    <div v-for="city in cities" :key="city.name" @click="clickCity(city)">
      {{ city.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "citiesTrain",

  props: {},
  data() {
    return {
      cities: [
        {
          name: "Paris",
          population: 45,
        },
        {
          name: "London",
          population: 55,
        },
      ],
    };
  },
  methods: {
    clickCity(city) {
      console.log(`${city.name} population is ${city.population}`);
      console.log("clicked");
    },
  },
};
</script>

<style scoped lang="scss"></style>
