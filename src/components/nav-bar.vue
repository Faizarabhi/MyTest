<template>
    <div class="w-full flex flex-col lg:flex-row justify-evenly p-8 drop-shadow-lg bg-[#f5e5d1]">
      <div class="font-bold text-2xl items-center">
        <router-link to="/">Slite</router-link>
      </div>
      <div class="flex flex-col  lg:flex-row  items-center lg:ml-8">
        <div class="flex lg:flex-row flex-col font-medium py-2 ">
          <router-link class="my-4 lg:my-0 lg:mx-4" to="/">Product</router-link>
          <router-link class="my-4 lg:my-0 lg:mx-4" to="/">Template</router-link>
          <router-link class="my-4 lg:my-0 lg:mx-4" to="/">Pricing</router-link>
          <router-link class="my-4 lg:my-0 lg:mx-4" to="/">Pricing</router-link>
          <router-link class="my-4 lg:my-0 lg:mx-4" to="/">Blog</router-link>
          <router-link class="my-4 lg:my-0 lg:mx-4" to="/">Sign in</router-link>
        </div>
        <div class="flex lg:flex-row flex-col  mt-2">
          <router-link>
            <buttonBlue text="Request a demo" />
          </router-link>
          <router-link>
            <buttonBlue color="" text="Start for free" />
          </router-link>
        </div>
      </div>
    </div>
  </template>
<script>
import buttonBlue from './Button/button-blue.vue'

export default {
  components: {
    buttonBlue,
},
  data() {
    return {
    };
  }
};

</script>