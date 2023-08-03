<template>
  <footer class="bg-red-600 text-white py-4 px-4 md:px-3 w-full">
    <div class="flex md:flex-row flex-col justify-between lg:mx-16 mb-5">
      <section v-for="item in footer" :key="item.title" class="mb-5">
        <h3 class="capitalize text-xl font-bold mb-3">{{ item.title }}</h3>
        <ul>
          <li v-for="child in item.list" :key="child.text" class="capitalize text-sm mb-1"><a :href="child.link"
              target="_blank">{{ child.text }}</a></li>
        </ul>
      </section>
    </div>
    <div class="container mx-auto">
      <p>&copy; 2023 Mohamad Ridwan. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
const footer = ref([
  {
    title: 'super indo',
    list: [
      {
        text: 'sejarah',
        link: 'https://www.superindo.co.id/korporasi-keberlanjutan/',
      },
      {
        text: 'berita korporasi',
        link: 'https://www.superindo.co.id/korporasi-keberlanjutan/corporate/news',
      },
      {
        text: 'private brand',
        link: 'https://www.superindo.co.id/private-brand/#indoculinaire',
      },
      {
        text: 'super indo berkebun',
        link: 'https://www.superindo.co.id/korporasi-keberlanjutan/superindoberkebun',
      },
    ]
  },
  {
    title: 'promosi',
    list: [
      {
        text: 'Katalog Super Hemat',
        link: 'https://www.superindo.co.id/promosi/katalog-super-hemat',
      },
      {
        text: 'Promo Partner',
        link: 'https://www.superindo.co.id/promosi/promo-partner',
      },
      {
        text: 'Promo Koran',
        link: 'https://www.superindo.co.id/promosi/promo-koran',
      },
      {
        text: 'Event Mendatang',
        link: 'https://www.superindo.co.id/super-event/event-mendatang',
      },
      {
        text: 'Fashion Reusable Bag',
        link: 'https://www.superindo.co.id/private-brand/fashion-reusable-bag',
      },
    ]
  },
  {
    title: 'artikel',
    list: [
      {
        text: 'info sehat',
        link: 'https://www.superindo.co.id/artikel/info-sehat',
      },
      {
        text: 'info resep',
        link: 'https://www.superindo.co.id/artikel/info-resep',
      },
      {
        text: 'pengetahuan produk',
        link: 'https://www.superindo.co.id/artikel/pengetahuan-produk',
      },
      {
        text: 'tips & trik',
        link: 'https://www.superindo.co.id/artikel/tips-dan-trik',
      },
    ]
  },
  {
    title: 'hubungi kami',
    list: [
      {
        text: 'customer service',
        link: 'https://www.superindo.co.id/hubungi-kami/customer-service',
      },
      {
        text: 'lokasi super indo',
        link: 'https://www.superindo.co.id/hubungi-kami/lokasi-superindo',
      },
      {
        text: 'karir',
        link: 'https://karir.superindo.co.id/',
      },
      {
        text: 'kerjasama',
        link: 'https://eregistration.superindo.co.id/',
      },
    ]
  }
])

const sosmed = ref([
  {
    text: 'facebook',
    icon: 'facebook-f.svg',
    link: 'https://facebook.com/superindosupermarket'
  },
  {
    text: 'twitter',
    icon: 'fa-brands fa-twitter',
    link: 'https://twitter.com/InfoSuperIndo'
  },
  {
    text: 'instagram',
    icon: 'fa-brands fa-intagram',
    link: 'https://instagram.com/InfoSuperIndo'
  },
  {
    text: 'youtube',
    icon: 'fa-brands fa-youtube',
    link: 'https://youtube.com/superindosupermarket'
  },
  {
    text: 'pinterest',
    icon: 'fa-brands fa-pinterest-p',
    link: 'https://pinterest.com/InfoSuperIndo'
  },
])
</script>