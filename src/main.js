import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import Pagination from 'v-pagination-3';
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'
// .use(VueAwesomeSwiper)
createApp(App).component('pagination', Pagination).use(store).use(router).mount('#app')
