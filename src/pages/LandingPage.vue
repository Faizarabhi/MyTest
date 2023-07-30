<template>
  <HomeLayouts>
  <mainPage />
  <productView />
  <discussionView />
  <communicationView />
  <priceView />
  <teamSay />
  <templateView />
  </HomeLayouts> 
</template>

<script>
import mainPage from '../components/Home/main-section.vue';
import productView from '../components/Home/product-section.vue';
import discussionView from '../components/Home/discussion-section.vue';
import teamSay from '../components/Home/team-section.vue';
import communicationView from '../components/Home/communication-section.vue';
import templateView from '../components/Home/template-section.vue';
import priceView from '../components/Home/price-section.vue';
import homeLayouts from '../layouts/homeLayouts.vue';
import HomeLayouts from '../layouts/homeLayouts.vue';
export default {
  components: {
    mainPage,
    productView,
    discussionView,
    teamSay,
    communicationView,
    templateView,
    priceView,
    HomeLayouts
}
}
</script>