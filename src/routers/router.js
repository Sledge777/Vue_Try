import { createRouter, createWebHistory } from "vue-router";
import Main from '@/pages/Main';

router = [
    {
        path: '/',
        component: Main
    }
]

const routers = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default routers;