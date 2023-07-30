<template>
  <mainPage />
  <productView />
  <discussionView />
  <communicationView />
  <priceView />
  <teamSay />
  <templateView />
</template>

<script>
import mainPage from '../components/Home/main-section.vue';
import productView from '../components/Home/product-section.vue';
import discussionView from '../components/Home/discussion-section.vue';
import teamSay from '../components/Home/team-section.vue';
import communicationView from '../components/Home/communication-section.vue';
import templateView from '../components/Home/template-section.vue';
import priceView from '../components/Home/price-section.vue';
export default {
  components: {
    mainPage,
    productView,
    discussionView,
    teamSay,
    communicationView,
    templateView,
    priceView,
  }
}
</script>