<template>
    <div
            class="flex flex-wrap md:flex-nowrap justify-between py-10 mb-16 px-p-w"
            style=" background-image: linear-gradient(244deg, #4b4e6d 75%, #4b4e6d 0%) "
        >
            <span
                class="mt-8 text-lg font-bold tracking-wide text-white font-poppins"
                style=" max-width: 120px "
            >
                Top 10 Selected Products On the Week
            </span>

            <div class="w-full hidden md:block" style=" max-width: 70% ">
                <carousel class="mt-10 mb-10" :autoplay="1000" :wrapAround="true" :items-to-show="4">
                        <slide v-for="product in products" :key="product.id">
                            <div class="w-48">
                                <div
        class="flex flex-col
            description starCount items-center
        bg-white gap-4 pb-4 rounded-2xl"
        style=" box-shadow: '0px 3px 3px 0 rgba(0, 0, 0, 0.06)' "
    >
        <router-link :to="{ path: '/product/' + product.id}">
            <img
                :src="product.image"
                :alt="product.name"
                class="object-cover w-full cursor-pointer rounded-2xl"
                style=" height: 133px "
            />
        </router-link>

        <!-- {description && starCount ? null : ( -->
            <div class="flex flex-col items-center gap-1 font-poppins">
                <span class="text-sm font-semibold text-bg-primary">BDT {{product.newPrice}}</span>
                <span style=" color: #8D8D8D " class="text-xs font-normal">
                    BDT {{product.oldPrice}}
                </span>
            </div>
        <!-- )} -->

        <!-- {description && starCount ? ( -->
            <div class="flex flex-col gap-1 px-4">
                <span class="font-semibold font-poppins">{{product.name}}</span>
                <span class="font-medium font-poppins" style=" font-size: 9px ">
                    {{product.description}}
                </span>
            </div>
        <!-- ) : ( -->
            <span class="font-semibold font-poppins" style=" font-size: 13px; max-width: 124px ">
                {{product.name}}
            </span>
        <!-- )} -->

            <div class="flex px-4">
                <span class="text-sm font-semibold text-bg-primary">BDT {{product.newPrice}}</span>
                <span
                    style=" color: #8D8D8D "
                    class="self-center flex-1 ml-2 text-xs font-normal"
                >
                    BDT {{product.oldPrice}}
                </span>
                <div class="flex items-center">
                    <!-- {[...Array(starCount)].map((c, i) => ( -->
                        <!-- // eslint-disable-next-line react/no-array-index-key -->
                        <!-- :key="product.id" -->
                        <span  style=" margin-right: 10px ">
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
                    <!-- ))} -->
                </div>
            </div>
        <!-- ) : null} -->

        <!-- {stock ? (
            <> -->
                <div class="flex flex-col items-center gap-1">
                    <div
                        style="
                            height: 5px;
                            border-radius: 2.5px;
                            background-color: rgba(20, 20, 255, 0.3);
                        "
                        class="relative w-32"
                    >
                        <div
                            class="absolute top-0 bottom-0 left-0 w-4/5 bg-bg-primary"
                            style=" border-radius: 2.5px "
                        />
                    </div>

                    <span style= "color: #8D8D8D" class="text-xs font-light font-lato">
                         Left Stock
                    </span>
                </div>

                <button
                    type="button"
                    class="w-32 py-2 text-xs font-light tracking-wide text-center border rounded-md border-bg-primary text-bg-primary"
                >
                    Add to cart
                </button>
            <!-- </> -->
        <!-- ) : null} -->
    </div>
                                <!-- <Product
                                    name={product.name}
                                    oldPrice={product.oldPrice}
                                    newPrice={product.newPrice}
                                    image={product.image}
                                    description={product.description}
                                    starCount={product.starCount}
                                /> -->
                            </div>
                        </slide>
                </carousel>
            </div>












            <div class="w-full md:hidden" style=" max-width: 100% ">
                <carousel class="mt-10 mb-10" :autoplay="1000" :wrapAround="true" :items-to-show="1">
                        <slide v-for="product in products" :key="product.id">
                            <div class="w-48">
                                <div
        class="flex flex-col
            description starCount items-center
        bg-white gap-4 pb-4 rounded-2xl"
        style=" box-shadow: '0px 3px 3px 0 rgba(0, 0, 0, 0.06)' "
    >
        <router-link :to="{ path: '/product/' + product.id}">
            <img
                :src="product.image"
                :alt="product.name"
                class="object-cover w-full cursor-pointer rounded-2xl"
                style=" height: 133px "
            />
        </router-link>

        <!-- {description && starCount ? null : ( -->
            <div class="flex flex-col items-center gap-1 font-poppins">
                <span class="text-sm font-semibold text-bg-primary">BDT {{product.newPrice}}</span>
                <span style=" color: #8D8D8D " class="text-xs font-normal">
                    BDT {{product.oldPrice}}
                </span>
            </div>
        <!-- )} -->

        <!-- {description && starCount ? ( -->
            <div class="flex flex-col gap-1 px-4">
                <span class="font-semibold font-poppins">{{product.name}}</span>
                <span class="font-medium font-poppins" style=" font-size: 9px ">
                    {{product.description}}
                </span>
            </div>
        <!-- ) : ( -->
            <span class="font-semibold font-poppins" style=" font-size: 13px; max-width: 124px ">
                {{product.name}}
            </span>
        <!-- )} -->

            <div class="flex px-4">
                <span class="text-sm font-semibold text-bg-primary">BDT {{product.newPrice}}</span>
                <span
                    style=" color: #8D8D8D "
                    class="self-center flex-1 ml-2 text-xs font-normal"
                >
                    BDT {{product.oldPrice}}
                </span>
                <div class="flex items-center">
                    <!-- {[...Array(starCount)].map((c, i) => ( -->
                        <!-- // eslint-disable-next-line react/no-array-index-key -->
                        <!-- :key="product.id" -->
                        <span  style=" margin-right: 10px ">
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
                    <!-- ))} -->
                </div>
            </div>
        <!-- ) : null} -->

        <!-- {stock ? (
            <> -->
                <div class="flex flex-col items-center gap-1">
                    <div
                        style="
                            height: 5px;
                            border-radius: 2.5px;
                            background-color: rgba(20, 20, 255, 0.3);
                        "
                        class="relative w-32"
                    >
                        <div
                            class="absolute top-0 bottom-0 left-0 w-4/5 bg-bg-primary"
                            style=" border-radius: 2.5px "
                        />
                    </div>

                    <span style= "color: #8D8D8D" class="text-xs font-light font-lato">
                         Left Stock
                    </span>
                </div>

                <button
                    type="button"
                    class="w-32 py-2 text-xs font-light tracking-wide text-center border rounded-md border-bg-primary text-bg-primary"
                >
                    Add to cart
                </button>
            <!-- </> -->
        <!-- ) : null} -->
    </div>
                                <!-- <Product
                                    name={product.name}
                                    oldPrice={product.oldPrice}
                                    newPrice={product.newPrice}
                                    image={product.image}
                                    description={product.description}
                                    starCount={product.starCount}
                                /> -->
                            </div>
                        </slide>
                </carousel>
            </div>
        </div>
  </template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

export default {
    components: {
    Carousel,
    Slide,
  },
data(){
    return{
        products : [
        {
            id: 1,
            name: 'test 1',
            oldPrice: 100,
            newPrice: 50,
            description: '4.3m solid',
            starCount: 4,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 2,
            name: 'test 2',
            oldPrice: 100,
            newPrice: 50,
            description: '4.3m solid',
            starCount: 4,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 3,
            name: 'test 3',
            oldPrice: 100,
            newPrice: 50,
            description: '4.3m solid',
            starCount: 4,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 4,
            name: 'test 4',
            oldPrice: 100,
            newPrice: 50,
            description: '4.3m solid',
            starCount: 4,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 5,
            name: 'test 5',
            oldPrice: 100,
            newPrice: 50,
            description: '4.3m solid',
            starCount: 4,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 6,
            name: 'test 6',
            oldPrice: 100,
            newPrice: 50,
            description: '4.3m solid',
            starCount: 4,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 7,
            name: 'test 7',
            oldPrice: 100,
            newPrice: 50,
            description: '4.3m solid',
            starCount: 4,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
    ]
    }
}
}
</script>

<style>

</style>