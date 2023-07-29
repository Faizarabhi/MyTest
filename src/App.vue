<template>
  <div class="bg-[#f5e5d1]">
<Navbar/>
<Home/>
</div>
</template>

<script>
import Navbar from './components/nav-bar.vue'
import Home from './pages/HelloWorld.vue'
export default {
  components:{
    Navbar,
    Home
  }
}
</script>