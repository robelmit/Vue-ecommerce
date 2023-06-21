<template>
  <div>
    <h1 class="h3">Adds </h1>
    <div class="contentloader">
      <div class="spinner">
        <span v-if="showspinner" class="loader"></span>
      </div>
      <div v-if="adds" class="cardcontainer">
        <RouterLink
          v-for="add in adds.adds"
          :key="add._id"
          :to="`/adds/${add._id}`"
          style="text-decoration: none; color: inherit"
        >
          <div class="card">
            <div class="imgpro">
              <img :src="add.images[0].url" alt="Avatar" />
            </div>
            <div class="containerbro">
              <h6>
                <b>{{ add.title }}</b>
              </h6>
              <p>{{ add.catagory }}</p>
              <p style="color: #4e73df">{{ add.price }} birr</p>
              <p style="text-overflow: ellipsis !important">{{ add.description }}</p>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>

    <ul v-if="adds && adds.pages > 1" class="pagination justify-content-center">
      <li
        v-for="n in adds.pages"
        :key="n"
        :class="[currentpage == n ? 'active' : '']"
        class="page-item"
        @click="currentpage = n"
      >
        <a class="page-link">{{ n }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const store = useCounterStore()
import { ref, onMounted, watch } from 'vue'
import API from '../API/API'
const adds = ref(null)
const currentpage = ref(1)
const totalpages = ref(null)
const showspinner = ref(null)
function getadds() {
  API.getadds(currentpage.value).then((response) => {
    console.log(response.data)
    setTimeout(() => {
      adds.value = response.data
      showspinner.value = false
    }, 1200)
  })
}

watch(currentpage, () => {
  showspinner.value = true

  getadds()
  adds.value = null

  console.log('page is changing')
})
onMounted(() => {
  API.getadds(currentpage.value).then((response) => {
    console.log(response.data)
    adds.value = response.data
    currentpage.value = response.data.page
    totalpages.value = response.data.pages
  })
  store.searchitem = null
})
</script>


<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 200px;
  border-radius: 5px;
  margin: 10px;
  height: 300px;
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
img {
  border-radius: 5px 5px 0 0;
  object-fit: cover !important;

  height: 100px;
  width: 100px;
  border-radius: 50%;
  text-align: center;
}
.imgpro {
  width: 100px;
  margin: 0 auto;
  background-size: cover;
}

.containerbro {
  padding: 2px 16px;
  /* width: 80%; */
  /* margin: 5px auto; */
  text-align: center;
  padding: 20px 10px;
}
/* <carousel v-if="1 == 2" :items-to-show="1.5">
      <slide v-for="slide in 10" :key="slide">
        {{ slide }}
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel> */
</style>


