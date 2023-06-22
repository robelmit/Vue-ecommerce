import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'


import { useRoute } from 'vue-router'
import API from '../API/API'
import router from '../router'
export const useCounterStore = defineStore('counter', () => {
  const route = useRoute()
  const count = ref(0)
  const userpro = ref(null)
  const searchitem = ref(null)
  const loggedinerror = ref(null)
  const doubleCount = computed(() => count.value * 2)
  const showinput = ref(false)
  const makerequest = ref(false)
  const isloggedin = computed(() => {
    if (localStorage.token) return true
    else return false
  })
  watch(route, () => {
    console.log('page is really changing' + route.name)

    if (route.name == 'users' || route.name == 'adds') {
      console.log('page is really changing' + route.name)

      showinput.value = true

    }
    else {
      showinput.value = false
    }
  })
  function changecount(val) {
    count.value = val
  }
  function login(user) {
    API.loginuser(user).then(response => {
      console.log(response.data);
      localStorage.token = response.data.token
      userpro.value = response.data
      router.push('/')
    })
      .catch(err => {
        loggedinerror.value = 'Unable to login '
      })
  }
  function getuser() {
    API.getuser().then(response => {
      // console.log(response.data);
      //WlocalStorage.token = response.data.token
      userpro.value = response.data
      // router.push('/')
    })
      .catch(err => {
        console.log('err.message');
        // loggedinerror.value = 'Unable to login '
      })
  }
  function logout() {
    localStorage.removeItem('token')
    router.push('/login')
  }


  return { makerequest, showinput, searchitem, getuser, logout, loggedinerror, isloggedin, userpro, login, count, changecount, doubleCount }
})
