<template >
  <div v-if="$store.state.lineChartIsLoaded">
    <Navbar/>

  <router-view/>

  <Footer/>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue"
import Navbar from "./components/Navbar.vue"

export default {
    components:{
    Navbar,
    Footer
},
beforeCreate() {
    this.$store.dispatch("initApp");
  }
}
</script>

<style>
</style>
