<template>
  <div>{{ hello }}</div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const hello = ref("hello");
    onMounted(async () => {
      const res = await fetch("https://api.jikan.moe/v3/genre/anime/1/1");
      const response = await res.json();
      console.log("response", response.anime[0]);
    });
    return { hello };
  },
};
</script>

<style></style>
