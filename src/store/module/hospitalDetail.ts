import { defineStore } from 'pinia'
import { getHospitalInfo,getDepartment } from '@/api/hospital'
const useHosDetailStore = defineStore('hosDeital',{
  state:()=>{
    return{
      hospitalInfo:{
        hospital:{},
        bookingRule:{}
      },
      departments:[]
    }
  },
  actions:{
    async getHosInfo(hoscode:string){
      const res:any = await getHospitalInfo(hoscode)
      if(res.code === 200){
        this.hospitalInfo = res.data
      }
    },
    async getDepartments(hoscode:string){
      const res:any = await getDepartment(hoscode)
      if(res.code === 200){
        this.departments = res.data
      }
    }
  },
  getters:{

  }
})

export default useHosDetailStore