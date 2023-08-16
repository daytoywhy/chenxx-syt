<template>
  <div class="container">
    <div class="content">
      <div class="left">
        <p>京ICP备 130093123号 电话挂号0593-098823423</p>
      </div>
      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped  lang="scss">
.container{
  width: 100%;
  height: 50px;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  .content{
    width:1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right{
      span{
        margin: 0 5px;
      }
      span:hover{
        cursor: pointer;
        color: #499af3;
      }
    }
  }
}
</style>