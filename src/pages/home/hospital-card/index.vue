<template>
<el-card class="box-card" shadow="hover" @click="goDetail">
  <div class="content">
    <div class="left">
      <div class="top">{{ hospInfo.hosname }}</div>
      <div class="bottom">
        <div class="level">
          <svg t="1691928322444" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4128" width="16" height="16"><path d="M936.96 385.877333l-203.434667-204.8-18.090667-7.68L308.565333 173.397333l-18.090667 7.68L87.04 385.877333c-9.728 9.898667-9.898667 25.941333-0.170667 35.84l406.869333 421.034667c4.778667 4.949333 11.434667 7.850667 18.432 7.850667 6.997333 0 13.653333-2.901333 18.432-7.850667l406.869333-421.034667C946.858667 411.648 946.688 395.776 936.96 385.877333zM868.522667 389.632l-141.994667 0-163.84-165.034667 141.994667 0L868.522667 389.632zM319.317333 224.768l143.018667 0-163.84 165.034667L155.477333 389.802667 319.317333 224.768zM176.469333 440.832l132.608 0 18.090667-7.509333 185.173333-186.538667 185.173333 186.538667 18.090667 7.509333 131.584 0L512 787.968 176.469333 440.832z" p-id="4129"></path></svg>
          <span>{{ hospInfo.param.hostypeString }}</span>
          </div>
        <div class="time">
          <svg t="1691928369610" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5331" width="16" height="16"><path d="M931.2 518.4c0-233.6-188.8-419.2-419.2-419.2-233.6 0-419.2 188.8-419.2 419.2 0 137.6 67.2 259.2 169.6 336l-57.6 51.2c-9.6 9.6-12.8 25.6-3.2 35.2 9.6 9.6 25.6 12.8 35.2 3.2l70.4-57.6c60.8 35.2 131.2 54.4 208 54.4 80 0 153.6-22.4 214.4-60.8 0 0 0 0 3.2 3.2l73.6 60.8c9.6 9.6 25.6 6.4 35.2-3.2 9.6-9.6 6.4-25.6-3.2-35.2l-64-54.4C867.2 774.4 931.2 652.8 931.2 518.4zM512 889.6c-204.8 0-371.2-166.4-371.2-371.2s166.4-371.2 371.2-371.2 371.2 166.4 371.2 371.2S716.8 889.6 512 889.6z" p-id="5332"></path><path d="M208 96c-9.6-9.6-25.6-9.6-35.2 0l-118.4 118.4c-9.6 9.6-9.6 25.6 0 35.2 9.6 9.6 25.6 9.6 35.2 0l118.4-118.4C217.6 121.6 217.6 105.6 208 96z" p-id="5333"></path><path d="M969.6 211.2l-118.4-115.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l118.4 115.2c9.6 9.6 25.6 9.6 35.2 0C979.2 236.8 979.2 220.8 969.6 211.2z" p-id="5334"></path><path d="M707.2 300.8l-144 128c0 0 0 3.2-3.2 3.2-12.8-3.2-22.4-6.4-35.2-6.4-12.8 0-22.4 3.2-32 6.4 0-3.2-3.2-3.2-3.2-6.4l-92.8-83.2c-9.6-9.6-25.6-9.6-35.2 3.2-9.6 9.6-9.6 25.6 3.2 35.2l89.6 80c-16 19.2-28.8 41.6-28.8 70.4 0 54.4 44.8 102.4 102.4 102.4 54.4 0 102.4-44.8 102.4-102.4 0-25.6-9.6-48-25.6-67.2l140.8-124.8c9.6-9.6 9.6-25.6 3.2-35.2C732.8 294.4 716.8 294.4 707.2 300.8zM524.8 582.4c-28.8 0-51.2-22.4-51.2-51.2 0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2C576 556.8 553.6 582.4 524.8 582.4z" p-id="5335"></path></svg>
          <span>每天{{ hospInfo.bookingRule?.releaseTime}}开始放号</span>
        </div>
      </div>
    </div>
    <div class="right">
      <img :src="`data:image/jpeg;base64,${hospInfo.logoData}`" alt="logo">
    </div>
  </div>
</el-card>
</template>

<script setup lang="ts">
const props = defineProps(['hospInfo'])
import { useRouter} from 'vue-router'
const $router = useRouter()
const goDetail = () =>{
  $router.push({
    path:'/hospital/register',
    query:{
      hoscode:props.hospInfo.hoscode
    }
  })
}
 </script>

<style scoped lang="scss">
.box-card:hover{
  cursor: pointer;
}
.content{
  display: flex;
  align-items: center;
  justify-content: space-between;
  .right{
    img{
      width: 50px;
      height: 50px;
    }
  }
  .left{
    flex: 1;
    .top{
      margin-bottom: 16px;
    }
    .bottom{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 70%;
      .level,.time{
        span{
          margin-left: 4px;
        }
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>