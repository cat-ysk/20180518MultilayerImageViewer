import axios from "axios";

const URL = "/products/20180518_multilayer_manga_viewer/episode.json";

export const state = () => ({
  episode: null
});

export const actions = {
  fetchEpisode(context, episodeId) {
    console.log(episodeId);
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
  episode(state, obj) {
    state.episode = obj;
  }
};
