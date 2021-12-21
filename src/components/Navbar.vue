<template>
  <div class="font-lato" id="nav">
    <section class="BigScreen hidden lg:block">
        <div
        class="flex gap-5 text-white px-p-w bg-bg-primary"
        style=" padding-top: 7.35px; padding-bottom: 7.35px "
    >
        <div class="flex items-center gap-3">
            <i class="fas fa-phone"></i>
            <span class="text-xs">+8801720636876</span>
        </div>

        <div class="flex items-center flex-1 gap-3">
            <i class="fas fa-phone"></i>
            <span class="text-xs">support@sellbee.com</span>
        </div>

        <div class="flex items-center gap-3 pr-5 border-r" style=" border-color: #FFC19E ">
            <i class="fas fa-phone"></i>
            <router-link to="/trackorder">
                <span class="text-xs  cursor-pointer">Track Your Order</span>
            </router-link>
        </div>

        <div class="flex items-center gap-3">
            <span class="text-xs">BDT - Taka</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9.096"
                height="6.548"
                viewBox="0 0 7.096 3.548"
            >
                <path
                    id="Rectangle_2"
                    data-name="Rectangle 2"
                    d="M868,12.1h7.1l-3.548,3.548Z"
                    transform="translate(-868 -12.096)"
                    fill="#fff"
                />
            </svg>
        </div>

        <div class="flex items-center gap-3">
            <span class="text-xs">EN</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9.096"
                height="6.548"
                viewBox="0 0 7.096 3.548"
            >
                <path
                    id="Rectangle_2"
                    data-name="Rectangle 2"
                    d="M868,12.1h7.1l-3.548,3.548Z"
                    transform="translate(-868 -12.096)"
                    fill="#fff"
                />
            </svg>
        </div>
    </div>

    <div class="flex items-center justify-between px-10 py-5 space-x-9">
            <div class="cursor-pointer">
                <router-link to="/">
                    <img src="../../src/assets/logo.svg" alt="logo" />
                </router-link>
            </div>

            <div class="flex-1 px-8">
                <div class="relative">
                    <input
                        type="text"
                        class="w-full rounded-md outline-none placeholder-header-input-placeholder"
                        style="
                            font-size: 9px;
                            height: 35;
                            padding: 12px 15px;
                            background-color: #F1F1F1;
                        "
                        placeholder="Search for product, categories, posts..."
                    />
                    <i
                        style=" color: #80B192 "
                        class="fas fa-search absolute text-xs transform -translate-y-1/2 top-1/2 right-5"
                    ></i>
                </div>
            </div>

            <i class="fas fa-phone"></i>

            <router-link to="/">
            <i class="fas fa-phone"></i>
            </router-link>

            <div
                class="flex items-center px-6 space-x-3 text-white rounded-md cursor-pointer"
                style="
                    background-image: linear-gradient(#6A8D92, #4B4E6D);
                    height: 35px;
                "
            >
            <i class="fas fa-phone"></i>
                <span style=" fontSize: 9 ">MY ACCOUNT</span>
            </div>
        </div>

        <div
            style="
                padding-bottom: 10px;
                padding-top: 10px;
                font-size: 10px;
                box-shadow: 0 10px 12px rgba(0,0,0,0.24);
            "
            class="flex justify-between px-p-w"
        >
                <span v-for="category in categories" :key='category.title'
                    
                    class="font-normal tracking-wider cursor-pointer text-bg-primary"
                >
                    <router-link :to="'/categories/' + category.title">{{category.title}}</router-link>
                </span>
        </div>
    </section>




    
    <section class="SmallScreen bg-white shadow-lg lg:hidden">
        <section>
            <div @click="firstSection = !firstSection" class="flex flex-col gap-5 text-white px-5 bg-bg-primary"
        style=" padding-top: 7.35px; padding-bottom: 7.35px ">
        <div class="flex ml-auto gap-3">
            <button class="text-xs">BDT - Taka</button>
            <svg class="my-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="9.096"
                height="6.548"
                viewBox="0 0 7.096 3.548"
            >
                <path
                    id="Rectangle_2"
                    data-name="Rectangle 2"
                    d="M868,12.1h7.1l-3.548,3.548Z"
                    transform="translate(-868 -12.096)"
                    fill="#fff"
                />
            </svg>
        </div>
    </div>

    <div v-if="firstSection" class="firstSection">
        <div
    class="flex flex-col gap-5 text-white px-5 bg-bg-primary"
    style=" padding-top: 7.35px; padding-bottom: 7.35px "
>
    <div class="flex ml-auto gap-3">
        <span class="text-xs">+8801720636876</span>
        <i class="fas fa-phone"></i>
    </div>

    <div class="flex ml-auto flex-1 gap-3">
        <span class="text-xs">support@sellbee.com</span>
        <i class="fas fa-phone"></i>
    </div>

    <div class="flex ml-auto gap-3">
        <router-link to="/trackorder">
            <span class="text-xs  cursor-pointer">Track Your Order</span>
        </router-link>
        <i class="fas fa-phone"></i>
    </div>

    <div class="flex ml-auto gap-3">
        <span class="text-xs">BDT - Taka</span>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.096"
            height="6.548"
            viewBox="0 0 7.096 3.548"
        >
            <path
                id="Rectangle_2"
                data-name="Rectangle 2"
                d="M868,12.1h7.1l-3.548,3.548Z"
                transform="translate(-868 -12.096)"
                fill="#fff"
            />
        </svg>
    </div>

    <div class="flex ml-auto gap-3">
        <span class="text-xs">EN</span>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.096"
            height="6.548"
            viewBox="0 0 7.096 3.548"
        >
            <path
                id="Rectangle_2"
                data-name="Rectangle 2"
                d="M868,12.1h7.1l-3.548,3.548Z"
                transform="translate(-868 -12.096)"
                fill="#fff"
            />
        </svg>
    </div>
</div>
    </div>
        </section>



        <section>
            <div class="flex items-center justify-between px-5 py-5 space-x-9">
            <div class="cursor-pointer">
                <router-link to="/">
                    <img src="../../src/assets/logo.svg" alt="logo" />
                </router-link>
            </div>

            <div class="flex items-center gap-2">
                <div
                    class="flex items-center px-6 space-x-3 text-white rounded-md cursor-pointer"
                    style="
                        background-image: linear-gradient(#6A8D92, #4B4E6D);
                        height: 35px;
                    "
                >
                <i class="fas fa-phone"></i>
                    <span style=" font-size: 9px ">MY ACCOUNT</span>
                </div>

            <div>
                <button @click="navOpen = !navOpen">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            </div>
        </div>
        <div v-if="navOpen">
        
        <div class="secondSection">
            <div class="flex items-center py-5 px-5">
                <div class="flex-1 px-8">
                    <div class="relative">
                        <input
                            type="text"
                            class="w-full rounded-md outline-none placeholder-header-input-placeholder"
                            style="
                                font-size: 9px;
                                height: 35px;
                                padding: 12px 15px;
                                background-color: #F1F1F1;
                            "
                            placeholder="Search for product, categories, posts..."
                        />
                        <i
                            style=" color: #80B192 "
                            class="fas fa-search absolute text-xs transform -translate-y-1/2 top-1/2 right-5"
                        ></i>
                    </div>
                </div>
    
                <i class="fas fa-phone mr-2"></i>
    
                <router-link to="/">
                <i class="fas fa-phone"></i>
                </router-link>
            </div>
            
            <div class="flex gap-2 align-items-center text-right cursor-pointer py-2 mx-5" @click="category = !category"><span class="ml-auto">Categories</span>
            <svg class="my-auto text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="9.096"
                height="6.548"
                viewBox="0 0 7.096 3.548"
            >
                <path
                    id="Rectangle_2"
                    data-name="Rectangle 2"
                    d="M868,12.1h7.1l-3.548,3.548Z"
                    transform="translate(-868 -12.096)"
                    fill="#000"
                />
            </svg>
            </div>

            <section v-if="category" class="thirdSec">
            
<div
            style="
                padding-bottom: 10px;
                padding-top: 10px;
                font-size: 10px;
                box-shadow: 0 10px 12px rgba(0,0,0,0.24);
            "
            class="flex flex-col ml-auto px-5 text-right"
        >
                <span v-for="category in categories" :key='category.title'
                    
                    class="font-normal tracking-wider cursor-pointer text-bg-primary"
                >
                    <router-link :to="'/categories/' + category.title">{{category.title}}</router-link>
                </span>
        </div>
        </section>
        </div>
        </div>
        </section>


    </section>
        </div>
</template>

<script>
export default {
    data(){
    return{
        firstSection:false,
        navOpen:false,
        category:false,
      categories : [
        { title: 'All Categories', link: 'all-categories' },
        { title: 'Accessories', link: 'accessories' },
        { title: 'Smartphone', link: 'smartphone' },
        { title: 'Computer', link: 'computer' },
        { title: 'Gaming Equipment', link: 'gaming-equipment' },
        { title: 'TV & Monitors', link: 'tv-monitors' },
        { title: 'Headphones', link: 'headphones' },
        { title: 'Speaker', link: 'speaker' },
        { title: 'HOT DEALS', link: 'hot-deals' },
    ]
    }
  }
}
</script>

<style>

</style>