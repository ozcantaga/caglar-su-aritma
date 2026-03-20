<template>
  <div class="bg-[#0f172a] min-h-screen text-slate-300 font-['Inter'] selection:bg-emerald-500/30">
    <AppNavbar />

    <main class="mx-auto max-w-7xl px-6 py-16 lg:py-24">
      <header class="mb-12 relative">
        <div class="absolute -left-10 -top-10 w-32 h-32 bg-emerald-500/10 blur-[80px] rounded-full"></div>
        <h1 class="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight">
          Yedek Parça <span class="text-emerald-500">&</span> Aksesuar
        </h1>
        <p class="text-slate-500 mt-4 max-w-2xl uppercase text-[10px] font-bold tracking-[0.3em]">
          Sisteminiz için orijinal yedek parçalar ve yüksek kaliteli sarf malzemeleri
        </p>
      </header>

      <div class="mb-16 sticky top-20 z-30 bg-[#0f172a]/80 backdrop-blur-md py-4 border-y border-slate-800/50">
        <div class="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
          <button 
            v-for="cat in categories" 
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap border',
              activeCategory === cat.id 
                ? 'bg-emerald-500 border-emerald-500 text-slate-900 shadow-[0_10px_20px_-5px_rgba(16,185,129,0.4)] scale-105' 
                : 'bg-slate-900/50 border-slate-800 text-slate-500 hover:border-emerald-500/50 hover:text-emerald-400'
            ]"
          >
            {{ cat.icon }} {{ cat.name }}
          </button>
        </div>
      </div>

      <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        <div 
          v-for="product in filteredProducts" 
          :key="product.id" 
          class="group bg-slate-900/20 border border-slate-800/50 rounded-[2.5rem] p-4 transition-all hover:bg-slate-900/40"
        >
          <div class="relative aspect-square bg-slate-900 rounded-[2rem] overflow-hidden mb-6 border border-slate-800">
            <img 
              :src="product.mainImage || 'https://placehold.co/400x400/0f172a/emerald?text=Parca'" 
              :alt="product.urun_adi"
              class="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500" 
            />
            <NuxtLink :to="`/product/${product.id}`" class="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors flex items-center justify-center">
               <span class="bg-white text-slate-900 text-[10px] font-black px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity uppercase">Detay</span>
            </NuxtLink>
          </div>

          <div class="px-2">
            <h3 class="text-sm font-bold text-white mb-1 uppercase tracking-tight group-hover:text-emerald-400 transition-colors leading-tight min-h-[40px]">
              {{ product.urun_adi }}
            </h3>
            <p class="text-[9px] text-slate-500 font-bold mb-5 uppercase tracking-tighter">{{ product.marka }} / {{ product.model }}</p>
            
            <div class="flex flex-col gap-3">
              <a 
                :href="`https://wa.me/${cleanWhatsapp}?text=Merhaba, ${product.urun_adi} (${product.model}) ürünü hakkında güncel fiyat bilgisi alabilir miyim?`" 
                target="_blank" 
                class="w-full py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <i class="fab fa-whatsapp text-sm group-hover/btn:scale-110 transition-transform"></i> 
                Fiyat Al
              </a>
              
              <div class="flex justify-between items-center px-1">
                 <span class="text-[8px] text-slate-600 font-black uppercase">Orijinal Parça</span>
                 <div class="flex gap-1">
                    <div v-for="i in 5" :key="i" class="w-1 h-1 rounded-full bg-emerald-500/40"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-32 border border-dashed border-slate-800 rounded-[3rem]">
        <span class="text-4xl block mb-4">🔍</span>
        <p class="text-slate-500 text-xs font-bold uppercase tracking-widest">Bu kategoride henüz ürün bulunmuyor.</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import productData from '~/assets/data/products.json'

const config = useAppConfig()
const whatsappNumber = config.contact?.whatsapp || "905000000000" // Fallback numara

const cleanWhatsapp = computed(() => {
  return whatsappNumber ? whatsappNumber.replace(/[^0-9]/g, '') : ''
})

// Kategorileri JSON'daki kategori_id'lerine göre eşledim
const categories = [
  { id: 'all', name: 'Tümü', icon: '💎' },
  { id: 'cihazlar', name: 'Cihazlar', icon: '⚙️' },
  { id: 'filtre', name: 'Filtreler', icon: '🔧' },
  { id: 'aksesuar', name: 'Musluklar', icon: '🚰' },
  { id: 'yedek-parca', name: 'Yedek Parça', icon: '🔌' }
]

const activeCategory = ref('all')

// JSON verisini ref olarak alıyoruz (Sıralama JSON'daki gibi kalır)
const products = ref(Array.isArray(productData) ? productData : [])

const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') return products.value
  return products.value.filter(p => p.kategori_id === activeCategory.value)
})

useHead({ title: 'Ürün Kataloğu | Çağlar Su Arıtma' })
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

.group { 
  animation: fadeInUp 0.5s ease forwards; 
  animation-fill-mode: both;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Ürünlerin sırayla gelmesi için küçük bir gecikme efekti (opsiyonel) */
.group:nth-child(1) { animation-delay: 0.1s; }
.group:nth-child(2) { animation-delay: 0.15s; }
.group:nth-child(3) { animation-delay: 0.2s; }
.group:nth-child(4) { animation-delay: 0.25s; }
</style>