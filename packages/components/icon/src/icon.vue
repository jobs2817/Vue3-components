<script setup lang="ts">
import { computed } from 'vue'
import { iconProps } from './icon'

defineOptions({ name: 'el-icon' })

const props = defineProps(iconProps)

const style = computed(() => {
  if (!(props.size || props.color)) {
    return {}
  }

  return {
    ...(props.size ? { fontSize: `${props.size}px` } : {}),
    ...(props.color ? { color: props.color } : {})
  }
})
</script>

<template>
  <i :style="style">这是一个字体标签</i>
</template>