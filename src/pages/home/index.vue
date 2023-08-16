<template>
  <div v-loading.fullscreen.lock="fullscreenLoading"
  element-loading-text="拼命加载中···">
    <!-- 轮播图 -->
    <Carousel />
    <!-- 搜索 -->
    <Search />
    <!-- 搜索条件 -->
    <el-row :gutter="20">
      <el-col :span="20">
        <Query title="医院" label="等级" :baseInfo="levelList" @selectItem="getSelectedLevel"/>
        <Query label="地区" :baseInfo="areaList" @selectItem="getSelectedArea"/>
        <!-- 列表 -->
        <div>
          <el-row :gutter="20">
            <el-col
              :span="12"
              v-for="item in hospArr"
              :key="item.id"
              style="margin-bottom: 8px"
            >
              <HospitalCard :hospInfo="item"/>
            </el-col>
          </el-row>
        </div>
        <el-pagination
          style="margin-bottom: 10px"
          v-model:current-page="pageNumber"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :background="true"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-col>
      <el-col :span="4">
      <Tip />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Query from './query/index.vue'
import Tip from './tip/index.vue'
import HospitalCard from './hospital-card/index.vue'
import { ref, onMounted } from 'vue'
import { getHospitalList,getBaseData } from '@/api/home'
let pageNumber = ref<number>(1)
let pageSize = ref<number>(10)
const hospArr = ref([])
const levelList = ref([])
const areaList = ref([])
let hosType = ref<string>('')
let districtCode = ref<string>('')
let total = ref(0)
let fullscreenLoading = ref<boolean>(false)
onMounted(() => {
  getLevelList()
  getAreaList()
  getList()
})
const getLevelList =async () => {
  const res = await getBaseData('hosType')
  if(res.code === 200){
    const all = {
      name:'全部',
      value:''
    }
    levelList.value = res.data
    levelList.value.unshift(all)
  }
  
}
const getAreaList = async () =>{
  const res = await getBaseData('beijin')
  if(res.code === 200) {
    const all = {
      name:'全部',
      value:''
    }
    areaList.value = res.data
    areaList.value.unshift(all)
  }
}
const getSelectedLevel = (val:string)=>{
  hosType.value = val
  getList()
}
const getSelectedArea = (val:string) =>{
  districtCode.value = val
  getList()
}
const getList = async () => {
  fullscreenLoading.value = true
  const res = await getHospitalList(pageNumber.value, pageSize.value,hosType.value,districtCode.value)
  fullscreenLoading.value = false
  if(res.code === 200){
    hospArr.value = res.data.content
    total.value = res.data.totalElements
  }
}
const handleSizeChange = (val:number) =>{
  pageSize.value = val
  getList()
}
const handleCurrentChange = (val:number) => {
  pageNumber.value = val
  getList()
}
</script>

<style scoped lang="scss"></style>
