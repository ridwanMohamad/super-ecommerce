<template>
  <div class="flex flex-col bg-white rounded-lg shadow-lg p-4">
    <span v-if="product.discountPercent > 0"
      class="absolute inline-block bg-red-600 rounded px-2 py-1 text-white text-sm md:inline-block">
      {{ product.discountPercent }}% Off
    </span>
    <div class="h-[40vh] mx-auto">
      <img :src="product.image" :alt="product.title" class="max-h-[40vh] object-cover items-center self-center rounded">
    </div>
    <h3 class="text-base font-semibold mb-2 min-h-[8vh]">{{ $utils.ellipsis($utils.capitalizeFirstCharOfEachWord(product.title),25)  }}</h3>
    <div class="flex flex-row">
      <vue3-star-ratings v-model="product.rating.rate" starSize="16" :showControl=false :disableClick=true class="mr-1"/>({{ product.rating.count }})
    </div>
    <div class="mt-4 flex flex-row justify-between  items-center">
      <div class="flex flex-col">
        <span v-if="product.priceDiscount" class="text-gray-500 text-sm font-semibold line-through">{{
          $utils.currencyUSD(product.price) }}</span>
        <span class="text-green-600 font-semibold">{{
          $utils.currencyUSD((product.priceDiscount) ? product.priceDiscount : product.price) }}</span>
      </div>
      <button class="ml-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" @click="addToCart(product)">
        Add to Cart
      </button>
    </div>
  </div>
</template>


<script setup>
import { useNotification } from "@kyvg/vue3-notification";
import Vue3StarRatings from "vue3-star-ratings";
import { useStore } from "vuex";

const store = useStore();
defineProps({
  product: {
      type: Object,
      required: true
    }
})

function addToCart(item) {
  let payload = {
    productId: item.id,
    title: item.title,
    price: item.price,
    category: item.category,
    image: item.image,
    qty: 1,
    total: item.price
  }
  store.dispatch('Cart/updateCart', payload)
  const notification = useNotification()

  notification.notify({
    title: "Success",
    type:"success",
    text: "Product has been added to your cart."
  });
}
</script>