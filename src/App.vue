<script setup>
</script>

<template>
  <header class="bg-black h-[100px] text-white flex justify-center items-center border-b-2 ">
    <nav class="" >
      <h1 class="text-3xl font-bold">Responsive Blog</h1>

    </nav>
  </header>
  <section class="flex space-x-5 space-y-5"> 
    <aside class=" w-2/12 text-white h-screen bg-black flex justify-center items-center">
        <router-view name="LeftSideBar"></router-view>
  </aside>

  <main class=" w-10/12">
    <router-view></router-view>
  </main>
  </section>
  
</template>

<style scoped>
</style>
