<template>
  <div class="mb-16 px-p-w">
            <div class="text-2xl font-semibold tracking-wide font-poppins mb-7">
                Special Offers
            </div>

            <div
                class="md:grid grid-cols-6 gap-4"
            >
                    <Product
                    v-for="product in products" :key="product.id"
                        :name="product.name"
                        :regularPrice="product.regularPrice"
                        :salesPrice="product.salesPrice"
                        :image="product.image"
                    />
            </div>
            <pagination class="flex" v-model="page" :records="productLength" :per-page="5" @paginate="myCallback"/>
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
         page: 1,
         productLength:0,
        products : [
        // {
        //     name: 'test 1',
        //     regularPrice: 100,
        //     salesPrice: 50,
        //     image: 'https://picsum.photos/800/300/?random',
        // },
        {
            id: 1,
            name: 'test 1',
            regularPrice: 100,
            salesPrice: 50,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 2,
            name: 'test 2',
            regularPrice: 100,
            salesPrice: 50,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 3,
            name: 'test 3',
            regularPrice: 100,
            salesPrice: 50,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 4,
            name: 'test 4',
            regularPrice: 100,
            salesPrice: 50,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 5,
            name: 'test 5',
            regularPrice: 100,
            salesPrice: 50,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 6,
            name: 'test 6',
            regularPrice: 100,
            salesPrice: 50,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 7,
            name: 'test 7',
            regularPrice: 100,
            salesPrice: 50,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
    ]
    }
},
methods:{
    myCallback(value){
        console.log(value)
    }
},
 mounted() {
     this.productLength = this.products.length
    },
    created() {
    this.products = this.$store.state.products.data
  },
}
</script>

<style>

</style>