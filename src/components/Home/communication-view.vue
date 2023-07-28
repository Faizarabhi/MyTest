<template>
    <div class="m-4  text-center flex  flex-col items-center gap-8 ">
        <div class="font-bold text-4xl">
            <p >Comminication where work happens.</p>
            <p>
                Document, discoussion, decide, repeat.
            </p>
        </div>
        <div class="">
            <img src="../../assets/image/screen.png" />
        </div>
        <div class="w-3/4">
            <p >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nostrum non laudantium debitis nemo porro
            repellendus dolorum, perferendis commodi fugiat molestiae culpa officiis temporibus blanditiis ullam ab optio
            eius ipsa.
        </p>
        </div>
        <buttonBlue class="bg-sky-500 text-white border-0 px-8" text="I want that too" />
    </div>
</template>
<script>

import buttonBlue from '../Button/button-blue.vue'
export default {
    components: {
        buttonBlue,
    },
    data() {
        return {
        };
    }
};

</script>