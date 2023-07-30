<template>
    <div>
        <!-- <navBar /> -->

        <slot>
            <LandingPage />
        </slot>

        <fooTer />
    </div>
</template>
<script>
import navBar from '../components/nav-bar.vue';
import fooTer from '../components/foo-ter.vue';
import LandingPage from '../pages/LandingPage.vue'
export default {
    components: {
        navBar,
        fooTer,
        LandingPage
    }

};
</script>