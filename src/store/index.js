import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    productPagination:0,
    lineChartIsLoaded : false,
    isAuthenticated: false,
    cartProducts:[]
  },
  mutations: {
    initProducts(state, products) {
      state.products = products.data;
      state.lineChartIsLoaded = true
      console.log(products);
    },
    toggleAuthenticated(state){
      localStorage.setItem('isAuthenticated', !state.isAuthenticated);
      state.isAuthenticated = !state.isAuthenticated 
    },
  },
  actions: {
    initApp(context) {
      // ?page=2&size=2

      axios.get(process.env.VUE_APP_API_URL + "products/customer").then((response) => {
        context.commit("initProducts", response);
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
