<template>
  <div class="w-full flex flex-col lg:flex-row justify-evenly p-8 drop-shadow-lg bg-[#f5e5d1]">
    <div class="font-bold text-2xl items-center">
      <a  to="/">Slite</a>
    </div>
    <div class="flex flex-col  lg:flex-row  items-center lg:ml-8">
      <div class="flex lg:flex-row flex-col font-medium py-2 ">
        <a  class="my-4 lg:my-0 lg:mx-4" to="/">Product</a>
        <a  class="my-4 lg:my-0 lg:mx-4" to="/">Template</a>
        <a  class="my-4 lg:my-0 lg:mx-4" to="/">Pricing</a>
        <a  class="my-4 lg:my-0 lg:mx-4" to="/">Pricing</a>
        <a  class="my-4 lg:my-0 lg:mx-4" to="/">Blog</a>
        <a  class="my-4 lg:my-0 lg:mx-4" to="/">Sign in</a>
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

import buttonBlue from '../components/Button/button-blue.vue'
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