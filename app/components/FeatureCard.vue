<template>
  <div 
    :class="[
      'bg-slate-800/40 border border-slate-700 p-8 rounded-3xl transition duration-500 group shadow-xl',
      color === 'emerald' ? 'hover:border-emerald-500/50' : '',
      color === 'blue' ? 'hover:border-blue-500/50' : '',
      color === 'purple' ? 'hover:border-purple-500/50' : ''
    ]"
  >
    <div 
      :class="[
        'w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all shadow-inner',
        color === 'emerald' ? 'bg-emerald-500/10 group-hover:bg-emerald-500' : '',
        color === 'blue' ? 'bg-blue-500/10 group-hover:bg-blue-500' : '',
        color === 'purple' ? 'bg-purple-500/10 group-hover:bg-purple-500' : ''
      ]"
    >
      <i 
        :class="[
          'fa-solid', 
          icon, 
          'text-xl transition-colors',
          color === 'emerald' ? 'text-emerald-500 group-hover:text-slate-900' : '',
          color === 'blue' ? 'text-blue-500 group-hover:text-slate-900' : '',
          color === 'purple' ? 'text-purple-500 group-hover:text-slate-900' : ''
        ]"
      ></i>
    </div>
    <h3 class="text-xl font-bold text-white mb-2">{{ title }}</h3>
    <p class="text-sm text-slate-400 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: String,
  color: { type: String, default: 'emerald' }
})
</script>