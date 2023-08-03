<script setup>
defineProps({
    titleDropdown:{
        type:String,
        default:""
    }
})
</script>

<template>
    <div class="bg-red-500 text-white font-semibold py-2 px-4 rounded w-full">
        <slot name="content-dropdown"></slot>
    </div>
</template>
<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>