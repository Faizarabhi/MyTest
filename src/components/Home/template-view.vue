<template>
    <div class="m-28 h-24 flex flex-col justify-center items-center gap-4">
        <h1 class="font-bold text-4xl">Get Started with templates</h1>
        <p>Best practices for your team.</p>
        <buttonBlue text="Browse for your team." />
        <!-- <img class="absolute z-10 bg-cover bg-center  bg-transparent" src="../../assets/image/blob.svg"/> -->
    </div>
    <div class="flex flex-wrap justify-center items-center ">
        <div v-for="template in templates" :key="template.id">
            <div class=" bg-white max-w-max h-64 m-4 flex flex-col justify-between content-between rounded-lg p-8 drop-shadow-xl">
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

                { id: 1, name: 'Tallent acquisition', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },
                { id: 2, name: 'Tallent acquisition', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },
                { id: 3, name: 'Tallent acquisition', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },
                { id: 5, name: 'Tallent acquisition', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },
                { id: 6, name: 'Tallent acquisition', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },
                { id: 7, name: 'Tallent acquisition', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },
                { id: 8, name: 'Tallent acquisition', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },


            ]
        };

    }
};
</script>
<!-- <style>
.custom-background {
    background-image: url('../../assets/image/blob.svg');
    object-fit: cover;
    background-repeat: no-repeat;
    /* width: 100rem; */
    height: 12%;
}
</style> -->
  