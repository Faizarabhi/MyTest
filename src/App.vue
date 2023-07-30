<template>
  <!-- <div class="bg-[#f5e5d1]">
    <Home/>
  </div> -->
  
  <div id="app" class="bg-[#f5e5d1]">
    <!-- <Navbar/> -->

    <!-- Your main layout and template go here -->
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