<template>
  <div>
    <main
      class="flex md:flex-nowrap flex-wrap mt-10 gap-14 mb-14 mx-5 md:mx-p-w"
    >
      <div class="flex flex-col flex-1 gap-3">
        <div
          class="flex items-center py-4 pl-4 mb-3 border rounded-md pr-9"
          style="border-color: #d4d4d4"
        >
          <input type="checkbox" class="cursor-pointer" />

          <span
            style="font-size: 8px"
            class="flex-1 ml-5 font-black tracking-wide font-lato"
          >
            Select All
          </span>

          <span
            class="
              pr-5
              mr-5
              font-black
              tracking-wide
              uppercase
              border-r
              cursor-pointer
              font-lato
              text-bg-primary
            "
            style="font-size: 8px; border-color: #ededed"
          >
            update cart
          </span>

          <span
            class="font-black tracking-wide uppercase cursor-pointer font-lato"
            style="font-size: 8px; color: #ff0000"
          >
            remove
          </span>
        </div>

        <div v-for="(cart, index) in carts" :key="index">
          <CartProduct :index = "index" :cart = "cart"/>
        </div>
      </div>

      <div
        class="flex flex-col gap-5 mx-auto md:mx-0"
        style="max-height: 247px"
      >
        <div
          style="background-color: #fff7f3; border-color: #a1e887"
          class="
            flex
            items-center
            w-64
            gap-4
            py-4
            pl-5
            border
            rounded-md
            cursor-pointer
            pr-7
          "
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.5"
              height="12.001"
              viewBox="0 0 18.5 12.001"
            >
              <path
                id="Vector"
                d="M4945.458,199h-15.416a1.524,1.524,0,0,1-1.542-1.5v-3a1.5,1.5,0,1,0,0-3v-3a1.523,1.523,0,0,1,1.542-1.5h15.416a1.523,1.523,0,0,1,1.542,1.5v3a1.5,1.5,0,1,0,0,3v3A1.524,1.524,0,0,1,4945.458,199Zm-13.1-10a.761.761,0,0,0-.771.75v6.5a.761.761,0,0,0,.771.75h10.792a.761.761,0,0,0,.771-.75v-6.5a.761.761,0,0,0-.771-.75Zm10.536,7h-10.28v-6h10.28v6Z"
                transform="translate(-4928.5 -187)"
                fill="#493548"
              />
            </svg>
          </span>
          <span
            class="flex-1 font-semibold font-poppins text-bg-primary"
            style="font-size: 9px"
          >
            I have promo code
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3.548"
              height="7.096"
              viewBox="0 0 3.548 7.096"
            >
              <path
                id="Rectangle_2"
                data-name="Rectangle 2"
                d="M5139.548,196.644v-7.1l3.548,3.548Z"
                transform="translate(-5139.548 -189.548)"
                fill="#493548"
              />
            </svg>
          </span>
        </div>

        <div class="flex flex-col gap-5 px-5 py-4 border rounded-md">
          <span class="font-semibold font-poppins" style="font-size: 10px">
            Shopping Summary
          </span>

          <div class="flex items-center justify-between">
            <span class="font-medium font-poppins" style="font-size: 9px">
              Total
            </span>
            <span class="text-sm font-semibold text-bg-primary font-poppins">
              {{ TotalPrice }}
            </span>
          </div>

          <button
            @click="checkOut"
            type="button"
            class="
              px-20
              py-3
              font-bold
              uppercase
              rounded-md
              bg-bg-primary
              font-lato
            "
            style="font-size: 10px; color: #fbfbfb"
          >
            checkout
          </button>

          <router-link
            to="/"
            class="
              self-center
              font-bold
              cursor-pointer
              font-lato
              text-bg-primary
              hover:underline
            "
            style="font-size: 8px"
          >
            Back to Shopping
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CartProduct from '../components/CartProduct.vue'
import axios from 'axios';
export default {
components:{
    CartProduct
},
data(){
    return{
        carts:[]
    }
},
methods:{
    checkOut(){
        this.$router.push("/checkout")
}
    },
    beforeCreate(){
       axios
        .get(
          process.env.VUE_APP_API_URL + "order",
          { withCredentials: true }
        )
        .then((response) => {
          let daResponse = response.data.data;
          this.carts = daResponse
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    }
}
</script>

<style>
</style>