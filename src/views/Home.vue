<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Dashboard />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "Home",
  components: {
    Dashboard,
  },
};
</script>
