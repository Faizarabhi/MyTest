<template>
  <div id="app" class="bg-[#f5e5d1]">

    <router-view />
  </div>
</template>



<script>

import Home from './pages/LandingPage.vue'
export default {
  components: {
    Home
  }
}
</script>