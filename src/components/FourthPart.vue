<template>
  <div class="mb-16 px-p-w">
            <div class="text-2xl font-semibold tracking-wide font-poppins mb-7">
                Special Offers
            </div>

            <div
                class="grid grid-cols-6 gap-4"
            >
                    <Product
                    v-for="product in products" :key="product.id"
                        :name="product.name"
                        :oldPrice="product.oldPrice"
                        :newPrice="product.newPrice"
                        :image="product.image"
                    />
            </div>
        </div>
</template>

<script>
import Product from "./Product.vue"

export default {
    components:{
        Product
    },
data(){
    return{
        products : [
        // {
        //     name: 'test 1',
        //     oldPrice: 100,
        //     newPrice: 50,
        //     image: 'https://picsum.photos/800/300/?random',
        // },
        {
            id: 1,
            name: 'test 1',
            oldPrice: 100,
            newPrice: 50,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 2,
            name: 'test 2',
            oldPrice: 100,
            newPrice: 50,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 3,
            name: 'test 3',
            oldPrice: 100,
            newPrice: 50,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 4,
            name: 'test 4',
            oldPrice: 100,
            newPrice: 50,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 5,
            name: 'test 5',
            oldPrice: 100,
            newPrice: 50,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 6,
            name: 'test 6',
            oldPrice: 100,
            newPrice: 50,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 7,
            name: 'test 7',
            oldPrice: 100,
            newPrice: 50,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
    ]
    }
}
}
</script>

<style>

</style>