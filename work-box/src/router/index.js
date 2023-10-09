import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history:createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/layout/index.vue'),
            children: [
                {
                  path:'',
                  component:()=>import('@/views/Home/index.vue')
                },
                {
                    path: '/timeStampChange',
                    component: () => import('@/views/utils/TimeStamp.vue')
                },
                {
                    path: '/jsonFormat',
                    component: () => import('@/views/utils/JsonFormat.vue')
                }
            ]
        },
    ]
});

export default router