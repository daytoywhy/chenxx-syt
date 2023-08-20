import http from '@/utils/http'

export const getSmsCode = (phone:string) => {
  return http.get(`sms/send/${phone}`)
}