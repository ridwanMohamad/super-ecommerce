<template>
  <div v-if="carts.totalItem == 0"
    class="flex flex-col justify-center align-middle items-center h-[78vh] px-8 text-center">
    <img src="@/assets/empty-cart.svg" alt="Empty State" class="h-52 w-52" />
    <h2 class="text-3xl">Your Cart is Empty</h2>
    <p class="text-sm text-gray-400 mb-5">Look's like you haven't added anything to your cart yet!</p>
    <button class="rounded bg-red-500 text-white py-2 px-3" @click="$router.push({ name: 'home' })">Shop Now</button>
  </div>
  <div v-else>
    <div class="flex md:flex-row flex-col">

      <div class="rounded shadow md:col-span-2 px-6 py-4 mb-3 content-center md:w-8/12">
        <button class="text-left text-base mr-3 w-full mb-3 md:mb-5 align-middle flex" @click="$router.push({ name: 'home' })">
          <span class="material-symbols-outlined mr-3">
            arrow_back
          </span> 
          <span> Back to shop</span>
        </button>
        <span class="font-bold md:text-2xl text-center md:text-left text-base mr-3 w-full md:w-1/2 mb-3 md:mb-5">Shopping
          Cart</span>
        <hr class="border border-solid my-2" />
        <div v-for="item in carts.product" :key="item.productId">
          <ItemCart :items="item" />
        </div>
      </div>
      <div class="rounded shadow px-6 py-4 flex flex-col ml-3 md:w-4/12 h-[42vh]">
        <span
          class="font-bold md:text-2xl text-center md:text-left text-base mr-3 w-full md:w-1/2 mb-3 md:mb-5">Summary</span>
        <hr class="border border-solid my-2" />
        <div class="flex flex-col flex-grow">
          <div class="flex flex-row justify-between">
            <span>Total Item ({{ carts.totalItem }})</span>
            <span>{{ $utils.currencyUSD(carts.totalPrice) }}</span>
          </div>
          <div class="flex flex-row justify-between">
            <span>PPN (11%)</span>
            <span>{{ $utils.currencyUSD(carts.totalPrice * (11 / 100)) }}</span>
          </div>
          <hr class="border border-solid my-2" />
          <div class="flex flex-row justify-between">
            <span class="font-bold text-xl">Total</span>
            <span class="font-bold text-xl">{{ $utils.currencyUSD(carts.totalPrice * (11 / 100) + carts.totalPrice) }}</span>
          </div>
        </div>
        <button class="text-center w-full align-bottom bg-red-500 rounded py-3 text-white">Checkout</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ItemCart from '@/components/card/ItemCart.vue'

const store = useStore()
const carts = computed(() => store.getters['Cart/getAllCart']);

</script>
