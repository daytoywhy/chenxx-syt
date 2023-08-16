<template>
  <div class="detail">
    <div class="top">
      <div class="hosname">{{ hosDetailStore.hospitalInfo.hospital?.hosname}}</div>
      <div class="level">
        <svg t="1692195317656" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2480" width="16" height="16"><path d="M959.488 195.584c-4.608-22.016-23.04-38.4-45.568-39.424-173.056-4.608-315.392-92.672-372.736-134.656-17.408-12.8-40.448-12.8-57.856 0-58.88 41.984-199.68 130.048-372.736 134.656-22.016 1.024-41.472 17.408-45.568 39.424-27.648 138.24-75.264 606.72 448 824.32 521.728-218.112 473.088-686.08 446.464-824.32z m-446.976 745.472C66.56 755.2 111.616 353.28 134.144 240.64c3.584-17.408 18.432-29.184 36.864-30.208 149.504-2.56 271.872-80.384 319.488-115.2 12.8-9.216 31.232-9.216 44.032 0 48.64 34.816 170.496 112.64 319.488 115.2 17.408 0 32.768 12.8 36.864 30.208 22.016 113.152 68.096 514.56-378.368 700.416z" fill="#F4DCCB" p-id="2481"></path><path d="M579.072 317.952H645.12l-103.424 303.616H481.28L378.88 317.952h68.096L512 547.84l67.072-229.888z" fill="#FF9D4D" p-id="2482"></path></svg>
        <div class="text">{{ hosDetailStore.hospitalInfo.hospital?.param?.hostypeString }}</div>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <img width="80" height="80" :src="`data:image/jpeg;base64,${hosDetailStore.hospitalInfo.hospital?.logoData}`" alt="">
      </div>
      <div class="right">
       <div class="position">
        <svg t="1692197674927" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3549" width="16" height="16"><path d="M512 512m-80 0a80 80 0 1 0 160 0 80 80 0 1 0-160 0Z" p-id="3550"></path><path d="M960 480h-33.632C910.752 276.16 747.84 113.248 544 97.632V64a32 32 0 1 0-64 0v33.632C276.16 113.248 113.248 276.16 97.632 480H64a32 32 0 0 0 0 64h33.632C113.248 747.84 276.16 910.752 480 926.368V960a32 32 0 1 0 64 0v-33.632C747.84 910.752 910.752 747.84 926.368 544H960a32 32 0 1 0 0-64zM544 862.368V800a32 32 0 1 0-64 0v62.368C311.424 847.104 176.896 712.576 161.632 544H224a32 32 0 1 0 0-64H161.632C176.896 311.424 311.424 176.896 480 161.632V224a32 32 0 0 0 64 0V161.632c168.576 15.296 303.104 149.792 318.368 318.368H800a32 32 0 1 0 0 64h62.368c-15.264 168.576-149.792 303.104-318.368 318.368z" p-id="3551"></path></svg>
        <span class="text">具体位置：{{ hosDetailStore.hospitalInfo.hospital?.address }}</span>
       </div>
       <div class="introduce">
        规划路线：{{  hosDetailStore.hospitalInfo.hospital?.route }}
       </div>
      </div>
    </div>
    <div class="bottom">
      <h1>医院介绍</h1>
      <div class="introduce">
        {{ hosDetailStore.hospitalInfo.hospital?.intro }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useHosDetailStore from '@/store/module/hospitalDetail.ts'
const hosDetailStore = useHosDetailStore()
</script>

<style scoped lang="scss">
.detail{
  .top{
    display: flex;
    align-items: center;
    .hosname{
      font-size: 22px;
      font-weight: 700;
    }
    .level{
      display: flex;
      align-items: center;
      margin-left: 8px;
      .text{
        color: #ccc;
        margin-left: 8px;
        font-size: 14px;
      }
    }
  }
  .content{
    margin-top: 16px;
    display: flex;
    .left{
      img{
        border-radius: 50%;
      }
    }
    .right{
      flex:1;
      margin-left: 16px;
      color: #999;
      .position{
        display: flex;
        align-items: center;
        font-size: 14px;
        .text{
          margin-left: 4px;
        }
      }
      .introduce{
        margin-top: 16px;
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
  .bottom{
    margin-top: 32px;
    font-size: 14px;
    color: #999;
    h1{
      color: #000;
      font-weight: 700;
    }
    .introduce{
      margin-top: 16px;
      line-height: 22px;
    }
  }
}
</style>