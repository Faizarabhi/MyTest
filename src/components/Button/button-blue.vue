<template>
    <div
      class="ml-8 max-w-max border border-black font-medium rounded-full p-3 px-8"
      :class="[color, { 'bg-sky-500 border border-sky-500  text-white ': isActiveOnHover }]"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      {{ text }}
    </div>
  </template>
  
  <script>
  export default {
    props: ['text', 'color','isActiveOnHover'],
    data() {
      return {
        isActiveOnHover: false
      };
    },
    methods: {
      handleMouseEnter() {
        this.isActiveOnHover = true;
      },
      handleMouseLeave() {
        this.isActiveOnHover = false;
      }
    }
  };
  </script>
  