<script setup>
const config = useAppConfig()
const { phone, whatsapp,address,socials,googleMapsLink } = config.contact
</script>
<template>
  <div class="bg-[#0f172a] min-h-screen text-slate-300 font-['Inter'] overflow-hidden">
    <AppNavbar />

    <header class="relative h-[40vh] flex items-center justify-center overflow-hidden bg-slate-900">
      <div class="absolute inset-0 z-0">
        <div class="wave-container">
          <div class="wave wave1 opacity-20"></div>
          <div class="wave wave2 opacity-10"></div>
          <div class="wave wave3 opacity-30"></div>
        </div>
      </div>
      
      <div class="relative z-10 text-center animate-fade-in px-6">
        <h1 class="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">Bize <span class="text-emerald-400">Ulaşın</span></h1>
        <p class="text-slate-400 text-lg md:text-xl max-w-xl mx-auto">Suyun en saf halini keşfetmek için bir adım atın.</p>
      </div>
    </header>

    <main class="container mx-auto px-6 py-16">
      <section class="bg-slate-800/20 border border-slate-700/50 rounded-[2.5rem] p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center gap-12 hover:border-emerald-500/30 transition-all duration-500 shadow-2xl">
        <div class="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 bg-slate-900 rounded-3xl p-6 border border-emerald-500/20 shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full stroke-emerald-400 fill-none">
            <rect x="60" y="40" width="80" height="120" rx="10" stroke-width="1.5" />
            <circle cx="100" cy="70" r="15" stroke-width="1.5" class="animate-pulse" />
            <line x1="70" y1="100" x2="130" y2="100" stroke-width="1.5" stroke-dasharray="4" />
            <line x1="70" y1="120" x2="130" y2="120" stroke-width="1.5" stroke-dasharray="4" />
            <path d="M100 160 Q110 180 130 180" stroke-width="1.5" />
          </svg>
          <div class="text-[10px] text-center mt-2 tracking-[0.3em] text-emerald-500 font-bold">SMART-TECH V3</div>
        </div>

        <div class="text-center md:text-left space-y-4">
          <h2 class="text-3xl font-bold text-white tracking-tight">Geleceğin Teknolojisi</h2>
          <p class="text-slate-400 text-lg leading-relaxed max-w-xl">
            Sistemlerimiz <span class="text-emerald-400 font-semibold">5 aşamalı moleküler filtrasyon</span> yaparak suyunuzu ağır metallerden, kireçten ve bakterilerden %99.9 oranında arındırır.
          </p>
        </div>
      </section>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <a :href="`tel:+90${phone}`" target="_blank" class="group flex flex-col items-center p-8 bg-slate-800/40 border border-slate-700 rounded-[2rem] hover:bg-emerald-500 transition-all duration-300">
          <i class="fas fa-phone-alt text-3xl text-emerald-400 group-hover:text-slate-900 mb-4 transition-colors"></i>
          <span class="font-bold text-white group-hover:text-slate-900 transition-colors">Hemen Ara</span>
        </a>
        <a :href="`https://wa.me/${whatsapp}`" target="_blank" class="group flex flex-col items-center p-8 bg-slate-800/40 border border-slate-700 rounded-[2rem] hover:bg-emerald-500 transition-all duration-300">
          <i class="fab fa-whatsapp text-3xl text-emerald-400 group-hover:text-slate-900 mb-4 transition-colors"></i>
          <span class="font-bold text-white group-hover:text-slate-900 transition-colors">WhatsApp</span>
        </a>
        <a :href="`https://www.instagram.com/${socials.instagram}`" target="_blank" class="group flex flex-col items-center p-8 bg-slate-800/40 border border-slate-700 rounded-[2rem] hover:bg-emerald-500 transition-all duration-300">
          <i class="fab fa-instagram text-3xl text-pink-500 group-hover:text-slate-900 mb-4 transition-colors"></i>
          <span class="font-bold text-white group-hover:text-slate-900 transition-colors">Instagram</span>
        </a>
        <a :href="`https://www.tiktok.com/@${socials.tiktok}`" target="_blank" class="group flex flex-col items-center p-8 bg-slate-800/40 border border-slate-700 rounded-[2rem] hover:bg-emerald-500 transition-all duration-300">
          <i class="fab fa-tiktok text-3xl text-emerald-400 group-hover:text-slate-900 mb-4 transition-colors"></i>
          <span class="font-bold text-white group-hover:text-slate-900 transition-colors">TikTok</span>
        </a>
        
      </div>

      <section>
       
        <div class="flex items-center gap-4 mb-8">
          <h2 class="text-3xl font-bold text-white whitespace-nowrap">Bize Buyurun</h2>
          <div class="h-px bg-slate-800 w-full"></div>
        </div>
        <div class="rounded-[3rem] overflow-hidden border border-slate-700/50 shadow-2xl bg-slate-900 group">
          <iframe 
              :src="googleMapsLink" 
              width="100%" height="450" style="border:0; filter: invert(90%) hue-rotate(180deg) brightness(95%);" 
               loading="lazy"
            ></iframe>
        </div>
      </section>
    </main>

    <footer class="py-12 text-center border-t border-slate-800 text-slate-500 text-sm">
      <p>© 2026 Çağlar Su Arıtma - Suya Hayat Veriyoruz.</p>
    </footer>
  </div>
</template>

<style scoped>
/* Dalga Animasyonları */
.wave-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" fill="%2310b981"/></svg>');
  background-size: 50% 100%;
  animation: waveMove 10s linear infinite;
}

.wave2 { animation: waveMove 15s linear infinite; bottom: 5px; opacity: 0.1; }
.wave3 { animation: waveMove 20s linear infinite; bottom: 10px; opacity: 0.05; }

@keyframes waveMove {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-fade-in {
  animation: fadeIn 1.2s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>