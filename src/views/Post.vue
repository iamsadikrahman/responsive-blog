<script setup>

import { onBeforeMount } from 'vue';
import useBlogStore from '../store/store';
import { useRoute } from 'vue-router'


const blogStore = useBlogStore()
const route = useRoute()
const id = route.params.id

onBeforeMount( async()=> {
  await blogStore.getSinglePost(id)
})

</script>

<template>
  <h1>Post Page</h1>
  {{ blogStore.singlePost }}
</template>

<style scoped>
</style>
