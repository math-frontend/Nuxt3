<template lang="pug">
section
  .px-8.pt-8.pb-2
    .pb-6
      h4.text-2xl.font-bold.text-black.tracking-wide.leading-6.mb-1 {{ title }}
      p.text-xs.leading-5.text-gray-300 {{ description }}

</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
})
</script>