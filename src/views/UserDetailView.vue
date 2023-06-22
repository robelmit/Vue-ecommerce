<template>
  <div v-if="user">
    <div @click="router.push('/users')" class="btn btn-link rounded-circle mr-3 my-2">
      <i style="font-size: 25px" class="fa fa-arrow-alt-circle-left"></i>
    </div>
    <h1 class="h3">User detail view</h1>

    <div class="cardcontainer">
      <div class="card">
        <div class="imgpro">
          <img src="img_avatar2.png" alt="Avatar" />
        </div>
        <div class="container">
          <h6>
            <b>{{ user.name }}</b>
          </h6>
          <p>{{ user.email }}</p>
          <p>{{ user.phoneNumber }}</p>
          <a data-toggle="modal" data-target="#myModal" class="btn btn-danger btn-circle">
            <i class="fas fa-trash btn-circle"></i>
          </a>
          <div class="modal fade" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title">Delete User</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">Are you sure you want to delete user</div>

                <!-- Modal footer -->
                <div class="modal-footer">
                  <button
                    @click="deleteuser"
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Delete
                  </button>
                  <button type="button" class="btn btn-cancel" data-dismiss="modal">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showspinner" class="spinner">
      <span class="loader"></span>
    </div>
    <div v-if="showmessage" style="width: 50%; margin: 0 auto">
      <div class="alert alert-success"><strong>Success!</strong> User successfully deleted.</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import API from '../API/API'
const user = ref(null)
const showmessage = ref(false)
const showspinner = ref(false)
const route = useRoute()
const router = useRouter()
onMounted(() => {
  API.getspecificuser(route.params.id)
    .then((response) => {
      console.log(response.data)
      user.value = response.data
    })
    .catch((err) => {
      console.log('error occured')
    })
})
function deleteuser() {
  showspinner.value = true
  API.deletespecificuser(user.value._id).then((response) => {
    setTimeout(() => {
      showspinner.value = false
      showmessage.value = true
      router.push('/users')
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
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 400px;
  border-radius: 5px;
  margin: 10px;
}
.cardcontainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

img {
  border-radius: 5px 5px 0 0;
  background-size: cover;

  height: 300px;
  border-radius: 50%;
  text-align: center;
}
.imgpro {
  width: 300px;
  margin: 0 auto;
}

.container {
  padding: 2px 16px;
  /* width: 80%; */
  /* margin: 5px auto; */
  text-align: center;
}
</style>