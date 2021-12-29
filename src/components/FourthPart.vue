<template>
  <div class="mb-16 px-p-w">
            <div class="text-2xl font-semibold tracking-wide font-poppins mb-7">
                Special Offers
            </div>

            <div v-if="renderComponent"
                class="md:grid grid-cols-6 gap-4"
            >
                    <Product 
                    v-for="product in products" :key="product.id"
                        :name="product.name"
                        :regularPrice="product.regularPrice"
                        :salesPrice="product.salesPrice"
                        :image="product.image"
                        :productId = "product._id"
                    />
            </div>
            <pagination class="flex" v-model="page" :records="productLength" :per-page="6" @paginate="myCallback"/>
        </div>
</template>

<script>
import Product from "./Product.vue"
import axios from 'axios'

export default {
    components:{
        Product
    },
data(){
    return{
        renderComponent: true,
         page: 1,
         productLength:0,
        products : [
        // {
        //     name: 'test 1',
        //     regularPrice: 100,
        //     salesPrice: 50,
        //     image: 'https://picsum.photos/800/300/?random',
        // },
    ]
    }
},
methods:{
    forceRerender() {
        // Removing my-component from the DOM
        this.renderComponent = false;

        this.$nextTick(() => {
          // Adding the component back in
          this.renderComponent = true;
        });
      },
    myCallback(value){
        axios.get(process.env.VUE_APP_API_URL + "products/customer?page=" + value + "&size=6").then((response) => {
        console.log(response);
        this.products = response.data.data
        this.forceRerender
      }).catch((error) => {
        // handle error
        console.log(error);
      });
    },
},
    created() {
        axios.get(process.env.VUE_APP_API_URL + "products/customer?page=1&size=6").then((response) => {
        this.products = response.data.data
        this.productLength = this.$store.state.products.data.length
      }).catch((error) => {
        // handle error
        console.log(error);
      });
  },
}
</script>

<style>
.VuePagination__pagination{
    display: flex;
    text-align: center;
    display: inline-block;
}

.VuePagination__pagination > li {
  color: white;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  background-color: #4B4E6D;
  margin: 3px;
  border-radius: 5px;
}
</style>