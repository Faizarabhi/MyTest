import { createRouter, createWebHistory } from "vue-router";

import LandingPage from '../pages/LandingPage.vue'
import HomeLayouts from '../layouts/homeLayouts.vue'
const routes = [
    {
        // path: '/',
        // name: 'LandingPage',
        // component: LandingPage,
        // // meta: {Layout : LandingPage}
        path: '/',
        component: HomeLayouts,
        children: [
          
          { path: '', component: HelloWorld },
        ],
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
