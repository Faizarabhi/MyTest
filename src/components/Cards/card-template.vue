<template>
  <div class="flex flex-col  justify-between  bg-white">
    <div>
      <p class="bg-white font-medium text-xl"> {{ name }}</p>
    </div>
    <div>
      <img src="../../assets/image/blob.svg" alt="name Image" class="w-12 h-12 rounded-full object-cover " />
    </div>

  </div>
</template>

<script>
export default {
  props: ['name', 'img']
};
</script>