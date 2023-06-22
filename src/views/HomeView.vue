<template>
  <div>
    <div v-if="total.totaladds" class="container-fluid">
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          ><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a
        >
      </div>

      <!-- Content Row -->
      <div class="row">
        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    This week adds
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    {{ total.thisweekadds.length }}
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Total adds
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    {{ total.totaladds }}
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                    This week's Users
                  </div>
                  <div class="row no-gutters align-items-center">
                    <div class="col-auto">
                      <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        {{ total.thisweekadds.length }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pending Requests Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Total users
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    {{ total.totalusers }}
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-comments fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Row -->

      <div class="row">
        <!-- Area Chart -->
        <div class="col-xl-8 col-lg-7">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div
              class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            >
              <h6 class="m-0 font-weight-bold text-primary">Users Overview</h6>
              <div class="dropdown no-arrow">
                <a
                  class="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div class="dropdown-header">Dropdown Header:</div>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <div class="chart-area">
                <Line :data="serverlinedata" />
              </div>
            </div>
          </div>
        </div>

        <!-- Pie Chart -->
        <div class="col-xl-4 col-lg-5">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div
              class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            >
              <h6 class="m-0 font-weight-bold text-primary">Users overview</h6>
              <div class="dropdown no-arrow">
                <a
                  class="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div class="dropdown-header">Dropdown Header:</div>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <div class="chart-pie pt-4 pb-2">
                <Doughnut :data="serverdata" />
              </div>
              <div class="mt-4 text-center small">
                <span class="mr-2"> <i class="fas fa-circle text-primary"></i> Direct </span>
                <span class="mr-2"> <i class="fas fa-circle text-success"></i> Social </span>
                <span class="mr-2"> <i class="fas fa-circle text-info"></i> Referral </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="contentloader">
        <div class="spinner">
          <span class="loader"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { useCounterStore } from '../stores/counter'
import { ref } from 'vue'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
} from 'chart.js'
import { Doughnut, Line } from 'vue-chartjs'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
)

import API from '../API/API'
const total = reactive({
  totaladds: null,
  totalusers: null,
  todayusers: null,
  todaysusers: null,
  thisweekusers: null,
  thismonthusers: null,
  todaysadds: null,
  thisweekadds: null,
  thismonthadds: null
})
const data = ref({
  labels: ['Direct', 'Referral', 'Social'],
  datasets: [
    {
      data: [55, 30, 15],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: 'rgba(234, 236, 244, 1)'
    }
  ]
})
const linedata = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Earnings',
      lineTension: 0.3,
      backgroundColor: 'rgba(78, 115, 223, 0.05)',
      borderColor: 'rgba(78, 115, 223, 1)',
      pointRadius: 3,
      pointBackgroundColor: 'rgba(78, 115, 223, 1)',
      pointBorderColor: 'rgba(78, 115, 223, 1)',
      pointHoverRadius: 3,
      pointHoverBackgroundColor: 'rgba(78, 115, 223, 1)',
      pointHoverBorderColor: 'rgba(78, 115, 223, 1)',
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000]
    }
  ]
})
const options = ref({
  responsive: true
})
const serverdata = ref(null)
const serverlinedata = ref(null)
export default {
  components: {
    Doughnut,
    Line
  },
  setup() {
    const store = useCounterStore()
    store.searchitem = null
    console.log('home component loaded')
    onMounted(() => {
      store.getuser()
      API.gettotalcount().then((response) => {
        console.log(response.data)
        const res = response.data
        total.totaladds = res.adds
        total.totalusers = res.users
        total.todaysadds = res.todayadd
        total.todaysusers = res.todayuser
        total.thisweekadds = res.thisweekadd
        total.thismonthadds = res.thismonthadd
        total.thismonthusers = res.thisweekuser
        total.thisyearusers = res.thisyearuser
        //const serverdatalabel=
        const serverdatadata = [
          res.todayadd.length,
          res.thisweekadd.length,
          res.thismonthadd.length
        ]
        serverdata.value = {
          labels: ['Today', 'This week', 'This month'],
          datasets: [
            {
              data: serverdatadata,
              backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
              hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
              hoverBorderColor: 'rgba(234, 236, 244, 1)'
            }
          ]
        }
        const serverlinedatadata = [
          res.todayuser.length,
          res.thisweekuser.length,
          res.thismonthuser.length,
          res.thisyearuser.length
        ]

        serverlinedata.value = {
          labels: ['Today', 'This week', 'This month', 'this year'],
          datasets: [
            {
              data: serverlinedatadata,
              label: 'Users',
              lineTension: 0.3,
              backgroundColor: 'rgba(78, 115, 223, 0.05)',
              borderColor: 'rgba(78, 115, 223, 1)',
              pointRadius: 3,
              pointBackgroundColor: 'rgba(78, 115, 223, 1)',
              pointBorderColor: 'rgba(78, 115, 223, 1)',
              pointHoverRadius: 3,
              pointHoverBackgroundColor: 'rgba(78, 115, 223, 1)',
              pointHoverBorderColor: 'rgba(78, 115, 223, 1)',
              pointHitRadius: 10,
              pointBorderWidth: 2
            }
          ]
        }

        // const serverlinedata  =
      })
    })

    return { serverdata, serverlinedata, data, options, total, linedata }
  }
}
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
</style>