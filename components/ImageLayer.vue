<template>
  <img v-if="visible" class="img-fluid position-absolute" :src="image.url" />
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    visible() {
      if (this.image.tag) {
        const tags = this.$store.state.viewer.visibleTags;
        return tags.indexOf(this.image.tag) >= 0;
      }
      return true;
    }
  }
};
</script>
