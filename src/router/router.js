import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Blog from '../views/Blog.vue'
import Post from '../views/Post.vue'
import Author from '../views/Author.vue'
import NotFound from '../views/NotFound.vue'

import LeftSideBar from '../components/LeftSideBar.vue'




const routes = [
    {
        path: '/',
        components: {
            default: Home,
            LeftSideBar: LeftSideBar
        }

    },
    {
        path: '/about',
        components: {
            default: About,
            LeftSideBar: LeftSideBar
        }
    },
    {
        path: '/contact',
        components: {
            default: Contact,
            LeftSideBar: LeftSideBar
        }
    },
    {
        path: '/blog',
        components: {
            default: Blog,
            LeftSideBar: LeftSideBar
        }
    },
    {
        path: '/blog/:id/:title',
        components: {
            default: Post,
            LeftSideBar: LeftSideBar
        },
        name: 'Post'
    },
    {
        path: '/author/:id',
        components: {
            default: Author,
            LeftSideBar: LeftSideBar
        }
    },
    {
        path: '/:pathMatch(.*)*',
        components: {
            default: NotFound,
            LeftSideBar: LeftSideBar
        }
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router