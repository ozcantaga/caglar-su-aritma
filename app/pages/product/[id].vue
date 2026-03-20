<template>
  <div class="bg-[#0f172a] min-h-screen text-slate-300 font-['Inter'] selection:bg-emerald-500/30">
    <AppNavbar />

    <div v-if="product" class="container mx-auto px-6 py-12 lg:py-20 animate-page-in">
      
      <NuxtLink to="/products" class="inline-flex items-center gap-3 text-slate-500 hover:text-emerald-400 transition mb-12 group">
        <div class="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
          <i class="fa-solid fa-arrow-left text-xs"></i>
        </div>
        <span class="text-[10px] font-black uppercase tracking-widest">Kataloğa Dön</span>
      </NuxtLink>

      <div class="flex flex-col lg:flex-row gap-16 items-start">
        
        <div class="w-full lg:w-1/2 space-y-8 lg:sticky lg:top-24">
          <div class="relative bg-slate-900 border border-slate-800 rounded-[3rem] p-10 md:p-20 overflow-hidden shadow-2xl group/img">
            <div class="absolute inset-0 bg-emerald-500/5 blur-[100px] group-hover/img:bg-emerald-500/10 transition-all"></div>
            <img 
              :src="product.mainImage || '/images/placeholder.png'" 
              :alt="product.urun_adi"
              class="w-full h-auto max-h-[500px] object-contain relative z-10 transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div v-if="product.sertifikalar && product.sertifikalar.length" class="flex flex-wrap justify-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <div v-for="cert in product.sertifikalar" :key="cert" class="px-4 py-2 border border-slate-800 rounded-xl text-[9px] font-black tracking-widest text-white bg-slate-900/50 uppercase">
              {{ cert }}
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2 space-y-12">
          
          <div class="space-y-6">
            <div class="flex flex-wrap items-center gap-4">
              <span class="bg-emerald-500/10 text-emerald-400 text-[10px] font-black px-4 py-1.5 rounded-full border border-emerald-500/20 uppercase tracking-[0.2em]">
                {{ product.kategori_id === 'cihazlar' ? (product.filtrasyon_teknolojisi || 'Su Arıtma Sistemi') : product.kategori_id }}
              </span>
              <span v-if="product.marka" class="bg-slate-800 text-slate-400 text-[10px] font-black px-4 py-1.5 rounded-full border border-slate-700 uppercase tracking-[0.2em]">
                {{ product.marka }}
              </span>
            </div>
            
            <h1 class="text-5xl lg:text-7xl font-black text-white leading-[0.9] uppercase tracking-tighter">
              {{ product.urun_adi }}
            </h1>
            
            <p v-if="product.model" class="text-slate-400 text-lg leading-relaxed max-w-xl">
              {{ product.model }} {{ product.kasa_tipi ? product.kasa_tipi + ' yapısı ve' : '' }} 
              {{ product.filtre_sayisi ? product.filtre_sayisi + ' aşamalı filtrasyonu ile' : '' }} 
              suyunuzu en saf haline ulaştırır.
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div v-if="product.gunluk_kapasite_litre" class="p-4 rounded-3xl bg-slate-900/50 border border-slate-800/50">
              <p class="text-[9px] text-slate-500 uppercase font-black mb-1">Kapasite</p>
              <p class="text-white font-bold text-sm">{{ product.gunluk_kapasite_litre }} L/Gün</p>
            </div>
            <div v-if="product.tank_kapasitesi_litre" class="p-4 rounded-3xl bg-slate-900/50 border border-slate-800/50">
              <p class="text-[9px] text-slate-500 uppercase font-black mb-1">Tank</p>
              <p class="text-white font-bold text-sm">{{ product.tank_kapasitesi_litre }} Litre</p>
            </div>
            <div v-if="product.filtre_sayisi" class="p-4 rounded-3xl bg-slate-900/50 border border-slate-800/50">
              <p class="text-[9px] text-slate-500 uppercase font-black mb-1">Aşama</p>
              <p class="text-white font-bold text-sm">{{ product.filtre_sayisi }} Filtre</p>
            </div>
            <div v-if="product.malzeme" class="p-4 rounded-3xl bg-slate-900/50 border border-slate-800/50">
              <p class="text-[9px] text-slate-500 uppercase font-black mb-1">Malzeme</p>
              <p class="text-white font-bold text-sm">{{ product.malzeme }}</p>
            </div>
            <div v-if="product.voltaj" class="p-4 rounded-3xl bg-slate-900/50 border border-slate-800/50">
              <p class="text-[9px] text-slate-500 uppercase font-black mb-1">Güç</p>
              <p class="text-white font-bold text-sm">{{ product.voltaj }}</p>
            </div>
            <div v-if="product.garanti_suresi_yil" class="p-4 rounded-3xl bg-slate-900/50 border border-slate-800/50">
              <p class="text-[9px] text-slate-500 uppercase font-black mb-1">Garanti</p>
              <p class="text-white font-bold text-sm">{{ product.garanti_suresi_yil }} Yıl</p>
            </div>
          </div>

          <div v-if="product.filtre_asamalari && product.filtre_asamalari.length" class="space-y-6">
            <h3 class="text-white font-bold uppercase tracking-widest text-xs flex items-center gap-3">
              <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Sistem Aşamaları
            </h3>
            <div class="grid grid-cols-1 gap-3">
              <div v-for="(step, index) in product.filtre_asamalari" :key="index" 
                   class="flex items-center gap-4 bg-slate-900/30 p-4 rounded-2xl border border-slate-800/50 hover:border-emerald-500/30 transition-all group">
                <span class="text-emerald-500/40 group-hover:text-emerald-400 font-black text-xs">
                  {{ (index + 1).toString().padStart(2, '0') }}
                </span>
                <span class="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{{ step }}</span>
              </div>
            </div>
          </div>

          <div v-if="product.ozellikler || product.islev" class="space-y-6">
            <h3 class="text-white font-bold uppercase tracking-widest text-xs">Teknik Detaylar</h3>
            <ul class="space-y-3">
              <li v-if="product.islev" class="text-sm text-slate-400 flex gap-3">
                <span class="text-emerald-500">✓</span> <strong>İşlev:</strong> {{ product.islev }}
              </li>
              <li v-for="ozellik in product.ozellikler" :key="ozellik" class="text-sm text-slate-400 flex gap-3">
                <span class="text-emerald-500">✓</span> {{ ozellik }}
              </li>
            </ul>
          </div>

          <div v-if="product.renk_secenekleri && product.renk_secenekleri.length" class="space-y-4">
            <h3 class="text-white font-bold uppercase tracking-widest text-xs">Renk Seçenekleri</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="renk in product.renk_secenekleri" :key="renk" 
                    class="px-4 py-2 rounded-xl bg-slate-800 text-slate-400 text-[10px] font-bold uppercase border border-slate-700">
                {{ renk }}
              </span>
            </div>
          </div>

          <div class="bg-slate-900 rounded-[2.5rem] p-8 border border-slate-800 space-y-8 shadow-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl"></div>
            
            <div class="flex flex-col">
              <p class="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Bilgi ve Sipariş Hattı</p>
              <h4 class="text-white text-xl font-black uppercase">Bu Ürün İçin Fiyat Alın</h4>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <a 
                :href="`https://wa.me/${cleanWhatsapp}?text=Merhaba, ${product.urun_adi} (${product.model || ''}) ürünü hakkında güncel bilgi ve fiyat alabilir miyim?`" 
                target="_blank"
                class="flex-[2] bg-emerald-500 hover:bg-white text-slate-900 font-black py-5 rounded-2xl text-center transition-all duration-500 flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20"
              >
                <i class="fa-brands fa-whatsapp text-xl"></i>
                WHATSAPP İLE TEKLİF AL
              </a>
            </div>
            
            <p v-if="product.kategori_id === 'cihazlar'" class="text-[9px] text-slate-600 uppercase font-black tracking-widest text-center">
              * Cihaz fiyatlarımıza standart kurulum ve ilk filtre seti dahildir.
            </p>
          </div>

        </div>
      </div>
    </div>

    <div v-else class="container mx-auto px-6 py-40 text-center">
      <div class="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
      <p class="text-slate-500 tracking-widest uppercase text-[10px] font-black">Teknik Veriler Yükleniyor...</p>
    </div>
  </div>
</template>

<script setup>
import productData from '~/assets/data/products.json'

const route = useRoute()
const config = useAppConfig()

const cleanWhatsapp = computed(() => {
  const num = config.contact?.whatsapp || "905362645940"
  return num.replace(/[^0-9]/g, '')
})

const product = computed(() => {
  const list = Array.isArray(productData) ? productData : [productData]
  return list.find(p => p.id === route.params.id)
})

useHead({
  title: product.value ? `${product.value.urun_adi} | Çağlar Su Arıtma` : 'Ürün Detayı',
  meta: [
    { name: 'description', content: product.value ? `${product.value.urun_adi} teknik özellikleri ve teklif al.` : '' }
  ]
})
</script>

<style scoped>
@keyframes pageIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-page-in {
  animation: pageIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
</style>