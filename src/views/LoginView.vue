<template>
  <div style="padding: 100px 20px" class="mx-auto nicer">
    <div class="bro">
      <h3 class="text-center py-2 text-primary">Welcome to Admin panel</h3>
      <form @submit.prevent="loginuser">
        <div class="form-group">
          <label for="email">Phone Number:</label>
          <input v-model="phone" type="text" class="form-control" id="email" maxlength="10" />
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input v-model="password" type="password" class="form-control" id="pwd" />
        </div>

        <button type="submit" style="margin-top: 30px" class="btn btn-primary btn-block">
          Login
        </button>
        <div v-if="showalert" class="alert my-3 alert-danger alert-dismissible">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>Error Logging in !</strong> please try again
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useCounterStore } from '../stores/counter'

export default {
  setup() {
    const store = useCounterStore()

    const phone = ref(null)
    const password = ref(null)
    const showalert = ref(false)
    watch(store, () => {
      console.log('this is really cool')
      if (store.loggedinerror) {
        showalert.value = true
        setTimeout(() => {
          showalert.value = false
          store.loggedinerror = null
        }, 2000)
      }
    })
    const loginuser = function () {
      const user = {
        phoneNumber: phone.value,
        password: password.value
      }
      console.log(phone.value)
      console.log(password.value)
      store.login(user)
    }

    return { showalert, phone, password, loginuser }
  }
}
</script>

<style>
.nicer {
  width: 40%;
}
.bro {
  border: 1px solid #4e73df;
  padding: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
@media screen and (max-width: 700px) {
  .nicer {
    width: 100%;
  }
}
</style>