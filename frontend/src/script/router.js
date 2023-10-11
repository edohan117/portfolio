import Home from "@/pages/Home";
import Memo from "@/pages/Memo.vue";
import TeamMatch from "@/pages/TeamMatch.vue";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

const routes = [
    {path: '/', component: Home},
    {path: '/memo', component: Memo},
    {path: '/teamMatch', component: TeamMatch},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;