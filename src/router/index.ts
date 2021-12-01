import { createRouter, createWebHashHistory } from 'vue-router';

const routerHistory = createWebHashHistory();

const LKDiscover = () => import('@/views/discover/Discover.vue');

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '',
            redirect: '/discover'
        },
        {
            path: '/discover',
            component: LKDiscover
        },
    ]
});

export default router;