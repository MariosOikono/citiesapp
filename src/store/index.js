import Vue from "vue";
import Vuex from "vuex";
import { getCitiesMockEndPoint } from "@/citiesapi";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    continents: [],
    cities: [
      {
        id: 1,
        name: "Paris",
        continent: "Europe",
        population: 35,
      },
      {
        id: 2,
        name: "Cina",
        continent: "Asia",
        population: 45,
      },
    ],
  },
  getters: {
    getAllCitiesOfEurope(state) {
      return state.cities.filter((city) => city.continent === "Europe");
    },
  },
  mutations: {
    setCities(state, payload) {
      state.cities = payload;
    },
    setContinents(state, payload) {
      state.continents = payload;
    },
  },
  actions: {
    async getCities(state) {
      const response = await getCitiesMockEndPoint();
      state.commit("setCities", response);
    },
  },
  modules: {},
});

export default store;
