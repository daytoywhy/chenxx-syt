<template>
  <div class="hos-container">
    <el-row>
      <el-col :span="4">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
        >
          <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
            <el-icon><location /></el-icon>
            <span>预约挂号</span>
          </el-menu-item>
          <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
            <el-icon><icon-menu /></el-icon>
            <span>医院详情</span>
          </el-menu-item>
          <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
            <el-icon><document /></el-icon>
            <span>预约通知</span>
          </el-menu-item>
          <el-menu-item index="/hospital/message" @click="changeActive('/hospital/message')">
            <el-icon><Setting /></el-icon>
            <span>停诊信息</span>
          </el-menu-item>
          <el-menu-item index="/hospital/query" @click="changeActive('/hospital/query')">
            <el-icon><ChatDotRound /></el-icon>
            <span>查询/取消</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20"> 
       <div class="content">
        <router-view />
       </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  ChatDotRound,
} from '@element-plus/icons-vue'
import {useRouter,useRoute} from 'vue-router'
import { onMounted } from 'vue'
import useHosDetailStore from '@/store/module/hospitalDetail'
let hosDetailStore = useHosDetailStore()
const $router = useRouter()
let $route = useRoute()
onMounted(()=>{
  hosDetailStore.getHosInfo($route.query.hoscode)
  hosDetailStore.getDepartments($route.query.hoscode)
})
const changeActive = (path:string)=>{
  $router.push({path})
}
</script>

<style scoped lang="scss">
.hos-container{
  margin-top: 16px;
}
.content{
  padding: 16px;
}
</style>
