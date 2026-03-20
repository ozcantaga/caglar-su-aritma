<script setup>
const config = useAppConfig()
const { name,phone, email, whatsapp,address,socials,googleMapsLink } = config.contact
</script>
<template>
  <footer class="bg-[#050810] border-t border-slate-900 pt-20 pb-10">
    <div class="mx-auto max-w-7xl px-6">
      
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
        
        <div class="lg:col-span-1 space-y-6">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-black text-slate-900">S</div>
            <span class="text-xl font-black text-white tracking-tighter uppercase">SafSu<span class="text-emerald-500">.</span></span>
          </div>
          <p class="text-slate-500 text-sm leading-relaxed">
            2026 teknolojisi ile donatılmış, ters ozmoz tabanlı akıllı su arıtma çözümleri. Geleceğin suyunu bugünden için.
          </p>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-emerald-500 transition-colors group">
              <span class="text-slate-500 group-hover:text-slate-900 text-xs font-bold uppercase">Ig</span>
            </a>
            <a href="#" class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-emerald-500 transition-colors group">
              <span class="text-slate-500 group-hover:text-slate-900 text-xs font-bold uppercase">Fb</span>
            </a>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-8 lg:col-span-2">
          <div>
            <h4 class="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-6">Kurumsal</h4>
            <ul class="space-y-4 text-sm font-medium text-slate-500">
              <li><NuxtLink to="/" class="hover:text-emerald-500 transition-colors">Ana Sayfa</NuxtLink></li>
              <li><NuxtLink to="/products" class="hover:text-emerald-500 transition-colors">Ürün Katalog</NuxtLink></li>
              <li><NuxtLink to="/blog" class="hover:text-emerald-500 transition-colors">Su Rehberi (Blog)</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-emerald-500 transition-colors">Teknik Destek</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-6">Kategoriler</h4>
            <ul class="space-y-4 text-sm font-medium text-slate-500">
              <li><NuxtLink to="/products" class="hover:text-emerald-500 transition-colors">Ev Tipi Sistemler</NuxtLink></li>
              <li><NuxtLink to="/products" class="hover:text-emerald-500 transition-colors">Yedek Filtreler</NuxtLink></li>
              <li><NuxtLink to="/products" class="hover:text-emerald-500 transition-colors">Endüstriyel Çözümler</NuxtLink></li>
              <li><NuxtLink to="/products" class="hover:text-emerald-500 transition-colors">Aksesuarlar</NuxtLink></li>
            </ul>
          </div>
        </div>

        <div class="space-y-8">
          <div>
            <h4 class="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-6">İletişim</h4>
            <a :href="`tel:+90${phone}`" class="text-emerald-400 font-bold text-lg mb-1">{{ phone }}</a>
            <address class="text-white font-black text-[7px] uppercase tracking-[0.1em] mb-6">
            <a :href="`mailto:${email}`">{{ name }}</a><br>
              Adress:<br>
                {{ address }}<br>
          
</address>
            <p class="text-slate-500 text-xs uppercase tracking-widest">7/24 Teknik Destek Hattı</p>
          </div>
          <div class="flex items-center gap-4 opacity-30">
            <div class="px-2 py-1 border border-slate-700 rounded text-[8px] font-black text-white uppercase tracking-tighter">NSF Certified</div>
            <div class="px-2 py-1 border border-slate-700 rounded text-[8px] font-black text-white uppercase tracking-tighter">CE Approved</div>
            <div class="px-2 py-1 border border-slate-700 rounded text-[8px] font-black text-white uppercase tracking-tighter">ISO 9001</div>
          </div>
        </div>

      </div>

   <div class="container mx-auto px-6">
      <div class="mt-20 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p class="text-slate-500 text-sm italic">
          &copy; 2024 Çağlar Su Arıtma. Tüm hakları saklıdır.
        </p>

        <div class="flex items-center gap-6 text-sm">
          <div class="flex items-center gap-2 group">
            <span class="text-slate-600">Designed by</span>
            <span class="text-slate-400 font-medium group-hover:text-emerald-400 transition-colors">
              Özcan Tağa
            </span>
          </div>
          
          <a 
            href="mailto:ozcantaga@gmail.com" 
            class="flex items-center gap-2 text-slate-500 hover:text-white transition-all group"
          >
            <div class="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-all">
              <i class="fa-regular fa-envelope text-xs"></i>
            </div>
            <span class="border-b border-transparent group-hover:border-emerald-500/30 pb-0.5">
              ozcantaga@gmail.com
            </span>
          </a>
        </div>

      </div>
    </div>

    </div>
  </footer>
</template>

<style scoped>
/* Footer linklerinde yumuşak bir hover efekti */
a {
  transition: all 0.3s ease;
}
</style>