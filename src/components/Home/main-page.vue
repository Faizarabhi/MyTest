<template>
    <div class="h-full   flex flex-col m-28 items-center gap-y-8 ">
        <div class="font-semibold text-4xl w-96 text-center">
            <p>Where remote teams <span></span> share knowldge and make decisions.</p>
        </div>
        <div class="flex flex-col lg:flex-row gap-12 justify-center items-center">
            <div class="relative border  border-black p-3 rounded-full  pr-8">
                <div class="flex  w-80  ">
                    <input placeholder="name@company.com" class="bg-transparent">
                </div>
                <buttonBlue color="absolute  right-0 top-0 bg-sky-500 text-white border-0" text="Start for free" />
            </div>
            <buttonBlue color="" text="Book a demo" />
        </div>
        <div class="max-h-4/6">
            <img class="object-contain h-[33rem] lg:block hidden" src="../../assets/image/main.png">
        </div>

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