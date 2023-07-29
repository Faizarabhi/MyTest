<template>
<Navbar/>
<Home/>
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