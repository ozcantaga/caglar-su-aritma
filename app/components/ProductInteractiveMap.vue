<template>
  <div class="py-20 bg-slate-900/50 rounded-[4rem] border border-slate-800 my-16 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
          Sistem <span class="text-emerald-500">Nasıl Çalışır?</span>
        </h2>
        <p class="text-slate-500 text-xs font-bold mt-4 uppercase tracking-[0.3em]">Teknoloji ve Sağlığın Buluşma Noktası</p>
      </div>

      <div class="grid lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-3 space-y-12 order-2 lg:order-1">
          <div v-for="point in filterPoints.slice(0, 2)" :key="'left-'+point.id" class="group">
            <div class="flex flex-col items-end text-right">
              <div class="w-12 h-12 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 text-emerald-400">
                <i :class="point.icon" class="text-xl"></i>
              </div>
              <h3 class="text-white font-bold text-lg mb-2">{{ point.title }}</h3>
              <p class="text-slate-400 text-sm leading-relaxed">{{ point.desc }}</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6 relative order-1 lg:order-2">
          <div class="relative z-10 flex justify-center">
            <img 
              src="/images/ro-system-internal.jpg" 
              alt="Arıtma Sistemi İç Yapısı" 
              class="max-h-[500px] object-contain drop-shadow-[0_0_50px_rgba(16,185,129,0.1)]"
            />
          </div>

          <div 
            v-for="point in filterPoints" 
            :key="point.id"
            class="absolute z-20 hidden md:block transition-all duration-300"
            :style="{ top: point.y + '%', left: point.x + '%' }"
          >
            <div class="relative flex items-center justify-center">
              <div class="absolute w-8 h-8 bg-emerald-500/20 rounded-full animate-ping"></div>
              <div class="relative w-4 h-4 bg-emerald-500 rounded-full border-2 border-white cursor-pointer hover:scale-125 transition-transform peer"></div>
              
              <div class="absolute bottom-full mb-4 opacity-0 peer-hover:opacity-100 transition-all duration-500 pointer-events-none w-64 -translate-x-1/2 left-1/2 translate-y-4 peer-hover:translate-y-0">
                <div class="bg-slate-800 border border-emerald-500/30 p-4 rounded-2xl shadow-2xl backdrop-blur-xl text-center">
                  <div class="text-emerald-400 font-black text-[10px] uppercase mb-1">{{ point.step }}</div>
                  <div class="text-white font-bold text-sm mb-1">{{ point.title }}</div>
                  <div class="text-slate-400 text-xs">{{ point.desc }}</div>
                </div>
                <div class="w-3 h-3 bg-slate-800 border-r border-b border-emerald-500/30 rotate-45 mx-auto -mt-1.5"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3 space-y-12 order-3">
          <div v-for="point in filterPoints.slice(2, 4)" :key="'right-'+point.id" class="group">
            <div class="flex flex-col items-start text-left">
              <div class="w-12 h-12 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 text-emerald-400">
                <i :class="point.icon" class="text-xl"></i>
              </div>
              <h3 class="text-white font-bold text-lg mb-2">{{ point.title }}</h3>
              <p class="text-slate-400 text-sm leading-relaxed">{{ point.desc }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const filterPoints = [
  { 
    id: 1, x:60, y:45, step: "Aşama 1", title: "Sediment Filtre", 
    icon: "fa-solid fa-filter",
    desc: "Suya ilk girişteki kum, çamur, pas ve kaba tortuları 5 mikron hassasiyetle temizler." 
  },
  { 
    id: 2, x:48, y:45, step: "Aşama 2-3", title: "Aktif Karbon", 
    icon: "fa-solid fa-vial-circle-check",
    desc: "Kloru ve organik kimyasalları hapseder. Suyun tadını ve kokusunu dengeler." 
  },
  { 
    id: 3, x:40, y:45, step: "Aşama 4", title: "RO Membran", 
    icon: "fa-solid fa-microchip",
    desc: "Bakteri, virüs ve ağır metalleri moleküler düzeyde ayrıştırarak suyu saflaştırır." 
  },
  { 
    id: 4, x:32, y:45, step: "Aşama 5-6", title: "Mineral Filtre", 
    icon: "fa-solid fa-gem",
    desc: "Temizlenen suya yararlı kalsiyum ve magnezyum minerallerini geri kazandırır." 
  }
]
</script>