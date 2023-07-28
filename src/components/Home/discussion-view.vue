<template>
    <div class="m-4 md:m-28 md:gap-y-0 text-center flex flex-col  items-center gap-8">
        <div class="h-full flex flex-col md:flex-row   items-center md:gap-x-8 md:gap-y-0">
            <div class="md:w-1/4 text-center md:text-left mb-8 md:mb-0  md:flex-col">
                <div class="font-bold text-3xl md:text-5xl ">
                    Say goodbye to endless meetings and slack threads with Discussions.
                </div>
                <div class="text-m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta impedit.
                <buttonBlue color="bg-sky-500 text-white border-0 px-8 m-4" text="Try Discussions" /></div>
            </div>
            <div>

            </div>
            <div class="md:w-3/4">
                <img src="../../assets/image/discoussion.png" class="w-full" />
            </div>
        </div>
        <div class="border-y-2 border-black p-12 mt-8 lg:w-2/4 relative">
            <p class=" qote lg:text-2xl text-xl">
                A quotation is the repetition of a sentence, phrase, or passage from speech or text that someone has said or
                written.
                In oral speech, it is the representation of an utterance that is introduced by a quotative marker.
            </p>
            <span>John said: "I saw Mary today".</span>
            <img class="rounded-full absolute w-12 h-12 right-8 -bottom-6"
                src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.webp?4d355bdg" />
        </div>
    </div>
</template>
<script>

import buttonBlue from '../Button/button-blue.vue';
export default {
    components: {
        buttonBlue
    },
    data() {
        return {
        };
    }
};

</script>