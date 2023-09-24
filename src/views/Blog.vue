<script setup>

import { onBeforeMount } from 'vue';

import useBlogStore from '../store/store.js'

const blogStore = useBlogStore()

onBeforeMount(async () => {
  await blogStore.getPosts()
})



</script>

<template>
    <section>
          <div v-for="post in blogStore.posts" :key="post.id" class="">
            <router-link :to="`/blog/${post.id}`"><h2 class="text-2xl text-red-800 my-5">Title: {{ post.title }}</h2></router-link>
            
          </div>
    </section>
</template>

<style scoped>
</style>
