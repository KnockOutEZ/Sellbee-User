<template>
  <div>
        <main class="mt-12 mb-20 mx-5 md:px-p-w md:mx-p-w">
            <div class="flex flex-col flex-1 gap-7">
                <span class="mb-3 text-xl font-semibold font-poppins">Report/Cancel Order</span>

                <!-- {/* input row */} -->
                <div class="flex flex-col md:flex-row gap-7">
                    <div class="flex flex-col flex-1 gap-2">
                        <span class="text-xs font-normal font-lato">Order ID</span>
                        <input
                            type="text"
                            class="w-full h-12 border rounded-md outline-none"
                            style=" border-color: #D4D4D4 "
                        />
                    </div>

                    <div class="flex flex-col flex-1 gap-2">
                        <span class="text-xs font-normal font-lato">Email Address</span>
                        <input
                            type="text"
                            class="w-full h-12 border rounded-md outline-none"
                            style=" border-color: #D4D4D4 "
                        />
                    </div>
                </div>

                <!-- {/* input row */} -->
                <div class="flex flex-col md:flex-row gap-7">
                    <div class="flex flex-col flex-1 gap-2">
                        <span class="text-xs font-normal font-lato">Phone Number</span>
                        <input
                            type="text"
                            class="w-full h-12 border rounded-md outline-none"
                            style=" border-color: #D4D4D4 "
                        />
                    </div>

                    <div class="flex flex-col flex-1 gap-2">
                        <span class="text-xs font-normal font-lato">
                            Proof (Video or any files to proof)
                        </span>
                        <input
                            type="text"
                            class="w-full h-12 border rounded-md outline-none"
                            style=" border-color: #D4D4D4 "
                        />
                    </div>
                </div>

                <!-- {/* input row */} -->
                <div class="flex gap-7">
                    <div class="flex flex-col flex-1 gap-2">
                        <span class="text-xs font-normal font-lato">
                            Report/Reason for Cancellation
                        </span>
                        <input
                            type="text"
                            class="w-full h-20 border rounded-md outline-none"
                            style=" borderColor: #D4D4D4 "
                        />
                    </div>
                </div>

                <button
                    type="button"
                    class="flex items-center self-end justify-center w-full md:w-auto md:px-20 py-3 mt-4 font-bold tracking-wide uppercase rounded-md cursor-pointer bg-bg-primary font-lato"
                    style=" font-size: 10px; color: #FBFBFB "
                >
                    submit now
                </button>
            </div>
        </main>
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

<style>

</style>