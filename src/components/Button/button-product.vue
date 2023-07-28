<template>
   <li
      class="text-gray-600 text-xl font-bold p-2 rounded-md"
      :class="[color, { 'bg-white text-black border-0': isActiveOnHover }]"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      {{ text }}
    </li>
  </template>
  
<script>
export default {
  props: ['text', 'color'],
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