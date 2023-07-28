<template>
  <mainPage/>
 <productView/> 
 <discussionView/>
 <communicationView/>
 <teamSay/>
 <templateView/>
</template>

<script>
import mainPage from './Home/main-page.vue';
import productView from './Home/product-view.vue';
import discussionView from './Home/discussion-view.vue';
import teamSay from './Home/team-say.vue';
import communicationView from './Home/communication-view.vue';
import  templateView from './Home/template-view.vue';
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