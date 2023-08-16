<template>
  <div class="container">
    <h1 v-if="title">
      {{ title }}
    </h1>
    <div class="content">
      <div class="left">{{ label }}:</div>
      <ul class="right">
        <li
          :class="{ active: currentIndex === index }"
          v-for="(item, index) in baseInfo"
          :key="index"
          @click="selectItem(item,index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  title?: string
  label?: string
  baseInfo: []
}>()
let currentIndex = ref<number>(0)
const selectItem = (item:any,index:number) =>{
  currentIndex.value = index
  $emit('selectItem',item.value)
}
let $emit =  defineEmits(['selectItem'])
</script>

<style scoped lang="scss">
.container {
  color: #999;
  h1 {
    margin-bottom: 16px;
  }
  .content {
    display: flex;
    .left {
      white-space: nowrap;
      margin-right: 16px;
    }
    .right {
      display: flex;
      li {
        margin-right: 16px;
        margin-bottom: 16px;
        &.active {
          color: #55a6fe;
        }
      }
      li:hover {
        color: #55a6fe;
        cursor: pointer;
      }
    }
  }
}
</style>
