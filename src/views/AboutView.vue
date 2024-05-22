<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1 @click="navigateToHome">At click navigate to Home</h1>
    {{ cities }}
  </div>
</template>

<script>
export default {
  name: "AboutView",
  computed: {
    cities() {
      return this.$store.state.cities;
    },
  },
  created() {
    console.log(this.$route);
    console.log(this.$router);
  },
  methods: {
    async navigateToHome() {
      try {
        await this.$router.push({
          name: "home",
        });
      } catch (error) {
        //error handling
        //log the error
        console.error(error);
      }
    },
  },
};
</script>
