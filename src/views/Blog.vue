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
            <h2>{{post.title}}</h2>
          </div>
    </section>
</template>

<style scoped>
</style>
