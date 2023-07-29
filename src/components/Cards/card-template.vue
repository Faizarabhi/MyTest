<template>
  <p class="bg-white font-medium text-xl"> {{ name }}</p>
  
    <div class="bg-white">
      <img :src="img" alt="Image" class=" bg-white  h-full  w-full" />
    </div>

 
</template>


<script>
export default {
  props: ['name', 'img'],
  created() {
    console.log(this.img);
  },
};
</script>