<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <Dashboard /> -->
    <AnimeSearch />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import Dashboard from "@/components/Dashboard.vue";
import AnimeSearch from "@/components/AnimeSearch/index.vue";
export default {
  name: "Home",
  components: {
    // Dashboard,
    AnimeSearch,
  },
};
</script>
