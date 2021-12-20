<template>
  <div class="mb-32 mx-p-w">
            <div class="font-semibold font-poppins mb-7" style=" font-size: 25px ">
                Best Deals
            </div>

            <div
                class="px-3 md:grid grid-cols-6 gap-4"
            >
                    <div v-for="product in products" :key="product.id" class="flex" style=" height: 70px ">
                        <router-link :to="{ path: '/product/' + product.id}">
                            <img
                                :src="product.image"
                                :alt="product.name"
                                class="object-cover w-16 h-full cursor-pointer rounded-xl"
                            />
                        </router-link>

                        <div class="flex flex-col mx-5">
                            <span class="font-medium font-poppins" style=" font-size: 9px ">
                                {{product.name}}
                            </span>
                            <div class="flex items-center">
                                    <span v-for="(startCount,index) in product.starCount" :key="index" style=" margin-right: 2px ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="7.464"
                                            height="6.786"
                                            viewBox="0 0 7.464 6.786"
                                        >
                                            <path
                                                id="star"
                                                d="M153.331,696.736l-.911,1.754-2.038.282a.419.419,0,0,0-.247.724l1.475,1.365-.349,1.928a.442.442,0,0,0,.648.446l1.823-.91,1.824.91a.442.442,0,0,0,.647-.446l-.349-1.928,1.475-1.365a.419.419,0,0,0-.247-.724l-2.038-.282-.911-1.754A.458.458,0,0,0,153.331,696.736Z"
                                                transform="translate(-150 -696.5)"
                                            />
                                        </svg>
                                    </span>
                                <span
                                    class="font-light font-poppins"
                                    style=" color: #BABABA; font-size: 9px "
                                >
                                    {{product.reviewCount}}
                                </span>
                            </div>
                            <span class="text-xs font-semibold font-poppins">
                                BDT {{product.price}}
                            </span>
                            <div class="flex gap-2">
                                <button
                                    type="button"
                                    class="p-1"
                                    style="
                                        border-radius: 3px;
                                        box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.16);
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="11"
                                        height="11"
                                        viewBox="0 0 11 11"
                                    >
                                        <defs>
                                            <pattern
                                                id="pattern"
                                                preserveAspectRatio="xMidYMid slice"
                                                width="100%"
                                                height="100%"
                                                viewBox="0 0 48 48"
                                            >
                                                <image
                                                    width="48"
                                                    height="48"
                                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5ElEQVRoge2ZT0gUURzHf5oXixQiqUPXyqAy8GJCp6iDlIfokFQeEgPzEnkIvaQHO1RQUIcUCk8RoUl1CISg9rAXrUt/LkUQePBUCAWV//r9et/J1+7szrz3Zny7sl/4iPOc75vv19ndeTNLtA60lTlfpkh2amZWypRmvcBVJovfxzBeSowhWxZZ8wrIKdnEvML2ZSodXWSWSYWvI5U1tIBISryk0imRG15UtABhxyyMPWuVNEQ9lB9eFFlA1Ibx6dRjFtY0MrTljEcW2MJ8wfhM6jELawYZZpkGbbxogWrmObPEzJP/AvPIIpmqMV60wAC2hzGB7wJC8LHZj/GCBVqY30yGqaHSKbCBecEsMIcop8AZbFwn9Vr7ybTjjx+Ar4uXfvx2ZJtF1hVk974ccOXvjwz5X5iZktELjFD5STJbF6hldpF6o7uqBnPVGvqsCwyR+qQS31fmlOGBdXUw3zCXzHnFwGtVoBP7TzF9zDsceL/BgQM1wfsWc01h7rMx/VYFnjFzzAHmCbMP/sGYfl2D8O7FXE2Y+2lMv1WBPqBfSEaZYzH9uo7Dq19Ig/njyOlN/N+V0FGFVsNRqhQo6wLdlHyBbkOfU4GT8B0x9IXpKOY6YehzKtAKX5ehL0zB2Txo6HNeSnxnHhn6wjTO/GA2GvqcCogmSZXYZuENtJ1U+McWXucCwcvoroVXDyGPTVosvc7L6YcI0GHhPQ3vA8tjJ1JgM6nF2C/mnIGvCx65Xay3PHYiBUQ7mDeYZ4JpLLLvHlKvd9n3Nby2SqyASJ6n3qHV+wQJd5O5BG7RaknZ5zaZf+rkKtECgeTO6gbzkfJvvmVMnibsTOhYqRTQJWdlN3D9b4cp9QJpq1LAtyoFfGv9FJAvD+75zWKl+6Sy02fmPSXzmHCtJFllHfVJNnpJnQpZoxwm/19oRyEZJ5H5ghSoInWJXyL/z/rjsshcQ/Z/kjWKPPv0/dw/ik5Kbj3lX38AQnfvv79VraYAAAAASUVORK5CYII="
                                                />
                                            </pattern>
                                        </defs>
                                        <rect
                                            id="_2639786_buy_icon"
                                            data-name="2639786_buy_icon"
                                            width="11"
                                            height="11"
                                            fill="url(#pattern)"
                                        />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    class="p-1"
                                    style="
                                        border-radius: 3px;
                                        box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.16);
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                    >
                                        <image
                                            id="_2639786_buy_icon"
                                            data-name="2639786_buy_icon"
                                            width="14"
                                            height="14"
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjklEQVRoge2YP2gUURDGJ4oKUS6CpoikOrukCHooYmGqCwmxTHHFFaaJhVeGsxcbhRMPomAXCJImlZ0hfwwpLHJFIGKTgN2FELBIUDTkjzM8F2f39t3uvnm7e+B+8IMQdr6Z7/b27XsHkCmTFV1E3iANxiryEumz4H8BmUE+IkMW/Fo0gZxp2EcGLfovCr18dRs5Bn2IdaH/FPNqCL20Kvxt5PAC3CEkdyGRAH7aYY2rAp/UAsywxmsCn9QCjLHG9IxcM/RJLcAl5JA1Lxn6pBaA9IE1nzP0SDXAY9b8O3IH1IoVhSn494Kc11wzjJRBvTN0PjdNAvQjp+BeUqPyjvkVhF7TJiE2hU1XmNe40OuTSYDnwqZfmVdZ6PXKJMB9YVObX6FRkwDnkL0OCPAbuWwSgDTXAQGWTIcnlUI0oIe9iFSQnyEDLIBaQmsh/J9KAvQgRwENRtj1RRZCF2AW1NfT0bcA/1uSAKS1gAYVz/VOCL8A3uGvIwdtvPc91xupGhDgF6h1nusBuJc+CkBv4/Psf3R3Pwd4v5cOTxoMaELQJ1701OXY31fA/UmGGZ54ZCMAiR9yotwJP4Udnui3FYAfciQhchGG37I1PIkfckxDRBmeqNkM4D3kRA0RdXjCaPvQTvyQEwZ6sJ+AergbEWtF2wed+CFHelYIYtn28KRe5EfMgztMxhGAJD0jhOELqN9tY1EXUkdOYhp+A7kR1/BcA6DOqW9B7XmkPAO1anUlMXymTtJVJA/mt15abyx6ydBW13n4aLN3L8F6serQuoI0Qe00k6gXa9dnAOJhQvViNTUDhDkP2KgX67VPcxoq167IYr1Y3aB+M3I2ddvI3QTrrYkeunyK9Zky/Zf6A6GTmc6RIpQVAAAAAElFTkSuQmCC"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
</template>

<script>
export default {
data(){
    return{
        products : [
        {
            id: 1,
            name: 'test 1',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 2,
            name: 'test 2',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 3,
            name: 'test 3',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 4,
            name: 'test 4',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 5,
            name: 'test 5',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 6,
            name: 'test 6',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 7,
            name: 'test 7',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 8,
            name: 'test 8',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
        {
            id: 9,
            name: 'test 9',
            price: 50,
            starCount: 4,
            reviewCount: 12,
            image: 'https://i.pinimg.com/564x/c7/f6/bd/c7f6bdef61e2558147339c0057eee2e8.jpg',
        },
    ]
    }
}
}
</script>

<style>

</style>