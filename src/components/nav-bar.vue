<template>
  <div class="w-full flex flex-col lg:flex-row justify-evenly p-8 drop-shadow-lg bg-[#f5e5d1]">
    <div class="font-bold text-2xl items-center">
      <a to="/">Slite</a>
    </div>
    <div class="flex flex-col  lg:flex-row  items-center lg:ml-8">
      <div class="flex lg:flex-row flex-col font-medium py-2 " v-for="item in items" :key="to">

        <a class="my-4 lg:my-0 lg:mx-4" :to="to">{{ item.name }}</a>
      </div>
      <div class="flex lg:flex-row flex-col  mt-2">
        <a>
          <buttonBlue text="Request a demo" />
        </a>
        <a>
          <buttonBlue color="" text="Start for free" />
        </a>
      </div>
    </div>
  </div>
</template>


<script>

import { RouterLink } from 'vue-router';
import buttonBlue from '../components/Button/button-blue.vue'
import navItems from '../constants/navbarData'
export default {
  components: {
    buttonBlue,
    RouterLink
  },
  data() {
    return {
      items: navItems
    };
  }
};

</script>