<script setup>
import CustomHeader from '@/components/header/CustomHeader.vue';
import CustomFooter from '@/components/footer/CustomFooter.vue';
</script>

<template>
  <div id="app" class="min-h-[100vh]">
    <CustomHeader/>
    <main class="container mx-auto px-3 mb-3 min-h-[78vh]">
      <router-view/>
    </main>
    <CustomFooter class="items-end"/>
    <notifications position="top center"/>
  </div>
</template>