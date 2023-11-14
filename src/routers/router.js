import { createRouter, createWebHistory } from "vue-router";
import Main from '@/pages/Main';
import Lists from '@/pages/Lists';

routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/Lists',
        component: Lists
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;