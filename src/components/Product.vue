<template>
  <div v-if="!showEmAll"
        class="flex flex-col
            description && starCount items-center
         bg-white gap-2 pb-4 rounded-2xl"
        style=" box-shadow: 0px 3px 3px 0 rgba(0, 0, 0, 0.06) "
    >
        <router-link class="w-full" :to="{ path: '/product/' + productId}">
            <img
                :src="image"
                :alt="name"
                class="object-cover w-full cursor-pointer rounded-2xl w-full"
                style=" height: 133px "
            />
        </router-link>

            <!-- <div v-if="description !== null && starCount!== null" class="flex flex-col items-center gap-1 font-poppins">
                <span class="text-sm font-semibold text-bg-primary">BDT {{salesPrice}}</span>
                <span style=" color: #8D8D8D " class="text-xs font-normal">
                    BDT {{regularPrice}}
                </span>
            </div> -->

            <!-- <div v-if="description == null && starCount== null" class="flex flex-col gap-1 px-4">
                <span class="font-semibold font-poppins">{{name}}</span>
                <span class="font-medium font-poppins" style=" font-size: 9px ">
                    {{description}}
                </span>
            </div> -->

                <div class="flex flex-col w-full text-center px-3">
                <span class="text-sm font-semibold text-bg-primary">BDT {{salesPrice}}</span>
                <span
                    style=" color: #8D8D8D "
                    class="self-center flex-1 text-xs font-normal"
                >
                    BDT {{regularPrice}}
                </span>
                <!-- <div class="flex items-center">
                        <span v-for="starCounts in startCount" :key="starCounts" style=" margin-right: 10px ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7.464"
                                height="6.786"
                                viewBox="0 0 7.464 6.786"
                            >
                                <path
                                    id="star"
                                    d="M153.331,696.736l-.911,1.754-2.038.282a.419.419,0,0,0-.247.724l1.475,1.365-.349,1.928a.442.442,0,0,0,.648.446l1.823-.91,1.824.91a.442.442,0,0,0,.647-.446l-.349-1.928,1.475-1.365a.419.419,0,0,0-.247-.724l-2.038-.282-.911-1.754A.458.458,0,0,0,153.331,696.736Z"
                                    transform="translate(-150 -696.5)"
                                />
                            </svg>
                        </span>
                </div> -->
            </div>

            <span class="font-semibold font-poppins w-full text-center px-3 two-line-ellipsis" style=" font-size: 20px; ">
                {{name}}
            </span>

            

            <!-- <template v-if="inventory !== null">
                <div class="flex flex-col items-center gap-1">
                    <div
                        style="
                            height: 5px,
                            border-radius: 2.5px,
                            background-color: rgba(20, 20, 255, 0.3),
                        "
                        class="relative w-32"
                    >
                        <div
                            class="absolute top-0 bottom-0 left-0 w-4/5 bg-bg-primary"
                            style=" border-radius: 2.5px "
                        />
                    </div>

                    <span style=" color: #8D8D8D " class="text-xs font-light font-lato">
                        {{inventory}} Left inventory
                    </span>
                </div>

                <button
                    type="button"
                    class="w-32 py-2 text-xs font-light tracking-wide text-center border rounded-md border-bg-primary text-bg-primary"
                >
                    Add to cart
                </button>
            </template> -->
    </div>



 
    <div v-else
        class="flex flex-col
            description && starCount items-center
         bg-white gap-4 pb-4 rounded-2xl"
        style=" box-shadow: 0px 3px 3px 0 rgba(0, 0, 0, 0.06) "
    >
        <router-link class="w-full" :to="{ path: '/product/' + productId}">
            <img
                :src="image"
                :alt="name"
                class="object-cover w-full cursor-pointer rounded-2xl"
                style=" height: 133px "
            />
        </router-link>

            <div v-if="description !== null && starCount!== null" class="flex flex-col items-center gap-1 font-poppins">
                <span class="text-sm font-semibold text-bg-primary">BDT {{salesPrice}}</span>
                <span style=" color: #8D8D8D " class="text-xs font-normal">
                    BDT {{regularPrice}}
                </span>
            </div>
            <span class="font-normal font-poppins two-line-ellipsis" style=" font-size: 18px; max-width: 124px ">
                {{name}}
            </span>

            <!-- <div v-if="description == null && starCount== null" class="flex px-4">
                <span class="text-sm font-semibold text-bg-primary">BDT {{salesPrice}}</span>
                <span
                    style=" color: #8D8D8D "
                    class="self-center flex-1 ml-2 text-xs font-normal"
                >
                    BDT {{regularPrice}}
                </span>
                <div class="flex items-center">
                        <span v-for="starCounts in startCount" :key="starCounts" style=" margin-right: 10px ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7.464"
                                height="6.786"
                                viewBox="0 0 7.464 6.786"
                            >
                                <path
                                    id="star"
                                    d="M153.331,696.736l-.911,1.754-2.038.282a.419.419,0,0,0-.247.724l1.475,1.365-.349,1.928a.442.442,0,0,0,.648.446l1.823-.91,1.824.91a.442.442,0,0,0,.647-.446l-.349-1.928,1.475-1.365a.419.419,0,0,0-.247-.724l-2.038-.282-.911-1.754A.458.458,0,0,0,153.331,696.736Z"
                                    transform="translate(-150 -696.5)"
                                />
                            </svg>
                        </span>
                </div>
            </div> -->

            <template v-if="inventory !== null">
                <div class="flex flex-col items-center gap-1">
                    <div
                                            style="
                                                height: 5px;
                                                border-radius: 2.5px;
                                                background-color: rgba(20, 20, 255, 0.3)
                                            "
                                            class="relative w-32"
                                        >
                                            <div
                                                class="absolute top-0 bottom-0 left-0 w-4/5 bg-bg-primary"
                                                style=" border-radius: 2.5px "
                                            />
                                        </div>

                    <span style=" color: #8D8D8D " class="text-xs font-light font-lato">
                        {{inventory}} Left stock
                    </span>
                </div>

                <button @click="try1"
                    type="button"
                    class="w-32 py-2 text-xs font-light tracking-wide text-center border rounded-md border-bg-primary text-bg-primary"
                >
                    Add to cart
                </button>
            </template>
    </div>
</template>

<script>
export default {
props:{
image: String,
    salesPrice: Number,
    regularPrice: Number,
    name: String,
    inventory: Number,
    description: String,
    starCount: Number,
    showEmAll:Boolean,
    productId:Number
},
}
</script>

<style scoped>
 .two-line-ellipsis {
           word-break: break-word;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 1; /* number of lines to show */
   -webkit-box-orient: vertical;
    }
</style>