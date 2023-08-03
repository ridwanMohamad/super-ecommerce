<template>
  <div class="home  md:my-10">
    <div class="flex flex-col md:flex-row justify-between">
      <span class="font-bold md:text-xl text-center md:text-left text-base mr-3 w-full md:w-1/2 mb-3 md:mb-0">POPULAR
        PRODUCTS</span>
      <Dropdown titleDropdown="Sort by" class="w-full md:w-1/5">
        <template #content-dropdown>
          <select v-model="sortBySelected" @change="sortByOnChange" class="bg-transparent focus:outline-none w-full">
            <optgroup v-for="sort in sortBy" :key="sort.value" :label="sort.text">
              <option v-for="itemSort in sort.sort" :key="sort.value + itemSort.value" :value="{...itemSort,name:sort.value}">{{sort.text + " "+itemSort.text}}</option>
            </optgroup>
          </select>
        </template>
      </Dropdown>
    </div>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 w-full gap-5">
      <div v-for="product in productList" :key="product.id">
        <card-product :product="product" />
      </div>
    </div>
  </div>
</template>
<script setup>
import CardProduct from '@/components/card/CardProduct.vue';
import Dropdown from '@/components/dropdown/Dropdown.vue';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const productList = computed(() => store.getters['Products/getAllProducts']);
let sortBy = ref([
  {
    value: 'name',
    text: 'Product Name',
    sort: [
      { value: 'asc', text: '(A - Z)' },
      { value: 'desc', text: '(Z - A)' }
    ]
  },
  {
    value: 'price',
    text: 'Price',
    sort: [
      { value: 'asc', text: 'Lowest' },
      { value: 'desc', text: 'Highest' }
    ]
  }
])

let sortBySelected = ref({
  name:'name',
  value: 'asc',
  text: '(A - Z)'
})

let filter = ref({
  sortBy: sortBySelected.value.name,
  sort: sortBySelected.value.value
})

function sortByOnChange() {
  filter.value.sortBy = sortBySelected.value.name
  filter.value.sort = sortBySelected.value.value
  applyFilter()
}

function applyFilter() {
  store.commit('Products/sortProducts', { name: filter.value.sortBy, value: filter.value.sort })
}

onMounted(async () => {
  try {
    await store.dispatch('Products/fetchDataProduct').then(res => {
      applyFilter()
    }); // Replace 1 with the desired user ID
  } catch (error) {
    console.error(error.message);
  }

});
</script>
