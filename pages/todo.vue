<script setup lang="ts">
import { exampleStore } from '@/stores/example'
import { storeToRefs } from 'pinia'

// Store
const store = exampleStore()
const { init, getItem, saveItem, addItem, removeItem } = store // Actions
const { list, view, quantity, loading } = storeToRefs(store) // Getters

onMounted(() => init())
</script>

<template lang="pug">
.container
  navbarDefault(title="Lista TODO" description="Documentação")
  .row
    .col
      ul(v-for="user in list" :key="user.uid")
        li(@click="getItem(user.uid)") {{ user.doc.name }}
  br
  hr
  p {{ view.doc?.name }} - {{ view.uid }}
  p {{ quantity }}
  p {{ loading }}

</template>