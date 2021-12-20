import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Category from '../views/Category.vue'
import CancelOrders from '../views/CancelOrders.vue'
import TrackOrder from '../views/TrackOrder.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'Product',
    component:Product
  },
  {
    path: '/cart',
    name: 'Cart',
    component:Cart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component:Checkout
  },
  {
    path: '/categories/:id',
    name: 'Category',
    component:Category
  },
  {
    path: '/cancelorders',
    name: 'CancelOrders',
    component:CancelOrders
  },
  {
    path: '/trackOrder',
    name: 'TrackOrder',
    component:TrackOrder
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
