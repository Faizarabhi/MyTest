<template>
    <div>
        <navBar />
        <slot>
        </slot>
        <fooTer />
    </div>
</template>
<script>
import navBar from '../components/nav-bar.vue';
import fooTer from '../components/foo-ter.vue';
export default {
    components: {
        navBar,
        fooTer,
    }

};
</script>