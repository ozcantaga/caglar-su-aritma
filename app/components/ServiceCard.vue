<template>
  <div :class="`bg-slate-800/40 border border-slate-700 p-8 rounded-3xl hover:border-${color}-500/50 transition duration-500 group` ">
    <div :class="`w-12 h-12 bg-${color}-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-${color}-500 transition` ">
      <i :class="`fa-solid ${icon} text-${color}-500 group-hover:text-slate-900`"></i>
    </div>
    <h3 class="text-xl font-bold text-white mb-2">{{ title }}</h3>
    <p class="text-sm text-slate-400">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps(['title', 'description', 'icon', 'color'])
</script>