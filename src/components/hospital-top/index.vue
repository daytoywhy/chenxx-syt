<template>
  <div class="container">
    <div class="content">
      <div class="left" @click="goHome">
        <img src="../../assets/images/logo.png" alt="logo">
        <p class="title">预约挂号统一平台</p>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">注册/登陆</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter} from 'vue-router'
const $router = useRouter()
const goHome = () => {
  $router.push('/')
}

</script>

<style scoped lang="scss">
.container{
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  z-index: 999;
  justify-content: center;
  box-shadow: 0 1px 5px #ccc;
  .content{
    width: 1200px;
    display: flex;
    justify-content: space-between;
    .left{
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 50px;
        height: 50px;
        margin-right: 16px;
      }
      .title{
        font-size: 22px;
        color: #55A6FE;
      }
    }
    .right{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #999;
      .help{
        margin-right: 16px;
      }
      p:hover{
        cursor: pointer;
        color: #55A6FE;
      }
    }
  }
}
</style>