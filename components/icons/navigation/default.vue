<template lang="pug">
.h-6.w-6.text-gray-500
  ClipboardDocumentListIcon(v-if="icon == 'ClipboardDocumentListIcon'")
  DocumentTextIcon(v-else-if="icon == 'DocumentTextIcon'")
</template>

<script lang="ts" setup>
import {
  ClipboardDocumentListIcon,
  DocumentTextIcon
} from "@heroicons/vue/24/outline";

const props = defineProps({
  icon: String
})
</script>