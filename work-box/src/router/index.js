import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "../components/page/HomePage.vue";
import TimeStamp from "../components/page/TimeStamp.vue";
import JsonFormat from "../components/page/JsonFormat.vue";

export const constantRouter = [
    {
        path:'/',
        component:HomePage
    },
    {
        path:'/timeStampChange',
        component: TimeStamp
    },
    {
        path:'/jsonFormat',
        component: JsonFormat
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes: constantRouter,
})
export default router