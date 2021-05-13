import Vue from 'vue'
import VueRouter from 'vue-router'

import Gallery from '../views/Gallery.vue'
import AboutMe from '../views/AboutMe.vue'
import ImageInfo from '../views/ImageInfo.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'mainPage',
        component: Gallery
    },
    {
        path: '/aboutMe',
        name: 'aboutMe',
        component: AboutMe
    },
    {
        path: '/imageInfo/:id',
        name: 'imageInfo',
        component: ImageInfo
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
