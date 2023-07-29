import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from '../pages/HelloWorld.vue'
import HomeLayouts from '../layouts/homeLayouts.vue'
const routes = [
    {
        // path: '/',
        // name: 'HelloWorld',
        // component: HelloWorld,
        // // meta: {Layout : HomeLayout}
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
