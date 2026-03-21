<script setup>
const config = useAppConfig()
const { phone, email, whatsapp,address,socials,googleMapsLink } = config.contact
const testimonials = [
  {
    name: "Ahmet G.",
    initial: "A",
    stars: 5,
    comment: "Arıtma cihazını taktırdığımızdan beri suyun tadı yumuşacık oldu. Servis ekibi çok ilgiliydi, periyodik bakımları da aksatmıyorlar.",
    date: "2 hafta önce"
  },
  {
    name: "Selin Y.",
    initial: "S",
    stars: 5,
    comment: "Hem şık duruyor hem de plastik damacana derdinden kurtulduk. Alkali filtresi sayesinde suyun pH değeri harika. Teşekkürler!",
    date: "1 ay önce"
  },
  {
    name: "Deniz K.",
    initial: "D",
    stars: 5,
    comment: "Kurumsal ofisimiz için sebil çözümünü kullandık. Personel çok memnun. Bakım zamanı gelince kendileri arayıp randevu oluşturuyorlar.",
    date: "3 ay önce"
  }
];
</script>`
`<template>
  <div class="bg-[#0f172a] min-h-screen text-slate-300 font-['Inter']">
    <AppNavbar />

    <main>
      <section class="py-20 bg-gradient-to-b from-slate-900 to-[#0f172a] border-b border-slate-800">
        <div class="container mx-auto px-6 text-center animate-fade-in">
          <h1 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Yaşamın Kaynağına <span class="text-emerald-400">Yolculuk</span>
          </h1>
          <p class="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            2026 teknolojisiyle donatılmış filtrasyon sistemlerimizle, suyun en saf ve mineral dengesi korunmuş halini evlerinize taşıyoruz.
          </p>
        </div>
      </section>

      <div class="container mx-auto px-6 py-16">
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div class="space-y-8">
            <div class="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold uppercase tracking-widest">
              Vizyonumuz
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-white leading-snug">
              Doğanın En Değerli Hazinesini <br/> 
              <span class="text-slate-500 italic">En Saf Haliyle Sunuyoruz</span>
            </h2>
            <p class="text-slate-400 text-lg leading-relaxed">
              Gelişmiş filtrasyon teknolojilerimizle suyun içindeki zararlı maddeleri ayıklarken, faydalı mineralleri koruyoruz. Bizim için su sadece bir ihtiyaç değil, sağlıklı bir geleceğin temel taşıdır.
            </p>
            <div class="bg-slate-800/40 border-l-4 border-emerald-500 p-6 rounded-r-2xl shadow-xl italic text-slate-200">
              "Su hayattır, arıtılmış su ise sağlıklı bir gelecektir."
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <a :href="`tel:+90${phone}`" target="_blank" class="group p-8 bg-slate-800/30 border border-slate-700/50 rounded-3xl hover:border-emerald-500/50 transition-all duration-300 text-center">
              <i class="fas fa-phone text-3xl text-emerald-400 mb-4 group-hover:scale-110 transition"></i>
              <div class="text-white font-bold block">Telefon</div>
              <div class="text-xs text-slate-500 mt-1 uppercase tracking-tighter">Hemen Ara</div>
            </a>
            <a :href="`https://wa.me/${whatsapp}`" target="_blank" class="group p-8 bg-slate-800/30 border border-slate-700/50 rounded-3xl hover:border-emerald-500/50 transition-all duration-300 text-center">
              <i class="fab fa-whatsapp text-3xl text-emerald-500 mb-4 group-hover:scale-110 transition"></i>
              <div class="text-white font-bold block">WhatsApp</div>
              <div class="text-xs text-slate-500 mt-1 uppercase tracking-tighter">7/24 Destek</div>
            </a>
            <a :href="`https://www.instagram.com/${socials.instagram}`" target="_blank" class="group p-8 bg-slate-800/30 border border-slate-700/50 rounded-3xl hover:border-emerald-500/50 transition-all duration-300 text-center">
              <i class="fab fa-instagram text-3xl text-pink-500 mb-4 group-hover:scale-110 transition"></i>
              <div class="text-white font-bold block">Instagram</div>
              <div class="text-xs text-slate-500 mt-1 uppercase tracking-tighter">Bizi Takip Et</div>
            </a>
            <a :href="`mailto:${email}`" target="_blank" class="group p-8 bg-slate-800/30 border border-slate-700/50 rounded-3xl hover:border-emerald-500/50 transition-all duration-300 text-center">
              <i class="fas fa-envelope text-3xl text-blue-400 mb-4 group-hover:scale-110 transition"></i>
              <div class="text-white font-bold block">E-Posta</div>
              <div class="text-xs text-slate-500 mt-1 uppercase tracking-tighter">Teklif Al</div>
            </a>
          </div>
        </div>

       <section class="mb-24">
    <div class="flex items-center justify-between mb-10">
      <h2 class="text-3xl font-bold text-white tracking-tight leading-tight">
        Müşterilerimiz <span class="text-emerald-400">Ne Diyor?</span>
      </h2>
      <div class="h-px bg-slate-800 flex-grow mx-8 hidden md:block"></div>
      
      <a :href="googleMapsLink" target="_blank" class="flex items-center gap-3 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full hover:bg-slate-800 transition group">
        <div class="flex items-center gap-1 text-yellow-500">
          <i class="fas fa-star text-sm"></i>
          <span class="text-white font-bold">4.9</span>
        </div>
        <span class="text-slate-500 text-xs border-l border-slate-700 pl-3 group-hover:text-emerald-400">Google Yorumları</span>
      </a>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div 
        v-for="(item, index) in testimonials" 
        :key="index" 
        class="bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-800 hover:border-emerald-500/30 transition-all duration-500 shadow-lg flex flex-col justify-between group"
      >
        <div>
          <div class="text-yellow-500 mb-4 flex gap-1">
            <i v-for="s in item.stars" :key="s" class="fas fa-star text-[10px]"></i>
          </div>
          
          <p class="text-slate-400 italic mb-8 leading-relaxed relative">
            <span class="text-emerald-500/20 text-4xl absolute -top-4 -left-2 font-serif">"</span>
            {{ item.comment }}
          </p>
        </div>

        <div class="flex items-center gap-4 border-t border-slate-800/50 pt-6">
          <div class="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500">
            {{ item.initial }}
          </div>
          <div>
            <div class="text-white font-bold">{{ item.name }}</div>
            <div class="flex items-center gap-2">
              <i class="fas fa-check-circle text-emerald-500 text-[10px]"></i>
              <span class="text-[10px] text-slate-500 uppercase tracking-widest">{{ item.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12 text-center">
      <a :href="googleMapsLink" target="_blank" class="text-slate-500 hover:text-emerald-400 text-sm font-medium transition flex items-center justify-center gap-2">
        Google üzerindeki tüm yorumları oku 
        <i class="fas fa-external-link-alt text-xs"></i>
      </a>
    </div>
  </section>
        <section>
          <div class="text-center mb-10">
            <h2 class="text-3xl font-bold text-white mb-4">Mağazamıza Bekleriz</h2>
            <p class="text-slate-500">Cihazlarımızı yakından incelemek için ofisimize uğrayabilirsiniz.</p>
          </div>
          <div class="rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl relative">
             <div class="absolute inset-0 pointer-events-none border-[10px] border-[#0f172a] rounded-[2.5rem] z-10"></div>
             <iframe 
              :src="googleMapsLink"
              width="100%" height="450" style="border:0; filter: invert(90%) hue-rotate(180deg) brightness(95%);" 
               loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </main>

    <footer class="py-12 text-center bg-slate-900/80 border-t border-slate-800 text-slate-500 text-sm">
      <div class="flex justify-center gap-6 mb-4 text-lg">
        <i class="fab fa-facebook hover:text-emerald-400 cursor-pointer transition"></i>
        <i class="fab fa-instagram hover:text-emerald-400 cursor-pointer transition"></i>
        <i class="fab fa-tiktok hover:text-emerald-400 cursor-pointer transition"></i>
      </div>
      © 2026 Çağlar Su Arıtma - Sağlıklı Yarınlar İçin.
    </footer>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Haritayı Gece Moduna Yakınlaştırır */
iframe {
  filter: grayscale(1) invert(90%) contrast(1.2);
}
</style>
