// Post.vue

<script setup>
import { onBeforeMount } from "vue";
import useBlogStore from "../store/store";
import { useRoute } from "vue-router";

const blogStore = useBlogStore();
const route = useRoute();
const id = route.params.id;

onBeforeMount(async () => {
  await blogStore.getSinglePost(id);
  await blogStore.getSingleComment(id);
});
</script>

<template>
  <div class="content-area mb-40">
    <h1 class="text-3xl font-semibold my-5">{{ blogStore.singlePost.title }}</h1>
    <p>{{ blogStore.singlePost.body }}</p>
  </div>
  <div class="comments">
    <h1 class="text-3xl font-semibold my-5">Comments</h1>
    <section>
      <div
        class="my-5"
        v-for="comment in blogStore.singleComment.comments"
        :key="comment.id"
      >
        <p class="font-semibold">{{ comment.user["username"] }} Says:</p>
        <p>{{ comment.body }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
