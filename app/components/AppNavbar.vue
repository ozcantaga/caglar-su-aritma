<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

// Menü tıklandığında otomatik kapanması için
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="border-b border-slate-700/30 sticky top-0 bg-slate-900/80 backdrop-blur-md z-50">
    <div class="container mx-auto px-6 py-5 flex justify-between items-center">
      <NuxtLink to="/" @click="closeMenu">
        <div class="flex items-center space-x-2 group cursor-pointer">
          <div class="relative">
            <i class="fa-solid fa-droplet text-emerald-400 text-3xl animate-pulse"></i>
            <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full blur-[2px]"></div>
          </div>
          <div class="leading-none">
            <span class="text-2xl font-black text-white tracking-tighter block uppercase">ÇAĞLAR</span>
            <span class="text-[10px] tracking-[0.4em] text-emerald-400 font-bold uppercase">Su Arıtma</span>
          </div>
        </div>
      </NuxtLink>

      <div class="hidden md:flex items-center space-x-10 text-sm font-medium text-slate-300">
        <NuxtLink to="/" class="hover:text-emerald-400 transition-colors">Anasayfa</NuxtLink>
        <NuxtLink to="/products" class="hover:text-emerald-400 transition-colors">Ürünlerimiz</NuxtLink>
        <NuxtLink to="/about" class="hover:text-emerald-400 transition-colors">Hakkımızda</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-emerald-400 transition-colors">Blog</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-emerald-400 transition-colors">İletişim</NuxtLink>
      </div>

      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white p-2">
        <i :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" class="text-2xl text-emerald-400"></i>
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-slate-900 border-b border-slate-700 px-6 py-8 space-y-6 flex flex-col items-center text-center shadow-2xl">
        <NuxtLink to="/" @click="closeMenu" class="text-lg font-semibold text-white hover:text-emerald-400">Anasayfa</NuxtLink>
        <NuxtLink to="/products" @click="closeMenu" class="text-lg font-semibold text-white hover:text-emerald-400">Ürünlerimiz</NuxtLink>
        <NuxtLink to="/about" @click="closeMenu" class="text-lg font-semibold text-white hover:text-emerald-400">Hakkımızda</NuxtLink>
        <NuxtLink to="/blog" @click="closeMenu" class="text-lg font-semibold text-white hover:text-emerald-400">Blog</NuxtLink>
        <NuxtLink to="/contact" @click="closeMenu" class="text-lg font-semibold text-white hover:text-emerald-400">İletişim</NuxtLink>
      </div>
    </Transition>
  </nav>
</template>