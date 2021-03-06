import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Category from '../views/Category.vue'
import CancelOrders from '../views/CancelOrders.vue'
import TrackOrder from '../views/TrackOrder.vue'
import OrderConfirm from '../views/OrderConfirm.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
  { path: '/',
    redirect: '/categories/All Products',
  },
  {
    path: '/home',
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
    path: '/trackorder',
    name: 'TrackOrder',
    component:TrackOrder
  },
  {
    path: '/orderconfirm',
    name: 'OrderConfirm',
    component:OrderConfirm
  },
  {
    path: '/signup',
    name: 'SignUp',
    component:SignUp
  },
  {
    path: '/signin',
    name: 'SignIn',
    component:SignIn
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
