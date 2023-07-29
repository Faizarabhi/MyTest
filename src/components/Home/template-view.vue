<template>
    <div class="m-28 h-24 flex flex-col justify-center items-center gap-4">
        <h1 class="font-bold text-4xl">Get Started with templates</h1>
        <p>Best practices for your team.</p>
        <buttonBlue text="Browse for your team." />
    </div>
    <div class="flex section-with-horizontal-scroll overflow-x-auto overflow-hidden">
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

                { id: 1, name: 'Tallent acquisition', img: '../../assets/image/blob.svg' },
                { id: 2, name: 'Tallent acquisition', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },
                { id: 3, name: 'Tallent acquisition', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },
                { id: 5, name: 'Tallent acquisition', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },
                { id: 6, name: 'Tallent acquisition', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },
                { id: 7, name: 'Tallent acquisition', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },
                { id: 8, name: 'Tallent acquisition', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },
                { id: 9, name: 'Tallent acquisition', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },
                { id: 10, name: 'Tallent acquisition', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },
                { id: 11, name: 'Tallent acquisition', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },
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
}</style>
  