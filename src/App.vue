<template>
  <div class="bg-[#f5e5d1]">
<Navbar/>
<Home/>
</div>
</template>

<script>
import Navbar from './components/nav-bar.vue'
import Home from './pages/LandingPage.vue'
export default {
  components:{
    Navbar,
    Home
  }
}
</script>