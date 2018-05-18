<template>
  <section class="container">
    <h1 class="title">試作多レイヤー漫画ビューアー</h1>
    <span class="l">
      <a href="#" class="button" :class="{ 'is-primary': (lang === 'j')}" @click="change('j')">日本語</a>
      <a href="#" class="button" :class="{ 'is-primary': (lang === 'e')}" @click="change('e')">英語</a>
    </span>
    <span class="r">
      <a v-if="display" href="#" class="button" @click="onoff">吹き出しオフ</a>
      <a v-if="!display" href="#" class="button" @click="onoff">吹き出しオン</a>
    </span>
    <div class="lp">
      <img class="overlay" src="~static/m.png">
      <img class="overlay" :class="{ 'is-hidden': !display }" :src="overlayImage">
    </div>

    <nuxt-link to="/hoge">Hoge</nuxt-link>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import Page from "~/components/Page.vue";

export default {
  data() {
    return {
      lang: "j",
      display: true
    };
  },
  created() {
    const episodeId = this.$route.query.episode;
    this.$store.dispatch("episodes/fetchEpisode", episodeId);
  },
  computed: {
    overlayImage() {
      return "/products/20180518_multilayer_manga_viewer/" + this.lang + ".png";
    }
  },
  methods: {
    change(lang) {
      this.lang = lang;
    },
    onoff() {
      this.display = !this.display;
    }
  },
  components: {
    AppLogo,
    Page
  }
};
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma";
.lp {
  position: relative;
}
.overlay {
  position: absolute;
  left: 0;
  top: 0;
}
.r {
  margin-left: 2rem;
}
</style>
