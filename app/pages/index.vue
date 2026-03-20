<script setup>
const config = useAppConfig()
const {  whatsapp } = config.contact
</script>


<template>
  <div class="bg-[#0f172a] min-h-screen text-slate-300 selection:bg-emerald-500/30">
    <AppNavbar />

    <main>
    <section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-24">
    
    <div class="absolute inset-0 z-0">
      <img 
        src="/images/hero.png" 
        alt="Arka Plan" 
        class="w-full h-full object-cover object-center scale-105"
      >
      <div class="absolute inset-0 bg-slate-950/70 blur-[2px] md:blur-0"></div>
    </div>

    <div class="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>

    <div class="container mx-auto px-6 relative z-20 text-center">
      
      <span class="inline-block py-1 px-3 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium tracking-wider uppercase">
        Doğal & Sağlıklı Yaşam
      </span>

      <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1]">
        Suyun En <br class="hidden md:block" /> 
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
          Doğal
        </span> Hali
      </h1>

      <p class="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-lg">
        Çağlar Su Arıtma ile mutfağınızda bir kaynak suyu tazeliği oluşturun. 
        Plastik atıklara son verin, sağlığınızı koruma altına alın.
      </p>

      <div class="flex flex-wrap justify-center gap-5">
        <NuxtLink 
          to="/products" 
          class="group relative px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] overflow-hidden"
        >
          <span class="relative z-10 flex items-center gap-2">
            Ürün Kataloğuna Git
            <i class="fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
          </span>
        </NuxtLink>

        <a :href="`https://wa.me/${whatsapp}`" target="_blank" class="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl font-bold text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-3">
          <i class="fa-brands fa-whatsapp text-emerald-400 text-2xl"></i>
          WhatsApp Destek
        </a>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f172a] to-transparent z-10"></div>
  </section>

      <section id="sistemler" class="bg-slate-900/50 py-20 relative z-10">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-3 gap-8">
            <NuxtLink to="/products">
              <FeatureCard 
                title="Ev Tipi Sistemler" 
                description="Tezgah altı, kompakt ve yüksek mineralli çözümler."
                icon="fa-house-chimney"
                color="emerald"
              />
            </NuxtLink>
            <NuxtLink to="/products">
            <FeatureCard 
                title="Kurumsal Çözümler" 
                description="Ofisler ve fabrikalar için yüksek kapasiteli su sebilleri."
                icon="fa-building"
                color="blue"
              />
            </NuxtLink>
            <NuxtLink to="/contact">
              <FeatureCard 
                title="Bakım & Filtre" 
                description="Tüm markalar için periyodik bakım ve orijinal filtre değişimi."
                icon="fa-wrench"
                color="purple"
              />
            </NuxtLink>
          </div>
        </div>
        <Gallery />
        <ProductInteractiveMap />
      </section>
      
    
    </main>
  </div>
</template>