<script setup lang="ts">
import { computed } from 'vue'

import { iconProps } from './icon'

const props = defineProps(iconProps)
</script>

<template>
  <i>{{ props.color }}</i>
</template>