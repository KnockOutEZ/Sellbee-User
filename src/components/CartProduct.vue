<template>

  <div
    class="flex items-center py-4 pl-4 pr-8 rounded-md"
    style="box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.06)"
  >
    <input type="checkbox" class="cursor-pointer" />

    <span class="w-20 h-20 mx-5">
      <img
        :src="productImage"
        alt="product"
        class="object-cover w-full h-full rounded-md"
      />
    </span>

    <div class="flex flex-col flex-1 h-full">
      <div class="flex flex-col md:flex-row justify-between flex-1">
        <span class="font-semibold font-poppins" style="font-size: 10px">
          {{ProductName}}
        </span>
        <span
          class="font-normal font-poppins"
          style="font-size: 9px; color: #4d4d4d"
        >
          {{ProductModel}}
        </span>
      </div>
      <div>
        <span class="text-xs font-semibold font-poppins text-bg-primary"
          >{{ProductPrice}}</span
        >
        <div
          class="
            flex flex-col
            md:flex-row
            items-start
            md:items-end
            justify-between
          "
        >
          <span
            style="color: #aeaeae; font-size: 8px"
            class="font-semibold tracking-wide font-poppins"
          >
            +Add note
          </span>
          <div
            class="flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-8"
          >
            <div
              class="flex items-center gap-10 px-3 border rounded-md h-9"
              style="border-color: #d8d8d8"
            >
              <button class="cursor-pointer" @click="quantityProductDec">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9.5"
                  height="2"
                  viewBox="0 0 9.5 2"
                >
                  <rect
                    id="_-"
                    data-name="-"
                    width="9.5"
                    height="2"
                    fill="#d2d2d2"
                  />
                </svg>
              </button>
              <span
                class="font-bold font-lato"
                style="font-size: 10px; color: #ff7020"
              >
                {{quantityProduct}}
              </span>
              <button class="cursor-pointer" @click="quantityProductInc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8.784"
                  height="9.045"
                  viewBox="0 0 8.784 9.045"
                >
                  <path
                    id="_"
                    data-name="+"
                    d="M3788.783,558.443v3.69h3.5v1.647h-3.5v3.708h-1.8V563.78H3783.5v-1.647h3.483v-3.69Z"
                    transform="translate(-3783.5 -558.443)"
                    fill="#d2d2d2"
                  />
                </svg>
              </button>
            </div>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="28"
                viewBox="0 0 30 28"
              >
                <g id="delete" transform="translate(-4789 -286)">
                  <g
                    id="background"
                    transform="translate(4789 286)"
                    fill="none"
                    stroke="#d8d8d8"
                    strokeWidth="0.5"
                  >
                    <rect width="30" height="28" rx="6" stroke="none" />
                    <rect
                      x="0.25"
                      y="0.25"
                      width="29.5"
                      height="27.5"
                      rx="5.75"
                      fill="none"
                    />
                  </g>
                  <path
                    id="Vector"
                    d="M4806.469,305.5h-4.938a.928.928,0,0,1-.66-.28,1.056,1.056,0,0,1-.3-.687l-.426-7.283h7.714l-.426,7.283a1.058,1.058,0,0,1-.3.687A.926.926,0,0,1,4806.469,305.5Zm1.708-8.937h-8.357a.311.311,0,0,1-.227-.1.35.35,0,0,1-.094-.243v-.688a.355.355,0,0,1,.094-.243.312.312,0,0,1,.227-.1h2.411l.188-.4a.5.5,0,0,1,.177-.21.466.466,0,0,1,.253-.076h2.3a.454.454,0,0,1,.254.077.5.5,0,0,1,.178.209l.189.4h2.41a.314.314,0,0,1,.228.1.355.355,0,0,1,.094.243v.688a.349.349,0,0,1-.094.243A.307.307,0,0,1,4808.178,296.562Z"
                    fill="#a4a4a4"
                  />
                </g>
              </svg>
            </span>

            <span>
              <svg
                v-if="selected"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="28"
                viewBox="0 0 30 28"
              >
                <g id="wishlist" transform="translate(-4828 -286)">
                  <rect
                    id="background"
                    width="30"
                    height="28"
                    rx="6"
                    transform="translate(4828 286)"
                    fill="#493548"
                  />
                  <path
                    id="Vector"
                    d="M4847.432,296.15a2.965,2.965,0,0,0-4.009.288l-.423.43-.423-.43a2.965,2.965,0,0,0-4.009-.288,3.018,3.018,0,0,0-.213,4.409l4.157,4.237a.68.68,0,0,0,.974,0l4.157-4.237a3.016,3.016,0,0,0-.21-4.409Z"
                    fill="#fff"
                  />
                </g>
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="28"
                viewBox="0 0 30 28"
              >
                <g id="wishlist" transform="translate(-4828 -391)">
                  <g
                    id="background"
                    transform="translate(4828 391)"
                    fill="none"
                    stroke="#d8d8d8"
                    strokeWidth="0.5"
                  >
                    <rect width="30" height="28" rx="6" stroke="none" />
                    <rect
                      x="0.25"
                      y="0.25"
                      width="29.5"
                      height="27.5"
                      rx="5.75"
                      fill="none"
                    />
                  </g>
                  <path
                    id="Vector"
                    d="M4847.432,401.149a2.966,2.966,0,0,0-4.009.288l-.423.43-.423-.43a2.966,2.966,0,0,0-4.009-.288,3.018,3.018,0,0,0-.213,4.409l4.157,4.237a.68.68,0,0,0,.974,0l4.157-4.237a3.016,3.016,0,0,0-.21-4.409Z"
                    fill="#a4a4a4"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    selected: Boolean,
    cart:Object,
            index:Number,
  },
      data(){
        return{
    productImage: "",
    quantityProduct:"",
    ProductPrice:"",
    ProductModel:"",
    ProductName:"",
        }
    },

      mounted(){
        console.log(this.cart);
      axios
      //  + this.cart.products[this.index].productId
        .get(
          process.env.VUE_APP_API_URL + "products/" + this.cart[this.index].productId
        )
        .then((response) => {
          let daResponse = response.data.data;
         console.log(response)
          this.productImage = daResponse.image;
          this.quantityProduct = this.cart[this.index].quantity;
          this.ProductPrice =  (daResponse.salesPrice) ? daResponse.salesPrice :daResponse.regularPrice;
          this.ProductModel = daResponse.image;
          this.ProductName = daResponse.image;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
      },
      methods:{
        quantityProductDec(){
          this.quantityProduct--
        this.$store.state.cartProducts[this.index].quantity = this.quantityProduct;
        },
        quantityProductInc(){
          this.quantityProduct++
        this.$store.state.cartProducts[this.index].quantity = this.quantityProduct;
        }
      }

    // mounted(){
      // console.log(this.cart);
      // axios
      // //  + this.cart.products[this.index].productId
      //   .get(
      //     process.env.VUE_APP_API_URL + "products/" + this.cart.productId
      //   )
      //   .then((response) => {
      //     let daResponse = response.data.data;
      //    console.log(response)
      //     this.productImage = daResponse.image;
      //     this.quantityProduct = this.cart.products[0].quantity;
      //     this.ProductPrice =  (daResponse.salesPrice) ? daResponse.salesPrice :daResponse.regularPrice;
      //     this.ProductModel = daResponse.image;
      //     this.ProductName = daResponse.image;
      //   })
      //   .catch((error) => {
      //     // handle error
      //     console.log(error);
      //   });
    // }
};
</script>

<style>
</style>