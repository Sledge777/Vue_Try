import { createRouter, createWebHistory } from "vue-router";
import Main from '@/pages/Main';
import Lists from '@/pages/Lists'
import about from '@/pages/about'
import postId from '@/pages/postId'
import ListsWithVuex from '@/pages/ListsWithVuex'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/Lists',
        component: Lists
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/post/:id',
        component: postId
    },
    {
        path: '/vuex',
        component: ListsWithVuex
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router;