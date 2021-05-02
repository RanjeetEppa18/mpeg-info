<template>
  <div>{{ hello }}</div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const hello = ref("hello");
    onMounted(() => {
      console.log("mounted in the composition api!");
    });
    return { hello };
  },
};
</script>

<style></style>
