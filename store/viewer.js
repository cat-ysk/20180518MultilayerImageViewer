export const state = () => ({
  visibleTags: ["base", "lang-jp"]
});

export const mutations = {
  visibleTag(state, value) {
    if (state.visibleTags.indexOf(value) === -1) {
      state.visibleTags.push(value);
    }
  },
  invisibleTag(state, value) {
    const index = state.visibleTags.indexOf(value);
    if (index >= 0) {
      state.visibleTags.splice(index, 1);
    }
  }
};

export const getters = {};
