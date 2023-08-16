import http from '@/utils/http'

export const getHospitalList = (pageNumber:number,pageSize:number,hostype='',districtCode = '') => {
  return http.get(`hosp/hospital/${pageNumber}/${pageSize}?hostype=${hostype}&districtCode=${districtCode}`)
}

export const getBaseData = (type:string) => {
  return http.get(`cmn/dict/findByDictCode/${type}`)
}

export const getHospitalByName = (name:string) => {
  return http.get(`hosp/hospital/findByHosname/${name}`)
}