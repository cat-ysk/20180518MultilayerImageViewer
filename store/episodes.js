import axios from "axios";

const URL = "/products/20180518_multilayer_manga_viewer/episode.json";

export const state = () => ({
  id: null,
  name: null,
  pages: []
});

export const actions = {
  fetchEpisode(context, episodeId) {
    axios
      .get(URL)
      .then(res => {
        this.commit("episodes/episode", res.data);
      })
      .catch(error => {
        console.log("ERROR:", error);
      });
  }
};

export const mutations = {
  episode(state, data) {
    state.id = data.id;
    state.name = data.name;
    state.pages = data.pages;
  }
};
