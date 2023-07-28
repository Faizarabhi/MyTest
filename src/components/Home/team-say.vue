<template>
    <div class=" m-28 justify-center items-center  ">
        <div>
            <!-- <div class="font-bold text-4xl">What happy teams have to say.</div> -->
        </div>
        <div class="flex flex-wrap  justify-left items-left ">
            <div v-for="opinion in opinions" :key="opinion.author">
                <div class=" bg-white w-96 h-64 m-8 flex flex-col justify-between rounded-lg p-8 drop-shadow-xl">
                    <cardTeams :opinion="opinion" />
                </div>
            </div>
            <div class="flex flex-col justify-center items-center  ">
                <!-- <div>
                    Read more
                </div>
                <div>
                    review -> 
                </div>-->
            </div>
        </div>
        <div class="flex flex-col justify-center items-center  ">
            <buttonBlue text="Sign me up" class="bg-sky-500 text-white border-0" />
        </div>
    </div>
</template>
<script>
import cardTeams from '../Cards/card-teams.vue';
import buttonBlue from '../Button/button-blue.vue';
export default {
    components: {
        cardTeams,
        buttonBlue
    },
    data() {
        return {
            opinions: [

                { title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse blanditiis earum.', author: 'FLORE ELIA', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },
                { title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse blanditiis earum.', author: 'FLORE ELIA', img: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
                { title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse blanditiis earum.', author: 'FLORE ELIA', img: 'https://images.pexels.com/photos/3646160/pexels-photo-3646160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
                { title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse blanditiis earum.', author: 'FLOREN ELIAM', img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' },
                { title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse blanditiis earum.', author: 'FLORE ELIA', img: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
                // { title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse blanditiis earum.', author: 'FLORE ELIA', img: 'https://images.pexels.com/photos/3646160/pexels-photo-3646160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },



            ]
        };

    }
};
</script>