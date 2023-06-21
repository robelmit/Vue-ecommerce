

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3Spinner from 'vue3-spinner'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vue3Spinner)

app.mount('#app')
