<template>
    <div class="relative flex flex-col justify-center items-center gap-4 ">
        <h1 class="font-bold text-4xl">Get Started with templates</h1>
        <p>Best practices for your team.</p>
        <div class="flex absolute gap-2 bottom-8 z-10 right-28">
            <div class=" w-8 bg-red-200 h-8 rounded-full"></div>
            <div class="">chris</div>
        </div>
        <buttonBlue text="Browse for your team." />
    </div>
    <div class="relative flex section-with-horizontal-scroll overflow-x-auto overflow-hidden">

        <div class="flex absolute gap-2 left-44">
            <div>Roise</div>
            <div class=" w-8 bg-red-500 h-8 rounded-full"></div>
        </div>
        <div class="flex absolute gap-2 left-44">
            <div>Roise</div>
            <div class=" w-8 bg-amber-500 h-8 rounded-full"></div>
        </div>
        <div class="flex  absolute gap-2 bottom-2 z-10 right-28">
            <div class=" w-8 bg-sky-500 h-8 rounded-full"></div>
            <div>Clara</div>
        </div>
        <div v-for="template in templates" :key="template.id">
            <div
                class=" bg-white min-w-[12rem] max-h-max min-h-[16rem] m-8 flex flex-col justify-between rounded-lg p-8 drop-shadow-xl">
                <cardTemplate :name="template.name" :img="template.img" />
            </div>
        </div>
    </div>
</template>
  
<script>
import buttonBlue from '../Button/button-blue.vue';
import cardTemplate from '../Cards/card-template.vue'
export default {
    components: {
        buttonBlue,
        cardTemplate
    },
    data() {
        return {
            templates: [

                { id: 1, name: 'Tallent acquisition', img: '/src/assets/image/blob.svg' },
                { id: 2, name: 'Tallent acquisition', img: '/src/assets/image/blob.svg' },
                { id: 3, name: 'Tallent acquisition', img: '/src/assets/image/blob.svg' },
                { id: 5, name: 'Tallent acquisition', img: '/src/assets/image/blob.svg' },
                { id: 6, name: 'Tallent acquisition', img: '/src/assets/image/blob.svg' },
                { id: 7, name: 'Tallent acquisition', img: '/src/assets/image/blob.svg' },
                { id: 8, name: 'Tallent acquisition', img: '/src/assets/image/blob.svg' },
                { id: 9, name: 'Tallent acquisition', img: '/src/assets/image/blob.svg' },
                { id: 10, name: 'Tallent acquisition', img: '/src/assets/image/blob.svg' },
                { id: 11, name: 'Tallent acquisition', img: '/src/assets/image/blob.svg' },
                { id: 12, name: 'Tallent acquisition', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },


            ]
        };

    }
};
</script>
<style>
/* For WebKit based browsers (Chrome, Safari) */
.section-with-horizontal-scroll::-webkit-scrollbar {
    width: 0.5rem;
    /* Set the width of the scrollbar */
}

.section-with-horizontal-scroll::-webkit-scrollbar-track {
    background-color: transparent;
    /* Set the background color of the scrollbar area */
}

.section-with-horizontal-scroll::-webkit-scrollbar-thumb {
    background-color: #888;
    /* Set the color of the scrollbar thumb */
}

/* For Firefox */
.section-with-horizontal-scroll {
    scrollbar-width: thin;
    /* Set the width of the scrollbar */
}

.section-with-horizontal-scroll::-webkit-scrollbar,
.section-with-horizontal-scroll::-webkit-scrollbar-track,
.section-with-horizontal-scroll::-webkit-scrollbar-thumb {
    /* Hide the scrollbar for WebKit based browsers */
    display: none;
}
</style>
  