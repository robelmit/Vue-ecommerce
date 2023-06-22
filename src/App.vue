<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { useCounterStore } from './stores/counter'
const showmenus = ref(true)
const ishome = ref(true)
const isadds = ref(false)
const isusers = ref(false)
const showtitle = ref(false)
const store = useCounterStore()
const placeholder = ref('Search for users or adds')
const route = useRoute()
function make() {
  console.log('button is pressed')
  store.makerequest = true
}
onMounted(() => {
  if (route.name == 'home') {
    ishome.value = true
    showtitle.value = true
  }
  console.log(route.name)
  console.log('sent request')
  store.getuser()

  watch(route, () => {
    if (route.name == 'home') {
      ishome.value = true
      isusers.value = false
      isadds.value = false
      showtitle.value = true

      placeholder.value = 'Search for users or adds'
    } else if (route.name == 'adds') {
      ishome.value = false
      isusers.value = false
      isadds.value = true
      placeholder.value = 'Search for  adds'
      showtitle.value = false
    } else if (route.name == 'users') {
      ishome.value = false
      isusers.value = true
      isadds.value = false
      showtitle.value = false

      placeholder.value = 'Search for users '
    } else {
      showtitle.value = false
    }
  })
})
console.log(route.name)
</script>

<template>
  <div id="wrapper">
    <!-- Sidebar -->
    <ul
      v-if="route.name != 'login'"
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Admin Panel</div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->

      <li class="nav-item" :class="{ active: ishome }">
        <RouterLink to="/" class="nav-link">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </RouterLink>
      </li>

      <li class="nav-item" :class="{ active: isusers }">
        <RouterLink to="/users" class="nav-link">
          <i class="fas fa-fw fa-users"></i>
          <span>Users</span>
        </RouterLink>
      </li>
      <div class="text-white text-center"></div>
      <!-- Nav Item - Tables -->
      <li class="nav-item" :class="{ active: isadds }">
        <RouterLink to="/adds" class="nav-link">
          <i class="fas fa-fw fa-car"></i>
          <span>Adds</span>
        </RouterLink>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block" />

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      <!-- Sidebar Message -->
      <div class="sidebar-card d-none d-lg-flex">
        <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
      </div>
    </ul>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" v-if="showmenus" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Topbar -->
        <nav
          v-if="route.name != 'login'"
          class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
        >
          <!-- Sidebar Toggle (Topbar) -->
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>

          <!-- Topbar Search -->
          <h1 v-if="showtitle" class="h6 nicerbro">Ecommerce Made Easier</h1>

          <form
            class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
          >
            <div v-if="store.showinput" class="input-group">
              <input
                type="text"
                class="form-control bg-light border-0 small"
                :placeholder="placeholder"
                aria-label="Search"
                aria-describedby="basic-addon2"
                v-model="store.searchitem"
              />
              <div class="input-group-append">
                <button @click="make" class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>

          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">
            <!-- Nav Item - Search Dropdown (Visible Only XS) -->
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="searchDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-search fa-fw"></i>
              </a>
              <!-- Dropdown - Messages -->
              <div
                class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control bg-light border-0 small"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      v-model="store.searchitem"
                      :placeholder="placeholder"
                    />
                    <div class="input-group-append">
                      <button @click="make" class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <!-- Nav Item - Alerts -->
            <li class="nav-item dropdown no-arrow mx-1">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-bell fa-fw"></i>
                <!-- Counter - Alerts -->
                <span class="badge badge-danger badge-counter">3+</span>
              </a>
              <!-- Dropdown - Alerts -->
              <div
                class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown"
              >
                <h6 class="dropdown-header">Alerts Center</h6>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-primary">
                      <i class="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 12, 2019</div>
                    <span class="font-weight-bold">Welcome to admin panel</span>
                  </div>
                </a>
              </div>
            </li>

            <!-- Nav Item - Messages -->
            <li class="nav-item dropdown no-arrow mx-1">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="messagesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-envelope fa-fw"></i>
                <!-- Counter - Messages -->
                <span class="badge badge-danger badge-counter">7</span>
              </a>
              <!-- Dropdown - Messages -->
              <div
                class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="messagesDropdown"
              >
                <h6 class="dropdown-header">Message Center</h6>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="img/undraw_profile_1.svg" alt="..." />
                    <div class="status-indicator bg-success"></div>
                  </div>
                  <div class="font-weight-bold">
                    <div class="text-truncate">New messages will appear here</div>
                    <div class="small text-gray-500">Admin</div>
                  </div>
                </a>
              </div>
            </li>

            <div class="topbar-divider d-none d-sm-block"></div>

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span
                  v-if="store.userpro"
                  span
                  class="mr-2 d-none d-lg-inline text-gray-600 small"
                  >{{ store.userpro.name }}</span
                >
                <img class="img-profile rounded-circle" src="img/undraw_profile.svg" />
              </a>
              <!-- Dropdown - User Information -->
              <div
                class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">
          <!-- Page Heading -->

          <Router-View />
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Developed by Robel Tsegay 2023</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->
    </div>
    <div class="modal fade" id="logoutModal">
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
              @click="store.logout()"
              type="button"
              class="btn btn-danger"
              data-dismiss="modal"
            >
              Logout
            </button>
            <button type="button" class="btn btn-cancel" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <!-- End
     of Content Wrapper -->
  </div>
</template>
<style scoped>
@media screen and (max-width: 700px) {
  .nicerbro {
    display: none;
  }
}
.nicerbro {
  color: #4e73df;
  font-weight: bold;
}
</style>


