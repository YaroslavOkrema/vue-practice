import Main from "@/pages/Main/Main.vue"
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage/PostPage.vue";
import About from "@/pages/About/About.vue";
import PostIdPage from "@/pages/PostIdPage/PostIdPage.vue";
import PostPageWithStore from "@/pages/PostPageWithStore/PostPageWithStore.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;