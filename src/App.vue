<template>
<Navbar/>
<Home/>
</template>

<script>
import Navbar from './components/nav-bar.vue'
import Home from './components/HelloWorld.vue'
export default {
  components:{
    Navbar,
    Home
  }
}
</script>