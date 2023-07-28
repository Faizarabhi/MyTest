<template>
   
      <p class="bg-white " >{{ opinion.title }} </p>
      <div  class="flex justify-between bg-white">
        <div class="bg-white">
        <p class="bg-white font-medium text-xl" > {{ opinion.author }}</p>
        <p class="bg-white  text-m" > {{ opinion.author }}</p>
    </div>
        <img :src="opinion.img" alt="Opinion Image" class="w-12 h-12 rounded-full object-cover " />
      </div>
  </template>
  
  <script>
  export default {
    props: ['opinion']
  };
  </script>