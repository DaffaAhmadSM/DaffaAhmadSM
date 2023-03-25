import home from '../views/Home.vue'
import About from '../views/About.vue'
import works from '../views/Works.vue'
import notFound from '../views/Error/404.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name:"home" ,component: home },
        { path: '/about', name:"about" ,component: About},
        {path:'/works', name:"works", component: works},
        { path: '/:pathMatch(.*)*', name:"notFound" ,component: notFound, meta:{
            hidenav: true
        }}
    ]
})

export default routes