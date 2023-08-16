import { defineStore } from 'pinia'
import { getHospitalInfo } from '@/api/hospital'
const useHosDetailStore = defineStore('hosDeital',{
  state:()=>{
    return{
      hospitalInfo:{
        hospital:{},
        bookingRule:{}
      }
    }
  },
  actions:{
    async getHosInfo(hoscode:string){
      const res:any = await getHospitalInfo(hoscode)
      if(res.code === 200){
        this.hospitalInfo = res.data
      }
    }
  },
  getters:{

  }
})

export default useHosDetailStore