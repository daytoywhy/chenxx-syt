import http from '@/utils/http'

//获取医院详情信息
export const getHospitalInfo = (hoscode:string) =>{
  return http.get('/hosp/hospital/'+hoscode)
}

//获取一个医院所有科室的接口
export const getDepartment = (hoscode:string) =>{
  return http.get('/hosp/hospital/department/' + hoscode)
}