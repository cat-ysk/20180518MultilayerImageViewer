<template>
  <div>
    <span class="btn-group mr-1">
      <a href="#" class="btn" :class="lang === 'jp' ? 'btn-primary': 'btn-secondary'" @click="toJp">日本語</a>
      <a href="#" class="btn" :class="lang === 'en' ? 'btn-primary': 'btn-secondary'" @click="toEn">英語</a>
    </span>
    <span class="btn-group ml-1">
      <a href="#" class="btn" :class="!visibleAnyLang ? 'btn-primary': 'btn-secondary'" @click="langOff">吹き出しオフ</a>
      <a href="#" class="btn" :class="visibleAnyLang ? 'btn-primary': 'btn-secondary'" @click="langOn">吹き出しオン</a>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: "jp"
    };
  },
  computed: {
    visibleAnyLang() {
      return (
        this.$store.state.viewer.visibleTags.indexOf("lang-jp") >= 0 ||
        this.$store.state.viewer.visibleTags.indexOf("lang-en") >= 0
      );
    }
  },
  methods: {
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
  }
};
</script>

<style>
</style>
