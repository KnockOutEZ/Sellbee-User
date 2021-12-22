import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: []
  },
  mutations: {
    initProducts(state, products) {
      state.products = products;
      console.log(products);
    }
  },
  actions: {
    initApp(context) {
      axios.get(process.env.VUE_APP_API_URL + "products/customer").then((response) => {
        context.commit("initCategories", response);
      }).catch((error) => {
        // handle error
        console.log(error);
      });
    }
  },
  getters: {
    getProducts(state) {
      return state.products;
    }
  },
  modules: {
  }
})
