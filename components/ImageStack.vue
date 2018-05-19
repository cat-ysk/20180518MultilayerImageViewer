<template>
  <div class="position-relative">
    <image-layer :class="position" v-for="image in images" :key="image.url" :image="image" />
  </div>
</template>

<script>
import ImageLayer from "./ImageLayer.vue";

export default {
  props: {
    images: {
      type: Array,
      default: () => []
    },
    position: {
      type: String,
      default: "left"
    }
  },
  methods: {
    isBaseImage(image) {
      return;
    }
  },
  components: {
    ImageLayer
  }
};
</script>
<style scoped>
.left {
  right: 0;
}
</style>

