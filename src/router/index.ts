import { createRouter, createWebHashHistory } from 'vue-router';

const routerHistory = createWebHashHistory();

const LKDiscover = () => import('@/views/discover/Discover.vue');
const Recommend = () => import('@/views/discover/c-views/recommend/Recommend.vue');
const RankingList = () => import('@/views/discover/c-views/musiclist/RankingList.vue');

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '',
            redirect: '/discover'
        },
        {
            path: '/discover',
            component: LKDiscover,
            children: [
                {
                    path: '',
                    redirect: '/discover/recommend',
                },
                {
                    path: 'recommend',
                    component: Recommend,
                },
                {
                    path: 'musiclist',
                    component: RankingList
                }
            ]
        },
    ]
});

export default router;