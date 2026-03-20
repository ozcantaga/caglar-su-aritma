<template>
  <nav class="border-b border-slate-700/30 sticky top-0 bg-slate-900/80 backdrop-blur-md z-50">
    <div class="container mx-auto px-6 py-5 flex justify-between items-center">
      <NuxtLink to="/" >
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
      <div class="hidden md:flex items-center space-x-10 text-sm font-medium">
         <NuxtLink to="/" class="hover:text-emerald-400 transition-colors">Anasayfa</NuxtLink>
        <NuxtLink to="/products" class="hover:text-emerald-400 transition-colors">Ürünlerimiz</NuxtLink>
        <NuxtLink to="/about" class="hover:text-emerald-400 transition-colors">Hakkımızda</NuxtLink>
          <NuxtLink to="/blog" class="hover:text-emerald-400 transition-colors">Blog</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-emerald-400 transition-colors">İletişim</NuxtLink>
      
      </div>
    </div>
  </nav>
</template>