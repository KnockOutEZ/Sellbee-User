<template>
  <div class="font-lato" id="nav">
    <section class="BigScreen hidden lg:block">
      <div
        class="flex gap-5 text-white px-p-w bg-bg-primary"
        style="padding-top: 7.35px; padding-bottom: 7.35px"
      >
        <div class="flex items-center gap-3">
          <i class="fas fa-phone"></i>
          <span class="text-xs">+8801720636876</span>
        </div>

        <div class="flex items-center flex-1 gap-3">
          <i class="fas fa-envelope"></i>
          <span class="text-xs">support@sellbee.com</span>
        </div>

        <div
          class="flex items-center gap-3 pr-5 border-r"
          style="border-color: #ffc19e"
        >
          <i class="fas fa-truck"></i>
          <router-link to="/trackorder">
            <span class="text-xs cursor-pointer">Track Your Order</span>
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
          <router-link to="/home">
            <img src="../../src/assets/logo.svg" alt="logo" />
          </router-link>
        </div>

        <div class="flex-1 px-8">
          <div class="relative">
            <input
              type="text"
              class="
                w-full
                rounded-md
                outline-none
                placeholder-header-input-placeholder
              "
              style="
                font-size: 9px;
                height: 35;
                padding: 12px 15px;
                background-color: #f1f1f1;
              "
              placeholder="Search for product, categories, posts..."
            />
            <i
              style="color: #80b192"
              class="
                fas
                fa-search
                absolute
                text-xs
                transform
                -translate-y-1/2
                top-1/2
                right-5
              "
            ></i>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12.001"
          viewBox="0 0 12 12.001"
        >
          <path
            id="iconMenu"
            d="M682.576,70h-3.692a.924.924,0,0,1-.923-.923V65.384a.924.924,0,0,1,.923-.923h3.692a.924.924,0,0,1,.923.923v3.693A.924.924,0,0,1,682.576,70Zm-3.7-4.621v3.69h3.69V65.38ZM676.115,70h-3.692a.924.924,0,0,1-.923-.923V65.384a.924.924,0,0,1,.923-.923h3.692a.924.924,0,0,1,.923.923v3.693A.924.924,0,0,1,676.115,70Zm-3.7-4.621v3.69h3.69V65.38Zm10.156-1.841h-3.692a.924.924,0,0,1-.923-.923V58.923a.924.924,0,0,1,.923-.923h3.692a.924.924,0,0,1,.923.923v3.693A.924.924,0,0,1,682.576,63.538Zm-3.7-4.618v3.69h3.69V58.92Zm-2.765,4.618h-3.692a.924.924,0,0,1-.923-.923V58.923a.924.924,0,0,1,.923-.923h3.692a.924.924,0,0,1,.923.923v3.693A.924.924,0,0,1,676.115,63.538Zm-3.7-4.618v3.69h3.69V58.92Z"
            transform="translate(-671.5 -58)"
            fill="#4c4c4c"
          />
        </svg>

        <router-link to="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.917"
            height="10.292"
            viewBox="0 0 11.917 10.292"
          >
            <g id="basket" transform="translate(-712.542 -58.354)">
              <path
                id="Vector"
                d="M721.75,68.646h-6.5a1.615,1.615,0,0,1-1.149-.476,1.636,1.636,0,0,1-.476-1.148V62.688h-.541a.542.542,0,1,1,0-1.084h1.335l2.006-3.009a.541.541,0,0,1,.345-.23.542.542,0,0,1,.637.425.545.545,0,0,1-.081.407l-1.6,2.407h5.559l-1.6-2.407a.542.542,0,0,1,.149-.751.543.543,0,0,1,.751.15l2,3.009h1.336a.541.541,0,0,1,.382.924.545.545,0,0,1-.382.159h-.542v4.333a1.636,1.636,0,0,1-.476,1.148A1.615,1.615,0,0,1,721.75,68.646Zm-7.042-5.958v4.333a.541.541,0,0,0,.542.541h6.5a.541.541,0,0,0,.542-.541V62.688Z"
                fill="#4c4c4c"
              />
              <path
                id="Vector-2"
                data-name="Vector"
                d="M716.333,66.75a.542.542,0,0,0,.542-.542V64.041a.542.542,0,0,0-1.083,0v2.167a.542.542,0,0,0,.542.542Z"
                fill="#4c4c4c"
              />
              <path
                id="Vector-3"
                data-name="Vector"
                d="M718.5,66.75a.542.542,0,0,0,.542-.542V64.041a.542.542,0,0,0-1.083,0v2.167a.542.542,0,0,0,.542.542Z"
                fill="#4c4c4c"
              />
              <path
                id="Vector-4"
                data-name="Vector"
                d="M720.667,66.75a.542.542,0,0,0,.542-.542V64.041a.542.542,0,0,0-1.084,0v2.167a.542.542,0,0,0,.542.542Z"
                fill="#4c4c4c"
              />
            </g>
          </svg>
        </router-link>

        <div
          v-if="!isLoggedIn && reRender"
          class="
            flex
            items-center
            px-6
            space-x-3
            text-white
            rounded-md
            cursor-pointer
          "
          style="
            background-image: linear-gradient(#6a8d92, #4b4e6d);
            height: 35px;
          "
        >
          <i class="fas fa-user"></i>
          <router-link to="/signup" style="fontsize: 9">MY ACCOUNT</router-link>
        </div>
        <div v-if="isLoggedIn && reRender">
          <!-- component -->
          <div>
            <div
              @click="showOptions = !showOptions"
              class="flex highestzindex justify-center items-center"
            >
              <div
                @click="open = !open"
                class="relative border-b-4 border-transparent py-3"
                :class="{
                  'border-indigo-700 transform transition duration-300 ': open,
                }"
                x-transition:enter-end="transform opacity-100 scale-100"
                x-transition:leave="transition ease-in duration-75"
                x-transition:leave-start="transform opacity-100 scale-100"
              >
                <div
                  class="
                    flex
                    justify-center
                    items-center
                    space-x-3
                    cursor-pointer
                  "
                >
                  <div
                    class="
                      w-12
                      h-12
                      rounded-full
                      overflow-hidden
                      border-2
                      dark:border-white
                      border-gray-900
                    "
                  >
                    <img
                      src="https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      alt=""
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div
                  v-if="showOptions"
                  x-transition:enter="transition ease-out duration-100"
                  x-transition:enter-start="transform opacity-0 scale-95"
                  x-transition:enter-end="transform opacity-100 scale-100"
                  x-transition:leave="transition ease-in duration-75"
                  x-transition:leave-start="transform opacity-100 scale-100"
                  x-transition:leave-end="transform opacity-0 scale-95"
                  class="
                    absolute
                    right-0
                    w-60
                    px-5
                    highestzindex
                    py-3
                    dark:bg-gray-800
                    bg-white
                    rounded-lg
                    shadow
                    border
                    dark:border-transparent
                    mt-5
                  "
                >
                  <ul class="space-y-3 dark:text-white">
                    <li class="font-medium">
                      <button
                        @click="logOut"
                        href="#"
                        class="
                          flex
                          items-center
                          transform
                          transition-colors
                          duration-200
                          border-r-4 border-transparent
                          hover:border-indigo-700
                        "
                      >
                        <div class="mr-3">
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        </div>
                        LogOut
                      </button>
                    </li>
                    <!-- <li class="font-medium">
              <a href="#" class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                <div class="mr-3">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                Setting
              </a>
            </li>
            <hr class="dark:border-gray-700">
            <li class="font-medium">
              <a href="#" class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600">
                <div class="mr-3 text-red-600">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                </div>
                Logout
              </a>
            </li> -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style="
          padding-bottom: 10px;
          padding-top: 10px;
          font-size: 10px;
          box-shadow: 0 10px 12px rgba(0, 0, 0, 0.24);
        "
        class="flex justify-between px-p-w"
      >
        <span
          v-for="category in categories"
          :key="category.title"
          class="font-normal tracking-wider cursor-pointer text-bg-primary"
        >
          <router-link :to="'/categories/' + category.title">{{
            category.title
          }}</router-link>
        </span>
      </div>
    </section>

    <section class="SmallScreen bg-white shadow-lg lg:hidden">
      <section>
        <div
          @click="firstSection = !firstSection"
          class="flex flex-col gap-5 text-white px-5 bg-bg-primary"
          style="padding-top: 7.35px; padding-bottom: 7.35px"
        >
          <div class="flex ml-auto gap-3">
            <button class="text-xs">BDT - Taka</button>
            <svg
              class="my-auto"
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
            style="padding-top: 7.35px; padding-bottom: 7.35px"
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
                <span class="text-xs cursor-pointer">Track Your Order</span>
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
            <router-link to="/home">
              <img src="../../src/assets/logo.svg" alt="logo" />
            </router-link>
          </div>

          <div v-if="!isLoggedIn && reRender" class="flex items-center gap-2">
            <div
              class="
                flex
                items-center
                px-6
                space-x-3
                text-white
                rounded-md
                cursor-pointer
              "
              style="
                background-image: linear-gradient(#6a8d92, #4b4e6d);
                height: 35px;
              "
            >
              <i class="fas fa-user"></i>
              <span style="font-size: 9px">MY ACCOUNT</span>
            </div>

            <div v-if="isLoggedIn && reRender">
          <!-- component -->
          <div>
            <div
              @click="showOptions = !showOptions"
              class="flex highestzindex justify-center items-center"
            >
              <div
                @click="open = !open"
                class="relative border-b-4 border-transparent py-3"
                :class="{
                  'border-indigo-700 transform transition duration-300 ': open,
                }"
                x-transition:enter-end="transform opacity-100 scale-100"
                x-transition:leave="transition ease-in duration-75"
                x-transition:leave-start="transform opacity-100 scale-100"
              >
                <div
                  class="
                    flex
                    justify-center
                    items-center
                    space-x-3
                    cursor-pointer
                  "
                >
                  <div
                    class="
                      w-12
                      h-12
                      rounded-full
                      overflow-hidden
                      border-2
                      dark:border-white
                      border-gray-900
                    "
                  >
                    <img
                      src="https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      alt=""
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div
                  v-if="showOptions"
                  x-transition:enter="transition ease-out duration-100"
                  x-transition:enter-start="transform opacity-0 scale-95"
                  x-transition:enter-end="transform opacity-100 scale-100"
                  x-transition:leave="transition ease-in duration-75"
                  x-transition:leave-start="transform opacity-100 scale-100"
                  x-transition:leave-end="transform opacity-0 scale-95"
                  class="
                    absolute
                    right-0
                    w-60
                    px-5
                    highestzindex
                    py-3
                    dark:bg-gray-800
                    bg-white
                    rounded-lg
                    shadow
                    border
                    dark:border-transparent
                    mt-5
                  "
                >
                  <ul class="space-y-3 dark:text-white">
                    <li class="font-medium">
                      <button
                        @click="logOut"
                        href="#"
                        class="
                          flex
                          items-center
                          transform
                          transition-colors
                          duration-200
                          border-r-4 border-transparent
                          hover:border-indigo-700
                        "
                      >
                        <div class="mr-3">
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        </div>
                        LogOut
                      </button>
                    </li>
                    <!-- <li class="font-medium">
              <a href="#" class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                <div class="mr-3">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                Setting
              </a>
            </li>
            <hr class="dark:border-gray-700">
            <li class="font-medium">
              <a href="#" class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600">
                <div class="mr-3 text-red-600">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                </div>
                Logout
              </a>
            </li> -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
                    class="
                      w-full
                      rounded-md
                      outline-none
                      placeholder-header-input-placeholder
                    "
                    style="
                      font-size: 9px;
                      height: 35px;
                      padding: 12px 15px;
                      background-color: #f1f1f1;
                    "
                    placeholder="Search for product, categories, posts..."
                  />
                  <i
                    style="color: #80b192"
                    class="
                      fas
                      fa-search
                      absolute
                      text-xs
                      transform
                      -translate-y-1/2
                      top-1/2
                      right-5
                    "
                  ></i>
                </div>
              </div>

              <svg
                class="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12.001"
                viewBox="0 0 12 12.001"
              >
                <path
                  id="iconMenu"
                  d="M682.576,70h-3.692a.924.924,0,0,1-.923-.923V65.384a.924.924,0,0,1,.923-.923h3.692a.924.924,0,0,1,.923.923v3.693A.924.924,0,0,1,682.576,70Zm-3.7-4.621v3.69h3.69V65.38ZM676.115,70h-3.692a.924.924,0,0,1-.923-.923V65.384a.924.924,0,0,1,.923-.923h3.692a.924.924,0,0,1,.923.923v3.693A.924.924,0,0,1,676.115,70Zm-3.7-4.621v3.69h3.69V65.38Zm10.156-1.841h-3.692a.924.924,0,0,1-.923-.923V58.923a.924.924,0,0,1,.923-.923h3.692a.924.924,0,0,1,.923.923v3.693A.924.924,0,0,1,682.576,63.538Zm-3.7-4.618v3.69h3.69V58.92Zm-2.765,4.618h-3.692a.924.924,0,0,1-.923-.923V58.923a.924.924,0,0,1,.923-.923h3.692a.924.924,0,0,1,.923.923v3.693A.924.924,0,0,1,676.115,63.538Zm-3.7-4.618v3.69h3.69V58.92Z"
                  transform="translate(-671.5 -58)"
                  fill="#4c4c4c"
                />
              </svg>

              <router-link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.917"
                  height="10.292"
                  viewBox="0 0 11.917 10.292"
                >
                  <g id="basket" transform="translate(-712.542 -58.354)">
                    <path
                      id="Vector"
                      d="M721.75,68.646h-6.5a1.615,1.615,0,0,1-1.149-.476,1.636,1.636,0,0,1-.476-1.148V62.688h-.541a.542.542,0,1,1,0-1.084h1.335l2.006-3.009a.541.541,0,0,1,.345-.23.542.542,0,0,1,.637.425.545.545,0,0,1-.081.407l-1.6,2.407h5.559l-1.6-2.407a.542.542,0,0,1,.149-.751.543.543,0,0,1,.751.15l2,3.009h1.336a.541.541,0,0,1,.382.924.545.545,0,0,1-.382.159h-.542v4.333a1.636,1.636,0,0,1-.476,1.148A1.615,1.615,0,0,1,721.75,68.646Zm-7.042-5.958v4.333a.541.541,0,0,0,.542.541h6.5a.541.541,0,0,0,.542-.541V62.688Z"
                      fill="#4c4c4c"
                    />
                    <path
                      id="Vector-2"
                      data-name="Vector"
                      d="M716.333,66.75a.542.542,0,0,0,.542-.542V64.041a.542.542,0,0,0-1.083,0v2.167a.542.542,0,0,0,.542.542Z"
                      fill="#4c4c4c"
                    />
                    <path
                      id="Vector-3"
                      data-name="Vector"
                      d="M718.5,66.75a.542.542,0,0,0,.542-.542V64.041a.542.542,0,0,0-1.083,0v2.167a.542.542,0,0,0,.542.542Z"
                      fill="#4c4c4c"
                    />
                    <path
                      id="Vector-4"
                      data-name="Vector"
                      d="M720.667,66.75a.542.542,0,0,0,.542-.542V64.041a.542.542,0,0,0-1.084,0v2.167a.542.542,0,0,0,.542.542Z"
                      fill="#4c4c4c"
                    />
                  </g>
                </svg>
              </router-link>
            </div>

            <div
              class="
                flex
                gap-2
                align-items-center
                text-right
                cursor-pointer
                py-2
                mx-5
              "
              @click="category = !category"
            >
              <span class="ml-auto">Categories</span>
              <svg
                class="my-auto text-black"
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
                  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.24);
                "
                class="flex flex-col ml-auto px-5 text-right"
              >
                <span
                  v-for="category in categories"
                  :key="category.title"
                  class="
                    font-normal
                    tracking-wider
                    cursor-pointer
                    text-bg-primary
                  "
                >
                  <router-link :to="'/categories/' + category.title">{{
                    category.title
                  }}</router-link>
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
import axiosJWT from "../store/axios";
import axios from "axios";

export default {
  data() {
    return {
      reRender: true,
      showOptions: false,
      isLoggedIn: false,
      firstSection: false,
      navOpen: false,
      category: false,
      categories: [
        { title: "All Products", link: "all-products" },
        { title: "Accessories", link: "accessories" },
        { title: "Smartphone", link: "smartphone" },
        { title: "Computer", link: "computer" },
        { title: "Gaming Equipment", link: "gaming-equipment" },
        { title: "TV & Monitors", link: "tv-monitors" },
        { title: "Headphones", link: "headphones" },
        { title: "Speaker", link: "speaker" },
        { title: "HOT DEALS", link: "hot-deals" },
      ],
    };
  },
  //   beforeRouteEnter(to, from, next) {
  //       axiosJWT.get(process.env.VUE_APP_API_URL + 'customer/get-me',{withCredentials:true})
  //         .then((res) => {
  //           console.log(res)
  //         next();
  //       }).catch((error) => {
  //         console.log(error)
  //         next({ path: '/signup' });

  // })
  //   },

  methods: {
    ForceRerender() {
      this.reRender = false;

      this.$nextTick(() => {
        // Adding the component back in
        this.reRender = true;
      });
    },
    logOut() {
      axios
        .delete(process.env.VUE_APP_API_URL + "customer/logout", {
          data:{refreshToken:localStorage.getItem("refresh-token")}
        })
        .then((res) => {
          console.log(res);
          this.$router.go(0);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  beforeCreate() {
    axiosJWT
      .get(process.env.VUE_APP_API_URL + "customer/get-me", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        this.isLoggedIn = true;
      })
      .catch((error) => {
        console.log(error);
        this.isLoggedIn = false;
      });
  },
};
</script>

<style>
.highestzindex {
  z-index: 99999999999 !important;
}
</style>