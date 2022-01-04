<template>
  <!-- component -->
  <div class="bg-grey-lighter my-10 flex flex-col">
    <div
      class="
        container
        max-w-md
        mx-auto
        flex-1 flex flex-col
        items-center
        justify-center
        px-2
      "
    >
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
        <div class="md:flex md:space-x-2">
          <input
            v-model="firstname"
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="firstname"
            placeholder="First Name"
          />

          <input
            v-model="lastname"
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="lastname"
            placeholder="Last Name"
          />
        </div>

        <input
          v-model="number"
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="number"
          placeholder="8801XXXXXXXXX"
        />

        <input
          v-model="address"
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="address"
          placeholder="Address"
        />

        <input
          v-model="email"
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
        />

        <input
          v-model="password"
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="password"
          placeholder="Password"
        />

        <button
          @click="signUp"
          type="submit"
          class="
            w-full
            text-center
            py-3
            rounded
            bg-green-500
            text-white
            hover:bg-green-600
            focus:outline-none
            my-1
          "
        >
          Sign Up
        </button>

        <div class="text-center text-sm text-grey-dark mt-4">
          By signing up, you agree to the
          <a
            class="no-underline border-b border-grey-dark text-grey-dark"
            href="#"
          >
            Terms of Service
          </a>
          and
          <a
            class="no-underline border-b border-grey-dark text-grey-dark"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      <div class="text-grey-dark mt-6">
        Already have an account?
        <router-link
          class="no-underline border-b border-blue text-blue"
          to="/signin"
        >
          Sign In </router-link
        >.
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      number: "",
      address: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signUp() {
      axios
        .post(
          process.env.VUE_APP_API_URL + "customer/signup",
          { email: this.email, number: this.number,firstName: this.firstname,lastName: this.lastname,address: this.address,password: this.password, },
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
  },
};
</script>

<style>
</style>