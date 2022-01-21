<template>
  <div>
        <main class="flex flex-col my-12 gap-7 mx-5 md:mx-p-w">
            <!-- <span class="text-2xl font-semibold font-poppins">Track your order here.</span> -->

            <div class="flex flex-col md:flex-row gap-10 mt-3">
                <!-- <div class="flex flex-col flex-1 gap-2">
                    <span class="text-sm font-normal font-lato">Email</span>
                    <input
                        type="text"
                        class="w-full border rounded-md outline-none"
                        style=" border-color: #D4D4D4; height: 57px "
                    />
                </div> -->

                <!-- <div class="flex flex-col flex-1 gap-2">
                    <span class="text-sm font-normal font-lato">Order ID</span>
                    <input
                        type="text"
                        class="w-full border rounded-md outline-none"
                        style=" border-color: #D4D4D4; height: 57px "
                    />
                </div> -->
            </div>

            <!-- <button
                type="button"
                class="flex items-center self-end justify-center w-full md:w-auto md:px-20 py-3 font-bold tracking-wide uppercase rounded-md cursor-pointer bg-bg-primary font-lato"
                style=" font-size: 10px; color: #FBFBFB "
            >
                track your order
            </button> -->

            <div
                class="flex flex-col md:flex-row p-5 mt-2 border rounded-md md:gap-60"
                style=" border-color: #D4D4D4 "
            >
                <!-- {/* your order */} -->
                <div>
                    <div
                        class="mb-4 font-semibold tracking-wide font-poppins"
                        style=" font-size: 10px "
                    >
                        Your Orders
                    </div>

                    <div v-for="(product,index) in products" :key="index"
                        class="flex flex-col gap-4 pb-5 mb-5 border-b"
                        style=" border-color: #F3F3F3 "
                    >
                        <div class="flex">
                            <span
                                class="font-semibold font-lato"
                                style=" color: #1D1D1D; font-size: 10px "
                            >
                                {{product.products[0].quantity}}x
                            </span>
                            <span
                                class="ml-5 font-normal font-lato"
                                style=" color: #8D8D8D; font-size: 9px; min-width: 132px "
                            >
                                 {{product.products[0].product.name}}
                            </span>
                            <span
                                class="flex-1 font-semibold text-right font-lato "
                                style=" color: #1D1D1D; font-size: 10px "
                            >
                                                            {{(product.products[0].product.salesPrice) ? product.products[0].product.salesPrice :product.products[0].product.regularPrice}}

                            </span>
                        </div>
                    </div>

                    <div
                        class="flex flex-col gap-3 pb-5 mb-5 border-b"
                        style=" border-color: #F3F3F3 "
                    >
                        <div class="flex justify-between">
                            <span
                                class="font-normal font-lato"
                                style=" color: #8D8D8D; font-size: 9px "
                            >
                                Subtotal
                            </span>
                            <span
                                class="font-semibold font-lato"
                                style=" font-size: 10px; color: #1D1D1D "
                            >
                                0
                            </span>
                        </div>

                        <div class="flex justify-between">
                            <span
                                class="font-normal font-lato"
                                style=" color: #8D8D8D; font-size: 9px "
                            >
                                Shipping
                            </span>
                            <span
                                class="font-semibold font-lato"
                                style=" font-size: 10px; color: #1D1D1D "
                            >
                                0
                            </span>
                        </div>

                        <div class="flex justify-between">
                            <span
                                class="font-normal font-lato"
                                style=" color: #8D8D8D; font-size: 9px "
                            >
                                Tax
                            </span>
                            <span
                                class="font-semibold font-lato"
                                style=" font-size: 10px; color: #1D1D1D "
                            >
                                0
                            </span>
                        </div>
                    </div>

                    <div class="flex justify-between">
                        <span
                            class="font-medium tracking-wide font-poppins"
                            style=" font-size: 9px "
                        >
                            Order Total
                        </span>
                        <span class="text-sm font-semibold font-poppins text-bg-primary">
                            0
                        </span>
                    </div>
                </div>

                <!-- {/* status */} -->
                 Payment Status: Pending
                <!-- <div class="flex flex-col gap-4 mb-6">
                    <span class="font-semibold font-poppins" style=" font-size: 10px ">
                        Status
                    </span>

                    <div class="flex items-center gap-3">
                        <input type="checkbox" class="cursor-pointer" />
                        <span class="font-normal font-lato" style=" font-size: 9px ">
                            Direct Bank Transfer
                        </span>
                    </div>

                    <div class="flex items-center gap-3">
                        <input type="checkbox" class="cursor-pointer" />
                        <span class="font-normal font-lato" style=" font-size: 9px ">
                            Paypol
                        </span>
                    </div>

                    <div class="flex items-center gap-3">
                        <input type="checkbox" class="cursor-pointer" />
                        <span class="font-normal font-lato" style=" font-size: 9px ">
                            Cash On Delivery
                        </span>
                    </div>
                </div> -->
            </div>
        </main>
    </div>
</template>

<script>
import axiosJWT from "../store/axios"
// import axios from 'axios';

export default {
    data(){
        return{
            products:[]
        }
    },
beforeRouteEnter(to, from, next) {
      axiosJWT.get(process.env.VUE_APP_API_URL + 'customer/get-me',{withCredentials:true})
        .then((res) => {
          console.log(res)
        next();

      }).catch((error) => {
        console.log(error)
        next({ path: '/signup' });
})
  },
  created(){
      axiosJWT
        .get(
          process.env.VUE_APP_API_URL + "order",
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response.data)
          this.products = response.data.data
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