<template lang="pug">
.py-4.overflow-y-auto
  ul.space-y-2(v-for="(item, index) in menu" :key="index")
    li
      NuxtLink.flex.items-center.p-2.text-base.font-normal.text-gray-900.rounded-lg(:to='item.target' class='dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700')
        iconsNavigationDefault(:icon="item.icon")
        span.flex-1.ml-3.whitespace-nowrap {{ item.title }}
        span.inline-flex.items-center.justify-center.px-2.ml-3.text-sm.font-medium.text-gray-800.bg-gray-100.rounded-full(class='dark:bg-gray-700 dark:text-gray-300') {{ item.status }}

</template>

<script lang="ts" setup>
const menu = [
  {
    title: 'Documentação',
    status: 'Andamento',
    icon: 'DocumentTextIcon',
    target: '/'
  },
  {
    title: 'Tarefas',
    status: '12',
    icon: 'ClipboardDocumentListIcon',
    target: '/todo'
  }
]
</script>