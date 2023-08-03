<template>
    <div class="relative">
        <div class="flex flex-row px-3 py-2">
            <div class="w-14 h-14 self-center mr-3">
                <img :src="items.image" :alt="items.title" />
            </div>
            <div class="flex flex-col w-full">
                <h1>{{ items.title }}</h1>
                <span class="text-gray-400 italic">{{ items.category }}</span>
                <span>{{ $utils.currencyUSD(items.price) }}</span>
                <hr class="border border-solid my-2" />
                <div class="flex flex-row justify-between">
                    <h1 class="font-bold mt-3">Sub Total : {{ $utils.currencyUSD(items.total) }}</h1>
                    <div class="flex flex-row">
                        <a class="float-right p-2 text-red-400 border border-solid mr-3 rounded-md border-red-400"
                            @click="removeItem"><i class="fa fa-trash"></i></a>
                        <Counter class="self-center" :quantity="items.qty" @decrement="decrement" @increment="increment" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Counter from "@/components/counter/Counter.vue"
import { useNotification } from "@kyvg/vue3-notification";
import { useStore } from "vuex";
const props = defineProps(['items'])
const store = useStore();
function decrement() {
    props.items.qty -= 1;
    props.items.total = props.items.qty * props.items.price;
    store.dispatch('Cart/updateCart', props.items)
}
function increment() {
    props.items.qty += 1;
    props.items.total = props.items.qty * props.items.price;
    store.dispatch('Cart/updateCart', props.items)
}
function removeItem() {
    store.dispatch('Cart/removeItem', props.items)

    const notification = useNotification()

    notification.notify({
        title: "Success",
        type: "success",
        text: "Item has been removed."
    });
}
</script>
