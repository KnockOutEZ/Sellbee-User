<template>
  <div class="mainBg text-center py-10">
<img class="w-auto mx-auto mb-5" src="../../public/daMainBg.png" alt="">
<h1 class="text-5xl font-semibold">Thank You!!</h1>
<p>Your order has been placed successfully.</p>
<span>You can <router-link class="text-blue-400" to="/trackorder">track your order</router-link> here.</span>
  </div>
</template>

<script>
export default {

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