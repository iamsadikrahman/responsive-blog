// Blog.vue

<script setup>
import { onBeforeMount } from "vue";

import useBlogStore from "../store/store.js";

const blogStore = useBlogStore();

onBeforeMount(async () => {
  await blogStore.getPosts();
});

function getSlug(title) {
  return title.toLowerCase().replace(/\s+/g, "-");
}
</script>

<template>
  <section>
    <div v-for="post in blogStore.posts" :key="post.id" class="">
      <router-link :to="`/blog/${post.id}/${post.title.replace(/\s+/g, '-')}`"
        ><h2 class="text-2xl font-medium text-red-800 my-5">Title: {{ post.title }}</h2>
      </router-link>
      <hr />
    </div>
  </section>
</template>

<style scoped></style>
