<template>
  <div class="container">
    <el-autocomplete
        v-model="hospitalName"
        :fetch-suggestions="querySearchAsync"
        clearable
        :trigger-on-focus="false"
        @select="goDetail"
        placeholder="请输入医院名称搜索"
      />
      <el-button type="primary" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { useRouter } from 'vue-router';
import { Search } from '@element-plus/icons-vue'
import { getHospitalByName } from '@/api/home'
let $router = useRouter()
let hospitalName = ref<string>('')
const querySearchAsync = async(keyword:string,cb:any) => {
  let res:any = await getHospitalByName(keyword)
  let arr = res.data.map(item => {
    return {
      value:item.hosname,
      hoscode:item.hoscode
    }
  })
  cb(arr)
}
const goDetail = (item:any) =>{
  $router.push({
    path:'/hospital/register',
    query:{
      hoscode:item.hoscode
    }
  })
}
</script>

<style scoped lang="scss">
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin:16px 0;
  :deep(.el-input__wrapper){
    width: 600px;
    height: 44px;
  }
  :deep(.el-button){
    height: 44px;
  }
}
</style>