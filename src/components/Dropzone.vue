<template>
  <vue-dropzone
    ref="myVueDropzone"
    id="dropzone"
    :options="dropzoneOptions"
  ></vue-dropzone>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  name: "Dropzone",
  components: { vueDropzone: vue2Dropzone },
  data: function () {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 200,
        addRemoveLinks: true,
      },
    };
  },
};
</script>
<style scoped>
.vue-dropzone {
  z-index: 1;
  border: 2px dashed #0087f7;
  border-radius: 5px;
  background: transparent;
}
.dz-drag-hover {
  border: 2px solid #0087f7;
}
</style>
