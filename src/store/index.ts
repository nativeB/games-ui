import { getGames } from "@/services";
import { createStore } from "vuex";

export default createStore({
  state: {
    games: [],
    totalRecords: 0,
  },
  mutations: {
    setGames(state, games) {
      state.games = games;
    },
    setTotalRecords(state, totalRecords) {
      state.totalRecords = totalRecords;
    },
  },
  actions: {
    async getGames({ commit }, { query }) {
      const request = await getGames(query);
      const gamesObject = await request.data;
      if (gamesObject) {
        commit("setGames", gamesObject.games);
        commit("setTotalRecords", gamesObject.totalRecords);
      }
    },
  },
  modules: {},
});
