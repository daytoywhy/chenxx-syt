<template>
  <div class="container">
    <hospital-top />
    <div class="content">
      <router-view />
    </div>
    <hospital-bottom />
    <Login />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  .content{
    margin-top: 70px;
    min-height: calc(100vh - 120px);
    width: 1200px;
  }
}
</style>
