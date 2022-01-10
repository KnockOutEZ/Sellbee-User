<template>
  <div class="mainBg text-center py-10">
<img class="w-auto mx-auto mb-5" src="../../public/daMainBg.png" alt="">
<h1 class="text-5xl font-semibold">Thank You!!</h1>
<p>Your order has been placed successfully.</p>
<span>You can <router-link class="text-blue-400" to="/trackorder">track your order</router-link> here.</span>
  </div>
</template>

<script>
import axiosJWT from "../store/axios"

export default {
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
}
</script>

<style scoped>
.mainBg{
    background-image: url('../../public/Path 2.png');
    background-repeat: no-repeat;
    background-position-x: left;
    background-size: cover;
}
</style>