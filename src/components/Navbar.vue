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
            <i class="fas fa-envelope"></i>
            <span class="text-xs">support@sellbee.com</span>
        </div>

        <div class="flex items-center gap-3 pr-5 border-r" style=" border-color: #FFC19E ">
            <i class="fas fa-truck"></i>
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

            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12.001" viewBox="0 0 12 12.001">
  <path id="iconMenu" d="M682.576,70h-3.692a.924.924,0,0,1-.923-.923V65.384a.924.924,0,0,1,.923-.923h3.692a.924.924,0,0,1,.923.923v3.693A.924.924,0,0,1,682.576,70Zm-3.7-4.621v3.69h3.69V65.38ZM676.115,70h-3.692a.924.924,0,0,1-.923-.923V65.384a.924.924,0,0,1,.923-.923h3.692a.924.924,0,0,1,.923.923v3.693A.924.924,0,0,1,676.115,70Zm-3.7-4.621v3.69h3.69V65.38Zm10.156-1.841h-3.692a.924.924,0,0,1-.923-.923V58.923a.924.924,0,0,1,.923-.923h3.692a.924.924,0,0,1,.923.923v3.693A.924.924,0,0,1,682.576,63.538Zm-3.7-4.618v3.69h3.69V58.92Zm-2.765,4.618h-3.692a.924.924,0,0,1-.923-.923V58.923a.924.924,0,0,1,.923-.923h3.692a.924.924,0,0,1,.923.923v3.693A.924.924,0,0,1,676.115,63.538Zm-3.7-4.618v3.69h3.69V58.92Z" transform="translate(-671.5 -58)" fill="#4c4c4c"/>
</svg>


            <router-link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="11.917" height="10.292" viewBox="0 0 11.917 10.292">
  <g id="basket" transform="translate(-712.542 -58.354)">
    <path id="Vector" d="M721.75,68.646h-6.5a1.615,1.615,0,0,1-1.149-.476,1.636,1.636,0,0,1-.476-1.148V62.688h-.541a.542.542,0,1,1,0-1.084h1.335l2.006-3.009a.541.541,0,0,1,.345-.23.542.542,0,0,1,.637.425.545.545,0,0,1-.081.407l-1.6,2.407h5.559l-1.6-2.407a.542.542,0,0,1,.149-.751.543.543,0,0,1,.751.15l2,3.009h1.336a.541.541,0,0,1,.382.924.545.545,0,0,1-.382.159h-.542v4.333a1.636,1.636,0,0,1-.476,1.148A1.615,1.615,0,0,1,721.75,68.646Zm-7.042-5.958v4.333a.541.541,0,0,0,.542.541h6.5a.541.541,0,0,0,.542-.541V62.688Z" fill="#4c4c4c"/>
    <path id="Vector-2" data-name="Vector" d="M716.333,66.75a.542.542,0,0,0,.542-.542V64.041a.542.542,0,0,0-1.083,0v2.167a.542.542,0,0,0,.542.542Z" fill="#4c4c4c"/>
    <path id="Vector-3" data-name="Vector" d="M718.5,66.75a.542.542,0,0,0,.542-.542V64.041a.542.542,0,0,0-1.083,0v2.167a.542.542,0,0,0,.542.542Z" fill="#4c4c4c"/>
    <path id="Vector-4" data-name="Vector" d="M720.667,66.75a.542.542,0,0,0,.542-.542V64.041a.542.542,0,0,0-1.084,0v2.167a.542.542,0,0,0,.542.542Z" fill="#4c4c4c"/>
  </g>
</svg>

            </router-link>

            <div
                class="flex items-center px-6 space-x-3 text-white rounded-md cursor-pointer"
                style="
                    background-image: linear-gradient(#6A8D92, #4B4E6D);
                    height: 35px;
                "
            >
            <i class="fas fa-user"></i>
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
        <i class="fas fa-envelope"></i>
    </div>

    <div class="flex ml-auto gap-3">
        <router-link to="/trackorder">
            <span class="text-xs  cursor-pointer">Track Your Order</span>
        </router-link>
        <i class="fas fa-truck"></i>
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
                <i class="fas fa-user"></i>
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
    
                <svg class="mx-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12.001" viewBox="0 0 12 12.001">
  <path id="iconMenu" d="M682.576,70h-3.692a.924.924,0,0,1-.923-.923V65.384a.924.924,0,0,1,.923-.923h3.692a.924.924,0,0,1,.923.923v3.693A.924.924,0,0,1,682.576,70Zm-3.7-4.621v3.69h3.69V65.38ZM676.115,70h-3.692a.924.924,0,0,1-.923-.923V65.384a.924.924,0,0,1,.923-.923h3.692a.924.924,0,0,1,.923.923v3.693A.924.924,0,0,1,676.115,70Zm-3.7-4.621v3.69h3.69V65.38Zm10.156-1.841h-3.692a.924.924,0,0,1-.923-.923V58.923a.924.924,0,0,1,.923-.923h3.692a.924.924,0,0,1,.923.923v3.693A.924.924,0,0,1,682.576,63.538Zm-3.7-4.618v3.69h3.69V58.92Zm-2.765,4.618h-3.692a.924.924,0,0,1-.923-.923V58.923a.924.924,0,0,1,.923-.923h3.692a.924.924,0,0,1,.923.923v3.693A.924.924,0,0,1,676.115,63.538Zm-3.7-4.618v3.69h3.69V58.92Z" transform="translate(-671.5 -58)" fill="#4c4c4c"/>
</svg>
    
                <router-link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="11.917" height="10.292" viewBox="0 0 11.917 10.292">
  <g id="basket" transform="translate(-712.542 -58.354)">
    <path id="Vector" d="M721.75,68.646h-6.5a1.615,1.615,0,0,1-1.149-.476,1.636,1.636,0,0,1-.476-1.148V62.688h-.541a.542.542,0,1,1,0-1.084h1.335l2.006-3.009a.541.541,0,0,1,.345-.23.542.542,0,0,1,.637.425.545.545,0,0,1-.081.407l-1.6,2.407h5.559l-1.6-2.407a.542.542,0,0,1,.149-.751.543.543,0,0,1,.751.15l2,3.009h1.336a.541.541,0,0,1,.382.924.545.545,0,0,1-.382.159h-.542v4.333a1.636,1.636,0,0,1-.476,1.148A1.615,1.615,0,0,1,721.75,68.646Zm-7.042-5.958v4.333a.541.541,0,0,0,.542.541h6.5a.541.541,0,0,0,.542-.541V62.688Z" fill="#4c4c4c"/>
    <path id="Vector-2" data-name="Vector" d="M716.333,66.75a.542.542,0,0,0,.542-.542V64.041a.542.542,0,0,0-1.083,0v2.167a.542.542,0,0,0,.542.542Z" fill="#4c4c4c"/>
    <path id="Vector-3" data-name="Vector" d="M718.5,66.75a.542.542,0,0,0,.542-.542V64.041a.542.542,0,0,0-1.083,0v2.167a.542.542,0,0,0,.542.542Z" fill="#4c4c4c"/>
    <path id="Vector-4" data-name="Vector" d="M720.667,66.75a.542.542,0,0,0,.542-.542V64.041a.542.542,0,0,0-1.084,0v2.167a.542.542,0,0,0,.542.542Z" fill="#4c4c4c"/>
  </g>
</svg>

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