import { defineStore } from 'pinia'
const useUserStore = defineStore('userStore',{
  state:()=>{
    return{
      loginVisible:false,
    }
  },
  actions:{

  },
  getters:{

  }
})

export default useUserStore