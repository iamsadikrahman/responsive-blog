import {defineStore} from 'pinia'

import {ref, reactive, computed} from 'vue'



const useBlogStore = defineStore('blog', ()=>{

    const posts = ref([])

    const getPosts = async () => {
        const res = await fetch('https://dummyjson.com/posts?limit=10')
        const data = await res.json()
        posts.value = data.posts
    }
    return {
        posts,
        getPosts
    }
})

export default useBlogStore


