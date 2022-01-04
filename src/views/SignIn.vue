<template>
  <!-- component -->
<div class="bg-grey-lighter min-h-screen flex flex-col my-10">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign In</h1>

                    <input v-model="email"
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input v-model="password"
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />

                    <button @click="signIn"
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
                    >Sign In</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Don't have an account? 
                    <router-link class="no-underline border-b border-blue text-blue" to="/signup">
                        Sign Up
                    </router-link>.
                </div>
            </div>
        </div>
</template>

<script>
import axios from "axios";

export default {
     data() {
    return {
      email: "",
      password: "",
    };
  },
methods:{
    signIn() {
      axios
        .post(
          process.env.VUE_APP_API_URL + "customer/login",
          { email: this.email, password: this.password, },
          { withCredentials: true }
        )
        .then((res) => {
          //Perform Success Action
          console.log(res);
          this.$store.commit("toggleAuthenticated");
          console.log(this.$store.state.isAuthenticated)
          this.$router.push({ path: "/" });
          console.log(res.data);
        })
        .catch((error) => {
          // error.response.status Check status code
          console.log(error);
        })
        .finally(() => {
          //Perform action in always
        });
    },
}
}
</script>

<style>

</style>