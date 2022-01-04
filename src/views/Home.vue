<template>
  <div class="home">
    <FirstPage/>
  </div>
</template>

<script>
import FirstPage from '../components/FirstPage.vue'
import axiosJWT from "../store/axios"

export default {
  name: 'Home',
  components: {
    FirstPage
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
}
</script>
