import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: DefaultLayout,
            name: 'Home',
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: () => import('@/pages/HomePage.vue')
                }
            ]
        }
    ]
})

export default router
