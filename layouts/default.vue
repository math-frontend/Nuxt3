<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>

<template lang="pug">
.flex.min-h-screen.flex-row
  aside.sidebar.w-90.-translate-x-full.transform.p-4.transition-transform.duration-150.ease-in(class='md:translate-x-0 md:shadow-md')
    navigationMenuLeft

  main.main.-ml-48.flex.flex-grow.flex-col.p-4.transition-all.duration-150.ease-in(class='md:ml-0')
    slot

//- headerDefault
//- footerDefault
</template>