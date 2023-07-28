<template>
    <div class=" flex items-center justify-center ">
        <div class="flex flex-col items-center w-1/4">

            <ul class="flex flex-col justify-center content-start">
                <buttonPro text="wiki" />
                <buttonPro text="Projects" />
                <buttonPro text="Processes" />
                <buttonPro text="Onboarding" />
                <buttonPro text="Team updates" />
                <buttonPro text="1:1s" />
                <buttonPro text="User reaserch" />
                <buttonPro text="More" />
            </ul>
        </div>
        <div class="w-3/4  flex items-center justify-center">
            <img class=" object-cover " src="../../assets/image/pc.png" />
        </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-8">
        <div class="font-bold text-5xl">
            <p>All of your document in one place</p>
        </div>
        <div class="">
            <p>Project, knowledge base, process, bring all your work to life in docs.</p>
        </div>
        <div class="flex">
            <buttonBlue color="bg-sky-500 text-white border-0 px-8" text="Get Stated" />
            <buttonBlue color="" text="Download the apps" />
        </div>
    </div>
</template>
<script>
import buttonPro from '../Button/button-product.vue';
import buttonBlue from '../Button/button-blue.vue';
export default {
    components: {
        buttonPro,
        buttonBlue
    },
    data() {
        return {
        };
    }
};

</script>