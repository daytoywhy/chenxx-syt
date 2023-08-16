<template>
  <div class="info">
    <h1>{{ hosDetailStore.hospitalInfo.hospital?.hosname }}预约通知</h1>
    <el-empty description="暂无信息" />
  </div>
</template>

<script setup lang="ts">
import useHosDetailStore from '@/store/module/hospitalDetail.ts'
const hosDetailStore = useHosDetailStore()
</script>

<style scoped lang="scss">
.info{
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}
</style>