import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import marvel from './plugins/marvel'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(marvel)

app.mount('#app')
