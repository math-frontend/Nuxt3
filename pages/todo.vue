<script setup lang="ts">
import { usersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'

// Store
const store = usersStore()
const { getUsers } = store // Actions
const { users, quantity } = storeToRefs(store) // Getters

// async loading get data
const loading = ref(true)

onMounted(async () => {
  try {
    await getUsers()
  } finally {
    loading.value = false
  }
})
</script>

<template lang="pug">
.container
  navbarDefault(title="Lista TODO" description="Documentação")
  p {{ users }}
  p {{ quantity }}
  p {{ loading }}

</template>