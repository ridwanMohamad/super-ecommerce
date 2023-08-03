<template>
    <nav class="header-container bg-red-600 sticky top-0 z-50">
        <a class="w-14 h-14 cursor-pointer" @click="$router.push({ name: 'home' })">
            <img :src="urlLogo" alt="superindo_logo">
        </a>
        <div class="flex nowrap items-center md:w-3/5 w-4/6">
            <CustomInput variant="outline" placeholder="Cari di Super Indo"
                class="shadow rounded-md w-full">
                <template #prepend-inner>
                    <span class="material-symbols-outlined">search</span>
                </template>
            </CustomInput>
        </div>
        <div class="grid md:grid-cols-2 md:gap-5 items-center text-white ">
            <div class="flex flex-row-reverse flex-nowrap h-8">
                <div v-for="menu in menus" :key="menu.text" :class="`item md:px-3 md:py-1 items-center  ${menu.text}`">
                    <div class="relative w-8 h-8" v-if="menu.routeName == 'cart'">
                        <!-- Your content here -->
                        <a class="text-primary cursor-pointer" @click="$router.push({ name: menu.routeName })">
                            <span class="text-right material-symbols-outlined self-center">{{ menu.icon }}</span>
                        </a>
                        <!-- Count badge positioned in the top-right corner -->
                        <div v-if="countCartItem"
                            class="absolute top-0 right-0 text-xs flex items-center justify-center w-4 h-4 bg-white text-red-500 rounded-full">
                            {{ countCartItem }}
                        </div>
                    </div>
                    <a v-else class="text-primary cursor-pointer" @click="$router.push({ name: menu.routeName })">
                        <span class="text-right material-symbols-outlined self-center">{{ menu.icon }}</span>
                    </a>
                </div>
            </div>
            <a class="hidden md:flex nowrap items-center w-34">
                <div class="account-avatar--wrapper">
                    <img :src="store.state.Users.profile.avatar" alt="avatar">
                </div>
                <div class="flex flex-col w-1/2">
                    <span class="ml-2 text-base font-bold">
                        {{ store.state.Users.profile.username.toUpperCase() }}
                    </span>
                    <span class="ml-2 text-sm italic">
                        {{ store.state.Users.profile.status }}
                    </span>
                </div>
            </a>
        </div>
    </nav>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import CustomInput from "../input/CustomInput.vue";
const store = useStore()
const urlLogo = computed(() => store.state.AppIcon)

const countCartItem = computed(() => store.state.Cart.totalItem)

const menus = [
    {
        text: 'cart',
        icon: 'shopping_cart',
        routeName: 'cart'
    },
]

</script>



<style scoped>
.account-avatar--wrapper {
    @apply bg-blue-200 rounded-full h-8 w-8
}


.account-avatar--wrapper img {
    @apply w-8 h-8 rounded-full
}

.header-container {
    @apply flex-shrink flex flex-wrap items-center justify-between px-2 py-3 mb-3 shadow px-4 w-full
}
</style>