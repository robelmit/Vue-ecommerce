<template>
  <div v-if="add">
    <div v-if="showspinner" class="spinner">
      <span class="loader"></span>
    </div>
    <div class="configure">
      <h1 class="h3">Adds detail</h1>
      <button
        data-toggle="modal"
        data-target="#myModal"
        type="button"
        class="btn btn-danger btn-sm"
      >
        <i class="fas fa-trash fa-sm text-white"></i>
        Delete add
      </button>
    </div>
    <div class="homeui">
      <div>
        <carousel autoplay="3000" wrap-around="true" class="Slider" :items-to-show="1.4">
          <slide v-for="add in add.images" :key="add">
            <img :src="add.url" class="image" alt="" />
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
      <div class="items" style="margin-left: 20px">
        <h5 style="color: #4e73df">{{ add.title }}</h5>
        <div style="display: flex">
          <p>category</p>
          <p style="margin-left: 10px">{{ add.catagory }}</p>
        </div>
        <div style="display: flex">
          <p>price</p>
          <p style="margin-left: 10px; color: #4e73df">{{ add.price }} birr</p>
        </div>
        <div style="display: flex">
          <p>description</p>
          <p style="margin-left: 10px">{{ add.description }}</p>
        </div>
        <div class="postedby">
          <div style="margin-top: 10px; font-size: 13px">
            <p style="font-size: 15px !important">posted by</p>
            <div class="flexcontain">
              <div>
                <img :src="add.images[0].url" class="imageposted" alt="" />
              </div>
              <div style="margin: 0px 8px !important">
                <p style="margin: 0px 0px !important">{{ add.postedBy.name }}</p>
                <p style="margin: 2px 0px !important">{{ add.postedBy.phoneNumber }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Delete add</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">Are you sure you want to delete add</div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <button @click="deleteadd" type="button" class="btn btn-danger" data-dismiss="modal">
              Delete
            </button>
            <button type="button" class="btn btn-cancel" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import API from '../API/API'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const add = ref(null)
const showmessage = ref(false)
const showspinner = ref(false)
const route = useRoute()
const router = useRouter()
const deleter = ref('  Delete a user')
onMounted(() => {
  API.getspecificadd(route.params.id)
    .then((response) => {
      console.log(response.data)
      add.value = response.data
    })
    .catch((err) => {
      console.log('error occured')
    })
})
function deleteadd() {
  showspinner.value = true
  API.deletespecificadd(add.value._id).then((response) => {
    setTimeout(() => {
      showspinner.value = false
      showmessage.value = true
      router.push('/adds')
    }, 1200)
  })
}
</script>

<style scoped>
.spinner {
  width: 40px;
  margin: 0 auto;
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
.configure {
  display: flex;
  justify-content: space-between;
  margin: 0px !important;
  padding: 0px !important;
}
.delete {
  color: white;
}
.flexcontain {
  display: flex;
  align-content: center;
  align-items: center;
  margin-left: 20px;
}
.imageposted {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}
.postedby {
  border: 0.5px solid #4e73df;
  text-align: center;
  padding-bottom: 20px;
}
.items {
  padding: 20px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
}
.homeui {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.image {
  width: 400px;
  object-fit: cover;
  height: 300px;
}
.Slider {
  width: 500px;
}
</style>