import {defineStore} from 'pinia'

import {ref, reactive, computed} from 'vue'



const useBlogStore = defineStore('blog', ()=>{

    const posts = ref([])
    let singlePost = ref({})

    const getPosts = async () => {
        const res = await fetch('https://dummyjson.com/posts?limit=10')
        const data = await res.json()
        posts.value = data.posts
    }


    const getSinglePost = async (id)=>{
        const res = await fetch(`https://dummyjson.com/posts/${id}`)
        const data = await res.json()
        singlePost.value = data
    }

    return {
        posts,
        getPosts,
        getSinglePost,
        singlePost
    }
})

export default useBlogStore


