import { createRouter, createWebHistory } from "vue-router";

import LandingPage from '../pages/LandingPage.vue'
import HomeLayouts from '../layouts/homeLayouts.vue'
const routes = [
    {

        path: "/",
        component: LandingPage,
        name: 'LandingPage',
    }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
}); 

export default router;
