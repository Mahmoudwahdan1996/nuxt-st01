import axios from "axios";
export default {
  state: () => ({
    items: [],

  }),
  mutations: {

    SET_TABLE_ITEMS(state, items) {
      state.items = items;
    },

  },
  actions: {
    async getTableItems({ commit }, { reqName  }) {
       return axios.get(`http://localhost:4000/${reqName}`)
        .then((res) => {
          const  data  = res.data;
          commit("SET_TABLE_ITEMS", data);
        console.log(res)
        });
    },

  },
  getters: {
    getsTableItems(state) {
      return state.items;
    },
  },
};