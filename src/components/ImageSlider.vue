<template>
  <div
        >

              <carousel class="mb-10" :autoplay="1000" :wrapAround="true" :items-to-show="1">
    <slide v-for="image in images" :key="image">
      <img class="md:mx-10" style="
                                height: 250px;
                                width:100%;
                                border-radius: 20px;
                            " :src="image" alt="">
    </slide>

    <!-- <template #addons>
      <navigation />
      <pagination />
    </template> -->
  </carousel>
        </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
// , Pagination, Navigation
import { Carousel, Slide } from 'vue3-carousel';
export default {
    components:{
        Carousel,
        Slide
    },
    props:{
        pageName: String
    },
data(){
    return{
        images : [
        'https://i.pinimg.com/564x/45/e5/9d/45e59d5690b02c68204015df3392cb72.jpg',
        'https://i.pinimg.com/564x/58/03/a7/5803a71f85f2017858689047f807964a.jpg',
        'https://i.pinimg.com/564x/ee/51/81/ee518105f86d7bc11d37ceb7d25ee971.jpg',
        'https://i.pinimg.com/564x/40/de/1e/40de1ec3b6eb9bbcdbeed8585ab6b091.jpg',
        'https://i.pinimg.com/564x/ad/29/ab/ad29ab336eeb93e022b6f9c79069c04a.jpg',
    ]
    }
}
}
</script>

<style>

</style>