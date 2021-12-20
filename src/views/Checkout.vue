<template>
  <div>
        <main class="flex mt-10 mb-7 gap-14 mx-p-w">
            <div class="flex flex-col flex-1 gap-3">
                <span class="mb-3 font-semibold font-poppins" style=" font-size: 15px ">
                    Shipping Details
                </span>

                <!-- {/* input row */} -->
                <div class="flex gap-7">
                    <div class="flex flex-col flex-1 gap-2">
                        <span class="font-normal font-lato" style=" font-size: 9px ">
                            First Name
                        </span>
                        <input
                            type="text"
                            class="w-full border rounded-md outline-none h-9"
                            style=" border-color: #D4D4D4 "
                        />
                    </div>

                    <div class="flex flex-col flex-1 gap-2">
                        <span class="font-normal font-lato" style=" font-size: 9px ">
                            Last Name
                        </span>
                        <input
                            type="text"
                            class="w-full border rounded-md outline-none h-9"
                            style=" border-color: #D4D4D4 "
                        />
                    </div>
                </div>
            </div>

            <div class="px-5 py-4 border rounded-md">
                <div
                    class="mb-4 font-semibold tracking-wide font-poppins"
                    style=" font-size: 10px "
                >
                    My Orders
                </div>

                <div
                    class="flex flex-col gap-4 pb-5 mb-5 border-b"
                    style=" border-color: #F3F3F3 "
                >
                    <div class="flex">
                        <span
                            class="font-semibold font-lato"
                            style=" color: #1D1D1D; font-size: 10px "
                        >
                            1x
                        </span>
                        <span
                            class="ml-5 font-normal font-lato"
                            style=" color: #8D8D8D; font-size: 9px; max-width: 132px "
                        >
                            LED Monitor With High Quality In The World
                        </span>
                        <span
                            class="flex-1 font-semibold text-right font-lato "
                            style=" color: #1D1D1D; font-size: 10px "
                        >
                            976.33
                        </span>
                    </div>

                    <div class="flex">
                        <span
                            class="font-semibold font-lato"
                            style=" color: #1D1D1D; font-size: 10px "
                        >
                            1x
                        </span>
                        <span
                            class="ml-5 font-normal font-lato"
                            style=" color: #8D8D8D; font-size: 9px; max-width: 132px "
                        >
                            LED Monitor With High Quality In The World
                        </span>
                        <span
                            class="flex-1 font-semibold text-right font-lato "
                            style=" color: #1D1D1D; font-size: 10px "
                        >
                            976.33
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
                            1,952.66
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
                            4.00
                        </span>
                    </div>
                </div>

                <div
                    class="flex justify-between pb-5 mb-5 border-b"
                    style=" border-color: #F3F3F3 "
                >
                    <span
                        class="font-medium tracking-wide font-poppins"
                        style=" font-size: 9px "
                    >
                        Order Total
                    </span>
                    <span class="text-sm font-semibold font-poppins text-bg-primary">
                        1956.66
                    </span>
                </div>

                <div class="flex flex-col gap-4 mb-6">
                    <span class="font-semibold font-poppins" style=" font-size: 10px ">
                        Payment
                    </span>

                    <div class="flex items-center gap-3">
                        <input type="checkbox" class="cursor-pointer" />
                        <span class="font-normal font-lato" style=" font-size: 9px ">
                            Direct Bank Transfer
                        </span>
                    </div>

                    <div class="flex items-center gap-3">
                        <input type="checkbox" class="cursor-pointer" />
                        <span class="font-normal font-lato" style=" font-size: 9px">
                            Paypol
                        </span>
                    </div>

                    <div class="flex items-center gap-3">
                        <input type="checkbox" class="cursor-pointer" />
                        <span class="font-normal font-lato" style=" font-size: 9px">
                            Cash On Delivery
                        </span>
                    </div>
                </div>

                <button
                    type="button"
                    class="px-20 py-3 font-bold uppercase rounded-md bg-bg-primary font-lato"
                    style=" font-size: 10px; color: #FBFBFB"
                >
                    place order
                </button>

                <div
                    class="mt-5 font-normal font-lato"
                    style=" font-size: 9px; color: #8D8D8D; max-width: 226px "
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore e
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>