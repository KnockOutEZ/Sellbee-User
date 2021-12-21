<template>
  <div class="flex justify-between mb-24 md:mx-p-w px-2 md:px-p-w">
                <div v-for="offering in offerings" :key="offering.title" class="flex flex-col items-center">
                    <img :src="offering.icon" :alt="offering.title" />

                    <span class="mt-8 mb-2 text-xs font-semibold tracking-wide font-poppins">
                        {{offering.title}}
                    </span>

                    <span class="font-normal font-poppins" style=" font-size: 9px ">
                        {{offering.description}}
                    </span>
                </div>
        </div>
</template>

<script>
export default {
data(){
    return{
        offerings : [
        { icon: '/pickup.svg', title: 'Free Delivery', description: 'from BDT 500' },
        { icon: '/star.svg', title: 'Best Quality', description: 'Brand' },
        { icon: '/timer.svg', title: '1 Year', description: 'for free return' },
        { icon: '/feedback.svg', title: 'Feedback', description: '99% Real Data' },
        { icon: '/payment.svg', title: 'Payment', description: 'Secure' },
    ]
    }
}
}
</script>

<style>

</style>