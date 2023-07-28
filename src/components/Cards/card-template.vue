<template>
   
    <!-- <p class="bg-white " >{{ name }} </p> -->
    
    <div  class="flex flex-col justify-between  bg-white">
      <div class="bg-white">
      <p class="bg-white font-medium text-xl" > {{ name}}</p>
      
  </div>
      <img :src="img" alt="name Image" class="w-12 h-12 rounded-full object-cover " />
    </div>
</template>

<script>
export default {
  props: ['name','img']
};
</script>