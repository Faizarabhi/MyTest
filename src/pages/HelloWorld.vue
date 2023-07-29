<template>
  <mainPage/>
 <productView/> 
 <discussionView/>
 <communicationView/>
 <teamSay/>
 <templateView/>
</template>

<script>
import mainPage from '../components/Home/main-page.vue';
import productView from '../components/Home/product-view.vue';
import discussionView from '../components/Home/discussion-view.vue';
import teamSay from '../components/Home/team-say.vue';
import communicationView from '../components/Home/communication-view.vue';
import  templateView from '../components/Home/template-view.vue';
export default {
  components: {
    mainPage,
    productView,
    discussionView,
    teamSay,
    communicationView,
    templateView
  }
}
</script>