<template>
  <div class="mb-16 px-p-w">
            <div class="flex gap-2 mb-7">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.5"
                    height="15.5"
                    viewBox="0 0 13.5 15.5"
                >
                    <path
                        id="Vector"
                        d="M81.75,2073.5a6.873,6.873,0,0,1-6.75-6.975c0-2.206,2.129-5.791,5.063-8.525a23.6,23.6,0,0,1,2.993,3.365,18.056,18.056,0,0,1,1.695-1.815c2.147,2,3.749,5.333,3.749,6.975A6.873,6.873,0,0,1,81.75,2073.5Zm-1.664-10.656h0c-1.547,1.862-2.193,2.823-2.193,3.958a3.7,3.7,0,0,0,3.944,3.792,4.029,4.029,0,0,0,2.327-.732,3.619,3.619,0,0,0,1.007-4.644c-.1-.191-.213-.395-.339-.6l-1.767,2.025c-.02-.025-2.765-3.548-2.979-3.794Z"
                        transform="translate(-75 -2058)"
                        fill="#493548"
                    />
                </svg>
                <span class="text-2xl font-semibold tracking-wide font-poppins">On Sale</span>
            </div>

            <div class="md:grid grid-cols-6 gap-4"
                style="
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, 160px)',
                    gridRowGap: 40,
                    gridColumnGap: 32,
                "
            >
                    <Product v-for="product in products"
                        :key="product.id"
                        :name="product.name"
                        :regularPrice="product.regularPrice"
                        :salesPrice="product.salesPrice"
                        :image="product.image"
                        :inventory="product.inventory"
                        :showEmAll = "true"
                        :productId = "product._id"
                    />
            </div>
        </div>
</template>

<script>
import Product from "../components/Product.vue"

export default {
components:{
    Product
},

data(){
    return{
        products : [
        // {
        //     name: 'test 1',
        //     regularPrice: 100,
        //     salesPrice: 50,
        //     inventory: 100,
        //     image: 'https://picsum.photos/800/300/?random',
        // },
        {
            id: 1,
            name: 'test 1',
            regularPrice: 100,
            salesPrice: 50,
            inventory: 100,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 2,
            name: 'test 2',
            regularPrice: 100,
            salesPrice: 50,
            inventory: 100,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 3,
            name: 'test 3',
            regularPrice: 100,
            salesPrice: 50,
            inventory: 100,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 4,
            name: 'test 4',
            regularPrice: 100,
            salesPrice: 50,
            inventory: 100,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 5,
            name: 'test 5',
            regularPrice: 100,
            salesPrice: 50,
            inventory: 900,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 6,
            name: 'test 6',
            regularPrice: 100,
            salesPrice: 50,
            inventory: 100,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 7,
            name: 'test 7',
            regularPrice: 100,
            salesPrice: 50,
            inventory: 100,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 8,
            name: 'test 8',
            regularPrice: 100,
            salesPrice: 50,
            inventory: 100,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 9,
            name: 'test 9',
            regularPrice: 100,
            salesPrice: 50,
            inventory: 100,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
    ]
    }
},
    created() {
    this.products = this.$store.state.products.data
  },
}
</script>

<style>

</style>