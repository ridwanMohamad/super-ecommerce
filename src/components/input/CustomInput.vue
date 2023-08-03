<script setup>
defineProps({
    id: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    modelValue: String,
    variant: {
        type: String,
        default: 'standart'
    },
    placeholder: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: ''
    },
    disable: {
        type: Boolean,
        default: false
    }
})
defineEmits(['blur', 'keyup.enter', 'update:modelValue'])
</script>
<template>
    <div class="relative">
        <i class="absolute fa fa-search text-gray-400 top-5 left-4"></i>
        <input :id="id" :value="modelValue" :type="type" :variant="variant" :placeholder="placeholder"
            class="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
            @input="$emit('update:modelValue', $event.target?.value)" @blur="$emit('blur', $event.target?.value)"
            @keyup.enter="$emit('keyup.enter')" />
        <span class="absolute top-4 right-5 border-l pl-4"><i
                class="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i></span>
    </div>
</template>