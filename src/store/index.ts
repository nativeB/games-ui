import { getGames } from "@/services";
import { createStore } from "vuex";

export default createStore({
  state: {
    games: [],
  },
  mutations: {
    setGames(state, games) {
      state.games = games;
    },
  },
  actions: {
    async getGames({ commit }, { query }) {
      const games = await getGames(query);
      commit("setGames", games);
    },
  },
  modules: {},
});
