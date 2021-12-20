<template>
    <div
            style="background-Color: #a1e887"
            class="flex gap-24 px-16 py-12 rounded-2xl mx-p-w mb-7"
        >
            <div class="flex flex-col flex-2 gap-3 text-white">
                <span class="text-2xl font-semibold tracking-wide font-poppins">
                    Flash Sale
                </span>

                <span class="font-lato" style=" font-size: 9px ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta architecto porro
                    quia, eius recusandae aut.
                </span>

                <span class="mt-8 text-xl font-bold tracking-widest font-lato">
                    05 : 42 : 19 : 54
                </span>
            </div>

            <div class="flex flex-col justify-between w-full" style=" max-width: 70% ">
                <carousel
                    class="w-full"
                    :autoplay="1000" :wrapAround="true" :items-to-show="3"
                >
                        <slide v-for="slide in slides" :key="slide.id">
                            <div class="flex w-64 gap-3 py-2 pl-2 bg-white rounded-xl font-poppins">
                                <router-link :to="{ path: '/product/' + slide.id}">
                                    <img
                                        :src="slide.image"
                                        :alt="slide.name"
                                        class="object-cover w-16 h-20 cursor-pointer rounded-xl"
                                    />
                                </router-link>

                                <div class="flex flex-col justify-between pb-2">
                                    <span
                                        class="font-medium tracking-wide"
                                        style=" font-size: 10px "
                                    >
                                        {{slide.name}}
                                    </span>

                                    <div class="flex flex-col">
                                        <div class="flex items-center justify-between mb-2">
                                            <span class="text-xs font-semibold tracking-wide">
                                                BDT {{slide.price}}
                                            </span>

                                            <span
                                                style=" color: #A7A7A7; font-size: 10px "
                                                class="font-normal"
                                            >
                                                {{slide.count}} left
                                            </span>
                                        </div>
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
                                    </div>
                                </div>
                            </div>
                        </slide>
                </carousel>

                <span
                    class="self-end font-bold text-white cursor-pointer font-poppins"
                    style=" font-size: 8px "
                >
                    View more
                </span>
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
    // Pagination,
    // Navigation,
  },
data(){
    return{
        slides : [
        // { name: 'test 1', price: 100, count: 100, image: 'https://picsum.photos/800/300/?random' },
        {
            id: 1,
            name: 'test 1',
            price: 100,
            count: 100,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 2,
            name: 'test 2',
            price: 100,
            count: 100,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 3,
            name: 'test 3',
            price: 100,
            count: 100,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 4,
            name: 'test 4',
            price: 100,
            count: 100,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 5,
            name: 'test 5',
            price: 100,
            count: 100,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 6,
            name: 'test 6',
            price: 100,
            count: 100,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 7,
            name: 'test 7',
            price: 100,
            count: 100,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
    ]
    }
}
}
</script>

<style>

</style>