<template>
  <div class="register">
    <div class="top">
      <div class="hosname">
        {{ hosDetailStore.hospitalInfo.hospital?.hosname }}
      </div>
      <div class="level">
        <svg
          t="1692195317656"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2480"
          width="16"
          height="16"
        >
          <path
            d="M959.488 195.584c-4.608-22.016-23.04-38.4-45.568-39.424-173.056-4.608-315.392-92.672-372.736-134.656-17.408-12.8-40.448-12.8-57.856 0-58.88 41.984-199.68 130.048-372.736 134.656-22.016 1.024-41.472 17.408-45.568 39.424-27.648 138.24-75.264 606.72 448 824.32 521.728-218.112 473.088-686.08 446.464-824.32z m-446.976 745.472C66.56 755.2 111.616 353.28 134.144 240.64c3.584-17.408 18.432-29.184 36.864-30.208 149.504-2.56 271.872-80.384 319.488-115.2 12.8-9.216 31.232-9.216 44.032 0 48.64 34.816 170.496 112.64 319.488 115.2 17.408 0 32.768 12.8 36.864 30.208 22.016 113.152 68.096 514.56-378.368 700.416z"
            fill="#F4DCCB"
            p-id="2481"
          ></path>
          <path
            d="M579.072 317.952H645.12l-103.424 303.616H481.28L378.88 317.952h68.096L512 547.84l67.072-229.888z"
            fill="#FF9D4D"
            p-id="2482"
          ></path>
        </svg>
        <div class="text">
          {{ hosDetailStore.hospitalInfo.hospital?.param?.hostypeString }}
        </div>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <img
          width="80"
          height="80"
          :src="`data:image/jpeg;base64,${hosDetailStore.hospitalInfo.hospital?.logoData}`"
          alt=""
        />
      </div>
      <div class="right">
        <h1 class="desc title">挂号规则</h1>
        <div class="desc">
          预约周期：{{
            `${hosDetailStore.hospitalInfo.bookingRule?.cycle}天， 放号时间${hosDetailStore.hospitalInfo.bookingRule?.releaseTime}，停挂时间${hosDetailStore.hospitalInfo.bookingRule?.stopTime}`
          }}
        </div>
        <div class="desc">
          具体位置：{{ hosDetailStore.hospitalInfo.hospital?.address }}
        </div>
        <div class="desc">
          具体路线：{{ hosDetailStore.hospitalInfo.hospital?.route }}
        </div>
        <div class="desc">
          退号时间：{{ hosDetailStore.hospitalInfo.bookingRule?.quitTime }}
        </div>
        <h1 class="desc title">预约挂号规则</h1>
        <ul>
          <li
            class="desc"
            v-for="(item, index) in hosDetailStore.hospitalInfo.bookingRule
              ?.rule"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <ul>
          <li
            :class="{ active: currentIndex === index}"
            v-for="(item, index) in hosDetailStore.departments"
            :key="item.depcode"
            @click="changeIndex(index)"
          >
            {{ item.depname }}
          </li>
        </ul>
      </div>
      <div class="right">
        <div
          class="department-item"
          v-for="item in hosDetailStore.departments"
          :key="item.depcode"
        >
          <h1 class="cur">{{ item.depname }}</h1>
          <ul>
            <li v-for="ele in item.children" :key="ele.depcode" @click="login">
              {{ ele.depname }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useHosDetailStore from '@/store/module/hospitalDetail.ts'
import useUserStore from '@/store/module/user'
import { ref } from 'vue'
let userStore = useUserStore()
const hosDetailStore = useHosDetailStore()
let currentIndex = ref(0)
const changeIndex = (index: number) => {
  currentIndex.value = index
  let curH1 = document.querySelectorAll('.cur') as unknown as NodeListOf<HTMLElement>
  curH1[currentIndex.value]?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

const login = () => {
  userStore.loginVisible = true
}
</script>

<style scoped lang="scss">
.register {
  .top {
    display: flex;
    align-items: center;
    .hosname {
      font-size: 22px;
      font-weight: 700;
    }
    .level {
      display: flex;
      align-items: center;
      margin-left: 8px;
      .text {
        color: #ccc;
        margin-left: 8px;
        font-size: 14px;
      }
    }
  }
  .content {
    margin-top: 16px;
    display: flex;
    .left {
      img {
        border-radius: 50%;
      }
    }
    .right {
      flex: 1;
      margin-left: 16px;
      .desc {
        margin: 8px 0;
        font-size: 14px;
        color: #999;
        line-height: 16px;
      }
      .title {
        color: #000;
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
  .bottom {
    width: 100%;
    height: 500px;
    display: flex;
    font-size: 14px;
    .left {
      ul {
        li {
          padding: 12px 16px;
          background: rgb(248, 248, 248);
          cursor: pointer;
          &.active {
            border-left: 3px solid red;
            color: red;
            background: #fff;
          }
        }
      }
    }
    .right {
      flex: 1;
      height: 100%;
      overflow: auto;
      margin-left: 16px;
      &::-webkit-scrollbar{
        display: none;
      }
      .department-item {
        h1 {
          background: rgb(248, 248, 248);
          padding: 12px 16px;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          padding: 8px 0;
          li {
            width: 33%;
            padding: 8px 12px;
            cursor: pointer;
            &:hover{
              color: red;
            }
          }
        }
      }
    }
  }
}
</style>
