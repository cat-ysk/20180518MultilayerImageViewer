<template>
  <section class="container">
    <h1 class="title">多段レイヤー漫画ビューアー（仮）</h1>
    <h2>{{ title }}</h2>
    <!-- <nuxt-link to="/hoge">Hoge</nuxt-link> -->
    <div>
      <span class="mr-1">
        <a href="#" class="btn" :class="lang === 'jp' ? 'btn-primary': 'btn-secondary'" @click="toJp">日本語</a>
        <a href="#" class="btn" :class="lang === 'en' ? 'btn-primary': 'btn-secondary'" @click="toEn">英語</a>
      </span>
      <span class="ml-1">
        <a href="#" class="btn" :class="!visibleAnyLang ? 'btn-primary': 'btn-secondary'" @click="langOff">吹き出しオフ</a>
        <a href="#" class="btn" :class="visibleAnyLang ? 'btn-primary': 'btn-secondary'" @click="langOn">吹き出しオン</a>
      </span>
    </div>
    <div class="row no-gutters">
      <image-stack class="col" :images="leftImages" position="left" />
      <image-stack class="col" :images="rightImages" position="right" />
    </div>
  </section>
</template>

<script>
import ImageStack from "~/components/ImageStack.vue";

export default {
  data() {
    return {
      currentIndex: 0,
      lang: "jp"
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
      return this.pages[this.currentIndex];
    },
    rightImages() {
      return this.pages[this.currentIndex + 1];
    },
    visibleAnyLang() {
      return (
        this.$store.state.viewer.visibleTags.indexOf("lang-jp") >= 0 ||
        this.$store.state.viewer.visibleTags.indexOf("lang-en") >= 0
      );
    }
  },
  methods: {
    change(lang) {
      this.lang = lang;
    },
    langOn() {
      this.$store.commit("viewer/visibleTag", "lang-" + this.lang);
    },
    langOff() {
      this.$store.commit("viewer/invisibleTag", "lang-jp");
      this.$store.commit("viewer/invisibleTag", "lang-en");
    },
    toJp() {
      this.lang = "jp";
      this.$store.commit("viewer/invisibleTag", "lang-en");
      this.$store.commit("viewer/visibleTag", "lang-jp");
    },
    toEn() {
      this.lang = "en";
      this.$store.commit("viewer/invisibleTag", "lang-jp");
      this.$store.commit("viewer/visibleTag", "lang-en");
    }
  },
  components: {
    ImageStack
  }
};
</script>

