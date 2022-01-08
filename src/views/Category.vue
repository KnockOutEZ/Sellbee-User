<template>
  <div>
    <main class="mt-10">
      <div
        class="flex flex-col md:flex-row justify-between mx-10 mb-24 md:mx-p-w"
      >
        <div class="flex flex-col gap-12 w-full md:w-60">
          <div
            class="flex flex-col py-6 overflow-auto border gap-7 rounded-2xl"
            style="height: 242px; border-color: #c4c4c4"
          >
            <span class="px-5 text-sm font-semibold font-poppins">
              Show all categories
            </span>

            <div class="flex flex-col gap-3 px-7">
              <div v-for="category in categories" :key="category.name">
                <button
                  @click="subCat = !subCat"
                  type="button"
                  class="flex items-center justify-between w-full"
                >
                  <span class="font-semibold font-lato" style="font-size: 9px">
                    {{ category.name }}
                  </span>

                  <i
                    v-if="!subCat"
                    style="font-size: 12px"
                    class="align-text-bottom fas fa-angle-down"
                  ></i>
                  <i
                    v-if="subCat"
                    style="font-size: 12px"
                    class="align-text-bottom fas fa-angle-up"
                  ></i>
                  <!-- {openCategory && openCategoryIndex === index ? (
                                                <ExpandLess sx={{ font-size: 12 }} />
                                            ) : (
                                                <ExpandMore sx={{ font-size: 12 }} />
                                            )} -->
                </button>
                <div v-if="subCat">
                  <div class="flex flex-col gap-1 mt-2 ml-5">
                    <div
                      v-for="subCategory in category.subCategories"
                      :key="subCategory.name"
                      class="font-normal font-lato"
                      style="font-size: 9px"
                    >
                      {{ subCategory.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-7">
            <span class="text-base font-semibold tracking-wide font-poppins">
              Filters
            </span>

            <div class="flex flex-col gap-2">
              <span
                class="font-semibold tracking-wide font-lato"
                style="font-size: 10; color: #575757"
              >
                Price range
              </span>

              <!-- <RangeSlider /> -->
            </div>

            <div class="flex flex-col gap-4">
              <div class="example">
                <Slider
                :max = 1000
                  class=""
                  v-model="example2.value"
                  v-bind="example2"
                ></Slider>

                <button
                  id="dropdownButton"
                  @click="dropdown = !dropdown"
                  class="
                    mt-3
                    text-black
                    border
                    bg-white-700
                    hover:bg-white-800
                    focus:ring-white-300
                    font-medium
                    rounded-lg
                    text-sm
                    px-4
                    py-2.5
                    text-center
                    inline-flex
                    items-center
                    dark:bg-white-600
                    dark:hover:bg-white-700
                    dark:focus:ring-white-800
                  "
                  type="button"
                >
                  Dropdown button
                  <svg
                    class="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                <div
                  v-if="dropdown"
                  class="
                    z-10
                    w-44
                    text-base
                    list-none
                    bg-white
                    rounded
                    divide-y divide-gray-100
                    shadow
                    dark:bg-gray-700
                  "
                >
                  <ul class="py-1" aria-labelledby="dropdownButton">
                    <li>
                      <a
                        href="#"
                        class="
                          block
                          py-2
                          px-4
                          text-sm text-gray-700
                          hover:bg-gray-100
                          dark:hover:bg-gray-600
                          dark:text-gray-200
                          dark:hover:text-white
                        "
                        >Dashboard</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="
                          block
                          py-2
                          px-4
                          text-sm text-gray-700
                          hover:bg-gray-100
                          dark:hover:bg-gray-600
                          dark:text-gray-200
                          dark:hover:text-white
                        "
                        >Settings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="
                          block
                          py-2
                          px-4
                          text-sm text-gray-700
                          hover:bg-gray-100
                          dark:hover:bg-gray-600
                          dark:text-gray-200
                          dark:hover:text-white
                        "
                        >Earnings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="
                          block
                          py-2
                          px-4
                          text-sm text-gray-700
                          hover:bg-gray-100
                          dark:hover:bg-gray-600
                          dark:text-gray-200
                          dark:hover:text-white
                        "
                        >Sign out</a
                      >
                    </li>
                  </ul>
                </div>

                <button
                  id="dropdownButton"
                  @click="dropdown = !dropdown"
                  class="
                    mt-3
                    text-black
                    border
                    bg-white-700
                    hover:bg-white-800
                    focus:ring-white-300
                    font-medium
                    rounded-lg
                    text-sm
                    px-4
                    py-2.5
                    text-center
                    inline-flex
                    items-center
                    dark:bg-white-600
                    dark:hover:bg-white-700
                    dark:focus:ring-white-800
                  "
                  type="button"
                >
                  Dropdown button
                  <svg
                    class="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                <div
                  v-if="dropdown"
                  class="
                    z-10
                    w-44
                    text-base
                    list-none
                    bg-white
                    rounded
                    divide-y divide-gray-100
                    shadow
                    dark:bg-gray-700
                  "
                >
                  <ul class="py-1" aria-labelledby="dropdownButton">
                    <li>
                      <a
                        href="#"
                        class="
                          block
                          py-2
                          px-4
                          text-sm text-gray-700
                          hover:bg-gray-100
                          dark:hover:bg-gray-600
                          dark:text-gray-200
                          dark:hover:text-white
                        "
                        >Dashboard</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="
                          block
                          py-2
                          px-4
                          text-sm text-gray-700
                          hover:bg-gray-100
                          dark:hover:bg-gray-600
                          dark:text-gray-200
                          dark:hover:text-white
                        "
                        >Settings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="
                          block
                          py-2
                          px-4
                          text-sm text-gray-700
                          hover:bg-gray-100
                          dark:hover:bg-gray-600
                          dark:text-gray-200
                          dark:hover:text-white
                        "
                        >Earnings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="
                          block
                          py-2
                          px-4
                          text-sm text-gray-700
                          hover:bg-gray-100
                          dark:hover:bg-gray-600
                          dark:text-gray-200
                          dark:hover:text-white
                        "
                        >Sign out</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <!-- <Box>
                                    <FormControl fullWidth size="small">
                                        <InputLabel
                                            sx={{
                                                font-size: 9,
                                                height: '55%',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                            class="tracking-wide"
                                        >
                                            Choose Brand
                                        </InputLabel>
                                        <Select
                                            value={brand}
                                            label="Choose Brand"
                                            onChange={(e) => setBrand(e.target.value)}
                                        >
                                            <MenuItem value="easy">Easy</MenuItem>
                                            <MenuItem value="infinity">Infinity</MenuItem>
                                            <MenuItem value="cats-eye">Cats-Eye</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box> -->

              <!-- <Box>
                                    <FormControl fullWidth size="small">
                                        <InputLabel
                                            sx={{
                                                font-size: 9,
                                                height: '55%',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                            class="tracking-wide"
                                        >
                                            Choose Loaction
                                        </InputLabel>
                                        <Select
                                            value={location}
                                            label="Choose Loaction"
                                            onChange={(e) => setLocation(e.target.value)}
                                        >
                                            <MenuItem value="uttara">Uttara</MenuItem>
                                            <MenuItem value="gulshan">Gulshan</MenuItem>
                                            <MenuItem value="banani">Banani</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box> -->
            </div>

            <!-- <div>
              <div class="flex justify-between">
                <span
                  style="color: #575757; font-size: 11px"
                  class="font-semibold tracking-wide font-lato"
                >
                  Color
                </span>
                <button type="button" class="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10.499"
                    height="10"
                    viewBox="0 0 10.499 10"
                  >
                    <path
                      id="Vector"
                      d="M2346.5,697.25a5.006,5.006,0,1,1,5.25-5A5.135,5.135,0,0,1,2346.5,697.25Zm-2.447-5.479a.313.313,0,0,0-.228.1l-.456.479a.351.351,0,0,0,0,.479l2.1,2.2a.311.311,0,0,0,.455,0l3.71-3.9a.351.351,0,0,0,0-.479l-.456-.479a.312.312,0,0,0-.456,0l-3.025,3.176-1.412-1.482A.314.314,0,0,0,2344.053,691.771Z"
                      transform="translate(-2341.25 -687.25)"
                      fill="#c4c4c4"
                    />
                  </svg>

                  <span
                    class="font-semibold tracking-wide font-lato"
                    style="font-size: 8px; color: #575757"
                  >
                    Select All
                  </span>
                </button>
              </div> -->

              <!-- <div class="grid grid-cols-2 gap-2 pr-12 mt-6 mb-3">
                <span
                  v-for="(color, index) in colors"
                  :key="index"
                  style="height: 26.5px; font-size: 8; border-color: #a1e887"
                  class="
                    flex
                    items-center
                    justify-center
                    font-semibold
                    tracking-wide
                    border
                    rounded-md
                    cursor-pointer
                    font-lato
                    text-bg-primary
                  "
                >
                  {{ color }}
                </span>
              </div>

              <button
                type="button"
                class="font-bold tracking-wide font-lato text-bg-primary"
                style="font-size: 9px"
              >
                <span class="hover:underline">+ Show more</span>
              </button>
            </div> -->

            <div class="flex flex-col">
              <button
                @click="filterBtn"
                type="button"
                class="
                  flex
                  items-center
                  justify-center
                  font-bold
                  tracking-wide
                  text-white
                  uppercase
                  rounded-lg
                  bg-bg-primary
                  font-lato
                "
                style="font-size: 10px; height: 33px"
              >
                filter
              </button>
              <button
                type="button"
                class="
                  flex
                  items-end
                  self-center
                  justify-center
                  font-bold
                  tracking-wide
                  rounded-lg
                  font-lato
                  w-max
                "
                style="font-size: 10px; height: 33px"
              >
                <!-- <span class="hover:underline">Reset Filter</span> -->
              </button>
            </div>
          </div>
        </div>

        <div class="w-full overflow-hidden md:w-9/12">
          <ImageSlider :pageName="all - categories" />
          <div v-if="renderComponent">
            <div class="flex items-center justify-between mb-7">
              <span class="text-2xl font-semibold tracking-wide font-poppins">
                 Categories
              </span>
              <div class="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10.001"
                  height="9.5"
                  viewBox="0 0 10.001 9.5"
                >
                  <path
                    id="Vector"
                    d="M2865.031,423h-1.979a.491.491,0,0,1-.469-.508v-1.7a.491.491,0,0,1,.469-.509h1.979a.491.491,0,0,1,.469.509v1.7A.491.491,0,0,1,2865.031,423Zm-3.542,0h-1.978a.491.491,0,0,1-.469-.508v-1.7a.491.491,0,0,1,.469-.509h1.978a.491.491,0,0,1,.47.509v1.7A.491.491,0,0,1,2861.489,423Zm-3.541,0h-1.98a.491.491,0,0,1-.469-.508v-1.7a.491.491,0,0,1,.469-.509h1.98a.491.491,0,0,1,.468.509v1.7A.49.49,0,0,1,2857.948,423Zm7.083-3.393h-1.979a.491.491,0,0,1-.469-.509v-1.7a.491.491,0,0,1,.469-.509h1.979a.491.491,0,0,1,.469.509v1.7A.491.491,0,0,1,2865.031,419.607Zm-3.542,0h-1.978a.491.491,0,0,1-.469-.509v-1.7a.491.491,0,0,1,.469-.509h1.978a.491.491,0,0,1,.47.509v1.7A.491.491,0,0,1,2861.489,419.607Zm-3.541,0h-1.98a.491.491,0,0,1-.469-.509v-1.7a.491.491,0,0,1,.469-.509h1.98a.491.491,0,0,1,.468.509v1.7A.49.49,0,0,1,2857.948,419.607Zm7.083-3.393h-1.979a.491.491,0,0,1-.469-.509v-1.7a.491.491,0,0,1,.469-.509h1.979a.491.491,0,0,1,.469.509v1.7A.491.491,0,0,1,2865.031,416.214Zm-3.542,0h-1.978a.491.491,0,0,1-.469-.509v-1.7a.491.491,0,0,1,.469-.509h1.978a.491.491,0,0,1,.47.509v1.7A.491.491,0,0,1,2861.489,416.214Zm-3.541,0h-1.98a.491.491,0,0,1-.469-.509v-1.7a.491.491,0,0,1,.469-.509h1.98a.491.491,0,0,1,.468.509v1.7A.49.49,0,0,1,2857.948,416.214Z"
                    transform="translate(-2855.499 -413.5)"
                    fill="#493548"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9.499"
                  height="9"
                  viewBox="0 0 9.499 9"
                >
                  <path
                    id="Vector"
                    d="M2886.054,422.5h-5.244a.465.465,0,0,1-.446-.482v-1.607a.466.466,0,0,1,.446-.482h5.244a.465.465,0,0,1,.445.482v1.607A.465.465,0,0,1,2886.054,422.5Zm-6.729,0h-1.88a.465.465,0,0,1-.445-.482v-1.607a.465.465,0,0,1,.445-.482h1.88a.466.466,0,0,1,.446.482v1.607A.465.465,0,0,1,2879.325,422.5Zm6.729-3.214h-5.244a.466.466,0,0,1-.446-.482V417.2a.466.466,0,0,1,.446-.482h5.244a.465.465,0,0,1,.445.482V418.8A.465.465,0,0,1,2886.054,419.286Zm-6.729,0h-1.88a.465.465,0,0,1-.445-.482V417.2a.465.465,0,0,1,.445-.482h1.88a.466.466,0,0,1,.446.482V418.8A.466.466,0,0,1,2879.325,419.286Zm6.729-3.215h-5.244a.465.465,0,0,1-.446-.482v-1.607a.466.466,0,0,1,.446-.482h5.244a.465.465,0,0,1,.445.482v1.607A.465.465,0,0,1,2886.054,416.071Zm-6.729,0h-1.88a.465.465,0,0,1-.445-.482v-1.607a.465.465,0,0,1,.445-.482h1.88a.466.466,0,0,1,.446.482v1.607A.465.465,0,0,1,2879.325,416.071Z"
                    transform="translate(-2877 -413.5)"
                    fill="#d2d2d2"
                  />
                </svg>

                <span
                  class="mx-3 font-normal font-lato"
                  style="color: #a3a3a3; font-size: 8px"
                >
                  Show by
                </span>

                <div class="flex items-center gap-1 cursor-pointer">
                  <span class="font-semibold font-lato" style="font-size: 8px">
                    Popularity
                  </span>
                  <!-- <RiArrowDownSFill /> -->
                </div>
              </div>
            </div>

            <div class="md:grid grid-cols-4 gap-4 px-p-w">
              <Product
                v-for="product in products"
                :key="product.id"
                :name="product.name"
                :regularPrice="product.regularPrice"
                :salesPrice="product.salesPrice"
                :image="product.image"
                :productId = "product._id"
              />
            </div>

            <!-- <div class="flex items-center justify-between mt-7">
              <span
                class="font-normal font-lato"
                style="color: #a3a3a3; font-size: 8px"
              >
                Showing 9 of 120 results
              </span>

              <div class="flex gap-1">
                <span
                  class="
                    flex
                    items-center
                    justify-center
                    h-6
                    font-bold
                    text-white
                    cursor-pointer
                    bg-bg-primary
                    font-lato
                  "
                  style="font-size: 8px; border-radius: 6.5px; width: 29.5px"
                >
                  1
                </span>
                <span
                  class="
                    flex
                    items-center
                    justify-center
                    h-6
                    px-3
                    font-extrabold
                    cursor-pointer
                    text-bg-primary
                    font-lato
                  "
                  style="
                    font-size: 8px;
                    borderradius: 6.5px;
                    backgroundcolor: rgba(73, 53, 72, 0.12);
                    width: 29.5px;
                  "
                >
                  2
                </span>
                <span
                  class="
                    flex
                    items-center
                    justify-center
                    h-6
                    px-3
                    font-bold
                    cursor-pointer
                    text-bg-primary
                    font-lato
                  "
                  style="
                    font-size: 8px;
                    border-radius: 6.5px;
                    background-color: rgba(73, 53, 72, 0.12);
                    width: 29.5px;
                  "
                >
                  3
                </span>
                <span
                  class="
                    flex
                    items-center
                    justify-center
                    h-6
                    px-3
                    font-bold
                    cursor-pointer
                    text-bg-primary
                    font-lato
                  "
                  style="
                    font-size: 8px;
                    border-radius: 6.5px;
                    background-color: rgba(73, 53, 72, 0.12);
                    width: 29.5px;
                  "
                >
                  ...
                </span>
              </div>
            </div> -->
          </div>
        </div>
      </div>

      <SeventhPart />
    </main>
  </div>
</template>

<script>
import axios from "axios";
import SeventhPart from "../components/SeventhPart.vue";
import ImageSlider from "../components/ImageSlider.vue";
import Slider from "@vueform/slider";
import Product from "../components/Product.vue";

export default {
  components: {
    SeventhPart,
    ImageSlider,
    Slider,
    Product,
  },
  created() {
    this.products = this.$store.state.products.data
  },
  methods: {
    forceRerender() {
      // Removing my-component from the DOM
      this.renderComponent = false;

      this.$nextTick(() => {
        // Adding the component back in
        this.renderComponent = true;
      });
    },
    filterBtn() {
      console.log(this.example2.value);
      axios
        .get(
          process.env.VUE_APP_API_URL +
            "products/customer?priceStart=" +
            this.example2.value[0] +
            "&priceEnd=" +
            this.example2.value[1]
        )
        .then((response) => {
          console.log(response);
          this.products = response.data.data;
          this.forceRerender;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
  },
  data() {
    return {
      renderComponent: true,
      products: [],
      dropdown: false,
      example2: {
        value: [0, 1000],
      },
      subCat: false,
      categories: [
        {
          name: "Laptop & Computer",
          stock: 45,
          subCategories: [
            {
              name: "Hardware",
              stock: 25,
            },
            {
              name: "Laptop",
              stock: 25,
            },
            {
              name: "Memory",
              stock: 25,
            },
            {
              name: "Storage",
              stock: 25,
            },
            {
              name: "Software",
              stock: 25,
            },
          ],
        },
      ],
      colors: ["white", "black", "blue", "red"],
    };
  },
};
</script>
<style src="@vueform/slider/themes/default.css"></style>

<style scoped>
</style>