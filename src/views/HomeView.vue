<template>
  <div class="home">Home View</div>
</template>

<script>
export default {
  name: "HomeView",
  async created() {
    await this.$store.dispatch("getCities");
    console.log(this.$store.state.cities);
    console.log(this.$store.getters);
  },
  methods: {
    async navigateToAbout() {
      try {
        await this.$router.push({
          name: "about",
          params: {
            id: 6,
          },
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
