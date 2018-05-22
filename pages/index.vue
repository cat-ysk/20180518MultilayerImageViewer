<template>
  <section class="container">
    <h1 class="title">多段レイヤー漫画ビューアー（仮）</h1>
    <h2>{{ title }}</h2>

    <!-- <nuxt-link to="/hoge">Hoge</nuxt-link> -->
    <select-layer-buttons />
    <div class="mt-2 mb-2">
      <a class="btn btn-info mr-1" href="#" @click="next">＜　次へ</a>
      <a class="btn btn-info ml-1" href="#" @click="prev">前へ　＞</a>
    </div>
    <div class="row no-gutters">
      <image-stack class="col" :images="leftImages" position="left" />
      <image-stack class="col" :images="rightImages" position="right" />
    </div>
  </section>
</template>

<script>
import ImageStack from "~/components/ImageStack.vue";
import SelectLayerButtons from "~/components/SelectLayerButtons.vue";

export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  created() {
    const episodeId = this.$route.query.episode;
    this.$store.dispatch("episodes/fetchEpisode", episodeId);
  },
  computed: {
    title() {
      return this.$store.state.episodes.name;
    },
    pages() {
      return this.$store.state.episodes.pages;
    },
    leftImages() {
      return this.pages[this.currentIndex + 1];
    },
    rightImages() {
      return this.pages[this.currentIndex];
    }
  },
  methods: {
    next() {
      if (this.currentIndex < this.pages.length) {
        this.currentIndex += 2;
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 2;
      }
    }
  },
  components: {
    SelectLayerButtons,
    ImageStack
  }
};
</script>

