<template>
    <div class="custom-number-input h-10 w-24">
        <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent">
            <button  @click="$emit('decrement')" :disabled="quantity == 0"
                class="bg-gray-300 text-gray-600 disabled:cursor-not-allowed hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                <span class="m-auto  text-sm font-thin">−</span>
            </button>
            <input type="number"
                class="focus:outline-none text-sm text-center w-full bg-gray-300 font-bold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                name="custom-input-number" :value="quantity"/>
            <button @click="$emit('increment')"
                class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                <span class="m-auto  text-sm font-thin">+</span>
            </button>
        </div>
    </div>
</template>

<script setup>
defineProps(['quantity'])
defineEmits(['increment', 'decrement', 'update:quantity'])
</script>


