import http from '@/utils/http'

//获取医院详情信息
export const getHospitalInfo = (hoscode:string) =>{
  return http.get('/hosp/hospital/'+hoscode)
}