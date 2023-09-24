import {defineStore} from 'pinia'

import {ref, reactive, computed} from 'vue'



const useBlogStore = defineStore('blog', ()=>{

    const posts = ref([])
    const singlePost = reactive({})
    const singleComment = ref({})

    const getPosts = async () => {
        const res = await fetch('https://dummyjson.com/posts?limit=10')
        const data = await res.json()
        posts.value = data.posts
    }


    const getSinglePost = async (id)=>{
        const res = await fetch(`https://dummyjson.com/posts/${id}`)
        const data = await res.json()
        Object.assign(singlePost, data)
    }
    

    const getSingleComment = async (id)=>{
        const res= await fetch (`https://dummyjson.com/posts/${id}/comments`)
        const data = await res.json()
        singleComment.value = data

    }



    return {
        posts,
        getPosts,
        getSinglePost,
        singlePost,
        getSingleComment,
        singleComment
    }
})

export default useBlogStore