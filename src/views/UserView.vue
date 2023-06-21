<template>
  <div>
    <h1 class="h3">Users</h1>

    <div class="contentloader">
      <div class="spinner">
        <span v-if="showspinner" class="loader"></span>
      </div>
      <div v-if="users" class="cardcontainer">
        <RouterLink
          v-for="user in users.users"
          :key="user._id"
          :to="`/users/${user._id}`"
          style="text-decoration: none; color: inherit"
        >
          <div class="card">
            <div class="imgpro">
              <img src="img_avatar2.png" alt="Avatar" />
            </div>
            <div class="containerbro">
              <h6>
                <b>{{ user.name }}</b>
              </h6>
              <p>{{ user.phoneNumber }}</p>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>

    <ul v-if="users && users.pages > 1" class="pagination justify-content-center">
      <li
        v-for="n in users.pages"
        :key="n"
        :class="[currentpage == n ? 'active' : '']"
        class="page-item"
        @click="currentpage = n"
      >
        <a class="page-link" href="#">{{ n }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import API from '../API/API'
import { useCounterStore } from '../stores/counter'

const store = useCounterStore()
const users = ref(null)
store.searchitem = null
const currentpage = ref(1)
const totalpages = ref(null)
const showspinner = ref(null)
function getusers() {
  API.getusers(currentpage.value)
    .then((response) => {
      console.log(response.data)
      currentpage.value = response.data.page
      totalpages.value = response.data.pages
      setTimeout(() => {
        users.value = response.data

        showspinner.value = false
      }, 1100)
    })
    .catch((err) => {
      console.log('error made')
    })
}
watch(currentpage, () => {
  showspinner.value = true

  getusers()
  users.value = null

  console.log('page is changing')
})
onMounted(() => {
  API.getusers(currentpage.value)
    .then((response) => {
      console.log(response.data)
      users.value = response.data
      currentpage.value = response.data.page
      totalpages.value = response.data.pages
    })
    .catch((err) => {
      console.log('error made')
    })
})
</script>

<style scoped>
.loader {
  width: 40px;
  height: 40px;
  border: 2px solid #4e73df;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.contentloader {
  position: relative;
}
.spinner {
  position: absolute;
  top: 20%;
  left: 50%;
  margin: 100px auto !important;
  display: block !important;
  text-align: center;
  z-index: 10;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 200px;
  border-radius: 5px;
  margin: 10px;
}
.cardcontainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

img {
  border-radius: 5px 5px 0 0;
  background-size: cover;

  height: 100px;
  border-radius: 50%;
  text-align: center;
}
.imgpro {
  width: 100px;
  margin: 0 auto;
}

.containerbro {
  padding: 2px 16px;
  /* width: 80%; */
  /* margin: 5px auto; */
  text-align: center;
  padding: 20px 10px;
}
</style>